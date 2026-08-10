-- 1. CRIAR A TABELA DE PROJETOS
CREATE TABLE IF NOT EXISTS "projects" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "tagline" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "technologies" TEXT[] NOT NULL, -- Mapeamento do string[]
    "githubLink" VARCHAR(255) NULL,
    "deployLink" VARCHAR(255) NULL,
    "isApiOnly" BOOLEAN NOT NULL DEFAULT FALSE,
    "imageUrl" VARCHAR(255) NULL,
    "terminalCommand" TEXT NULL,
    "terminalOutput" TEXT[] NULL, -- Mapeamento do string[] opcional
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. POPULAR A TABELA COM OS SEUS PROJETOS (SEED DATA)

-- Projeto 1: Gerenciador de Tarefas Avançado
INSERT INTO "projects" (
    "title", "tagline", "description", "technologies", 
    "githubLink", "deployLink", "isApiOnly", "imageUrl", 
    "terminalCommand", "terminalOutput"
) VALUES (
    'Gerenciador de Tarefas Avançado',
    'API robusta e resiliente focada em performance',
    'Desenvolvimento de uma API REST de alta performance com arquitetura limpa, implementando validações de dados rigorosas e seguras com Zod. A persistência foi estruturada utilizando TypeORM, garantindo segurança em operações complexas e uma cobertura sólida de testes unitários e de integração com Jest.',
    ARRAY['Node.js', 'NestJS', 'TypeScript', 'Zod', 'TypeORM', 'Jest'],
    'https://github.com/AleexGarcia/ANMAR25_DSUP_TASKLY',
    NULL,
    TRUE,
    NULL,
    'curl -X GET http://localhost:3000/api/v1/tasks -H ''Authorization: Bearer jwt_token''',
    ARRAY[
        'HTTP/1.1 200 OK',
        'Content-Type: application/json',
        '{"page": 1, "total": 0, "tasks": []}'
    ]
);

-- Projeto 2: Compass Events
INSERT INTO "projects" (
    "title", "tagline", "description", "technologies", 
    "githubLink", "deployLink", "isApiOnly", "imageUrl", 
    "terminalCommand", "terminalOutput"
) VALUES (
    'Compass Events',
    'Ecossistema Serverless escalável em produção',
    'Arquitetura e deploy de um sistema completo de gerenciamento de eventos baseado com computação em nuvem. Utilizando uma abordagem 100% Serverless, a infraestrutura foi inteiramente codificada com AWS CDK. O fluxo lida com picos massivos de requisições através de AWS Lambda, DynamoDB para persistência NoSQL rápida, S3 para arquivos e autenticação JWT de ponta a ponta.',
    ARRAY['AWS CDK', 'Lambda', 'DynamoDB', 'Amazon S3', 'JWT', 'TypeScript'],
    'https://github.com/AleexGarcia/ANMAR25_D03_COMPASSEVENT',
    NULL,
    TRUE,
    NULL,
    'curl -X POST https://api.compassevents.com/events -d ''{"name":"Code Summit 2026"}''',
    ARRAY[
        'HTTP/1.1 201 Created',
        'x-amzn-RequestId: 4aa5b8c9-1234-5678-abcd-ef0123456789',
        '{"message": "Event successfully provisioned in DynamoDB via AWS Lambda.", "eventId": "evt_987654321", "status": "ACTIVE"}'
    ]
);

-- Projeto 3: AleexGarcia - O Dev Viking
INSERT INTO "projects" (
    "title", "tagline", "description", "technologies", 
    "githubLink", "deployLink", "isApiOnly", "imageUrl", 
    "terminalCommand", "terminalOutput"
) VALUES (
    'AleexGarcia - O Dev Viking',
    'Single Page Application ultra veloz com Bento Grid',
    'Construção de uma identidade de marca pessoal única e satírica. Este site serve como prova de conceito para otimização extrema de performance web e renderização. Desenvolvido com Next.js App Router e Tailwind CSS, alcançando notas próximas a 100% no Google Lighthouse através do uso de imagens WebP e estruturas modulares de alta conversão.',
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX', 'Lighthouse SEO'],
    'https://github.com/AleexGarcia/portfolio-pessoal',
    'https://aleexgarcia.netlify.app/',
    FALSE,
    '/assets/aleexgarcia-dev-br.webp',
    NULL,
    NULL
);