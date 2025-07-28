import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import { BackgroundLines } from './compents/Background-lines'
import Project from './sections/Project'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl '> 
<Navbar/>
<Hero/>
<About/>
<Project/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App