import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CardImageParallax = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shieldRef = useRef<HTMLImageElement | null>(null);
  const devRef = useRef<HTMLImageElement | null>(null);
  const machadoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !shieldRef.current || !devRef.current || !machadoRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const onMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX - containerRef.current.offsetLeft - containerWidth / 2;
      const mouseY = event.clientY - containerRef.current.offsetTop - containerHeight / 2;

      gsap.to(shieldRef.current, {
        x: mouseX * 0.02,
        y: mouseY * 0.02,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.to(devRef.current, {
        x: mouseX * 0.05,
        y: mouseY * 0.05,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.to(machadoRef.current, {
        x: mouseX * 0.09,
        y: mouseY * 0.09,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(shieldRef.current, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' });
      gsap.to(devRef.current, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' });
      gsap.to(machadoRef.current, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' });
    };

    containerRef.current.addEventListener('mousemove', onMouseMove);
    containerRef.current.addEventListener('mouseleave', onMouseLeave);

    return () => {
      containerRef.current.removeEventListener('mousemove', onMouseMove);
      containerRef.current.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="md:w-1/2 min-w-44 min-h-44 sm:w-52 sm:h-52 relative animate-float mx-auto md:mx-0 flex-shrink-0 brightness-95 group-hover:scale-105 transition-transform duration-500" ref={containerRef}>
      <Image
        src="/assets/shield-no-bg.png"
        alt="Shield"
        fill
        className="absolute object-contain z-20"
        priority
        ref={shieldRef}
      />
      <Image
        src="/assets/dev-no-bg.png"
        alt="Dev"
        fill
        className="absolute object-contain z-10"
        priority
        ref={devRef}
      />
      <Image
        src="/assets/Axes-no-bg.png"
        alt="Machado"
        fill
        className="absolute object-contain z-30"
        priority
        ref={machadoRef}
      />
    </div>
  );
};
