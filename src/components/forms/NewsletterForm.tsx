"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") || "");
    setError(false);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter",
          email,
          whatsapp: "newsletter",
          message: "Inscrição na newsletter",
          forWhom: "adulto",
          modality: "online_brasil",
          payment: "particular",
          bestTime: "qualquer",
          lgpd: true,
          reasons: ["newsletter"],
          page: "/#newsletter",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setDone(true);
    } catch {
      setError(true);
    }
  }

  if (done) {
    return (
      <p className="font-sans text-base">Sucesso! Você está inscrito na newsletter.</p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
      <label className="block">
        <span className="mb-2 block font-sans text-[10px] font-medium uppercase tracking-[3px]">
          E-mail
        </span>
        <input
          name="email"
          type="email"
          required
          className="w-full border border-black/15 bg-transparent px-3 py-3 font-sans text-base outline-none focus:border-black"
        />
      </label>
      <button type="submit" className="btn-outline-dark w-full py-[22px] min-[992px]:w-auto">
        Inscrever-se
      </button>
      {error && (
        <p className="font-sans text-sm">Não foi possível inscrever agora.</p>
      )}
    </form>
  );
}
