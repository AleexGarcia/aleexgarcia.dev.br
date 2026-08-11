// data/projectsData.ts
export interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  deployLink?: string;
  isApiOnly: boolean;
  imageUrl?: string;
  terminalOutput?: string[];
  terminalCommand?: string;
}

export const projectsData: Project[] = [
  {
    title: "AleexGarcia - O Dev Viking",
    tagline: "Single Page Application ultra veloz com Bento Grid",
    description: "Construção de uma identidade de marca pessoal única e satírica. Este site serve como prova de conceito para otimização extrema de performance web e renderização. Desenvolvido com Next.js App Router e Tailwind CSS, alcançando notas próximas a 100% no Google Lighthouse através do uso de imagens WebP e estruturas modulares de alta conversão.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "Lighthouse SEO","GSAP"],
    githubLink: "https://github.com/AleexGarcia/aleexgarcia.dev.br",
    deployLink: "https://aleexgarcia.dev.br/",
    isApiOnly: false,
    imageUrl: "/assets/aleexgarcia-dev-br.webp"
  },
  {
    title: "Gerenciador de Tarefas Avançado",
    tagline: "API robusta e resiliente focada em performance",
    description: "Desenvolvimento de uma API REST de alta performance com arquitetura limpa, implementando validações de dados rigorosas e seguras com Zod. A persistência foi estruturada utilizando TypeORM, garantindo segurança em operações complexas e uma cobertura sólida de testes unitários e de integração com Jest.",
    technologies: ["Node.js", "NestJS", "TypeScript", "Zod", "TypeORM", "Jest"],
    githubLink: "https://github.com/AleexGarcia/ANMAR25_DSUP_TASKLY",
    isApiOnly: true,
    terminalCommand: "curl -X GET http://localhost:3000/api/v1/tasks -H 'Authorization: Bearer jwt_token'",
    terminalOutput: [
      "HTTP/1.1 200 OK",
      "Content-Type: application/json",
      `
      {
    "page": 1,
    "total": 0,
    "tasks": []
}
      `
    ]
  },
  {
    title: "Compass Events",
    tagline: "Ecossistema Serverless escalável em produção",
    description: "Arquitetura e deploy de um sistema completo de gerenciamento de eventos baseado com computação em nuvem. Utilizando uma abordagem 100% Serverless, a infraestrutura foi inteiramente codificada com AWS CDK. O fluxo lida com picos massivos de requisições através de AWS Lambda, DynamoDB para persistência NoSQL rápida, S3 para arquivos e autenticação JWT de ponta a ponta.",
    technologies: ["AWS CDK", "Lambda", "DynamoDB", "Amazon S3", "JWT", "TypeScript"],
    githubLink: "https://github.com/AleexGarcia/ANMAR25_D03_COMPASSEVENT",
    isApiOnly: true,
    terminalCommand: "curl -X POST https://api.compassevents.com/events -d '{\"name\":\"Code Summit 2026\"}'",
    terminalOutput: [
      "HTTP/1.1 201 Created",
      "x-amzn-RequestId: 4aa5b8c9-1234-5678-abcd-ef0123456789",
      ` {
        "message": "Event successfully provisioned in DynamoDB via AWS Lambda.,",
        "eventId": "evt_987654321,",
        "status": "ACTIVE",
      }`
    ]
  },
  {
    title: "Microsserviços Escaláveis",
    tagline: "Arquitetura distribuída de alta performance via TCP",
    description: "Orquestração de microsserviços em NestJS (Monorepo) com comunicação interna via protocolo TCP de baixa latência e padrões `@MessagePattern`. O ecossistema gerencia fluxos assíncronos de autenticação desacoplada, pagamentos resilientes com Stripe API e notificações automáticas, utilizando MongoDB para persistência isolada e Docker para conteinerização.",
    technologies: ["NestJS", "TypeScript", "TCP Transport", "MongoDB", "Docker", "Stripe API"],
    githubLink: "https://github.com/AleexGarcia/nestjs-booking-microservices",
    isApiOnly: true,
    terminalCommand: "curl -X POST http://localhost:3000/reservations -H 'Authorization: Bearer jwt_token'",
    terminalOutput: [
      "HTTP/1.1 201 Created",
      `{
    "reservationId": "res_65c8e1",
    "status": "CONFIRMED",
    "payment": { "status": "succeeded" },
    "notification": { "dispatched": true }
}`
    ]
  },
];