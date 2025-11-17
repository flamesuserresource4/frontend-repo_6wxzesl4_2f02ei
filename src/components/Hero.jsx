import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[radial-gradient(60%_100%_at_50%_-10%,#ffffff_0%,#F5F7FA_35%,#e8eef6_100%)]">
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Tokenizing Real-World Assets. Secure. Compliant. Borderless.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700/90">
            {/* Placeholder: replace with the exact subtitle from the current site */}
            We transform real-world assets into compliant, liquid, and globally accessible digital instruments.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-emerald-500 text-white px-6 py-3 font-medium shadow-lg shadow-blue-900/10 hover:shadow-xl transition">
              Book a Demo
            </a>
            <div className="hidden sm:block glass-card px-4 py-3 text-sm text-gray-700/90">
              <ul className="list-disc list-inside space-y-1">
                <li>Renewable energy</li>
                <li>Institutional investments</li>
                <li>Global capital markets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
