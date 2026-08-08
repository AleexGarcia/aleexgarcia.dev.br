'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "./ui/Badge";
import { projectsData } from "../_constants/projectsData";
import ProjectCard from "./ui/ProjectCard";
import { GiVikingShield } from "react-icons/gi";

// Registra o plugin do GSAP
gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const container = cardsContainerRef.current;

    if (!header || !container) return;

    // 1. Animação do Cabeçalho (Badge, Título, Descrição)
    gsap.fromTo(
      header.children,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // 2. Animação dos Cards dos Projetos (Efeito 3D Rústico de Entrada)
    const cards = container.children;
    
    gsap.fromTo(
      cards,
      { 
        opacity: 0, 
        y: 60, 
        rotationX: -15, 
        transformOrigin: "top center"
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.2, // Cascata entre os cards
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%", // Dispara quando o topo do container atinge 80% da tela
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Limpeza do ScrollTrigger ao desmontar
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === header || trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-mt-20 bg-[#110D0A] text-[#F3F4F6] py-20 px-4 sm:p-6 md:p-8 font-sans border-t border-amber-950/40 overflow-hidden [perspective:1200px]"
    >
      <div className="max-w-6xl w-full mx-auto space-y-12">

        <div ref={headerRef} className="space-y-3 text-center md:text-left">
          <Badge icon={GiVikingShield} variant="amber">Invasões Concluídas</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Projetos de Destaque
          </h2>
          <p className="text-gray-400 text-sm max-w-xl">
            Uma amostra real do meu arsenal de engenharia. Sem códigos genéricos: apenas soluções robustas que resolvem problemas reais.
          </p>
        </div>

        <div ref={cardsContainerRef} className="space-y-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}