"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — visible only on mobile */}
      <button
        className="inline-flex items-center justify-center rounded-lg p-2 text-[#4d4d4d] transition-colors hover:bg-[rgba(0,0,0,0.05)] md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Åbn menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(0,0,0,0.06)]">
              <span className="text-base font-semibold tracking-tight">Menu</span>
              <button
                className="rounded-lg p-2 text-[#4d4d4d] transition-colors hover:bg-[rgba(0,0,0,0.05)]"
                onClick={() => setOpen(false)}
                aria-label="Luk menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-4 pt-4 gap-1">
              <a
                href="/#priser"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#4d4d4d] transition-colors hover:bg-[rgba(0,0,0,0.04)] hover:text-[#171717]"
              >
                Priser
              </a>
              <a
                href="/portfolio/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#4d4d4d] transition-colors hover:bg-[rgba(0,0,0,0.04)] hover:text-[#171717]"
              >
                Portfolio
              </a>
              <a
                href="/kontakt/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#4d4d4d] transition-colors hover:bg-[rgba(0,0,0,0.04)] hover:text-[#171717]"
              >
                Kontakt
              </a>
              <div className="mt-3 border-t border-[rgba(0,0,0,0.06)] pt-3">
                <a
                  href="/kontakt/"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-lg bg-[#171717] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#333]"
                >
                  Få tilbud
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
