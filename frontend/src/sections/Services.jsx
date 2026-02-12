import React from "react";

const SERVICES = [
  {
    title: 'Pricing & Market Intelligence',
    description:
      'Data-driven pricing strategy, competitor benchmarking, demand modelling, and revenue optimisation to maximise profitability and market positioning.',
  },
  {
    title: 'Business Intelligence & Dashboards',
    description:
      'Custom BI dashboards, KPI frameworks, and performance tracking systems that turn raw data into clear executive insights.',
  },
  {
    title: 'Strategic Decision Support',
    description:
      'Scenario modelling, forecasting, and analytics frameworks to support expansion, product launches, and investment decisions.',
  },
  {
    title: 'Data Strategy & Analytics Advisory',
    description:
      'End-to-end data strategy design, analytics maturity assessment, and implementation roadmaps to build sustainable analytical capability.',
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
  Analytics-led transformation, anchored in measurable impact.
</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600">
  We combine advanced analytics, market intelligence, and strategic advisory to help organisations make confident, data-backed decisions. Every engagement is tailored to your growth stage, industry context, and commercial objectives.
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
