'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Registra os plugins necessários
gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface TerminalMockupProps {
  command?: string;
  outputLines?: string[];
}

export default function TerminalMockup({ 
  command = "curl -X GET /api/v1/status", 
  outputLines = [
    '{"status": "online", "database": "connected"}',
    '{"latency": "14ms", "uptime": "100%"}',
    "Valhalla server connection established successfully."
  ]
}: TerminalMockupProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLSpanElement>(null);
  const outputsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggerElement = terminalRef.current;
    const commandText = commandRef.current;
    const outputs = outputsRef.current;

    if (!triggerElement || !commandText || !outputs) return;

    // Timeline para orquestrar a digitação e depois a resposta do servidor
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 80%", // Dispara quando o terminal entra 80% na tela
        toggleActions: "play none none none",
        once: true,
      }
    });

    // 1. Efeito de Digitação do Comando
    tl.to(commandText, {
      duration: 2,
      text: {
        value: command,
        delimiter: ""
      },
      ease: "none",
    });

    // 2. Aparição em cascata (stagger) das linhas de resposta do terminal
    tl.fromTo(
      outputs.children,
      { opacity: 0, y: 5 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.2,
        ease: "power1.out",
      },
      "+=0.3" // Pequeno delay simulando o tempo de resposta da API
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [command]);

  return (
    <div 
      ref={terminalRef} 
      className="w-full h-full min-h-[250px] bg-[#0c0907] rounded-lg border border-amber-950/50 shadow-2xl font-mono text-xs text-zinc-400 overflow-hidden flex flex-col select-none"
    >
      {/* Barra superior do Terminal Mac/Linux */}
      <div className="bg-[#140f0c] px-4 py-3 flex items-center justify-between border-b border-amber-950/30">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#3a1d13] opacity-60" />
          <div className="w-3 h-3 rounded-full bg-[#5c2e16] opacity-60" />
          <div className="w-3 h-3 rounded-full bg-[#8c471a] opacity-60" />
        </div>
        <div className="text-[10px] text-zinc-600 font-sans tracking-wider uppercase font-semibold">
          bash 🖥️
        </div>
      </div>

      {/* Área de Prompt */}
      <div className="p-4 flex-1 space-y-2 overflow-y-auto custom-scrollbar overflow-x-hidden">
        {/* Linha do Comando - Corrigida para evitar quebra horizontal com comandos longos */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-x-2 w-full overflow-hidden">
          <span className="text-amber-600 font-bold whitespace-nowrap shrink-0">
            alexandre@viking-terminal:~#
          </span>
          
          <div className="flex-1 min-w-0 break-all inline-flex items-center flex-wrap">
            {/* O Span onde o TextPlugin vai injetar o texto */}
            <span 
              ref={commandRef} 
              className="text-zinc-200 font-semibold tracking-wide break-all whitespace-pre-wrap"
            ></span>
            
            {/* Cursor piscante corrigido */}
            <span className="animate-pulse font-bold text-amber-500 ml-0.5 shrink-0">|</span>
          </div>
        </div>

        {/* Linhas de Output (Geradas dinamicamente após a digitação) */}
        <div ref={outputsRef} className="space-y-1 mt-2 font-light">
          {outputLines.map((line, idx) => (
            <div 
              key={idx} 
              className={`text-[11px] leading-relaxed break-all whitespace-pre-wrap ${
                line.includes('successfully') || line.includes('online') 
                  ? 'text-emerald-600/90 font-medium' 
                  : 'text-zinc-500'
              }`}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}