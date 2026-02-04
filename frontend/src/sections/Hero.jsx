import React from 'react'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-slate-900/75" />

      {/* Decorative blurred gradient (from template) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          Data-Driven Business & Analytics Consulting
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          We help startups and growing businesses turn data into actionable insights,
          pricing intelligence, and confident strategic decisions.
        </p>

        {/* Divider with fade (like image) */}
        <div className="mt-10 flex items-center justify-center gap-4 text-sm text-slate-300">
          <div className="h-px w-24 sm:w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <span className="font-medium uppercase tracking-wide text-white/90">
            Focus Areas
          </span>
          <div className="h-px w-24 sm:w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        <p className="mt-4 text-sm text-slate-300">
          Pricing & Market Analysis &nbsp;•&nbsp; Business Intelligence &nbsp;•&nbsp; Strategic Decision Support
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Book a Free Consultation
          </button>

          <button
            onClick={() =>
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="rounded-md border border-white/40 px-6 py-3 text-sm text-white hover:bg-white/10 transition"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  )
}
