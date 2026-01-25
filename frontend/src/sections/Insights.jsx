import React from 'react'

const INSIGHTS = [
  { title: 'Five practical lessons from core banking migrations', tag: 'Core banking' },
  { title: 'Designing a data strategy that actually helps delivery', tag: 'Data & analytics' },
  { title: 'Regulatory expectations for major platform change', tag: 'Regulation' },
]

export default function Insights() {
  return (
    <section id="insights" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-wide">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Insights</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">Perspectives on transformation and data.</h2>
        <p className="mt-4 text-sm text-slate-600 max-w-xl">Short, practical viewpoints from delivery leaders — designed to support CIO, COO and transformation teams navigating large change.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {INSIGHTS.map(i => (
            <article key={i.title} className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand/20 cursor-pointer">
              <span className="inline-flex rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase text-brand transition-colors group-hover:bg-brand group-hover:text-white">{i.tag}</span>
              <h3 className="mt-3 text-sm font-semibold text-slate-900 transition-colors group-hover:text-brand">{i.title}</h3>
              <p className="mt-2 text-xs text-slate-600">Placeholder summary — replace with the real article content or link.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
