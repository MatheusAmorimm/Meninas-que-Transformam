"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/config/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-lilac-light/70 bg-lavender/90 backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="container-page flex h-16 items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold text-ink"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="inline-block h-7 w-7 rounded-full bg-gradient-to-br from-lilac to-blush"
          />
          Meninas que Transformam
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-lilac-light ${
                    active ? "bg-lilac text-white" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Botão menu mobile */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-lilac-light md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul
          id="menu-mobile"
          className="container-page flex flex-col gap-1 pb-4 md:hidden"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-lilac-light ${
                    active ? "bg-lilac text-white" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
