'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function AboutTitle() {
  const wordsRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = wordsRef.current;
    const cursor = cursorRef.current;
    if (!element || !cursor) return;

    const words = [
      "fazer funcionar.",
      "entregar rápido.",
      "resolver o problema.",
      "colocar em produção.",
      "fazer escalar.",
      "escrever código.",
    ];

    // 1. Animação nativa do Cursor (Piscar estável sem Tailwind)
    const cursorTween = gsap.to(cursor, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    // 2. Linha do tempo do texto
    const tl = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      tl.to(element, {
        duration: 1.2,
        text: {
          value: word,
          delimiter: ""
        },
        ease: "none",
      })
        .to({}, { duration: 3 }) // Pausa para leitura
        .to(element, {
          duration: 0.6,
          text: {
            value: "",
            delimiter: ""
          },
          ease: "none",
        });
    });

    // Limpeza completa ao desmontar
    return () => {
      cursorTween.kill();
      tl.kill();
    };
  }, []);

  return (
    <h2
      id="about-title"
      className="mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white  leading-tight"
    >
      <span className="block md:inline">Não escrevo código apenas para</span>{' '}

      <span className="relative inline-block whitespace-nowrap text-amber-500 font-black min-w-[280px] sm:min-w-[320px] md:min-w-[380px] h-[1.2em] align-bottom">
        <span ref={wordsRef} className="inline-block">
        </span>

        {/* Cursor controlado 100% pelo GSAP */}
        <span
          ref={cursorRef}
          className="inline-block font-light text-amber-500 ml-1 select-none shrink-0"
        >
          |
        </span>
      </span>
    </h2>
  );
}