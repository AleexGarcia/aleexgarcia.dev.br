'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BrowserMockupProps {
  imageUrl?: string;
  title: string;
}

export default function BrowserMockup({ 
  imageUrl, 
  title 
}: BrowserMockupProps) {
  const browserRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const browser = browserRef.current;
    const page = pageRef.current;
    const cursor = cursorRef.current;

    if (!browser || !page || !cursor) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: browser,
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
      }
    });

    // Simulação do cursor
    tl.fromTo(cursor, 
      { x: 50, y: 150, opacity: 0 },
      { x: 180, y: 80, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .to(cursor, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
    
    // Animação de scroll (só fará sentido se houver imagem longa, 
    // mas o cálculo dinâmico garante que se for o HTML fixo ele não quebrará)
    .to(page, {
      y: () => -(page.scrollHeight - browser.offsetHeight),
      duration: imageUrl ? 4.5 : 1, // Scroll rápido se for só a página estática
      ease: "power1.inOut",
      delay: 0.2
    })
    
    .to(cursor, { x: 220, y: 140, duration: 0.8, ease: "power2.out" }, "-=0.5")
    .to(cursor, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
    
    .to(page, {
      y: 0,
      duration: imageUrl ? 2 : 0.5,
      ease: "power2.out",
      delay: 1
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [imageUrl]);

  return (
    <div 
      ref={browserRef}
      className="w-full h-full min-h-[220px] max-h-[260px] bg-[#0c0907] rounded-lg border border-amber-950/50 shadow-2xl overflow-hidden flex flex-col relative group/browser select-none"
    >
      {/* Barra superior do Navegador */}
      <div className="bg-[#140f0c] px-4 py-2.5 flex items-center justify-between border-b border-amber-950/30 shrink-0 z-10">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        </div>
        <div className="px-3 py-0.5 bg-black/40 border border-amber-950/40 rounded-md text-[9px] text-zinc-500 font-mono w-40 truncate text-center tracking-tight">
          {title.toLowerCase().replace(/[^a-z0-9]/g, "")}.vercel.app
        </div>
        <div className="w-10" />
      </div>

      {/* Janela de Renderização */}
      <div className="flex-1 w-full overflow-hidden relative bg-[#130e0c]">
        
        {/* Cursor Virtual */}
        <div 
          ref={cursorRef}
          className="absolute w-3 h-3 bg-amber-500 rounded-full border border-black shadow-[0_0_8px_rgba(245,158,11,0.6)] z-20 pointer-events-none opacity-0"
        />

        {/* Container Principal Animado */}
        <div ref={pageRef} className="w-full absolute top-0 left-0 will-change-transform">
          {imageUrl ? (
            /* Se houver imagem, renderiza o print da landing page */
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src={imageUrl} 
              alt={`Mockup de ${title}`}
              className="w-full h-auto object-top"
            />
          ) : (
            /* FALLBACK: Página HTML Genérica estilizada com o tema do projeto */
            <div className="w-full h-[215px] flex flex-col items-center justify-center p-6 text-center text-zinc-400 font-mono">
              <div className="mb-2 text-amber-600 font-bold text-3xl tracking-wider">404</div>
              <h3 className="text-zinc-200 text-xs font-semibold uppercase tracking-widest mb-1">
                Visual Indisponível
              </h3>
              <p className="text-[10px] text-zinc-500 max-w-[280px] leading-relaxed">
                A interface gráfica para <span className="text-amber-700/80">{title}</span> está passando por manutenção ou rodando estritamente em ambiente privado de homologação.
              </p>
              
              <div className="mt-4 px-3 py-1 bg-amber-950/20 border border-amber-950/40 rounded text-[9px] text-amber-500/70 animate-pulse">
                ⚡ Servidores ativos obtendo logs...
              </div>
            </div>
          )}
        </div>

        {/* Overlay de linhas rústicas */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,13,10,0)_95%,rgba(245,158,11,0.02)_95%)] bg-[size:100%_16px] pointer-events-none" />
      </div>
    </div>
  );
}