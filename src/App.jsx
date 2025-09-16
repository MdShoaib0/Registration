import React from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SkillPage from './pages/SkillPage'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import NeonButton from './components/NeonButton'

function App() {

  return (
    <div className='flex flex-col justify-center items-center mt-40'>
      {/* <LoginPage /> */}
        <HomePage />
        <SkillPage />
        <ProjectPage />
        <ServicePage />
        <ContactPage />
      {/* <NeonButton/> */}
    </div>
  )
}

export default App
