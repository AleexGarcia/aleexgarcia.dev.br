'use client'
import React, { useEffect, useRef } from 'react';
import { FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Badge } from './ui/Badge'; 
import { email, phone } from '../_constants/contacts';
import { GiCrossedAxes } from 'react-icons/gi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const ctaBoxRef = useRef<HTMLDivElement>(null);
  const textElementsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const ctaBox = ctaBoxRef.current;
    const texts = textElementsRef.current;
    const buttons = buttonsRef.current;
  const footer = footerRef.current;

    if (!ctaBox || !texts || !buttons || !footer) return;

    // 1. Animação de Entrada com Revelação Rústica (Efeito Forja)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      }
    });

    tl.fromTo(ctaBox, 
      { opacity: 0, y: 50, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo(texts.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(buttons.children,
      { opacity: 0, scale: 0.9, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.12, ease: 'back.out(1.5)' },
      '-=0.2'
    );

    // 2. Efeito Magnético Otimizado de Alta Performance (GPU) nos Botões Principais
    const magneticButtons = footer.querySelectorAll('.magnetic-cta');
    const cleanupMap = new Map<Element, { move: (e: MouseEvent) => void; leave: () => void }>();

    magneticButtons.forEach((btn) => {
      const htmlEl = btn as HTMLElement;
      const xTo = gsap.quickTo(htmlEl, 'x', { duration: 0.3, ease: 'power2.out' });
      const yTo = gsap.quickTo(htmlEl, 'y', { duration: 0.3, ease: 'power2.out' });

      const onMouseMove = (e: MouseEvent) => {
        const rect = htmlEl.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        xTo(x * 0.25); // Força do efeito magnético
        yTo(y * 0.25);
      };

      const onMouseLeave = () => {
        gsap.to(htmlEl, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      };

      htmlEl.addEventListener('mousemove', onMouseMove);
      htmlEl.addEventListener('mouseleave', onMouseLeave);
      cleanupMap.set(htmlEl, { move: onMouseMove, leave: onMouseLeave });
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      cleanupMap.forEach((listeners, el) => {
        el.removeEventListener('mousemove', listeners.move as EventListener);
        el.removeEventListener('mouseleave', listeners.leave);
      });
    };
  }, []);

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      className="bg-[#110D0A] text-[#F3F4F6] pt-16 pb-8 px-4 sm:p-6 md:p-8 font-sans border-t border-amber-950/40 w-full overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto space-y-12">

        {/* Bloco de Chamada para Ação (CTA) */}
        <div 
          ref={ctaBoxRef}
          className="bg-black/30 rounded-3xl border border-amber-950/60 p-8 md:p-12 text-center space-y-6 relative overflow-hidden group hover:border-amber-500/20 transition-colors duration-300 shadow-xl"
        >
          {/* Linha de brilho superior com degradê de fogo */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0"></div>

          <div ref={textElementsRef} className="max-w-xl mx-auto space-y-4">
            <div className="flex justify-center will-change-transform">
              <Badge icon={GiCrossedAxes} variant="amber">O Chamado das Armas</Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white will-change-transform">
              Pronto para convocar reforços?
            </h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed will-change-transform">
              Seja para saquear bugs complexos no back-end, erguer interfaces indestrutíveis ou planejar uma arquitetura escalável na nuvem, meu machado está à disposição do seu clã.
            </p>
          </div>

          {/* Botões Grandes de Conversão com Efeito Magnético */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <div className="magnetic-cta w-full sm:w-auto will-change-transform">
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg active:scale-[0.98] animate-glow-pulse px-3 py-4 sm:px-6 "
              >
                <FaWhatsapp className="text-lg" /> Iniciar Conversa no WhatsApp
              </a>
            </div>

            <div className="magnetic-cta w-full sm:w-auto will-change-transform">
              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black/40 hover:bg-black/70 text-gray-300 font-medium text-sm px-3 py-4  sm:px-6 rounded-xl border border-amber-950/60 hover:border-amber-500/30 transition-all duration-200"
              >
                <FaEnvelope className="text-base text-gray-400" /> Enviar Mensagem por E-mail
              </a>
            </div>
          </div>
        </div>

        {/* Linha Final de Créditos e Navegação */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-amber-950/40 text-xs text-gray-200">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Alexandre Garcia. Todos os direitos reservados.</p>
            <p className="font-mono text-[10px] text-gray-300">
              Construído com Next.js, TypeScript, Tailwind CSS e GSAP. Desenvolvido a base de hidromel e café.
            </p>
          </div>

          {/* Botão de Voltar ao Topo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 bg-black/40 hover:bg-black/80 border border-amber-950/60 text-gray-400 hover:text-amber-500 rounded-lg transition-all text-[11px] font-medium font-mono group cursor-pointer"
            aria-label="Voltar para o topo da página"
          >
            VOLTAR AO TOPO{' '}
            <FaArrowUp className="transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}