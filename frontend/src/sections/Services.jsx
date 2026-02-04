import React from 'react'

const SERVICES = [
  {
    title: 'Data & Analytics Consulting',
    description:
      'Transforming raw data into clear, decision-ready insights through dashboards and analysis.',
  },
  {
    title: 'Pricing & Market Intelligence',
    description:
      'Understanding pricing drivers, market positioning, and value dynamics using real-world data.',
  },
  {
    title: 'Business & Strategy Advisory',
    description:
      'Data-backed strategy and decision-support for founders and leadership teams.',
  },
  {
    title: 'Decision Support & Insights',
    description:
      'Practical insights designed to support confident, evidence-based decisions.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Services</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">
              How we help businesses make better decisions.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600">
            Our services combine analytics and business strategy to support confident,
            data-backed decision-making.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/20 hover:bg-white"
            >
              <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
