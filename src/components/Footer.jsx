import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#030712] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-400" />
          <span className="font-medium tracking-tight">EarthBerries</span>
        </div>
        <div className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} EarthBerries Capital Ltd. All rights reserved.
        </div>
        <div className="mt-4 flex gap-6 text-sm">
          <a href="#" className="hover:text-gray-200">Privacy</a>
          <a href="#" className="hover:text-gray-200">Terms</a>
          <a href="#" className="hover:text-gray-200">Cookie Policy</a>
        </div>
        <div className="mt-6 flex gap-4">
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.96 0-1.73-.79-1.73-1.73 0-.95.77-1.73 1.73-1.73s1.73.78 1.73 1.73c0 .94-.77 1.73-1.73 1.73zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.6z"/></svg>
          </a>
          <a href="#" aria-label="X" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2H21l-6.5 7.43L22 22h-6.99l-4.36-5.69L5.64 22H3l7.03-8.03L2 2h7.08l3.95 5.3L18.24 2zm-2.45 18h2.15L8.26 4H6.02l9.77 16z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
