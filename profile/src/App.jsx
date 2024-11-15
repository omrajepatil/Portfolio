import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About.jsx'
import Skill from './Skill'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Home />
    <hr className="border-t-2 border-gray-400 mx-8"/>
    <About />
    <hr className="border-t-2 border-gray-400 mx-8"/>
    <Skill />
    <hr className="border-t-2 border-gray-400 mx-8"/>
    <Projects />
    <hr className="border-t-2 border-gray-400 mx-8"/>
    <Contact />
    <hr className="border-t-2 border-gray-400 mx-8"/>
    <Footer />
    
    </>
  )
}

export default App
