import React, { useEffect } from 'react';
import anime from 'animejs';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Works } from './components/Works';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const activeSection = useScrollSpy(['intro', 'about', 'works', 'contact']);

  useEffect(() => {
    // Force scroll to top on mount before animating
    window.scrollTo(0, 0);

    // Remove preloader class and add loaded class
    document.documentElement.classList.remove('ss-preload');
    document.documentElement.classList.add('ss-loaded');

    // Create entrance animation timeline
    const tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 800,
    });

    tl.add({
      targets: '#loader',
      opacity: 0,
      duration: 1000,
    })
    .add({
      targets: '#preloader',
      opacity: 0,
      complete: () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.visibility = 'hidden';
          preloader.style.display = 'none';
        }
      }
    })
    .add({
      targets: '.s-header',
      translateY: [-100, 0],
      opacity: [0, 1]
    }, '-=200')
    .add({
      targets: ['.s-intro .text-pretitle', '.s-intro .text-huge-title'],
      translateX: [100, 0],
      opacity: [0, 1],
      delay: anime.stagger(400)
    })
    .add({
      targets: '.circles span',
      keyframes: [
        { opacity: [0, 0.3] },
        { opacity: [0.3, 0.1], delay: anime.stagger(100, { direction: 'reverse' }) }
      ],
      delay: anime.stagger(100, { direction: 'reverse' })
    })
    .add({
      targets: '.intro-social li',
      translateX: [-50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, { direction: 'reverse' })
    })
    .add({
      targets: '.intro-scrolldown',
      translateY: [100, 0],
      opacity: [0, 1]
    }, '-=800');
  }, []);

  return (
    <div id="top" className="s-pagewrap">
      {/* Preloader */}
      <div id="preloader">
        <div id="loader" />
      </div>

      {/* Decorative Circles */}
      <div className="circles">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Header */}
      <Header activeSection={activeSection} />

      {/* Main Content */}
      <main className="s-content">
        <Intro />
        <About />
        <Works />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
