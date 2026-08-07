import { FaAws } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNestjs, SiDocker, SiJest, SiTailwindcss, SiPrisma, SiPostgresql, SiMongodb, SiRedis, SiGithubactions } from "react-icons/si";

export const TECH_ARSENAL = [
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
];