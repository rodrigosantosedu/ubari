import { z } from "zod";

export const leadSchema = z
  .object({
    forWhom: z.enum(["adulto", "infantil", "outro"]),
    modality: z.enum(["presencial", "online_brasil", "online_exterior"]),
    countryTimezone: z.string().optional(),
    payment: z.enum(["particular", "recibo", "convenio"]),
    reasons: z.array(z.string()).optional(),
    name: z.string().min(2, "Informe seu nome"),
    whatsapp: z.string().min(8, "Informe um WhatsApp válido"),
    email: z.string().email("E-mail inválido"),
    bestTime: z.enum(["manha", "tarde", "noite", "qualquer"]),
    lgpd: z.literal(true, {
      errorMap: () => ({ message: "É necessário aceitar o consentimento" }),
    }),
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_term: z.string().optional(),
    utm_content: z.string().optional(),
    gclid: z.string().optional(),
    fbclid: z.string().optional(),
    page: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.modality === "online_exterior" &&
      (!data.countryTimezone || data.countryTimezone.trim().length < 2)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Informe o país ou fuso horário",
        path: ["countryTimezone"],
      });
    }
  });

export type LeadInput = z.infer<typeof leadSchema>;

export function isQualifiedLead(data: LeadInput): boolean {
  if (data.payment === "convenio") return false;
  if (data.forWhom === "outro") return false;
  return true;
}

export const reasonChips = [
  { id: "ansiedade", label: "Ansiedade" },
  { id: "burnout", label: "Burnout" },
  { id: "relacionamento", label: "Relacionamento" },
  { id: "luto", label: "Luto" },
  { id: "autoestima", label: "Autoestima" },
  { id: "comportamento_infantil", label: "Comportamento infantil" },
  { id: "outro", label: "Outro" },
] as const;
