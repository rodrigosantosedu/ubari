"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";

type Status = "idle" | "loading" | "done" | "error";

export function ContactMessageForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!data.get("lgpd")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          whatsapp: String(data.get("phone") || ""),
          message: String(data.get("message") || ""),
          forWhom: "adulto",
          modality: "presencial",
          payment: "particular",
          bestTime: "qualquer",
          lgpd: true,
          page: pathname,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="font-sans text-base leading-[26px]">
        Recebemos seu contato! Em breve nossa equipe irá retornar sua mensagem.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-5">
      <Field label="Nome" name="name" required />
      <Field label="E-mail" name="email" type="email" required />
      <Field label="Telefone" name="phone" type="tel" required />
      <label className="block">
        <span className="mb-2 block font-sans text-[10px] font-medium uppercase tracking-[3px]">
          Mensagem
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full border border-black/15 bg-transparent px-3 py-3 font-sans text-base outline-none focus:border-black"
        />
      </label>
      <label className="flex items-start gap-3 font-sans text-xs leading-5 text-[#636768]">
        <input name="lgpd" type="checkbox" className="mt-1" required />
        <span>
          Garantimos que todos os dados enviados através do formulário em nosso
          site são tratados com máxima confidencialidade e segurança.
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-outline-dark w-full py-[22px] disabled:opacity-60"
      >
        {status === "loading" ? "Enviando" : "Enviar mensagem"}
      </button>
      {status === "error" && (
        <p className="font-sans text-sm">
          Não foi possível enviar agora. Tente de novo ou escreva para{" "}
          {`contato@ubari.com.br`}.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-sans text-[10px] font-medium uppercase tracking-[3px]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-black/15 bg-transparent px-3 py-3 font-sans text-base outline-none focus:border-black"
      />
    </label>
  );
}
