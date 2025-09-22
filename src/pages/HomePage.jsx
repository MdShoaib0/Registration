import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

function HomePage() {
  return (
    <section id='home' className='min-h-screen'>
        <Header />
        <HeroSection />
    </section>
  )
}

export default HomePage