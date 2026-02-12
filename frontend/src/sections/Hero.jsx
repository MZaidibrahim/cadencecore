import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-brand to-slate-800 text-white"
    >
      <div className="container-wide py-20 grid gap-10 lg:grid-cols-1 items-center">
        <div>
          <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            Data-Driven Consulting
          </p>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Data-Driven Business & Analytics Consulting
          </h1>

          <p className="mt-5 text-slate-200 max-w-2xl">
            We help startups and growing businesses turn data into actionable
            insights, pricing intelligence, and confident strategic decisions.
          </p>

          <p className="mt-4 text-sm text-slate-300 max-w-2xl italic">
            Combining analytics, market insight, and business strategy to
            support smarter growth in an increasingly data-driven economy.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-accent-light"
            >
              Explore services
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/30 px-6 py-3 text-sm transition-colors duration-300 hover:bg-white/10 hover:border-white"
            >
              Book a conversation
            </button>
          </div>
        </div>

        {/* <div>
          <div className="rounded-2xl bg-white/5 p-5 shadow-soft transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:scale-[1.02] cursor-default">
            <h3 className="text-sm font-semibold text-slate-100">
              Current engagement
            </h3>
            <p className="mt-2 text-slate-200">
              UK retail bank core migration — In delivery
            </p>
            <div className="mt-4 text-xs text-slate-200">
              <div className="flex justify-between">
                <span>Core replacement readiness</span>
                <span className="font-mono">84%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-slate-700">
                <div className="h-full w-4/5 rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </div> */}

{/* Focus Areas Divider */}
<div className="mt-5 flex flex-col items-center text-center">
  <div className="flex items-center w-full max-w-3xl mb-4">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    <span className="mx-4 text-sm font-semibold tracking-wide text-white">
      Focus Areas
    </span>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
  </div>

  <p className="text-sm text-slate-200">
    Pricing & Market Analysis • Business Intelligence • Strategic Decision Support
  </p>
</div>



      </div>
    </section>
  );
}
