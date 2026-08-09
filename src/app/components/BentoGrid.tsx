'use client';

import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaFilePdf, FaGraduationCap, FaCrow, FaBriefcase } from 'react-icons/fa';

import { useBentoAnimations } from '../hooks/useBentoAnimations';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { SocialLink } from './ui/SocialLink';
import { TrophyItem } from './ui/TrophyItem';
import Counter from './ui/Counter';
import { github, linkedin } from '../_constants/contacts';
import HeroCardViking from './ui/HeroCardViking';
import { TECH_ARSENAL } from '../_constants/techs';
import { GiAnvil } from 'react-icons/gi';

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useBentoAnimations(containerRef);

  return (
    <div id='resume' className="min-h-screen scroll-mt-20 bg-[#110D0A] text-[#F3F4F6] flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      <div
        ref={containerRef}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,_auto)] [perspective:1000px]"
      >
        {/* CARD 1: HERO & AVATAR */}
        <div className='lg:col-span-4 md:col-span-6'>
          <Card className="flex-col md:flex-row items-center flex-wrap h-full transition-all duration-300">
            <div className='w-full text-center md:text-start'>


              <Badge icon={GiAnvil} variant="amber"> Forjando APIs & Nuvem</Badge>
            </div>
            <div className='md:w-1/2 text-center md:text-start'>
              <h1 className="text-3xl mt-2 lg:mt-4 sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent">
                Alexandre Garcia
              </h1>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mt-2">
                Construindo APIs robustas com NestJS, interfaces performáticas com Next.js e arquiteturas escaláveis e serverless na nuvem AWS.
              </p>
            </div>

            <HeroCardViking />

            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <span className="magnetic-btn inline-block will-change-transform">
                <Button href="#projects" variant="primary">Ver Projetos</Button>
              </span>
              <span className="magnetic-btn inline-block will-change-transform">
                <Button className='flex gap-2 items-center' href="#contact" variant="secondary">
                  Enviar um Corvo <FaCrow className='text-xl' />
                </Button>
              </span>
            </div>
          </Card>
        </div>




        <div className="lg:col-span-2 md:col-span-3">
          <Card className="gap-4 h-full transition-transform duration-500 ease-out hover:[transform:rotateX(3deg)_rotateY(3deg)]">
            <div>
              <h3 className="text-lg font-bold text-gray-200">Conquistas do Clã</h3>
              <p className="text-xs text-gray-500 mt-1">Marcos conquistados na jornada.</p>
            </div>
            <div className="space-y-3 flex-grow flex flex-col justify-center">
              <TrophyItem icon={FaGraduationCap} title="Bacharel em SI" subtitle="Sistemas de Informação" status="✔ Grau Colado" variant="emerald" />
              <TrophyItem icon={'/assets/aws-certified-cloud-practitioner.png'} title="AWS Certified" subtitle="Cloud Practitioner" status="★ Validado em Nuvem" variant="amber" />
              <TrophyItem icon={FaBriefcase} title="Estágio em Back-end Node.js" subtitle="Compass UOL · 6 meses" status="★ Primeira experiência profissional" variant="amber" />

            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 md:col-span-3 md:row-start-2">
          <Card className="gap-4 h-full justify-start transition-transform duration-500 ease-out hover:[transform:rotateX(3deg)_rotateY(-3deg)] hover:shadow-xl hover:shadow-amber-950/10">
            <div>
              <h3 className="text-lg font-bold text-gray-200">Canais de Clã</h3>
              <p className="text-xs text-gray-500 mt-1">Onde me encontrar pela internet.</p>
            </div>
            <div className="flex flex-col gap-2.5 flex-grow justify-center">
              <SocialLink href={`https://github.com/${github}`} icon={FaGithub} label="GitHub" actionText="Acessar ↗" hoverColor="group-hover:text-white" />
              <SocialLink href={`https://www.linkedin.com/in/${linkedin}`} icon={FaLinkedin} label="LinkedIn" actionText="Conectar ↗" />
              <SocialLink href="/assets/Alexandre_Garcia_Curriculo.pdf" icon={FaFilePdf} label="Baixar Pergaminho (CV)" actionText="PDF ↴" hoverColor="group-hover:text-red-400" download />
            </div>
          </Card>
        </div>
        <div className="row-start-2 md:row-start-auto lg:col-span-4 md:col-span-6">
          <Card className="gap-6 h-full transition-transform duration-500 ease-out hover:[transform:rotateX(2deg)]">
            <div>
              <h3 className="text-lg font-bold text-gray-200">Arsenal de Batalha</h3>
              <p className="text-xs text-gray-500 mt-1">Armas de engenharia afiadas para quebrar monolitos e decapitar bugs.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1" role="list" aria-label="Tecnologias utilizadas no arsenal">
              {TECH_ARSENAL.map((tech, idx) => (
                <div
                  key={idx}
                  role="listitem"
                  aria-label={`Tecnologia: ${tech.name}`}
                  className={`flex items-center gap-3 p-3 bg-black/20 border border-amber-950/30 rounded-xl transition-all duration-300 text-gray-400 group ${tech.color}`}
                >
                  <tech.icon className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-300 text-ellipsis">{tech.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>



        {/* CARD 5: MÉTRICAS SATÍRICAS */}
        <div className="lg:col-span-1 md:col-span-3">
          <Card className="text-center p-5 justify-between h-full transition-all duration-300 hover:border-amber-900/40">
            <span className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">Métricas Nórdicas</span>
            <div className="py-2">
              <span className="text-4xl font-black text-amber-500 font-mono block group-hover:scale-110 transition-transform duration-300">
                <Counter target={100} startFrom={0} suffix='%' />
              </span>
              <span className="text-xs text-gray-400 font-medium mt-1 block">Barba Preenchida</span>
            </div>
            <div className="border-t border-amber-950/60 pt-2 text-[11px] text-gray-500 italic">
              Erros 404 serão saqueados
            </div>
          </Card>
        </div>

        {/* CARD 6 */}
        <div className="md:col-span-3 lg:col-span-2">
          <Card className="text-center p-5 justify-between h-full group transition-all duration-300 hover:border-amber-900/40">
            <span className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">Pilhagem de Bugs</span>
            <div className="py-2">
              <span className="text-4xl font-black text-amber-500 font-mono block group-hover:scale-110 transition-transform duration-300">
                <Counter target={4721} />
              </span>
              <span className="text-xs text-gray-400 font-medium mt-1 block">Bugs Decapitados</span>
            </div>
            <div className="border-t border-amber-950/60 pt-2 text-[11px] text-gray-500 italic">
              Nenhum stack overflow sobreviveu
            </div>
          </Card>
        </div>
        <div className="md:col-span-3 lg:col-span-1">
          <Card className="text-center p-5 justify-between h-full group transition-all duration-300 hover:border-amber-900/40">
            <span className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">Sacrifício aos Deuses</span>
            <div className="py-2">
              <span className="text-4xl font-black text-amber-500 font-mono block group-hover:scale-110 transition-transform duration-300">
                <Counter target={3} />
              </span>
              <span className="text-xs text-gray-400 font-medium mt-1 block">Teclados em Valhalla</span>
            </div>
            <div className="border-t border-amber-950/60 pt-2 text-[11px] text-gray-500 italic">
              Guerreiros mortos em combate contra o CSS
            </div>
          </Card>
        </div>

        {/* CARD 7 */}
        <div className="md:col-span-3 lg:col-span-2">
          <Card className="text-center p-5 justify-between h-full group transition-all duration-300 hover:border-amber-900/40">
            <span className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">Banquete no Git</span>
            <div className="py-2">
              <span className="text-4xl font-black text-amber-500 font-mono block group-hover:scale-110 transition-transform duration-300">
                <Counter target={890} suffix='L' />
              </span>
              <span className="text-xs text-gray-400 font-medium mt-1 block">Hidromel & Café</span>
            </div>
            <div className="border-t border-amber-950/60 pt-2 text-[11px] text-gray-500 italic">
              Deploys em sexta-feira exigem coragem
            </div>
          </Card>
        </div>

        {/* CARD 8 */}

      </div>
    </div>
  );
}