import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFilePdf, FaGraduationCap, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiNestjs, SiDocker, SiJest } from 'react-icons/si';

// Importações dos novos subcomponentes
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { SocialLink } from './ui/SocialLink';
import { TrophyItem } from './ui/TrophyItem';

export default function BentoGrid() {
  return (
    <div className="min-h-screen bg-[#110D0A] text-[#F3F4F6] flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[minmax(180px,_auto)]">

        {/* CARD 1: HERO & AVATAR */}
        <Card className="md:col-span-3 flex-col md:flex-row items-center flex-wrap">
          <div className='w-full'>
            <Badge variant="amber">🛡️ Forjando APIs & Nuvem</Badge>
          </div>
          <div className='md:w-1/2'>
            <h1 className="text-3xl mt-2 lg:mt-4 sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent">
              Alexandre Garcia
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              Construindo APIs robustas com NestJS, interfaces performáticas com Next.js e arquiteturas escaláveis e serverless em nuvem AWS.
            </p>
          </div>
          <div className="md:w-1/2 min-w-44 min-h-44 sm:w-52 sm:h-52 relative mx-auto md:mx-0 flex-shrink-0 brightness-95 group-hover:scale-105 transition-transform duration-500">
            <Image
              src="/assets/dev.png"
              alt="Alexandre Garcia - O Dev Viking"
              fill
              className="object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.1)]"
              priority
            />
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            <Button href="#projects" variant="primary">Ver Arsenal</Button>
            <Button href="#contact" variant="secondary">Chamar no Machado</Button>
          </div>
        </Card>

        {/* CARD 2: CANAIS DE COMUNICAÇÃO */}
        <Card className="gap-4 md:col-span-2">
          <div>
            <h3 className="text-lg font-bold text-gray-200">Canais de Comunicação</h3>
            <p className="text-xs text-gray-500 mt-1">Pontes seguras para novas invasões mercantis.</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <SocialLink href="https://github.com" icon={FaGithub} label="GitHub" actionText="Acessar ↗" hoverColor="group-hover:text-white" />
            <SocialLink href="https://linkedin.com" icon={FaLinkedin} label="LinkedIn" actionText="Conectar ↗" />
            <SocialLink href="/assets/curriculo.pdf" icon={FaFilePdf} label="Baixar Pergaminho (CV)" actionText="PDF ↴" hoverColor="group-hover:text-red-400" download />
          </div>
        </Card>

        {/* CARD 3: ARSENAL DE BATALHA / TECH STACK */}
        <Card className="gap-6 md:col-span-3">
          <div>
            <h3 className="text-lg font-bold text-gray-200">Arsenal de Batalha</h3>
            <p className="text-xs text-gray-500 mt-1">Armas de engenharia afiadas para quebrar monolitos e decapitar bugs.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: 'TypeScript', icon: SiTypescript, color: 'hover:border-blue-500/40 hover:text-blue-400' },
              { name: 'Next.js', icon: SiNextdotjs, color: 'hover:border-white/30 hover:text-white' },
              { name: 'NestJS', icon: SiNestjs, color: 'hover:border-red-600/40 hover:text-red-500' },
              { name: 'AWS', icon: FaAws, color: 'hover:border-amber-500/40 hover:text-amber-500' },
              { name: 'Docker', icon: SiDocker, color: 'hover:border-sky-500/40 hover:text-sky-400' },
              { name: 'Jest / TDD', icon: SiJest, color: 'hover:border-red-700/40 hover:text-red-500' },
            ].map((tech, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-3 bg-black/20 border border-amber-950/30 rounded-xl transition-all duration-300 text-gray-400 group ${tech.color}`}>
                <tech.icon className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-105" />
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* CARD 4: CREDENCIAIS & TROFÉUS */}
        <Card className="gap-4 md:col-span-2">
          <div>
            <h3 className="text-lg font-bold text-gray-200">Distinções & Honrarias</h3>
            <p className="text-xs text-gray-500 mt-1">Conquistas oficiais validadas pelo mercado e academia.</p>
          </div>
          <div className="space-y-3">
            <TrophyItem icon={FaGraduationCap} title="Bacharel em SI" subtitle="Sistemas de Informação" status="✔ Grau Colado" variant="emerald" />
            <TrophyItem icon={FaAws} title="AWS Certified" subtitle="Cloud Practitioner" status="★ Validado em Nuvem" variant="amber" />
          </div>
        </Card>

        {/* CARD 5: MÉTRICAS SATÍRICAS */}
        <Card className="text-center p-5 justify-between md:col-span-2">
          <span className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">Métricas Nórdicas</span>
          <div className="py-2">
            <span className="text-4xl font-black text-amber-500 font-mono block group-hover:scale-110 transition-transform duration-300">
              100%
            </span>
            <span className="text-xs text-gray-400 font-medium mt-1 block">Barba Preenchida</span>
          </div>
          <div className="border-t border-amber-950/60 pt-2 text-[11px] text-gray-500 italic">
            "Erros 404 serão saqueados"
          </div>
        </Card>

      </div>
    </div>
  );
}