import React from 'react'

const SECTORS = [
  'Retail banking',
  'Business & commercial banking',
  'Challenger & digital banks',
  'Building societies & mutuals',
  'Specialist lenders',
  'Fintech & payments',
]

export default function Sectors() {
  return (
    <section id="sectors" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-wide">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Sectors</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">Focused on regulated financial services.</h2>
        <p className="mt-4 text-sm text-slate-600 max-w-xl">Cadence Core works with organisations where technology, regulation and data all intersect.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <div key={s} className="rounded-xl bg-white p-4 text-sm font-medium border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand/30 cursor-default">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
