"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNav, secondaryNav } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only-focusable fixed left-4 top-4 z-[100] bg-white px-4 py-2 text-sm"
      >
        Ir para o conteúdo
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid ? "bg-white/95 shadow-[0_1px_0_var(--ubari-line)] backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="relative mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          {/* Espaçador esquerdo — equilibra o MENU à direita (logo central) */}
          <div className="w-20 md:w-28" aria-hidden />

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-label="Ubari — página inicial"
          >
            <Image
              src={solid ? "/brand/logo.png" : "/brand/logo-light.png"}
              alt="Ubari Espaço de Psicologia"
              width={120}
              height={148}
              priority
              className="h-11 w-auto md:h-14"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "relative z-10 flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em]",
              solid ? "text-ubari-ink" : "text-white"
            )}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className="hidden sm:inline">{menuOpen ? "Fechar" : "Menu"}</span>
            <span className="flex w-5 flex-col gap-[5px]">
              <span
                className={cn(
                  "h-px w-full bg-current transition-transform duration-300",
                  menuOpen && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-current transition-opacity duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-current transition-transform duration-300",
                  menuOpen && "-translate-y-[6px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Overlay full-screen — mapa completo */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transition-opacity duration-300",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-12 pt-28 md:px-16 lg:px-24">
          <nav aria-label="Menu completo" className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.25em] text-ubari-mute">
                Principal
              </p>
              <ul className="space-y-3">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-3xl text-ubari-ink transition-opacity hover:opacity-50 md:text-4xl"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/agendar"
                    onClick={() => setMenuOpen(false)}
                    className="btn-cta mt-6 inline-flex"
                  >
                    Agendar sessão
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-4">
              <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.25em] text-ubari-mute">
                Explorar
              </p>
              <ul className="space-y-3">
                {secondaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-sans text-sm tracking-wide text-ubari-mute hover:text-ubari-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.25em] text-ubari-mute">
                Contato
              </p>
              <div className="space-y-2 font-sans text-sm text-ubari-mute">
                <p>{site.address.full}</p>
                <a href={`mailto:${site.contact.email}`} className="block hover:text-ubari-ink">
                  {site.contact.email}
                </a>
                <a href={site.contact.phoneHref} className="block hover:text-ubari-ink">
                  {site.contact.phone}
                </a>
              </div>
            </div>
          </nav>
          <p className="font-serif text-lg italic text-ubari-bronze">
            {site.tagline}
          </p>
        </div>
      </div>
    </>
  );
}
