"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  leadSchema,
  isQualifiedLead,
  reasonChips,
  type LeadInput,
} from "@/lib/lead-schema";
import { captureUtms, trackingEvents } from "@/lib/tracking";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

type FormValues = LeadInput;

const STEPS = 3;

type LeadFormProps = {
  formId?: string;
  compact?: boolean;
  className?: string;
};

export function LeadForm({
  formId = "agendar",
  compact = false,
  className,
}: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [qualified, setQualified] = useState(true);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    control,
    handleSubmit,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      reasons: [],
      bestTime: "qualquer",
      lgpd: undefined,
    },
    mode: "onTouched",
  });

  const modality = watch("modality");
  const payment = watch("payment");
  const reasons = watch("reasons") ?? [];

  useEffect(() => {
    const utms = captureUtms();
    Object.entries(utms).forEach(([k, v]) => {
      if (v) setValue(k as keyof FormValues, v as never);
    });
    setValue("page", window.location.pathname);
  }, [setValue]);

  function markStart() {
    if (!started) {
      setStarted(true);
      trackingEvents.formStart(formId);
    }
  }

  async function nextStep() {
    markStart();
    let fields: (keyof FormValues)[] = [];
    if (step === 1) fields = ["forWhom", "modality", "countryTimezone"];
    if (step === 2) fields = ["payment", "reasons"];
    const ok = await trigger(fields);
    if (ok) setStep((s) => Math.min(s + 1, STEPS));
  }

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    const qual = isQualifiedLead(data);
    setQualified(qual);
    setSubmittedName(data.name);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      if (qual) trackingEvents.formSubmitQualified(formId);
      else trackingEvents.formSubmitDisqualified(formId);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className={cn(
          "border border-ubari-line bg-white p-6 md:p-8",
          className
        )}
      >
        {qualified ? (
          <>
            <h3 className="font-serif text-2xl text-ubari-ink">
              Obrigado, {submittedName.split(" ")[0]}!
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ubari-mute md:text-base">
              Nossa equipe vai te chamar no WhatsApp em até alguns minutos, no
              horário comercial. Você também pode adiantar a conversa:
            </p>
            <a
              href={getWhatsAppUrl(
                `Olá! Acabei de preencher o formulário no site. Meu nome é ${submittedName}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackingEvents.clickWhatsapp("form_thanks")}
              className="btn-cta mt-6"
            >
              Abrir WhatsApp
            </a>
          </>
        ) : (
          <>
            <h3 className="font-serif text-2xl text-ubari-ink">
              Recebemos seu contato
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ubari-mute md:text-base">
              No momento nosso foco é o atendimento particular, com recibo para
              reembolso. Se quiser, podemos te explicar como funciona o
              reembolso junto ao seu plano.
            </p>
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de entender como funciona o recibo para reembolso."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackingEvents.clickWhatsapp("form_disqualified")}
              className="btn-ghost-dark mt-6"
            >
              Falar sobre reembolso
            </a>
          </>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onFocus={markStart}
      className={cn(
        "border border-ubari-line bg-white p-5 md:p-8",
        className
      )}
      noValidate
    >
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between font-serif text-[11px] tracking-[0.1em] text-ubari-mute">
          <span>
            Etapa {step} de {STEPS}
          </span>
          <span>{Math.round((step / STEPS) * 100)}%</span>
        </div>
        <div className="h-px overflow-hidden bg-ubari-line">
          <div
            className="h-full bg-ubari-gold transition-all duration-300"
            style={{ width: `${(step / STEPS) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <fieldset className="space-y-6">
          <legend className="font-serif text-xl text-ubari-ink">
            Para quem é o atendimento?
          </legend>
          <div className="grid gap-3">
            {(
              [
                ["adulto", "Para mim (adulto)"],
                ["infantil", "Para meu filho(a) de 3 a 9 anos"],
                ["outro", "Outro"],
              ] as const
            ).map(([value, label]) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-3 border border-ubari-line px-4 py-3 has-[:checked]:border-ubari-gold has-[:checked]:bg-ubari-cream"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("forWhom")}
                  className="accent-ubari-bronze"
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
            {errors.forWhom && (
              <p className="text-xs text-red-700">{errors.forWhom.message}</p>
            )}
          </div>

          <div>
            <p className="mb-3 font-serif text-xl text-ubari-ink">Modalidade</p>
            <div className="grid gap-3">
              {(
                [
                  ["presencial", "Presencial em Campinas/RMC"],
                  ["online_brasil", "Online (Brasil)"],
                  ["online_exterior", "Online (moro fora do Brasil)"],
                ] as const
              ).map(([value, label]) => (
                <label
                  key={value}
                  className="flex cursor-pointer items-center gap-3 border border-ubari-line px-4 py-3 has-[:checked]:border-ubari-gold has-[:checked]:bg-ubari-cream"
                >
                  <input
                    type="radio"
                    value={value}
                    {...register("modality")}
                    className="accent-ubari-bronze"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
            {errors.modality && (
              <p className="mt-1 text-xs text-red-700">
                {errors.modality.message}
              </p>
            )}
            {modality === "online_exterior" && (
              <div className="mt-4">
                <label
                  htmlFor="countryTimezone"
                  className="mb-1 block text-sm text-ubari-ink"
                >
                  País / fuso horário
                </label>
                <input
                  id="countryTimezone"
                  {...register("countryTimezone")}
                  className="w-full border border-ubari-line bg-white px-3 py-2.5 text-sm"
                  placeholder="Ex.: Canadá — Toronto (GMT-4)"
                />
                {errors.countryTimezone && (
                  <p className="mt-1 text-xs text-red-700">
                    {errors.countryTimezone.message}
                  </p>
                )}
              </div>
            )}
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="space-y-6">
          <legend className="font-serif text-xl text-ubari-ink">
            Forma de atendimento
          </legend>
          <div className="grid gap-3">
            {(
              [
                ["particular", "Particular"],
                ["recibo", "Particular com recibo para reembolso"],
                ["convenio", "Somente pelo convênio"],
              ] as const
            ).map(([value, label]) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-3 border border-ubari-line px-4 py-3 has-[:checked]:border-ubari-gold has-[:checked]:bg-ubari-cream"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("payment")}
                  className="accent-ubari-bronze"
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>
          {payment === "convenio" && (
            <p className="border border-ubari-line bg-ubari-cream p-3 text-sm text-ubari-mute">
              No momento nosso foco é o atendimento particular, com recibo para
              reembolso. Se quiser, podemos te explicar como funciona o
              reembolso.
            </p>
          )}

          <div>
            <p className="mb-3 text-sm font-medium text-ubari-ink">
              O que te trouxe até aqui?{" "}
              <span className="font-normal text-ubari-mute">(opcional)</span>
            </p>
            <Controller
              name="reasons"
              control={control}
              render={({ field }) => (
                <div className="flex flex-wrap gap-2">
                  {reasonChips.map((chip) => {
                    const active = field.value?.includes(chip.id);
                    return (
                      <button
                        key={chip.id}
                        type="button"
                        onClick={() => {
                          const current = field.value ?? [];
                          field.onChange(
                            active
                              ? current.filter((r) => r !== chip.id)
                              : [...current, chip.id]
                          );
                        }}
                        className={cn(
                          "rounded-sm border px-3 py-1.5 text-xs transition-colors",
                          active
                            ? "border-ubari-gold bg-ubari-cream text-ubari-bronze"
                            : "border-ubari-line text-ubari-mute hover:border-ubari-gold"
                        )}
                      >
                        {chip.label}
                      </button>
                    );
                  })}
                </div>
              )}
            />
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="space-y-4">
          <legend className="mb-2 font-serif text-xl text-ubari-ink">
            Seus dados
          </legend>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm">
              Nome completo
            </label>
            <input
              id="name"
              {...register("name")}
              className="w-full border border-ubari-line bg-white px-3 py-2.5 text-sm"
              autoComplete="name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-700">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="whatsapp" className="mb-1 block text-sm">
              WhatsApp (com DDD; se exterior, inclua o código do país)
            </label>
            <input
              id="whatsapp"
              {...register("whatsapp")}
              className="w-full border border-ubari-line bg-white px-3 py-2.5 text-sm"
              placeholder="+55 19 99999-9999"
              inputMode="tel"
              autoComplete="tel"
            />
            {errors.whatsapp && (
              <p className="mt-1 text-xs text-red-700">
                {errors.whatsapp.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full border border-ubari-line bg-white px-3 py-2.5 text-sm"
              autoComplete="email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="bestTime" className="mb-1 block text-sm">
              Melhor horário para contato
            </label>
            <select
              id="bestTime"
              {...register("bestTime")}
              className="w-full border border-ubari-line bg-white px-3 py-2.5 text-sm"
            >
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
              <option value="qualquer">Qualquer horário comercial</option>
            </select>
          </div>
          <label className="flex items-start gap-3 pt-2 text-sm text-ubari-mute">
            <input
              type="checkbox"
              {...register("lgpd")}
              className="mt-1 accent-ubari-bronze"
            />
            <span>
              Li e aceito o tratamento dos meus dados conforme a{" "}
              <a href="/politica-de-privacidade" className="link-bronze">
                Política de Privacidade
              </a>
              . Suas informações são tratadas com total sigilo.
            </span>
          </label>
          {errors.lgpd && (
            <p className="text-xs text-red-700">{errors.lgpd.message}</p>
          )}
        </fieldset>
      )}

      {/* Hidden UTM fields */}
      <input type="hidden" {...register("utm_source")} />
      <input type="hidden" {...register("utm_medium")} />
      <input type="hidden" {...register("utm_campaign")} />
      <input type="hidden" {...register("utm_term")} />
      <input type="hidden" {...register("utm_content")} />
      <input type="hidden" {...register("gclid")} />
      <input type="hidden" {...register("fbclid")} />
      <input type="hidden" {...register("page")} />

      {status === "error" && (
        <p className="mt-4 text-sm text-red-700">
          Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="text-sm text-ubari-bronze hover:underline"
          >
            Voltar
          </button>
        ) : (
          <span />
        )}
        {step < STEPS ? (
          <button type="button" onClick={nextStep} className="btn-ghost-dark">
            Continuar
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-cta"
          >
            {status === "loading" ? "Enviando…" : "Enviar e agendar"}
          </button>
        )}
      </div>

      {!compact && (
        <p className="mt-4 text-center text-xs text-ubari-mute">
          Sem filas. Sem rotatividade de terapeutas.
        </p>
      )}
    </form>
  );
}
