import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import KidsSection from './components/KidsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <KidsSection />
      <Footer />
    </div>
  )
}

export default App

