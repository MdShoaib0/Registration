import React from 'react';
import HomePage from './pages/HomePage';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import Footer from './pages/Footer'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 3,
      effects: true
    });

    return () => {
      smoother.kill();
    };
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HomePage />
        <SkillPage />
        <ProjectPage />
        <ServicePage />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;