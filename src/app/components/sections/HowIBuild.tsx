'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STEPS } from '../../_constants/steps';
import { Step } from './HowIBuild/Step';
import { MobileStep } from './HowIBuild/MobileStep';
import { Badge } from '../ui/Badge';
import { GiAnvil } from 'react-icons/gi';


gsap.registerPlugin(ScrollTrigger);


export default function HowIBuild() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  // Desktop
  const desktopPathRef = useRef<SVGPathElement>(null);

  // Mobile
  const mobilePathRef = useRef<SVGLineElement>(null);

  // Etapas
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const desktopPath = desktopPathRef.current;
    const mobilePath = mobilePathRef.current;

    if (!section || !intro || !desktopPath || !mobilePath) {
      return;
    }

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      const desktopPathLength = desktopPath.getTotalLength();
      const mobilePathLength = mobilePath.getTotalLength();



      gsap.set(desktopPath, {
        strokeDasharray: desktopPathLength,
        strokeDashoffset: desktopPathLength,
      });

      gsap.set(mobilePath, {
        strokeDasharray: mobilePathLength,
        strokeDashoffset: mobilePathLength,
      });


      if (prefersReducedMotion) {
        gsap.set(desktopPath, {
          strokeDashoffset: 0,
        });

        gsap.set(mobilePath, {
          strokeDashoffset: 0,
        });

        gsap.set(intro.children, {
          opacity: 1,
          y: 0,
        });

        gsap.set(stepsRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
        });

        return;
      }


      gsap.fromTo(
        intro.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: intro,
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      );

      gsap.to(desktopPath, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          end: 'bottom 70%',
          scrub: 1.2,
        },
      });



      gsap.to(mobilePath, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          end: 'bottom 72%',
          scrub: 1,
        },
      });


      stepsRef.current.forEach((step) => {
        if (!step) return;

        gsap.fromTo(
          step,
          {
            opacity: 0,
            y: 45,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 78%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );


        const node = step.querySelector('[data-process-node]');

        if (node) {
          gsap.fromTo(
            node,
            {
              scale: 0.7,
              opacity: 0.4,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.7,
              ease: 'back.out(1.8)',
              scrollTrigger: {
                trigger: step,
                start: 'top 78%',
                toggleActions: 'play none none none',
                once: true,
              },
            },
          );
        }
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#15100C]
        py-32

      "
    >


      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(245 158 11) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-amber-600/[0.035]
          blur-[140px]
        "
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div
          ref={introRef}
          className="
            mx-auto
            max-w-3xl
            text-center
            flex
            flex-col
            gap-6
            items-center
          "
        >


          <Badge  icon={GiAnvil}>
            Método de Forja
          </Badge>

          <h2
            className="
              font-serif
              text-4xl
              font-bold
              tracking-tight
              text-stone-100
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Como eu{' '}
            <span className="text-amber-500">
              construo.
            </span>
          </h2>

          {/* Descrição */}

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-stone-300
              sm:text-lg
            "
          >
            Código é ferramenta.
            <br className="sm:hidden" /> Engenharia é saber onde,
            quando e por que utilizá-la.
          </p>
        </div>

        {/* ========================================================
            DESKTOP
        ======================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-28
            hidden
            min-h-[1050px]
            max-w-6xl
            lg:block
          "
        >
          {/* ======================================================
              TRILHA SVG
          ====================================================== */}

          <svg
            aria-hidden="true"
            viewBox="0 0 1200 1050"
            preserveAspectRatio="none"
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              overflow-visible
            "
          >
            {/* Trilha de fundo */}

            <path
              d="
                M 105 130
                C 250 30, 390 65, 470 190
                C 535 290, 650 270, 725 205
                C 810 130, 990 180, 1055 300
                C 1120 420, 955 455, 820 475
                C 670 500, 650 620, 735 700
                C 815 775, 650 900, 475 825
                C 350 770, 265 850, 170 940
              "
              fill="none"
              stroke="rgba(146, 64, 14, 0.45)"
              strokeWidth="3"
              strokeDasharray="7 12"
            />

            {/* Trilha animada */}

            <path
              ref={desktopPathRef}
              d="
                M 105 130
                C 250 30, 390 65, 470 190
                C 535 290, 650 270, 725 205
                C 810 130, 990 180, 1055 300
                C 1120 420, 955 455, 820 475
                C 670 500, 650 620, 735 700
                C 815 775, 650 900, 475 825
                C 350 770, 265 850, 170 940
              "
              fill="none"
              stroke="rgba(245, 158, 11, 0.85)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* ======================================================
              ETAPA 01
          ====================================================== */}

          <Step
            step={STEPS[0]}
            index={0}
            refCallback={(element) => {
              if (element) {
                stepsRef.current[0] = element;
              }
            }}
            className="
              absolute
              left-[2%]
              top-[7%]
              w-[280px]
            "
          />

          {/* ======================================================
              ETAPA 02
          ====================================================== */}

          <Step
            step={STEPS[1]}
            index={1}
            refCallback={(element) => {
              if (element) {
                stepsRef.current[1] = element;
              }
            }}
            className="
              absolute
              left-[34%]
              top-[14%]
              w-[290px]
            "
          />

          {/* ======================================================
              ETAPA 03
          ====================================================== */}

          <Step
            step={STEPS[2]}
            index={2}
            refCallback={(element) => {
              if (element) {
                stepsRef.current[2] = element;
              }
            }}
            className="
              absolute
              right-[1%]
              top-[27%]
              w-[290px]
            "
          />

          {/* ======================================================
              ETAPA 04
          ====================================================== */}

          <Step
            step={STEPS[3]}
            index={3}
            refCallback={(element) => {
              if (element) {
                stepsRef.current[3] = element;
              }
            }}
            className="
              absolute
              left-[45%]
              top-[51%]
              w-[290px]
            "
          />

          {/* ======================================================
              ETAPA 05
          ====================================================== */}

          <Step
            step={STEPS[4]}
            index={4}
            refCallback={(element) => {
              if (element) {
                stepsRef.current[4] = element;
              }
            }}
            className="
              absolute
              bottom-[2%]
              left-[8%]
              w-[300px]
            "
          />
        </div>

        {/* ========================================================
            MOBILE / TABLET
        ======================================================== */}

        <div
          className="
            relative
            mt-20
            lg:hidden
          "
        >
          <div className="relative">
            {/* ====================================================
                SVG VERTICAL MOBILE
            ==================================================== */}

            <svg
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[19px]
                top-0
                h-full
                w-[2px]
                overflow-visible
              "
              viewBox="0 0 2 1000"
              preserveAspectRatio="none"
            >
              {/* Linha fantasma */}

              <line
                x1="1"
                y1="0"
                x2="1"
                y2="1000"
                stroke="rgba(146, 64, 14, 0.4)"
                strokeWidth="2"
                strokeDasharray="5 8"
              />

              {/* Linha animada */}

              <line
                ref={mobilePathRef}
                x1="1"
                y1="0"
                x2="1"
                y2="1000"
                stroke="rgba(245, 158, 11, 0.85)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* ==================================================
                ETAPAS MOBILE
            ================================================== */}

            <div
              className="
                space-y-24
                sm:space-y-28
              "
            >
              {STEPS.map((step, index) => (
                <MobileStep
                  key={step.number}
                  step={step}
                  index={index}
                  refCallback={(element) => {
                    if (element) {
                      stepsRef.current[index] = element;
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            FRASE FINAL
        ======================================================== */}

        <div
          className="
            mt-24
            flex
            items-center
            justify-center
            gap-4
            sm:mt-32
          "
        >
          <span
            className="
              h-px
              w-12
              bg-amber-900/70
              sm:w-24
            "
          />

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-stone-500
            "
          >
            Do problema ao software
          </span>

          <span
            className="
              h-px
              w-12
              bg-amber-900/70
              sm:w-24
            "
          />
        </div>
      </div>
    </section>
  );
}





