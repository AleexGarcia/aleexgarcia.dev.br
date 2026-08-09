'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  GiAnvil,
  GiBattleAxe,
  GiCompass,
  GiCrossedAxes,
  GiHelmet,
  GiShield,
} from 'react-icons/gi';
import { PremiumMeshCanvas } from './ui/PremiumMeshCanvas';
import AboutTitle from './ui/AboutTitle';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    icon: GiAnvil,
    title: 'Arquitetura antes do código',
    description:
      'Antes de construir, penso em como as peças devem se encaixar. Uma boa arquitetura reduz complexidade e prepara o software para evoluir.',
  },
  {
    icon: GiShield,
    title: 'Robustez por padrão',
    description:
      'Tipagem, validação, testes e boas práticas fazem parte da fundação de uma aplicação confiável.',
  },
  {
    icon: GiBattleAxe,
    title: 'Simplicidade como arma',
    description:
      'Complexidade nem sempre significa maturidade. Prefiro soluções claras, objetivas e fáceis de manter.',
  },
];

const technologies = ['TypeScript', 'Next.js', 'NestJS', 'AWS'];

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
            <div className="mb-5">
              <div className="flex w-fit items-center gap-1.5 rounded-full border border-amber-500/10 bg-amber-500/10 px-3 py-1 font-bold uppercase tracking-widest text-amber-500">
                <GiHelmet
                  className="shrink-0 text-xl"
                  aria-hidden="true"
                />

                <span className="text-[11px] lg:text-sm">
                  O homem por trás do machado
                </span>
              </div>
            </div>

            <AboutTitle/>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Construo software pensando no que acontece{' '}
              <span className="font-medium text-gray-300">
                depois do primeiro deploy.
              </span>
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Gosto de transformar problemas complexos em sistemas simples,
              previsíveis e preparados para crescer. Arquitetura, performance,
              testes e cloud fazem parte do processo — não são detalhes para
              resolver depois.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Para mim, tecnologia é apenas a ferramenta. O verdadeiro trabalho
              está em saber{' '}
              <span className="text-gray-300">
                o que construir, por que construir e como construir direito.
              </span>
            </p>
            <PremiumMeshCanvas />
          </div>
        </div>


        {/* Conteúdo */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          {/* Manifesto */}
          <div className="lg:col-span-3">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-amber-950/60 bg-gradient-to-b from-[#221A15] to-[#1A1410] p-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.04)] sm:p-8">
              {/* Linha superior */}
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-700">
                    manifesto.exe
                  </span>

                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    Meu manifesto
                  </h3>
                </div>

                <div className="rounded-xl border border-amber-500/10 bg-amber-500/5 p-3 text-amber-500 transition-transform duration-300 group-hover:rotate-6">
                  <GiCrossedAxes
                    className="text-2xl"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="space-y-7">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;

                  return (
                    <div
                      key={principle.title}
                      className="group/principle flex gap-4"
                    >
                      {/* Número */}
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-amber-500/10 bg-black/20 font-mono text-xs font-bold text-amber-500 transition-all duration-300 group-hover/principle:border-amber-500/30 group-hover/principle:bg-amber-500/10">
                          0{index + 1}
                        </div>

                        {index !== principles.length - 1 && (
                          <div className="mt-2 h-full w-px bg-gradient-to-b from-amber-950/70 to-transparent" />
                        )}
                      </div>

                      {/* Conteúdo */}
                      <div className="pb-1">
                        <div className="flex items-center gap-2">
                          <Icon
                            className="text-lg text-amber-600 transition-transform duration-300 group-hover/principle:scale-110"
                            aria-hidden="true"
                          />

                          <h4 className="font-bold text-gray-200">
                            {principle.title}
                          </h4>
                        </div>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Frase técnica */}
              <div className="mt-9 border-t border-amber-950/50 pt-6">
                <p className="font-mono text-xs leading-6 text-gray-500">
                  <span className="text-amber-600">&gt;</span>{' '}
                  Linhas de código forjadas para alta performance e escalabilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Foto / Identidade */}
          <div className="lg:col-span-2">
            <div
              ref={imageRef}
              className="relative h-full min-h-[460px] overflow-hidden rounded-3xl border border-amber-950/60 bg-gradient-to-b from-[#221A15] to-[#1A1410] p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.4)]"
            >
              {/* Runas decorativas */}
              <div
                aria-hidden="true"
                className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.35em] text-amber-900/70"
              >
                ᚨ ᛚ ᛖ ᚲ
              </div>

              <div className="flex h-full flex-col justify-between">
                {/* Foto */}
                <div
                  ref={axeRef}
                  className="relative flex flex-1 items-center justify-center overflow-hidden will-change-transform"
                >
                  {/* Glow */}
                  <div
                    aria-hidden="true"
                    className="absolute h-56 w-56 rounded-full bg-amber-500/5 blur-3xl"
                  />

                  <Image
                    src="/assets/aleexgarcia.webp"
                    alt="Alexandre Garcia, Full-Stack Developer"
                    width={600}
                    height={750}
                    priority={false}
                    className="relative z-10 max-h-[390px] object-cover object-top"
                  />

                  {/* Vinheta */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#1A1410] via-transparent to-transparent"
                  />
                </div>

                {/* Identidade */}
                <div className="relative z-30">
                  <div className="mb-4 h-px w-full bg-gradient-to-r from-amber-950/0 via-amber-950/70 to-amber-950/0" />

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-amber-700">
                        identidade
                      </span>

                      <span className="mt-1 block text-lg font-black tracking-tight text-white">
                        Alexandre Garcia
                      </span>

                      <span className="mt-1 block text-xs text-gray-500">
                        Full-Stack Developer
                      </span>
                    </div>

                    <GiCompass
                      className="mb-1 text-3xl text-amber-700/60"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-amber-950/50 bg-black/20 px-2.5 py-1 font-mono text-[10px] text-gray-500 transition-colors duration-200 hover:border-amber-500/20 hover:text-amber-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            Deploy sem medo.
          </p>
        </div>
      </div>
    </section>
  );
}