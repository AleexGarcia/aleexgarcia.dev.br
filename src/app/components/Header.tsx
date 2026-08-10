'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './ui/Button';
import { NavLink } from './ui/NavLink';
import { GiBatteredAxe } from 'react-icons/gi';



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

const navLinks = [
  { name: 'Resumo', href: '#resume' },
  { name: 'Manifesto', href: '#manifest' },
  { name: 'A Forja', href: '#process' },
  { name: 'Projetos', href: '#projects' },
];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#110D0A]/90 backdrop-blur-md border-b border-amber-950/40 py-4 shadow-lg shadow-black/40' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-2.5">
          <span className="text-sm font-black tracking-widest uppercase text-white font-mono group-hover:text-amber-500 transition-colors">
            AleexGarcia.dev
          </span>
        </a>

        {/* NAVEGAÇÃO DESKTOP (Estilo Madeira de Fundo) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1A1410] border border-amber-950/60 p-1 rounded-xl backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)]">
          {navLinks.map((link, idx) => (
            <NavLink key={idx} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* BOTÃO DE CONTATO DESKTOP (Reaproveitando o componente Button) */}
        <div className="hidden md:block">
          <Button  href="#contact" variant="primary" className="group !py-2 !px-4 text-xs uppercase tracking-wider flex items-center gap-1.5">
            Contratar o Machado
            <GiBatteredAxe className="text-xl transition-all duration-300 -rotate-45 group-hover:rotate-20 group-hover:translate-x-1 group-hover:scale-110" />
          </Button>
        </div>

        {/* BOTÃO DO MENU MOBILE */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 bg-[#1A1410] border border-amber-950/60 text-amber-500 hover:text-amber-400 rounded-xl transition-all"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>

      </div>

      {/* MENU DROPDOWN MOBILE */}
      <div className={`fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-[#110D0A] z-40 lg:hidden flex flex-col justify-between p-6 border-t border-amber-950/40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col gap-3">
          {navLinks.map((link, idx) => (
            <NavLink key={idx} href={link.href} onClick={toggleMenu} mobile>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* BOTÃO INFERIOR NO MOBILE */}
        <div className="pt-6 border-t border-amber-950/40">
          <Button href="#contact" variant="primary" onClick={toggleMenu} className="w-full !py-4 text-sm uppercase tracking-wider">
            Contratar o Machado
          </Button>
        </div>
      </div>
    </header>
  );
}