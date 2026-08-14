import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useBentoAnimations(containerRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.children;

    const scrollTween = gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    const magneticElements = container.querySelectorAll('.magnetic-btn');
    
    const cleanupMap = new Map<Element, { move: (e: MouseEvent) => void; leave: () => void }>();

    magneticElements.forEach((el) => {
      const htmlEl = el as HTMLElement;

      // Cria funções otimizadas que atualizam a propriedade diretamente na GPU
      const xTo = gsap.quickTo(htmlEl, 'x', { duration: 0.3, ease: 'power2.out' });
      const yTo = gsap.quickTo(htmlEl, 'y', { duration: 0.3, ease: 'power2.out' });

      const onMouseMove = (e: MouseEvent) => {
        const rect = htmlEl.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        xTo(x * 0.3);
        yTo(y * 0.3);
      };

      const onMouseLeave = () => {
        gsap.to(htmlEl, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      };

      htmlEl.addEventListener('mousemove', onMouseMove);
      htmlEl.addEventListener('mouseleave', onMouseLeave);

      cleanupMap.set(htmlEl, { move: onMouseMove, leave: onMouseLeave });
    });

    return () => {
      if (scrollTween.scrollTrigger) {
        scrollTween.scrollTrigger.kill();
      }
      
      cleanupMap.forEach((listeners, el) => {
        el.removeEventListener('mousemove', listeners.move as EventListener);
        el.removeEventListener('mouseleave', listeners.leave);
      });
    };
  }, [containerRef]);
}