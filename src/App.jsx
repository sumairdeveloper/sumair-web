
import React from 'react'
import Header from './components/header/Header'
import HeroSection from './components/hero-section/Herosection'
import './App.css'
import AboutMe from './components/aboutme/Aboutme'
import Services from './components/services/Services'
import MyWork from './components/my-work/My-work'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'
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
        <MyWork />
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default App
