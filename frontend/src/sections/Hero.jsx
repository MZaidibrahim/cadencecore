import React from "react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900">
      {/* Fading divider below navbar */}
      <div className="absolute top-[72px] left-0 right-0 z-20 flex justify-center">
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      </div>

      {/* Decorative blurred gradient (from template) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          Data-Driven Business & Analytics Consulting
        </h1>

        <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          We help startups and growing businesses turn data into actionable
          insights, pricing intelligence, and confident strategic decisions.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-sm italic text-white/70 sm:text-base">
          Combining analytics, market insight, and business strategy to support
          smarter growth in an increasingly data-driven economy.
        </p>

        {/* Bottom fading divider (like reference image)
<div className="mx-auto mt-8 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent" /> */}

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Book a Free Consultation
          </button>

          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-md border border-white/40 px-6 py-3 text-sm text-white hover:bg-white/10 transition"
          >
            View Our Work
          </button>
        </div>
        {/* Divider with fade (like image) */}
        <div className="mt-10 flex items-center justify-center gap-4 text-sm text-slate-300">
          <div className="h-px w-24 sm:w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <span className="font-medium uppercase tracking-wide text-white/90">
            Focus Areas
          </span>
          <div className="h-px w-24 sm:w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        <p className="mt-4 text-sm text-slate-300">
          Pricing & Market Analysis &nbsp;•&nbsp; Business Intelligence
          &nbsp;•&nbsp; Strategic Decision Support
        </p>
      </div>
    </section>
  );
}
