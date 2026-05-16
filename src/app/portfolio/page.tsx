import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Forge Webs",
  description: "Se vores udvalgte cases og projekter.",
};

const PROJECTS = [
  {
    name: "Rendetalje",
    url: "https://rendetalje.dk",
    description:
      "Moderne hjemmeside til en professionel malervirksomhed i Aarhus. Fokus på visuel portfolio-visning og let kontakt.",
    tech: "Next.js · Tailwind CSS · Sanity CMS",
    color: "#f5f5f5",
  },
  {
    name: "Foodtruck Fiesta",
    url: "https://foodtruckfiesta.dk",
    description:
      "Farverig og dynamisk hjemmeside til en foodtruck-udlejningsvirksomhed. Integreret booking- og menu-system.",
    tech: "Next.js · Tailwind CSS · Sanity CMS · Stripe",
    color: "#faf5f0",
  },
  {
    name: "Nordic Consult",
    url: null,
    description:
      "Clean og professionel virksomhedsside til et konsulentfirma med fokus på thought leadership og kasestudier.",
    tech: "Next.js · Tailwind CSS",
    color: "#f0f5fa",
  },
  {
    name: "Grøn Glæde",
    url: null,
    description:
      "Inspirerende hjemmeside til en økologisk planteskole. Billeddrevet design med webshop-integration.",
    tech: "Next.js · Tailwind CSS · Shopify",
    color: "#f0faf0",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl bg-white transition-all hover:-translate-y-1"
      style={{
        boxShadow:
          "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px",
      }}
    >
      {/* Screenshot placeholder */}
      <div
        className="flex h-48 items-center justify-center"
        style={{ background: project.color }}
      >
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 shadow-border">
            <span className="text-xl font-bold text-[#171717]">
              {project.name.charAt(0)}
            </span>
          </div>
          <p className="text-xs font-medium text-[#666666]">
            {project.url ?? "Koncepthjemmeside"}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-[#171717]">
            {project.name}
          </h3>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#666666] transition-colors hover:text-[#171717]"
            >
              ↗
            </a>
          )}
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#4d4d4d]">
          {project.description}
        </p>
        <p className="text-xs font-medium text-[#666666]">{project.tech}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#171717]">
            Vores portfolio
          </h1>
          <p className="mt-4 text-lg text-[#4d4d4d]">
            Se et udvalg af hjemmesider, vi har skabt til danske virksomheder.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
