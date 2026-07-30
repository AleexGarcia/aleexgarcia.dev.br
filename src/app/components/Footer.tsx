'use client'
import React from 'react';
import { FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Badge } from './ui/Badge'; // Reaproveitando sua tag rústica consistente
import { email, phone } from '../_contants/contacts';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#110D0A] text-[#F3F4F6] pt-16 pb-8 px-4 sm:p-6 md:p-8 font-sans border-t border-amber-950/40 w-full">
      <div className="max-w-6xl w-full mx-auto space-y-12">

        {/* Bloco de Chamada para Ação (CTA) - Estilo Caixa de Forja */}
        <div className="bg-black/30 rounded-3xl border border-amber-950/60 p-8 md:p-12 text-center space-y-6 relative overflow-hidden group hover:border-amber-500/20 transition-all duration-300 shadow-xl">
          {/* Linha de brilho superior com degradê de fogo */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0"></div>

          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex justify-center">
              <Badge variant="amber">O Chamado das Armas</Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Pronto para convocar reforços?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Seja para saquear bugs complexos no back-end, erguer interfaces indestrutíveis ou planejar uma arquitetura escalável na nuvem, meu machado está à disposição do seu clã.
            </p>
          </div>

          {/* Botões Grandes de Conversão */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.04] active:scale-[0.98] animate-glow-pulse"
            >
              <FaWhatsapp className="text-lg" /> Iniciar Conversa no WhatsApp
            </a>


            <a
              href={`mailto:${email}`} // Substitua pelo seu e-mail profissional
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black/40 hover:bg-black/70 text-gray-300 font-medium text-sm px-6 py-3.5 rounded-xl border border-amber-950/60 hover:border-amber-500/30 transition-all duration-200"
            >
              <FaEnvelope className="text-base text-gray-400" /> Enviar Mensagem por E-mail
            </a>
          </div>
        </div>

        {/* Linha Final de Créditos e Navegação */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-amber-950/40 text-xs text-gray-500">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Alexandre Garcia. Todos os direitos reservados.</p>
            <p className="font-mono text-[10px] text-gray-600">
              Construído com Next.js, TypeScript e Tailwind CSS. Desenvolvido a base de hidromel e café.
            </p>
          </div>

          {/* Botão de Voltar ao Topo - Estilo Rúnico */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 bg-black/40 hover:bg-black/80 border border-amber-950/60 text-gray-400 hover:text-amber-500 rounded-lg transition-all text-[11px] font-medium font-mono group
          
            cursor-pointer
            "
            aria-label="Voltar para o topo da página"
          >
            VOLTAR AO TOPO <FaArrowUp className="transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}