import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="container-wide py-12 grid gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <div className="text-sm font-semibold text-white">
            Vextacore
          </div>
          <p className="mt-3 text-sm text-slate-400 max-w-sm">
            Data-driven analytics and strategic advisory for startups,
            growing businesses, and leadership teams seeking clarity in
            complex decisions.
          </p>
        </div>

        {/* Services */}
        <div>
          <div className="font-semibold text-slate-200">Services</div>
          <ul className="mt-3 space-y-2 text-slate-400 text-sm">
            <li>Pricing & Market Intelligence</li>
            <li>Business Intelligence & Dashboards</li>
            <li>Strategic Decision Support</li>
            <li>Data Strategy & Analytics Advisory</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold text-slate-200">Contact</div>
          <p className="mt-3 text-sm text-slate-400">
            London, United Kingdom
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Email: support@vextacore.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/95">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-4 text-xs text-slate-500 sm:flex-row">
          <p>© 2025 Vextacore Ltd. All rights reserved.</p>
          <p>Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
