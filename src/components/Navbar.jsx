import React, { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Problem → Solution', href: '#problem-solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Events', href: '#events' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Talk to an Expert', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm' : 'bg-white/30 backdrop-blur-lg'
    }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-400 shadow-inner" />
            <span className="font-semibold tracking-tight text-gray-900">EarthBerries</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">{item.label}</a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-blue-700 to-emerald-500 text-white px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition shadow-blue-700/20">
              Book a Demo
            </a>
          </div>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 hover:bg-white/80 backdrop-blur text-gray-800" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/70 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-gray-800">{item.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-emerald-500 text-white px-4 py-2 text-sm font-medium shadow-md">Book a Demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
