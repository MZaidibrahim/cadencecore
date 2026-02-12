import React from 'react'

const STEPS = [
  {
    step: '01',
    title: 'Understand the Problem',
    text: 'We clarify the decision that needs to be made, the constraints involved, and the context in which the outcome will be used.'
  },
  {
    step: '02',
    title: 'Analyse What Matters',
    text: 'We work with available data to identify the variables, trade-offs and signals that genuinely influence outcomes.'
  },
  {
    step: '03',
    title: 'Design Decision Support',
    text: 'We translate insight into usable outputs — dashboards, frameworks, or scenario models built for real decision-making.'
  },
  {
    step: '04',
    title: 'Enable & Embed',
    text: 'Where required, we support adoption and knowledge transfer so value persists beyond delivery.'
  },
]

export default function Approach() {
  return (
    <section id="approach" className="bg-white py-20 sm:py-24">
      <div className="container-wide max-w-6xl mx-auto">

        {/* Section Intro — LEFT ALIGNED */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            How We Work
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900">
            Structured thinking. Practical delivery. No theatre.
          </h2>

          <p className="mt-4 text-base text-slate-600">
            Our approach is outcome-led and decision-focused — designed to reduce uncertainty,
            not just produce reports.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-brand/20 hover:bg-white"
            >
              <div className="text-sm font-semibold text-brand">
                {s.step}
              </div>

              <h3 className="mt-3 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-brand">
                {s.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Differentiator Block */}
        <div className="mt-20 max-w-3xl">
          <p className="text-sm font-semibold text-slate-900">
            What we don’t do
          </p>

          <p className="mt-3 text-sm text-slate-600">
            Generic slide decks • Vanity metrics • Over-engineered models • Insight without action
          </p>
        </div>

      </div>
    </section>
  )
}
