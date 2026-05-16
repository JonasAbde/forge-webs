"use client";

import { useState } from "react";

// ── Pricing data (hardcoded constants) ──
const PACKAGES = [
  { id: "starter", name: "Starter", price: 9999, pages: 5, days: 7 },
  { id: "growth", name: "Growth", price: 19999, pages: 10, days: 10 },
  { id: "premium", name: "Premium", price: 34999, pages: 15, days: 14 },
] as const;

const ADDONS = [
  { id: "cms", label: "CMS", price: 4999 },
  { id: "seo", label: "SEO-optimering", price: 3999 },
  { id: "shop", label: "Webshop", price: 7999 },
  { id: "blog", label: "Blog", price: 2999 },
  { id: "booking", label: "Booking-system", price: 5999 },
  { id: "analytics", label: "Analytics", price: 2999 },
] as const;

const PACKAGE_FEATURES = {
  starter: [
    "Responsivt design",
    "Kontaktformular",
    "Google Maps integration",
    "SEO basis",
    "Hosting 1 år",
    "E-mail support",
  ],
  growth: [
    "Alt i Starter",
    "CMS-administration",
    "Avanceret SEO",
    "Blog opsætning",
    "Cookie-løsning",
    "Priority support",
  ],
  premium: [
    "Alt i Growth",
    "Webshop (op til 50 varer)",
    "Booking-system",
    "Analytics dashboard",
    "Eget domæne 1 år",
    "Døgnsupport",
  ],
};

