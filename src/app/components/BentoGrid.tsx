'use client';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFilePdf, FaGraduationCap, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiNestjs, SiDocker, SiJest, SiTailwindcss, SiPrisma, SiPostgresql, SiRedis, SiGithubactions, SiMongodb } from 'react-icons/si';
import { containerVariants, cardVariants } from './contants/gridVariants';
import { motion } from 'framer-motion';

// Importações dos subcomponentes
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { SocialLink } from './ui/SocialLink';
import { TrophyItem } from './ui/TrophyItem';
import Counter from './ui/Counter';
import { github, linkedin } from './contants/contacts';

export default function BentoGrid() {
  return (
    <div id='arsenal' className="min-h-screen scroll-mt-20 bg-[#110D0A] text-[#F3F4F6] flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-5 gap-4 auto-rows-[minmax(180px,_auto)]"
      >

        {/* CARD 1: HERO & AVATAR */}
        <motion.div className='md:col-span-3' variants={cardVariants}>
          <Card className="flex-col md:flex-row items-center flex-wrap h-full">
            <div className='w-full text-center md:text-start'>
              <Badge variant="amber">🛡️ Forjando APIs & Nuvem</Badge>
            </div>
            <div className='md:w-1/2 text-center md:text-start'>
              <h1 className="text-3xl mt-2 lg:mt-4 sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent">
                Alexandre Garcia
              </h1>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mt-2">
                Construindo APIs robustas com NestJS, interfaces performáticas com Next.js e arquiteturas escaláveis e serverless in nuvem AWS.
              </p>
            </div>
            <div className="md:w-1/2 min-w-44 min-h-44 sm:w-52 sm:h-52 relative animate-float mx-auto md:mx-0 flex-shrink-0 brightness-95 group-hover:scale-105 transition-transform duration-500">
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
        </motion.div>

        {/* CARD 2: CANAIS DE COMUNICAÇÃO */}
        <motion.div className="md:col-span-2" variants={cardVariants}>
          <Card className="gap-4 h-full">
            <div>
              <h3 className="text-lg font-bold text-gray-200">Canais de Comunicação</h3>
              <p className="text-xs text-gray-500 mt-1">Pontes seguras para novas invasões mercantis.</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <SocialLink href={`https://github.com/${github}`} icon={FaGithub} label="GitHub" actionText="Acessar ↗" hoverColor="group-hover:text-white" />
              <SocialLink href={`https://www.linkedin.com/in/${linkedin}`} icon={FaLinkedin} label="LinkedIn" actionText="Conectar ↗" />
              <SocialLink href="/assets/curriculo.pdf" icon={FaFilePdf} label="Baixar Pergaminho (CV)" actionText="PDF ↴" hoverColor="group-hover:text-red-400" download />
            </div>
          </Card>
        </motion.div>

        {/* CARD 3: ARSENAL DE BATALHA / TECH STACK */}
        <motion.div className="md:col-span-3" variants={cardVariants}>
          <Card className="gap-6 h-full">
            <div>
              <h3 className="text-lg font-bold text-gray-200">Arsenal de Batalha</h3>
              <p className="text-xs text-gray-500 mt-1">Armas de engenharia afiadas para quebrar monolitos e decapitar bugs.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
              {[
                { name: 'TypeScript', icon: SiTypescript, color: 'hover:border-blue-500/40 hover:text-blue-400' },
                { name: 'Next.js', icon: SiNextdotjs, color: 'hover:border-white/30 hover:text-white' },
                { name: 'NestJS', icon: SiNestjs, color: 'hover:border-red-600/40 hover:text-red-500' },
                { name: 'AWS', icon: FaAws, color: 'hover:border-amber-500/40 hover:text-amber-500' },
                { name: 'Docker', icon: SiDocker, color: 'hover:border-sky-500/40 hover:text-sky-400' },
                { name: 'Jest', icon: SiJest, color: 'hover:border-red-700/40 hover:text-red-500' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:border-cyan-500/40 hover:text-cyan-400' },
                { name: 'Prisma ORM', icon: SiPrisma, color: 'hover:border-teal-500/40 hover:text-teal-400' },
                { name: 'Postgre SQL', icon: SiPostgresql, color: 'hover:border-blue-600/40 hover:text-blue-500' },
                { name: 'MongoDB', icon: SiMongodb, color: 'hover:border-blue-600/40 hover:text-blue-500' },
                { name: 'Redis', icon: SiRedis, color: 'hover:border-red-500/40 hover:text-red-400' },
                { name: 'CI/CD', icon: SiGithubactions, color: 'hover:border-white/30 hover:text-white' },
              ].map((tech, idx) => (
                <div key={idx} className={`flex items-center gap-3 p-3 bg-black/20 border border-amber-950/30 rounded-xl transition-all duration-300 text-gray-400 group ${tech.color}`}>
                  <tech.icon className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-105" />
                  <span className="text-sm font-medium text-gray-300 text-ellipsis">{tech.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* CARD 4: CREDENCIAIS & TROFÉUS */}
        <motion.div className="md:col-span-2" variants={cardVariants}>
          <Card className="gap-4 h-full">
            <div>
              <h3 className="text-lg font-bold text-gray-200">Distinções & Honrarias</h3>
              <p className="text-xs text-gray-500 mt-1">Conquistas oficiais validadas pelo mercado e academia.</p>
            </div>
            <div className="space-y-3">
              <TrophyItem icon={FaGraduationCap} title="Bacharel em SI" subtitle="Sistemas de Informação" status="✔ Grau Colado" variant="emerald" />
              <TrophyItem icon={'/assets/aws-certified-cloud-practitioner.png'} title="AWS Certified" subtitle="Cloud Practitioner" status="★ Validado em Nuvem" variant="amber" />
            </div>
          </Card>
        </motion.div>

        {/* CARD 5: MÉTRICAS SATÍRICAS */}
        <motion.div className="md:col-span-2" variants={cardVariants}>
          <Card className="text-center p-5 justify-between h-full">
            <span className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">Métricas Nórdicas</span>
            <div className="py-2">
              <span className="text-4xl font-black text-amber-500 font-mono block group-hover:scale-110 transition-transform duration-300">
                <Counter />
              </span>
              <span className="text-xs text-gray-400 font-medium mt-1 block">Barba Preenchida</span>
            </div>
            <div className="border-t border-amber-950/60 pt-2 text-[11px] text-gray-500 italic">
              "Erros 404 serão saqueados"
            </div>
          </Card>
        </motion.div>

      </motion.div>
    </div>
  );
}