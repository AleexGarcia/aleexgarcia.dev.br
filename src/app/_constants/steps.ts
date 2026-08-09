import { GiCompass, GiAnvil, GiHammerBreak, GiShield, GiTorch } from "react-icons/gi";

export const STEPS = [
  {
    number: '01',
    title: 'Entender',
    description:
      'Antes de escrever código, entendo o problema, as regras de negócio e quem vai usar a solução.',
    icon: GiCompass,
    keyword: 'Problema',
  },
  {
    number: '02',
    title: 'Projetar',
    description:
      'Defino arquitetura, responsabilidades, contratos e escolhas tecnológicas antes de aumentar a complexidade.',
    icon: GiAnvil,
    keyword: 'Arquitetura',
  },
  {
    number: '03',
    title: 'Construir',
    description:
      'Transformo decisões em código tipado, componentizado, testável e preparado para evoluir.',
    icon: GiHammerBreak,
    keyword: 'Código',
  },
  {
    number: '04',
    title: 'Validar',
    description:
      'Testo comportamento, segurança e performance para encontrar problemas antes que eles cheguem ao usuário.',
    icon: GiShield,
    keyword: 'Qualidade',
  },
  {
    number: '05',
    title: 'Entregar',
    description:
      'Levo a solução para produção com CI/CD, cloud e uma infraestrutura preparada para crescer.',
    icon: GiTorch,
    keyword: 'Produção',
  },
];
