'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {
  GiAnvil, GiThunderStruck
} from "react-icons/gi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const icon = iconRef.current;
    if (!icon) return;

    // Timeline de animação GSAP: Tremor/Treme-treme violento simulando falha na forja/tempestade
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });

    tl.to(icon, {
      x: -8,
      rotation: -5,
      duration: 0.08,
      ease: "power1.inOut"
    })
      .to(icon, {
        x: 8,
        rotation: 5,
        duration: 0.08,
        ease: "power1.inOut"
      })
      .to(icon, {
        x: -4,
        rotation: -2,
        duration: 0.08,
        ease: "power1.inOut"
      })
      .to(icon, {
        x: 0,
        rotation: 0,
        duration: 0.08,
        ease: "power1.inOut"
      });

    return () => {
      tl.kill();
    };
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">

      {/* Detalhe de Fundo: A Bigorna de Thor atingida por trovão */}
      <div className="absolute opacity-15 pointer-events-none transform -translate-y-8">
        <GiAnvil className="text-[380px] text-red-700 animate-pulse" />
      </div>

      <div className="max-w-xl z-10 flex flex-col items-center gap-6">

        {/* Ícone de Alerta Viking com GSAP */}
        <div
          ref={iconRef}
          className="text-red-500 text-7xl drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]"
        >
          <GiThunderStruck />
        </div>

        {/* Título de Erro */}
        <h1 className="text-7xl font-black font-mono tracking-tighter text-red-500 select-none">
          ERRO 500
        </h1>

        {/* Mensagem Satírica */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-200">
            Tempestade nos Servidores!
          </h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Um raio de Thor atingiu a nossa forja digital! Ocorreu uma falha grave no servidor e os ferreiros já estão trabalhando para <span className="text-red-500 font-semibold">reconstruir as engrenagens da aplicação</span>.
          </p>
        </div>

        {/* Frase em Itálico */}
        <div className="border-y border-red-950/60 py-3 my-2 text-xs text-red-600 font-medium tracking-wider italic uppercase">
          {"Mesmo as melhores armas podem trincar no calor da batalha"}
        </div>

        {/* Botões de Ação */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => reset()}
            className="group relative inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 shadow-lg shadow-red-950/40 border border-red-700 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Reinflamar a Forja (Tentar Novamente)
          </button>

          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-gray-300 hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 border border-zinc-700 hover:scale-[1.02] active:scale-[0.98]"
          >
            Retornar ao Vilarejo
          </Link>
        </div>

      </div>

      {/* Rodapé cômico da página 500 */}
      <span className="absolute bottom-6 text-[10px] text-gray-600 tracking-widest uppercase font-mono">
        Status do Servidor: Muspelheim em Chamas // Aguarde o resfriamento
      </span>
    </div>
  );
}