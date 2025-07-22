import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'

function App() {
  return (
    <>
    <div className="bg-green-500 text-white p-4 text-center">Testing Tailwind</div>

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
