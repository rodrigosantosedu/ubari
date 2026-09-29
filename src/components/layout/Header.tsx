"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { desktopNav } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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

  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  const solid = !isHome || scrolled;

  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Ir para o conteúdo
      </a>

      <header
        className={cn(
          "inset-x-0 top-0 z-50 flex items-center justify-between transition-all duration-300",
          "h-auto px-[15px] py-[25px] min-[480px]:h-28 min-[480px]:px-8 min-[480px]:py-0",
          solid
            ? "fixed bg-white text-black shadow-[0_2px_5px_rgba(0,0,0,0.2)]"
            : "absolute bg-transparent text-white"
        )}
      >
        <Link href="/" aria-label="Ubari — página inicial" className="shrink-0">
          <Image
            src={solid ? "/brand/logo.png" : "/brand/logo-light.png"}
            alt="Ubari"
            width={264}
            height={328}
            priority
            className="h-12 w-auto min-[992px]:h-16"
          />
        </Link>

        <nav
          className="hidden items-center gap-5 min-[992px]:flex"
          aria-label="Principal"
        >
          {desktopNav.map((item) =>
            "children" in item ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 font-sans text-sm uppercase tracking-normal"
                >
                  {item.label}
                  <Caret />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-20 w-[420px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="bg-white p-3 text-black shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-3xl px-3 py-3 hover:bg-[#faf9f4]"
                      >
                        <span className="block font-sans text-sm font-medium text-black">
                          {child.label}
                        </span>
                        <span className="mt-1 block font-sans text-xs leading-4 text-[#636768]">
                          {child.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm uppercase"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/#contato"
            className="font-sans text-sm font-medium uppercase tracking-[1px]"
          >
            Fale conosco
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="border-y border-current px-2 py-2 font-sans text-sm uppercase tracking-[1px] min-[992px]:hidden"
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-white text-black transition-opacity duration-300",
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col justify-between overflow-y-auto px-[30px] py-8">
          <div>
            <div className="flex items-center justify-between">
              <Image
                src="/brand/logo.png"
                alt=""
                width={264}
                height={328}
                className="h-auto w-14"
              />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="border-y border-black px-2 py-2 font-sans text-sm uppercase tracking-[1px]"
              >
                fechar
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-4" aria-label="Menu completo">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-serif text-[28px] leading-[1.25] min-[480px]:text-left max-[479px]:text-center min-[480px]:text-4xl"
              >
                Home
              </Link>
              {desktopNav.map((item) =>
                "children" in item ? (
                  <div key={item.label} className="max-[479px]:text-center">
                    <button
                      type="button"
                      className="font-serif text-[28px] leading-[1.25] min-[480px]:text-4xl"
                      aria-expanded={openGroup === item.label}
                      onClick={() =>
                        setOpenGroup((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                    </button>
                    {openGroup === item.label && (
                      <ul className="mt-3 space-y-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="font-sans text-base text-[#636768]"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-[28px] leading-[1.25] max-[479px]:text-center min-[480px]:text-4xl"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          <div className="mt-12 space-y-2 border-t border-black/10 pt-6 font-sans text-sm max-[479px]:text-center">
            <a href={site.contact.phoneHref} className="block">
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="block">
              {site.contact.email}
            </a>
            <p className="text-[#636768]">{site.address.full}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Caret() {
  return (
    <svg viewBox="0 0 12 8" className="h-2 w-2" aria-hidden>
      <path d="M1 1.5 L6 6.5 L11 1.5" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
