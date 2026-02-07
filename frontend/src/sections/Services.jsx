import React from "react";

const SERVICES = [
  {
    title: "Core banking modernisation",
    description:
      "Vendor selection, roadmap design and delivery leadership for core platform upgrades and replacements.",
  },
  {
    title: "Enterprise data & analytics",
    description:
      "Data strategy, architecture and migration to unlock insight and regulatory reporting at scale.",
  },
  {
    title: "Digital banking & channels",
    description:
      "Customer experience design, API enablement and omnichannel integration anchored in real journeys.",
  },
  {
    title: "Change & delivery leadership",
    description:
      "Hands-on delivery leads, PMO and change managers embedded within your organisation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              Services
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">
              Core transformation, anchored in delivery.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600">
            We combine practical programme leadership with specialist banking
            and data expertise. Every engagement is tailored to the
            institution's starting point, risk appetite and regulatory
            landscape.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/20 hover:bg-white cursor-default"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
