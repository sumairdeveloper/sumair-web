import React from 'react'
import Header from './components/header/header'
import HeroSection from './components/hero-section/herosection'
import './App.css'
import AboutMe from './components/aboutme/aboutme'
import Services from './components/services/services'

const App = () => {
  return (
    <div>
      <Header />
      <div className='main-component-wrapper'>
        <HeroSection />
        <div className='about-me-main'>
          <AboutMe />
        </div>
        <Services />
      </div>
    </div>
  )
}

export default App