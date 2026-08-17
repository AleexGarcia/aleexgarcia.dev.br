'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import TerminalMockup from './TerminalMockup';
import BrowserMockup from './BrowserMockup';
import { Project } from '@/app/_constants/projectsData';

// Registra o plugin de Scroll do GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    // Substitui o itemVariants (hidden -> visible) do framer-motion
    const anim = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Dispara quando o topo do card atinge 85% da tela
          toggleActions: "play none none none",
          once: true, // Executa a animação apenas uma vez ao scrollar
        },
      }
    );

    // Limpeza ao desmontar o componente para evitar vazamento de memória
    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);

  return (
    <div ref={cardRef} className="group w-full opacity-0"> {/* opacity-0 previne o "flash" do conteúdo antes do JS carregar */}
      <div className="
      bg-gradient-to-b from-[#221A15] to-[#1A1410]
      rounded-3xl 
      shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.4)]
      hover:border-amber-500/30 
      hover:shadow-[0_0_20px_rgba(245,158,11,0.03)]
      flex 
      justify-between
      overflow-hidden
      relative
      group gap-8 flex-wrap lg:flex-nowrap p-6 border border-amber-950/20 bg-[#16110E] transition-all duration-300 group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.05)]">

        <div className="w-full lg:w-2/3">
          {/* Mockup do Terminal */}
          {project.isApiOnly ? (
            <TerminalMockup
              command={project.terminalCommand}
              outputLines={project.terminalOutput}
            />
          ) : (
            <BrowserMockup
              imageUrl={project.imageUrl}
              title={project.title}
            />
          )}
        </div>

        {/* LADO DIREITO: Informações e Engenharia */}
        <div className="lg:w-3/5 w-full flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-amber-500/80 mt-1">
                {project.tagline}
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags e Ações */}
          <div className="space-y-4">
            {/* Badge de Tecnologias */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="text-[11px] font-mono bg-black/40 text-gray-300 border border-amber-950/40 px-2.5 py-0.5 rounded-md hover:border-amber-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links de Ação */}
            <div className="flex gap-4 pt-3 border-t border-amber-950/40">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Link do repositório do projeto ${project.title}`}
                  className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub className="text-sm" /> Código no GitHub
                </a>
              )}
              {project.deployLink && (
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Link do deploy do projeto ${project.title}`}
                  className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-amber-500 transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" /> Acessar Deploy ↗
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}