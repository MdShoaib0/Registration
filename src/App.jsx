import React from 'react';
import HomePage from './pages/HomePage';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother'; // ✅ Requires Club GreenSock

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useGSAP(() => {
    // ✅ Creates ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    });

    return () => {
      // ✅ Cleanup on unmount
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
      </div>
    </div>
  );
}

export default App;