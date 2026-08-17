'use client';

import React, { useRef } from 'react';
import { useBentoAnimations } from '../../hooks/useBentoAnimations';
import { BentoCard } from './BentoGrid/BentoCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import HeroCardViking from './BentoGrid/HeroCardViking';
import { GiAnvil, GiBatteredAxe } from 'react-icons/gi';
import { satiricalCardData } from '../../_constants/satiricalCardData';
import SatiricalCards, { SatiricalCard } from './BentoGrid/SatiricalCards';
import TechArsenal from './BentoGrid/TechArsenal';
import Socials from './BentoGrid/Socials';
import Trophies from './BentoGrid/Trophies';

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);


  useBentoAnimations(containerRef);

  return (
    <div id='resume' className="min-h-screen scroll-mt-20 bg-[#110D0A] text-[#F3F4F6] flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      <div
        ref={containerRef}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,_auto)] [perspective:1000px]"
      >
        <BentoCard className="lg:col-span-4 md:col-span-6 flex-col md:flex-row items-center flex-wrap h-full transition-all duration-300">
          <div className='w-full text-center md:text-start'>
            <Badge icon={GiAnvil} variant="amber"> Forjando APIs & Nuvem</Badge>
          </div>
          <div className='md:w-1/2 text-center md:text-start'>
            <h2 className="text-3xl mt-2 lg:mt-4 sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent">
              Alexandre Garcia
            </h2>
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
                Contratar o Machado  <GiBatteredAxe className="text-xl" />
              </Button>
            </span>

          </div>
        </BentoCard>


        <BentoCard
          title='Conquistas do Clã'
          subtitle='Marcos conquistados na jornada.'
          className="
          lg:col-span-2 md:col-span-3
          gap-4 h-full transition-transform duration-500 ease-out hover:[transform:rotateX(3deg)_rotateY(3deg)]">

          <Trophies />

        </BentoCard>

        <BentoCard
          title='Canais de Clã'
          subtitle='Onde me encontrar pela internet'
          className="lg:col-span-2 md:col-span-3 md:row-start-2 gap-4 h-full justify-start transition-transform duration-500 ease-out hover:[transform:rotateX(3deg)_rotateY(-3deg)] hover:shadow-xl hover:shadow-amber-950/10">

          <Socials />
        </BentoCard>

        <BentoCard
          title='Arsenal de Batalha'
          subtitle='Armas de engenharia afiadas para quebrar monolitos e decapitar bugs.'
          className="row-start-2 md:row-start-auto lg:col-span-4 md:col-span-6 gap-6 h-full transition-transform duration-500 ease-out hover:[transform:rotateX(2deg)]">

          <TechArsenal />
        </BentoCard>

        {satiricalCardData.map((satiricalCard: SatiricalCard) => (
          <SatiricalCards {...satiricalCard} key={satiricalCard.title} />
        ))}
      </div>
    </div>
  );
}