import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Header from './components/Header';

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
        <Header />
      </div>
    </div>
  );
}

export default App;