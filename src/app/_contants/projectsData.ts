// data/projectsData.ts
export interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  deployLink?: string;
  isApiOnly: boolean;
}

export const projectsData: Project[] = [
  {
    title: "🛡️ Gerenciador de Tarefas Avançado",
    tagline: "API robusta e resiliente focada em performance",
    description: "Desenvolvimento de uma API REST de alta performance com arquitetura limpa, implementando validações de dados rigorosas e seguras com Zod. A persistência foi estruturada utilizando TypeORM, garantindo segurança em operações complexas e uma cobertura sólida de testes unitários e de integração com Jest.",
    technologies: ["Node.js", "NestJS", "TypeScript", "Zod", "TypeORM", "Jest"],
    githubLink: "https://github.com/AleexGarcia/ANMAR25_DSUP_TASKLY",
    isApiOnly: true
  },
  {
    title: "☁️ Compass Events",
    tagline: "Ecossistema Serverless escalável em produção",
    description: "Arquitetura e deploy de um sistema completo de gerenciamento de eventos baseado em computação em nuvem. Utilizando uma abordagem 100% Serverless, a infraestrutura foi inteiramente codificada com AWS CDK. O fluxo lida com picos massivos de requisições através de AWS Lambda, DynamoDB para persistência NoSQL rápida, S3 para arquivos e autenticação JWT de ponta a ponta.",
    technologies: ["AWS CDK", "Lambda", "DynamoDB", "Amazon S3", "JWT", "TypeScript"],
    githubLink: "https://github.com/AleexGarcia/ANMAR25_D03_COMPASSEVENT",
    isApiOnly: true
  },
  {
    title: "🪓 O Dev Viking (Este Portfólio)",
    tagline: "Single Page Application ultra veloz com Bento Grid",
    description: "Construção de uma identidade de marca pessoal única e satírica. Este site serve como prova de conceito para otimização extrema de performance web e renderização. Desenvolvido com Next.js App Router e Tailwind CSS, alcançando notas próximas a 100% no Google Lighthouse através do uso de imagens WebP e estruturas modulares de alta conversão.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "Lighthouse SEO"],
    githubLink: "https://github.com/AleexGarcia/portfolio-pessoal",
    deployLink: "https://aleexgarcia.netlify.app/",
    isApiOnly: false
  }
];