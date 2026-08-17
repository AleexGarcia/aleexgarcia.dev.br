"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function HeroCardViking() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const devRef = useRef<HTMLDivElement>(null);
  
  const axeLeftRef = useRef<HTMLImageElement>(null);
  const axeRightRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Checa se é tela desktop (768px ou mais). Se for mobile, encerra o efeito aqui.
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    let handleMouseMove: (e: MouseEvent) => void;
    let handleMouseEnter: () => void;
    let handleMouseLeave: () => void;
    let handleResize: () => void;

    // Cache das propriedades geométricas para EVITAR FORCED REFLOWS
    let cardRect: DOMRect | null = null;

    const timer = requestAnimationFrame(() => {
      const updateCardRect = () => {
        cardRect = card.getBoundingClientRect();
      };

      handleMouseEnter = () => {
        updateCardRect();

        gsap.to(axeLeftRef.current, {
          y: 25,
          rotate: 15,
          scale: 1.25,
          duration: 0.4,
          ease: "elastic.out(1, 0.5)",
          overwrite: "auto"
        });

        gsap.to(axeRightRef.current, {
          y: 25,
          rotate: -15,
          scaleX: -1.25,
          scaleY: 1.25,
          duration: 0.4,
          ease: "elastic.out(1, 0.5)",
          overwrite: "auto"
        });

        gsap.fromTo(shieldRef.current, 
          { scale: 0.95 },
          { scale: 1, duration: 0.5, ease: "back.out(2)" }
        );
      };

      handleMouseMove = (e: MouseEvent) => {
        if (!cardRect) updateCardRect();
        if (!cardRect) return;

        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
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

      handleMouseLeave = () => {
        cardRect = null;

        gsap.to(devRef.current, { x: 0, y: -10, duration: 0.8, ease: "power2.out" });

        gsap.to(axeLeftRef.current, {
          y: -10,
          rotate: 0,
          scale: 1.10,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto"
        });

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

      handleResize = () => {
        if (cardRect) updateCardRect();
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("resize", handleResize);
    });

    return () => {
      cancelAnimationFrame(timer);
      if (card) {
        if (handleMouseEnter) card.removeEventListener("mouseenter", handleMouseEnter);
        if (handleMouseMove) card.removeEventListener("mousemove", handleMouseMove);
        if (handleMouseLeave) card.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (handleResize) window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-50 w-50 lg:h-60 lg:w-60 md:w-1/2 mx-auto mt-10 lg:mt-0 select-none" ref={cardRef}>
              
      {/* Layer 1: Escudo Viking (Fundo) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" ref={shieldRef}>
        <Image
          className="w-full h-full object-contain -translate-y-10 -translate-x-2 original-shield"
          src="/assets/shield-no-bg.webp"
          alt="Escudo Rúnico"
          width={250}
          height={250}
        />
      </div>

      {/* Layer 2: Machados */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Machado da Direita */}
          <Image
            ref={axeRightRef}
            className="absolute w-full h-full object-contain -top-10 scale-110 original-axe-r md:[will-change:transform]"
            src="/assets/Axes-no-bg.webp"
            alt="Machado de Batalha Nórdico"
            width={250}
            height={250}
            fetchPriority="high"
            priority
          />
          
          {/* Machado da Esquerda */}
          <Image
            ref={axeLeftRef}
            className="absolute w-full h-full object-contain -top-10 scale-110 scale-x-[-1] original-axe-l md:[will-change:transform]"
            src="/assets/Axes-no-bg.webp"
            alt="Machado de Batalha Nórdico"
            width={250}
            height={250}
          />
          
        </div>
      </div>

      {/* Layer 3: Dev (Frente) */}
      <div className="absolute inset-0 flex items-center justify-center" ref={devRef}>
        <Image
          className="w-full h-full object-contain md:[will-change:transform]" 
          src="/assets/dev-no-bg.webp"
          alt="Alexandre Garcia - Programando"
          width={250}
          height={250}
        />
      </div>

    </div>
  );
}