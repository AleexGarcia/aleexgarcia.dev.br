import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Card } from './Card'; 
import ProjectPlaceholder from './ProjectPlaceHolder';
import { Project } from '../../_contants/projectsData';

// Variantes de animação para a lista e comportamento de cascata (Stagger)


const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Componente Interno Isolado para o Card do Projeto
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={itemVariants} className="group w-full">
      <Card className="!flex-row gap-8 flex-wrap lg:flex-nowrap p-6 border border-amber-950/20 bg-[#16110E] transition-all duration-300 group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.05)]">
        
        {/* LADO ESQUERDO: Mockup do Terminal */}
        <div className="lg:w-2/5 w-full bg-black/50 rounded-2xl border border-amber-950/60 p-5 flex flex-col justify-between min-h-[220px] relative overflow-hidden shadow-inner group-hover:border-amber-900/60 transition-colors">
          <div className="flex items-center justify-between border-b border-amber-950/40 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600/40 group-hover:bg-red-600/60 transition-colors"></span>
              <span className="w-3 h-3 rounded-full bg-amber-600/40 group-hover:bg-amber-600/60 transition-colors"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-600/40 group-hover:bg-emerald-600/60 transition-colors"></span>
            </div>
            <span className="text-[10px] font-mono text-amber-900/60">alexandre@viking-terminal:~</span>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <ProjectPlaceholder project={project.isApiOnly} />
          </div>
          
          <div className="mt-4 pt-2 border-t border-amber-950/40 flex justify-between items-center text-[10px] font-mono text-amber-900/40">
            <span>ENVIRONMENT // PROD</span>
            <span>v1.0.0</span>
          </div>
        </div>

        {/* LADO DIREITO: Informações e Engenharia */}
        <div className="lg:w-3/5 w-full flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-amber-500/80 mt-1">
                {project.tagline}
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags e Ações */}
          <div className="space-y-4">
            {/* Badge de Tecnologias */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, techIdx) => (
                <span 
                  key={techIdx} 
                  className="text-[11px] font-mono bg-black/40 text-gray-300 border border-amber-950/40 px-2.5 py-0.5 rounded-md hover:border-amber-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links de Ação */}
            <div className="flex gap-4 pt-3 border-t border-amber-950/40">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="text-sm" /> Código no GitHub
                </a>
              )}
              {project.deployLink && (
                <a 
                  href={project.deployLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" /> Acessar Deploy ↗
                </a>
              )}
            </div>
          </div>
        </div>

      </Card>
    </motion.div>
  );
}

