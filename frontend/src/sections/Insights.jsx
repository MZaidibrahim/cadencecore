import React from 'react'

const INSIGHTS = [
  {
    title: 'How to move from reactive pricing to structured pricing strategy',
    tag: 'Pricing & Market Intelligence',
    summary:
      'Why instinct-led pricing breaks at scale — and how competitor benchmarking, demand signals, and scenario modelling improve margin clarity.',
  },
  {
    title: 'Why dashboards fail — and how to design decision-ready reporting',
    tag: 'Business Intelligence',
    summary:
      'The difference between reporting activity and supporting decisions. A practical look at KPI design and executive clarity.',
  },
  {
    title: 'Using scenario modelling to reduce strategic decision risk',
    tag: 'Strategic Decision Support',
    summary:
      'How structured trade-off analysis helps leaders evaluate expansion, product, and investment decisions with greater confidence.',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-wide">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Insights
        </p>

        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900">
          Perspectives on pricing, analytics, and strategic decision-making.
        </h2>

        <p className="mt-4 text-sm text-slate-600 max-w-xl">
          Short, practical viewpoints designed to help founders, operators,
          and leadership teams make clearer, data-backed decisions.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {INSIGHTS.map((i) => (
            <article
              key={i.title}
              className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand/20 cursor-pointer"
            >
              <span className="inline-flex rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                {i.tag}
              </span>

              <h3 className="mt-4 text-sm font-semibold text-slate-900 transition-colors group-hover:text-brand">
                {i.title}
              </h3>

              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                {i.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
