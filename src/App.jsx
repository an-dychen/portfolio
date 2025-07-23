import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App
