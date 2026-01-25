import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="container-wide py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold text-accent-soft">Cadence Core Consultancy</div>
          <p className="mt-3 text-sm text-slate-400">Designing clarity, delivering impact for financial institutions across the UK and EU.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-200">Services</div>
          <ul className="mt-3 space-y-1 text-slate-400 text-sm">
            <li>Core banking modernisation</li>
            <li>Enterprise data & analytics</li>
            <li>Digital & product</li>
            <li>Change & delivery</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-200">Contact</div>
          <p className="mt-3 text-sm text-slate-400">Birmingham, United Kingdom</p>
          <p className="mt-2 text-sm text-slate-400">Email: hello@cadencecoreconsultancy.example</p>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950/95">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-4 text-xs text-slate-500 sm:flex-row">
          <p>© 2025 Cadence Core Consultancy Ltd. All rights reserved.</p>
          <p>Lookalike frontend built with React & Tailwind for demo purposes.</p>
        </div>
      </div>
    </footer>
  )
}
