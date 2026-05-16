import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge Webs — Professionelle hjemmesider til danske virksomheder",
  description:
    "Professionelle hjemmesider fra 9.999 DKK. Klar på 7 dage. Webdesign der sælger — til danske SMV'er.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#171717]">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171717] text-white text-sm font-bold">
                F
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Forge<span className="text-[#4d4d4d]">Webs</span>
              </span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <a
                href="/#priser"
                className="text-sm font-medium text-[#4d4d4d] transition-colors hover:text-[#171717]"
              >
                Priser
              </a>
              <a
                href="/portfolio/"
                className="text-sm font-medium text-[#4d4d4d] transition-colors hover:text-[#171717]"
              >
                Portfolio
              </a>
              <a
                href="/kontakt/"
                className="text-sm font-medium text-[#4d4d4d] transition-colors hover:text-[#171717]"
              >
                Kontakt
              </a>
            </nav>
            <a
              href="/kontakt/"
              className="rounded-lg bg-[#171717] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#333] shadow-border"
            >
              Få tilbud
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[rgba(0,0,0,0.08)]">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#171717] text-white text-xs font-bold">
                F
              </div>
              <span className="text-sm font-medium">
                Forge<span className="text-[#4d4d4d]">Webs</span>
              </span>
            </div>
            <p className="text-sm text-[#666666]">
              © {new Date().getFullYear()} Forge Webs. Alle rettigheder
              forbeholdes.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/portfolio/"
                className="text-sm text-[#666666] transition-colors hover:text-[#171717]"
              >
                Portfolio
              </a>
              <a
                href="/kontakt/"
                className="text-sm text-[#666666] transition-colors hover:text-[#171717]"
              >
                Kontakt
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
