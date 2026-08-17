'use client';

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin caso ainda não tenha sido registrado globalmente
gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  target: number;      
  suffix?: string;     
  startFrom?: number;  
}

export default function Counter({ target, suffix = "", startFrom = 0 }: CounterProps) {
  const [value, setValue] = useState(startFrom);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Criamos um objeto genérico para o GSAP animar a propriedade interna
    const obj = { count: startFrom };

    const animation = gsap.to(obj, {
      count: target,
      duration: 4, // Tempo da animação em segundos (suave e independente do tamanho do número)
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%", // Dispara quando o número está quase entrando na tela
        toggleActions: "play none none none",
        once: true, // Roda apenas uma vez ao scrollar
      },
      onUpdate: () => {
        // Atualiza o estado com o número arredondado durante a animação
        setValue(Math.floor(obj.count));
      }
    });

    // Limpeza ao desmontar o componente
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [target, startFrom]);

  return (
    <span ref={elementRef} className="font-mono text-amber-500">
      {value.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}