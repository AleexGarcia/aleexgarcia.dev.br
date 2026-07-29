'use client'
import { motion, Variants } from "framer-motion";
import { Badge } from "./ui/Badge";
import { projectsData } from "./contants/projectsData";
import ProjectCard from "./ui/ProjectCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
export default function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="scroll-mt-20 bg-[#110D0A] text-[#F3F4F6] py-20 px-4 sm:p-6 md:p-8 font-sans border-t border-amber-950/40 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto space-y-12">
        
        {/* Cabeçalho da Seção com Animação de Entrada Interativa */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center md:text-left"
        >
          <Badge variant="amber">Invasões Concluídas</Badge>
          <h2 className="text-3xl mt-2 lg:mt-4 font-extrabold tracking-tight text-white">
            Projetos de Destaque
          </h2>
          <p className="text-gray-400 text-sm max-w-xl">
            Uma amostra real do meu arsenal de engenharia. Sem códigos genéricos: apenas soluções robustas que resolvem problemas reais.
          </p>
        </motion.div>

        {/* Container dos Cards aplicando Stagger no Scroll */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}