// ── Helpers ──
function formatDKK(amount: number) {
  return new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// ── Price Calculator Component ──
function PriceCalculator() {
  const [selectedPkg, setSelectedPkg] = useState("growth");
  const [extraPages, setExtraPages] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const pkg = PACKAGES.find((p) => p.id === selectedPkg)!;
  const addonTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon?.price ?? 0);
  }, 0);
  const extraPageCost = extraPages * 499;
  const total = pkg.price + extraPageCost + addonTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <section id="beregner" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#171717]">
            Beregn din pris
          </h2>
          <p className="mt-3 text-lg text-[#4d4d4d]">
            Skræddersy din pakke med de funktioner, du har brug for.
          </p>
        </div>

        <div
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white p-8"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          {/* Package selection */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-medium text-[#4d4d4d]">
              Pakke
            </label>
            <select
              value={selectedPkg}
              onChange={(e) => setSelectedPkg(e.target.value)}
              className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-[#171717] outline-none"
              style={{
                boxShadow:
                  "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
              }}
            >
              {PACKAGES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — {formatDKK(p.price)} · {p.pages} sider · {p.days}{" "}
                  dage
                </option>
              ))}
            </select>
          </div>

          {/* Extra pages slider */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-[#4d4d4d]">
                Ekstra sider
              </label>
              <span className="text-sm font-semibold text-[#171717]">
                +{extraPages} ({formatDKK(extraPageCost)})
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={20}
              value={extraPages}
              onChange={(e) => setExtraPages(Number(e.target.value))}
            />
            <div className="mt-1 flex justify-between text-xs text-[#666666]">
              <span>0</span>
              <span>20</span>
            </div>
          </div>

          {/* Addons */}
          <div className="mb-8">
            <label className="mb-3 block text-sm font-medium text-[#4d4d4d]">
              Tilvalg
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              {ADDONS.map((addon) => (
                <label
                  key={addon.id}
                  className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-[#fafafa]"
                  style={{
                    boxShadow:
                      selectedAddons.includes(addon.id)
                        ? "rgba(0,0,0,0.12) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px"
                        : "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedAddons.includes(addon.id)}
                    onChange={() => toggleAddon(addon.id)}
                    className="checkbox-custom"
                  />
                  <div className="flex flex-1 items-center justify-between">
                    <span className="text-sm text-[#171717]">
                      {addon.label}
                    </span>
                    <span className="text-sm font-medium text-[#4d4d4d]">
                      +{formatDKK(addon.price)}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="rounded-xl bg-[#fafafa] p-6 text-center">
            <p className="mb-1 text-sm font-medium text-[#4d4d4d]">
              Estimeret total
            </p>
            <p className="text-4xl font-bold tracking-tight text-[#171717]">
              {formatDKK(total)}
            </p>
            <p className="mt-1 text-sm text-[#666666]">
              {pkg.pages + extraPages} sider · klar på{" "}
              {pkg.days + (extraPages > 0 ? Math.ceil(extraPages / 5) * 2 : 0)}{" "}
              dage
            </p>
            <a
              href="/kontakt/"
              className="mt-6 inline-block rounded-xl bg-[#171717] px-8 py-3 text-sm font-medium text-white transition-all hover:bg-[#333]"
              style={{
                boxShadow:
                  "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
              }}
            >
              Få tilbud nu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main Homepage ──
export default function Home() {
  const scrollToPricing = () => {
    const el = document.getElementById("priser");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#171717] md:text-6xl">
            Professionelle hjemmesider til danske virksomheder
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#4d4d4d]">
            Fra{" "}
            <span className="font-semibold text-[#171717]">9.999 DKK</span> —
            klar på{" "}
            <span className="font-semibold text-[#171717]">7 dage</span>
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/kontakt/"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#171717] px-8 text-sm font-medium text-white transition-all hover:bg-[#333]"
              style={{
                boxShadow:
                  "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
              }}
            >
              Få tilbud nu
            </a>
            <button
              onClick={scrollToPricing}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-medium text-[#171717] transition-all hover:bg-[#fafafa]"
              style={{
                boxShadow:
                  "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
              }}
            >
              Se pakker
            </button>
          </div>
        </div>
      </section>

      {/* ═══ STATS / REASSURANCE ═══ */}
      <section className="border-t border-[rgba(0,0,0,0.08)] py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-bold tracking-tight text-[#171717]">
                50+
              </p>
              <p className="mt-1 text-sm text-[#4d4d4d]">
                tilfredse kunder
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold tracking-tight text-[#171717]">
                3
              </p>
              <p className="mt-1 text-sm text-[#4d4d4d]">
                skræddersyede pakker
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold tracking-tight text-[#171717]">
                100%
              </p>
              <p className="mt-1 text-sm text-[#4d4d4d]">dansk support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING CARDS ═══ */}
      <section id="priser" className="border-t border-[rgba(0,0,0,0.08)] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#171717]">
              Vores pakker
            </h2>
            <p className="mt-3 text-lg text-[#4d4d4d]">
              Gennemsigtige priser uden skjulte omkostninger.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PACKAGES.map((pkg, idx) => {
              const isGrowth = pkg.id === "growth";
              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col rounded-2xl bg-white p-8 ${
                    isGrowth ? "scale-[1.02]" : ""
                  }`}
                  style={{
                    boxShadow: isGrowth
                      ? "rgba(0,0,0,0.12) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px"
                      : "var(--card-shadow)",
                    border: isGrowth
                      ? "2px solid #171717"
                      : "2px solid transparent",
                  }}
                >
                  {isGrowth && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#171717] px-4 py-1 text-xs font-medium text-white">
                      Anbefalet
                    </span>
                  )}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#171717]">
                      {pkg.name}
                    </h3>
                    <div className="mt-3">
                      <span className="text-4xl font-bold tracking-tight text-[#171717]">
                        {formatDKK(pkg.price)}
                      </span>
                    </div>
                    <div className="mt-2 space-y-1 text-sm text-[#4d4d4d]">
                      <p>{pkg.pages} sider</p>
                      <p>Klar på {pkg.days} dage</p>
                    </div>
                  </div>
                  <ul className="mb-8 flex-1 space-y-3">
                    {PACKAGE_FEATURES[pkg.id as keyof typeof PACKAGE_FEATURES].map(
                      (feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#171717]"
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
                          <span className="text-sm text-[#171717]">
                            {feat}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                  <a
                    href="/kontakt/"
                    className={`inline-flex h-12 items-center justify-center rounded-xl text-sm font-medium transition-all ${
                      isGrowth
                        ? "bg-[#171717] text-white hover:bg-[#333]"
                        : "bg-white text-[#171717] hover:bg-[#fafafa]"
                    }`}
                    style={{
                      boxShadow: isGrowth
                        ? "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px"
                        : "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px",
                    }}
                  >
                    {isGrowth ? "Vælg Growth" : "Vælg " + pkg.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PRICE CALCULATOR ═══ */}
      <PriceCalculator />
    </>
  );
}
