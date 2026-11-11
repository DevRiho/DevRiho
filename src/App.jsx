import React, { useEffect } from 'react';
import anime from 'animejs';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Works } from './components/Works';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const activeSection = useScrollSpy(['intro', 'about', 'works', 'contact']);

  useEffect(() => {
    // Force scroll to top on mount before animating
    window.scrollTo(0, 0);

    const runEntrance = () => {
      // Clear any pre-existing viewport animation triggers
      document.querySelectorAll('.ss-animated').forEach((item) => {
        item.classList.remove('ss-animated');
      });

      // Create entrance animation timeline
      const tl = anime.timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: true,
      });

      tl.add({
        targets: '#loader',
        opacity: 0,
        duration: 1000,
        begin: () => {
          window.scrollTo(0, 0);
        },
      })
      .add({
        targets: '#preloader',
        opacity: 0,
        duration: 800,
        begin: () => {
          document.documentElement.classList.remove('ss-preload');
          document.documentElement.classList.add('ss-loaded');
        },
        complete: () => {
          const preloader = document.getElementById('preloader');
          if (preloader) {
            preloader.style.visibility = 'hidden';
            preloader.style.display = 'none';
          }
        },
      })
      .add({
        targets: '.s-header',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=200')
      .add({
        targets: ['.s-intro .text-pretitle', '.s-intro .text-huge-title'],
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(400),
      })
      .add({
        targets: '.circles span',
        keyframes: [
          { opacity: [0, 0.3] },
          { opacity: [0.3, 0.1], delay: anime.stagger(100, { direction: 'reverse' }) }
        ],
        delay: anime.stagger(100, { direction: 'reverse' }),
      })
      .add({
        targets: '.intro-social li',
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100, { direction: 'reverse' }),
      })
      .add({
        targets: '.intro-scrolldown',
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 800,
      }, '-=800');
    };

    // Keep spinner visible initially so the user clearly sees the pulsating loader
    const timer = setTimeout(() => {
      runEntrance();
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="top" className="s-pagewrap">
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
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
