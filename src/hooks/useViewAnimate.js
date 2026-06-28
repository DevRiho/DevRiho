import { useEffect, useRef } from 'react';
import anime from 'animejs';

/**
 * Custom React hook to animate block elements using IntersectionObserver and anime.js.
 * @param {IntersectionObserverInit} options - IntersectionObserver configuration options.
 * @returns {React.RefObject} - Ref to attach to the block element to animate.
 */
export function useViewAnimate(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targets = element.querySelectorAll('[data-animate-el]');
          if (targets.length > 0) {
            // Reset initial states to avoid flash of content
            targets.forEach(el => {
              el.style.opacity = '0';
            });

            anime({
              targets: targets,
              opacity: [0, 1],
              translateY: [80, 0],
              delay: anime.stagger(200, { start: 100 }),
              duration: 800,
              easing: 'easeInOutCubic',
              begin: () => {
                element.classList.add('ss-animated');
              }
            });
          } else {
            // If no child animate elements, just add animated class to parent
            element.classList.add('ss-animated');
          }
          
          // Unobserve after running animation once
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return ref;
}
