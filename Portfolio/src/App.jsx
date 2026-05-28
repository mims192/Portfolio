import React from 'react'
import styled,{ThemeProvider} from 'styled-components'
import { darkTheme } from './Utils/Theme'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import WorkExp from './Components/WorkExp'
import Card from './Components/Card'
import { Projector } from 'lucide-react'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <WorkExp/>
     <Projects/>
     <Footer/>
    </div>
  )
}

export default App
