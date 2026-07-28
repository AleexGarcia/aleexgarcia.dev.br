import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaHammer, FaTerminal } from 'react-icons/fa';
import { Card } from './ui/Card';   // Reaproveitando sua base de madeira
import { Badge } from './ui/Badge'; // Reaproveitando suas tags consistentes

interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  deployLink?: string;
  isApiOnly: boolean;
}

const projectsData: Project[] = [
  {
    title: "🛡️ Gerenciador de Tarefas Avançado",
    tagline: "API robusta e resiliente focada em performance",
    description: "Desenvolvimento de uma API REST de alta performance com arquitetura limpa, implementando validações de dados rigorosas e seguras com Zod. A persistência foi estruturada utilizando TypeORM, garantindo segurança em operações complexas e uma cobertura sólida de testes unitários e de integração com Jest.",
    technologies: ["Node.js", "NestJS", "TypeScript", "Zod", "TypeORM", "Jest"],
    githubLink: "https://github.com",
    isApiOnly: true
  },
  {
    title: "☁️ Compass Events",
    tagline: "Ecossistema Serverless escalável em produção",
    description: "Arquitetura e deploy de um sistema completo de gerenciamento de eventos baseado em computação em nuvem. Utilizando uma abordagem 100% Serverless, a infraestrutura foi inteiramente codificada com AWS CDK. O fluxo lida com picos massivos de requisições através de AWS Lambda, DynamoDB para persistência NoSQL rápida, S3 para arquivos e autenticação JWT de ponta a ponta.",
    technologies: ["AWS CDK", "Lambda", "DynamoDB", "Amazon S3", "JWT", "TypeScript"],
    githubLink: "https://github.com",
    deployLink: "https://aws.amazon.com",
    isApiOnly: false
  },
  {
    title: "🪓 O Dev Viking (Este Portfólio)",
    tagline: "Single Page Application ultra veloz com Bento Grid",
    description: "Construção de uma identidade de marca pessoal única e satírica. Este site serve como prova de conceito para otimização extrema de performance web e renderização. Desenvolvido com Next.js App Router e Tailwind CSS, alcançando notas próximas a 100% no Google Lighthouse através do uso de imagens WebP e estruturas modulares de alta conversão.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "Lighthouse SEO"],
    githubLink: "https://github.com",
    deployLink: "https://meuportfolio.dev",
    isApiOnly: false
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#110D0A] text-[#F3F4F6] py-20 px-4 sm:p-6 md:p-8 font-sans border-t border-amber-950/40">
      <div className="max-w-6xl w-full mx-auto space-y-12">
        
        {/* Cabeçalho da Seção */}
        <div className="space-y-3 text-center md:text-left">
          <Badge variant="amber">Invasões Concluídas</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Projetos de Destaque
          </h2>
          <p className="text-gray-400 text-sm max-w-xl">
            Uma amostra real do meu arsenal de engenharia. Sem códigos genéricos: apenas soluções robustas que resolvem problemas reais.
          </p>
        </div>

        {/* Lista de Projetos com os Cards Rústicos */}
        <div className="space-y-6">
          {projectsData.map((project, idx) => (
            <Card 
              key={idx} 
              className="!flex-row gap-8 flex-wrap lg:flex-nowrap p-6 hover:border-amber-500/20"
            >
              
              {/* LADO ESQUERDO: Mockup do Projeto (Estilo Terminal Sombrio) */}
              <div className="lg:w-2/5 w-full bg-black/40 rounded-2xl border border-amber-950/60 p-5 flex flex-col justify-between min-h-[220px] relative overflow-hidden shadow-inner group-hover:border-amber-950 transition-colors">
                <div className="flex items-center justify-between border-b border-amber-950/40 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-600/60"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-600/60"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-600/60"></span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-900/60">alexandre@viking-terminal:~</span>
                </div>
                
                {project.isApiOnly ? (
                  /* Layout de Terminal para APIs puras */
                  <div className="flex-1 flex flex-col justify-center font-mono text-xs text-amber-500 space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaTerminal /> <span>curl -X GET /api/v1/status</span>
                    </div>
                    <p className="text-emerald-400">➔ 200 OK (Application Stable)</p>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      {"{ status: 'Active', tests: 'Passed', schema: 'ZodValidated' }"}
                    </p>
                  </div>
                ) : (
                  /* Layout Gráfico Simulado para Interfaces */
                  <div className="flex-1 flex flex-col justify-center items-center text-gray-500 space-y-2">
                    <FaHammer className="text-4xl text-amber-950 group-hover:text-amber-500/30 transition-colors duration-300" />
                    <span className="text-[11px] font-mono tracking-wider uppercase text-amber-900/60">Interface Web Ativa</span>
                  </div>
                )}
                
                <div className="mt-4 pt-2 border-t border-amber-950/40 flex justify-between items-center text-[10px] font-mono text-amber-900/40">
                  <span>ENVIRONMENT // PROD</span>
                  <span>v1.0.0</span>
                </div>
              </div>

              {/* LADO DIREITO: Informações e Engenharia */}
              <div className="lg:w-3/5 w-full flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-500/80 mt-0.5">
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
                        className="text-[11px] font-mono bg-black/40 text-gray-300 border border-amber-950/40 px-2.5 py-0.5 rounded-md"
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
          ))}
        </div>

      </div>
    </section>
  );
}