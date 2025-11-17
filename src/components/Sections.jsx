import React from 'react'

function SectionTitle({ title, subtitle, id }) {
  return (
    <div id={id} className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  )
}

export function ProblemSolution() {
  return (
    <section className="relative py-24 bg-transparent" id="problem-solution">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="The Problem → The Solution" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card">
            <h3 className="text-xl font-semibold text-gray-900">The Problem</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>Real-world assets are: illiquid…</li>
              {/* Replace with exact bullets from current site */}
            </ul>
          </div>
          <div className="glass-card">
            <h3 className="text-xl font-semibold text-gray-900">Our Solution</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>Liquidity</li>
              <li>Streamlined operations</li>
              <li>Global reach</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section className="relative py-24" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="How It Works (3 Steps)" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((n) => (
            <div key={n} className="glass-card">
              {n === 1 && (
                <>
                  <div className="text-sm font-semibold text-gray-500">Step 1</div>
                  <h3 className="mt-2 text-xl font-semibold">Onboarding & Compliance – AML/KYC, legal structuring, and regulatory readiness.</h3>
                </>
              )}
              {n === 2 && (
                <>
                  <div className="text-sm font-semibold text-gray-500">Step 2</div>
                  <h3 className="mt-2 text-xl font-semibold">Tokenization & Issuance – Secure digitization of real-world assets into asset-backed tokens.</h3>
                </>
              )}
              {n === 3 && (
                <>
                  <div className="text-sm font-semibold text-gray-500">Step 3</div>
                  <h3 className="mt-2 text-xl font-semibold">Liquidity & Market Access – Integration with exchanges and investor marketplaces for secondary trading and global reach.</h3>
                </>
              )}
            </div>
          ))}
          <div className="md:col-span-3 text-center text-gray-600 mt-4">From compliance to liquidity, we manage the entire process.</div>
        </div>
      </div>
    </section>
  )
}

export function RecentEvents() {
  return (
    <section className="relative py-24" id="events">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Recent Events" subtitle="" />
        <div className="mt-10 grid gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-sm text-gray-500">Date • Location</div>
                <h3 className="text-lg font-semibold text-gray-900">Women Inspiring Network Lounge - Climate Week NYC</h3>
                <p className="text-gray-700 mt-2">Short description from the current website.</p>
              </div>
              <a href="#" className="inline-flex items-center rounded-full px-4 py-2 bg-gray-900 text-white text-sm">Read More</a>
            </div>
          ))}
          <div className="text-center">
            <a href="#" className="inline-flex items-center rounded-full px-5 py-2.5 bg-gray-900 text-white text-sm">View All Events</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhoWeAre() {
  return (
    <section className="relative py-24" id="who-we-are">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Who We Are" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 text-center text-gray-700">
            {/* Replace with exact mission from current site */}
            We are a global team building compliant infrastructure for tokenized real-world assets.
          </div>
          <div className="glass-card">
            <h3 className="text-xl font-semibold">Founding Team</h3>
            <p className="mt-2 text-gray-700">Text from the site.</p>
          </div>
          <div className="glass-card">
            <h3 className="text-xl font-semibold">Advisory Board</h3>
            <p className="mt-2 text-gray-700">Text from the site.</p>
          </div>
          <div className="glass-card">
            <h3 className="text-xl font-semibold">Backed by</h3>
            <p className="mt-2 text-gray-700">Text from the site.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function UseCases() {
  const items = [
    'Environmental Impact & Energy Transition',
    'Social Impact Investment',
    'Real Estate & Private Equity',
    'Commodities & Trade Finance',
    'Cross-Border Institutional Finance',
  ]
  return (
    <section className="relative py-24" id="use-cases">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Use Cases (Applications)" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="glass-card">
              <h3 className="text-lg font-semibold text-gray-900">{t}</h3>
              <p className="mt-2 text-gray-700">Paragraph from the site.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="relative py-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Talk to an Expert" subtitle="Ready to unlock liquidity and scale your assets globally?" />
        <div className="mt-10 max-w-2xl mx-auto glass-card">
          <form className="grid grid-cols-1 gap-5">
            <div>
              <label className="text-sm text-gray-700">Full Name</label>
              <input className="mt-2 w-full rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600" placeholder="" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email Address</label>
              <input type="email" className="mt-2 w-full rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Company Name</label>
              <input className="mt-2 w-full rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Project Description</label>
              <textarea rows={4} className="mt-2 w-full rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-gray-700">Type of Asset</label>
                <select className="mt-2 w-full rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Renewable Energy</option>
                  <option>Real Estate</option>
                  <option>Private Equity</option>
                  <option>Commodities</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">Capitalization Size</label>
                <select className="mt-2 w-full rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600">
                  <option>$1M–$10M</option>
                  <option>$10M–$50M</option>
                  <option>$50M–$100M</option>
                  <option>$100M+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-700">Timeline</label>
              <select className="mt-2 w-full rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600">
                <option>Immediate</option>
                <option>0–3 months</option>
                <option>3–6 months</option>
                <option>6–12 months</option>
              </select>
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-emerald-500 text-white px-6 py-3 font-medium shadow-lg">
              Schedule Your Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
