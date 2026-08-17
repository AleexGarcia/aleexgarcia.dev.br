'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {

  GiCrossedAxes,
  GiHelmet,
  
} from 'react-icons/gi';
import { PremiumMeshCanvas } from './About/PremiumMeshCanvas';
import AboutTitle from './About/AboutTitle';
import { Badge } from '../ui/Badge';
import Manifest from './About/Manifest';
import Identity from './About/Identity';

gsap.registerPlugin(ScrollTrigger);




export default function AboutManifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const axeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const axe = axeRef.current;

    if (!section || !content || !image || !axe) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.children,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      );

      gsap.fromTo(
        image,
        {
          opacity: 0,
          x: 45,
          scale: 0.94,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      );

      gsap.to(axe, {
        y: -8,
        rotate: 2,
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifest"
      ref={sectionRef}
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-[#110D0A] px-4 py-20 text-[#F3F4F6] sm:px-6 md:px-8 md:py-28"
    >
      {/* Ambientação */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-amber-600/5 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-700/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}

        <div className='relative'>
          <div ref={contentRef} className="mb-12 max-w-3xl md:mb-16">
            
            <Badge icon={GiHelmet}>
              O homem por trás do machado
            </Badge>

            <AboutTitle />

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Construo software pensando no que acontece{' '}
              <span className="font-medium text-gray-100">
                depois do primeiro deploy.
              </span>
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Gosto de transformar problemas complexos em sistemas simples,
              previsíveis e preparados para crescer. Arquitetura, performance,
              testes e cloud fazem parte do processo — não são detalhes para
              resolver depois.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Para mim, tecnologia é apenas a ferramenta. O verdadeiro trabalho
              está em saber{' '}
              <span className="text-gray-100">
                o que construir, por que construir e como construir direito.
              </span>
            </p>
            <PremiumMeshCanvas />
          </div>
        </div>


        {/* Conteúdo */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          {/* Manifesto */}
          <Manifest/>

          <Identity imageRef={imageRef} axeRef={axeRef} />
        </div>

        {/* Fechamento */}
        <div className="mt-8 border-y border-amber-950/40 py-7 text-center">
          <GiCrossedAxes
            className="mx-auto mb-3 text-xl text-amber-700"
            aria-hidden="true"
          />

          <p className="mx-auto max-w-3xl text-sm font-medium leading-7 text-gray-500 sm:text-base">
            <span className="text-gray-300">
              Código limpo. Arquitetura sólida. 
            </span>{' '}
            Deploys na sexta-feira sem clamar a Thor.
          </p>
        </div>
      </div>
    </section>
  );
}