"use client";

import { useState, type FormEvent } from "react";

export default function Kontakt() {
  const [navn, setNavn] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [besked, setBesked] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hej@forge-webs.dk?subject=Kontakt%20fra%20${encodeURIComponent(navn)}&body=${encodeURIComponent(
      `Navn: ${navn}\nE-mail: ${email}\nTelefon: ${telefon}\n\nBesked:\n${besked}`,
    )}`;
    window.location.href = mailtoLink;
    setSent(true);
  };

  return (
    <div className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#171717]">
            Kontakt os
          </h1>
          <p className="mt-4 text-lg text-[#4d4d4d]">
            Fortæl os om dit projekt — så finder vi den bedste løsning til dig.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-8 md:col-span-2">
            <div>
              <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-[#666666]">
                E-mail
              </h3>
              <a
                href="mailto:hej@forge-webs.dk"
                className="text-base font-medium text-[#171717] transition-colors hover:text-[#4d4d4d]"
              >
                hej@forge-webs.dk
              </a>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-[#666666]">
                Telefon
              </h3>
              <a
                href="tel:+4522345678"
                className="text-base font-medium text-[#171717] transition-colors hover:text-[#4d4d4d]"
              >
                +45 22 34 56 78
              </a>
            </div>
            <div>
              <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-[#666666]">
                Adresse
              </h3>
              <p className="text-base text-[#171717]">
                Sønder Allé 12
                <br />
                8000 Aarhus C
                <br />
                Danmark
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="rounded-2xl bg-white p-8 md:col-span-3"
            style={{
              boxShadow:
                "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px",
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0faf0]">
                  <svg
                    className="h-7 w-7 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#171717]">
                  Tak for din henvendelse!
                </h3>
                <p className="mt-2 text-sm text-[#4d4d4d]">
                  Vi vender tilbage hurtigst muligt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="navn"
                    className="mb-1.5 block text-sm font-medium text-[#4d4d4d]"
                  >
                    Navn *
                  </label>
                  <input
                    id="navn"
                    type="text"
                    required
                    value={navn}
                    onChange={(e) => setNavn(e.target.value)}
                    className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-[#171717] outline-none transition-all placeholder:text-[#999] focus:ring-2 focus:ring-[#171717]/10"
                    placeholder="Dit navn"
                    style={{
                      boxShadow:
                        "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
                    }}
                  />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-[#4d4d4d]"
                    >
                      E-mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-[#171717] outline-none transition-all placeholder:text-[#999] focus:ring-2 focus:ring-[#171717]/10"
                      placeholder="din@email.dk"
                      style={{
                        boxShadow:
                          "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefon"
                      className="mb-1.5 block text-sm font-medium text-[#4d4d4d]"
                    >
                      Telefon
                    </label>
                    <input
                      id="telefon"
                      type="tel"
                      value={telefon}
                      onChange={(e) => setTelefon(e.target.value)}
                      className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-[#171717] outline-none transition-all placeholder:text-[#999] focus:ring-2 focus:ring-[#171717]/10"
                      placeholder="+45 xx xx xx xx"
                      style={{
                        boxShadow:
                          "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="besked"
                    className="mb-1.5 block text-sm font-medium text-[#4d4d4d]"
                  >
                    Besked *
                  </label>
                  <textarea
                    id="besked"
                    required
                    rows={5}
                    value={besked}
                    onChange={(e) => setBesked(e.target.value)}
                    className="w-full resize-none rounded-xl border-0 bg-white px-4 py-3 text-sm text-[#171717] outline-none transition-all placeholder:text-[#999] focus:ring-2 focus:ring-[#171717]/10"
                    placeholder="Fortæl om dit projekt..."
                    style={{
                      boxShadow:
                        "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#171717] px-8 text-sm font-medium text-white transition-all hover:bg-[#333]"
                  style={{
                    boxShadow:
                      "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
                  }}
                >
                  Send besked
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
