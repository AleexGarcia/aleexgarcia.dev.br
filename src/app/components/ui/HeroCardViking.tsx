"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function HeroCardViking() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  
  // Refs individuais para cada machado para podermos rotacionar e cruzar eles no golpe
  const axeLeftRef = useRef<HTMLImageElement>(null);
  const axeRightRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // 1. Efeito Parallax Dinâmico (Apenas no Personagem)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;

      gsap.to(devRef.current, {
        x: mouseX * 0.06,
        y: mouseY * 0.06,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    // 2. GATILHO DE IMPACTO (Quando o mouse entra no Card)
    const handleMouseEnter = () => {
      // Machado Esquerdo: Desce, inclina para a direita (golpe) e aumenta
      gsap.to(axeLeftRef.current, {
        y: 25,
        rotate: 15,
        scale: 1.25,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
        overwrite: "auto"
      });

      // Machado Direito: Desce, inclina para a esquerda (golpe) e aumenta
      // Mantendo o scale-x-[-1] nativo via GSAP transform interno
      gsap.to(axeRightRef.current, {
        y: 25,
        rotate: -15,
        scaleX: -1.25,
        scaleY: 1.25,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
        overwrite: "auto"
      });

      // Escudo absorve o impacto (Dá um leve "susto" para trás)
      gsap.fromTo(shieldRef.current, 
        { scale: 0.95 },
        { scale: 1, duration: 0.5, ease: "back.out(2)" }
      );
    };

    // 3. RESET DA ANIMAÇÃO (Quando o mouse sai do Card)
    const handleMouseLeave = () => {
      // Reseta o Personagem
      gsap.to(devRef.current, { x: 0, y: -10, duration: 0.8, ease: "power2.out" });

      // Reseta Machado Esquerdo para a posição de descanso
      gsap.to(axeLeftRef.current, {
        y: -10,
        rotate: 0,
        scale: 1.10,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto"
      });

      // Reseta Machado Direito para a posição de descanso
      gsap.to(axeRightRef.current, {
        y: -10,
        rotate: 0,
        scaleX: -1.10,
        scaleY: 1.10,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative h-50 w-50 md:w-1/2 mx-auto mt-10 select-none" ref={cardRef}>
              
      {/* Layer 1: Escudo Viking (Fundo) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" ref={shieldRef}>
        <Image
          className="w-full h-full object-contain -translate-y-10 -translate-x-2 original-shield"
          src="/assets/shield-no-bg.png"
          alt="Escudo Rúnico"
          width={250}
          height={250}
        />
      </div>

      {/* Layer 2: Machados (Separados com Refs Individuais para o efeito de cruzamento) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Machado da Direita */}
          <Image
            ref={axeRightRef}
            className="absolute w-full h-full object-contain -top-10 scale-110 original-axe-r"
            src="/assets/Axes-no-bg.png"
            alt="Machado de Batalha Nórdico"
            width={250}
            height={250}
          />
          
          {/* Machado da Esquerda (Invertido no scale base do CSS) */}
          <Image
            ref={axeLeftRef}
            className="absolute w-full h-full object-contain -top-10  scale-110 scale-x-[-1] original-axe-l"
            src="/assets/Axes-no-bg.png"
            alt="Machado de Batalha Nórdico"
            width={250}
            height={250}
          />
          
        </div>
      </div>

      {/* Layer 3: Dev (Frente) */}
      <div className="absolute inset-0 flex items-center justify-center" ref={devRef}>
        <Image
          className="w-full h-full object-contain" 
          src="/assets/dev-no-bg.png"
          alt="Alexandre Garcia - Programando"
          width={250}
          height={250}
        />
      </div>

    </div>
  );
}