import React from 'react'

const STEPS = [
  { step: '01', title: 'Clarify outcomes', text: 'We listen first: clarifying business outcomes, regulatory constraints and technical starting points.' },
  { step: '02', title: 'Shape the roadmap', text: 'We create a pragmatic delivery roadmap tying architecture, data and operating model into one plan.' },
  { step: '03', title: 'Lead delivery', text: 'We embed experienced leads and PMO alongside your teams and partners to drive execution.' },
  { step: '04', title: 'Transfer capability', text: 'We help shape structures, skills and governance so capability remains once the programme ends.' },
]

export default function Approach() {
  return (
    <section id="approach" className="bg-white py-16 sm:py-20">
      <div className="container-wide grid gap-8 lg:grid-cols-[1fr,420px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">How we work</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">Senior practitioners, embedded with your teams.</h2>
          <p className="mt-4 text-sm text-slate-600">We operate as a boutique consultancy — small, senior teams who are close to the detail but comfortable at programme boards and with regulators.</p>
        </div>

        <div className="grid gap-4">
          {STEPS.map(s => (
            <div key={s.step} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 shadow-sm">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand text-white font-semibold">{s.step}</div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-xs text-slate-600">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
