"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { assetPath } from "@/lib/paths";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-kla-charcoal text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src={assetPath("/brand/logo.png")}
            alt="Kingdom Leadership Academy"
            width={220}
            height={64}
            className="h-11 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-[0.18em] uppercase transition-colors ${
                  active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {active ? (
                  <span className="mt-1 block h-0.5 w-full bg-kla-red" aria-hidden />
                ) : null}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-kla-red px-4 py-2.5 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-kla-red-dark"
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/20 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-kla-ink px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-2 py-3 text-sm font-semibold tracking-[0.16em] uppercase ${
                    active ? "text-white" : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
