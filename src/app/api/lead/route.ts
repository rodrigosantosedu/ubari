import { NextRequest, NextResponse } from "next/server";
import { leadSchema, isQualifiedLead } from "@/lib/lead-schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const qualified = isQualifiedLead(data);
    const tag = qualified ? "qualificado" : "desqualificado";

    const payload = {
      ...data,
      tag,
      qualified,
      receivedAt: new Date().toISOString(),
      source: "site-ubari",
    };

    const webhook = process.env.KOMMO_WEBHOOK_URL;
    let delivered = false;

    if (webhook) {
      try {
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        delivered = res.ok;
      } catch {
        delivered = false;
      }
    }

    // Fallback: log + optional email webhook
    if (!delivered) {
      const emailWebhook = process.env.LEAD_EMAIL_WEBHOOK_URL;
      if (emailWebhook) {
        try {
          await fetch(emailWebhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              to: process.env.LEAD_EMAIL_TO || "contato@ubari.com.br",
              subject: `[Ubari Lead ${tag}] ${data.name}`,
              text: JSON.stringify(payload, null, 2),
            }),
          });
          delivered = true;
        } catch {
          /* ignore */
        }
      }
      console.info("[lead]", JSON.stringify(payload));
    }

    // Meta CAPI placeholder for qualified leads (configured via GTM/server)
    if (qualified && process.env.META_CAPI_ENABLED === "true") {
      // Events should be fired via GTM server-side / CAPI; client already pushes form_submit_qualified
    }

    return NextResponse.json({ ok: true, qualified, tag });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
