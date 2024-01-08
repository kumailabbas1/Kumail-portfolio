import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import MYimages from './components/Portfolio'
import Footer from './components/Footer'
import Education from './components/eduaction'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>

      <main>
        <div id='home'>
          <Home/>
        </div>

        <div id='about'>
          <About/>
        </div>

        <div id='services'>
          <Services />
        </div>

        <div id='eduaction'>
          <Education />
        </div>

        <div id='experience'>
          <Experience />
        </div>

        <div id='portfolio'> 
          <MYimages />
        </div>

      <div id='contact'>
        <Contact />
      </div>

        <div id='footer'>
          <Footer />
        </div>


      </main>
    </div>
  )
}

export default App
