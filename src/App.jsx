import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ProblemSolution, HowItWorks, RecentEvents, WhoWeAre, UseCases, Contact } from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{scrollBehavior:'smooth'}}>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <RecentEvents />
        <WhoWeAre />
        <UseCases />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
