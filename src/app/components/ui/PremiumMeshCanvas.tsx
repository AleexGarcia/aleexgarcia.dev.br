"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Registra o plugin oficial para Next.js/React
gsap.registerPlugin(useGSAP);

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const PremiumMeshCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Armazena as coordenadas do mouse com um proxy para o GSAP animar suavemente
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let animationFrameId: number;
      const particles: Particle[] = [];
      const particleCount = 40; // Quantidade ideal para não poluir
      const connectionDistance = 120; // Distância máxima para ligar os pontos da malha

      // 1. Redimensionamento adaptativo do Canvas
      const resizeCanvas = () => {
        if (canvas && containerRef.current) {
          canvas.width = containerRef.current.clientWidth;
          canvas.height = containerRef.current.clientHeight;
        }
      };
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // 2. Inicialização das Partículas (Tons de dourado/âmbar bem escuro e discretos)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Velocidade ultra lenta
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 1,
          alpha: Math.random() * 0.3 + 0.1, // Opacidade baixa para elegância
        });
      }

      // 3. Efeito Parallax Suave com GSAP QuickTo (Melhor performance que ler direto no mousemove)
      const xTo = gsap.quickTo(mouseRef.current, "x", { duration: 0.8, ease: "power2.out" });
      const yTo = gsap.quickTo(mouseRef.current, "y", { duration: 0.8, ease: "power2.out" });

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Normaliza a posição do mouse em relação ao container (-50 a 50 pixels de deslocamento máx)
        const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 60;
        const relY = ((e.clientY - rect.top) / rect.height - 0.5) * 60;
        
        xTo(relX);
        yTo(relY);
      };

      window.addEventListener("mousemove", handleMouseMove);

      // 4. Loop de Renderização (Desenho da Malha)
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Aplica o deslocamento do mouse (efeito parallax inverso de profundidade)
        const offsetX = mouseRef.current.x;
        const offsetY = mouseRef.current.y;

        // Desenha as conexões (Mesh)
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          
          // Atualiza posições base
          p1.x += p1.vx;
          p1.y += p1.vy;

          // Rebate nas bordas do canvas
          if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

          // Posição final renderizada somando o parallax do mouse
          const renderX = p1.x + offsetX;
          const renderY = p1.y + offsetY;

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const renderX2 = p2.x + offsetX;
            const renderY2 = p2.y + offsetY;

            const dx = renderX - renderX2;
            const dy = renderY - renderY2;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              // A linha fica mais transparente quanto mais longe os pontos estiverem
              const lineAlpha = (1 - dist / connectionDistance) * 0.08;
              ctx.beginPath();
              ctx.moveTo(renderX, renderY);
              ctx.lineTo(renderX2, renderY2);
              // Cor dourada/âmbar bem sutil (#D4AF37 convertido para RGBA)
              ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }

          // Desenha a partícula em si
          ctx.beginPath();
          ctx.arc(renderX, renderY, p1.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(230, 180, 80, ${p1.alpha})`;
          ctx.fill();
        }

        animationFrameId = requestAnimationFrame(render);
      };

      render();

      // Limpeza de memória ao desmontar o componente
      return () => {
        window.removeEventListener("resize", resizeCanvas);
        window.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationFrameId);
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="absolute right-0 top-0 hidden h-full w-[45%] lg:block pointer-events-none overflow-hidden select-none"
      style={{ 
        maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0))',
        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0))'
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60"
      />
    </div>
  );
};