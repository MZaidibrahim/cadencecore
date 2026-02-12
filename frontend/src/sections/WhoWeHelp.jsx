import React from 'react'

const WHO_WE_HELP = [
  {
    title: 'Startups & Scale-Ups',
    subtitle: 'Early-stage and growth-focused teams',
    challenges: [
      'Pricing based on instinct, not data',
      'Weak or inconsistent data foundations',
      'Tool sprawl without strategic alignment',
    ],
    solutions: [
      'Pricing intelligence & market validation',
      'Structured analytics foundations',
      'Scalable insight systems for growth',
    ],
  },
  {
    title: 'SMEs & Growing Businesses',
    subtitle: 'Operational complexity without enterprise structure',
    challenges: [
      'Fragmented reporting across functions',
      'Insight that doesn’t drive action',
      'KPI overload without prioritisation',
    ],
    solutions: [
      'Business intelligence frameworks',
      'Executive-ready management dashboards',
      'Clear performance narratives',
    ],
  },
  {
    title: 'Founders & Leadership Teams',
    subtitle: 'Decision-makers navigating uncertainty',
    challenges: [
      'High-stakes strategic decisions',
      'Conflicting signals from multiple data sources',
      'Limited time for deep analysis',
    ],
    solutions: [
      'Structured decision-support models',
      'Scenario modelling & trade-off analysis',
      'Clear, recommendation-led outputs',
    ],
  },
]

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-slate-50 py-20">
      <div className="container-wide">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            Who We Help
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">
            Built for teams that need clarity — not just dashboards.
          </h2>
          <p className="mt-4 text-slate-600">
            We partner with organisations and leaders operating under real-world constraints,
            where decisions must be defensible, timely, and grounded in evidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {WHO_WE_HELP.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-brand/20 cursor-default"
            >
              <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-brand">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {item.subtitle}
              </p>

              {/* Challenges */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Typical challenges
                </p>

                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {item.challenges.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  How we help
                </p>

                <ul className="mt-3 space-y-2 text-sm font-medium text-slate-700">
                  {item.solutions.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footnote */}
        <div className="mt-16 max-w-2xl text-sm text-slate-500">
          <p>
            We are not a fit for everyone. We work best with teams who value
            structured thinking, clear trade-offs, and evidence-led decision-making.
          </p>
        </div>

      </div>
    </section>
  )
}
