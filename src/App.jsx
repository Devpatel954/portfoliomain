import React from 'react'
import Home from './components/home'
import About from './components/About'
import Title from './components/Title'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'




const App = () => {
  return (
    <div>
      <Home/>
      <Title subtitle='Who I am' title='About Me'/>
      <About/>
      <Title subtitle='What I know and What I am learning' title='Skills'/>
      <Skills/>
      <Title subtitle='What I am working on' title='My Projects'/>
      <Projects/>
      <Title subtitle='Any questions? Contact me here' title='Get In Touch'/>
      <GetInTouch/>
     <Footer/>
     


      
    </div>
  )
}

export default App
