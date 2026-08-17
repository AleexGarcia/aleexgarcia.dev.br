import { SatiricalCard } from "../components/sections/BentoGrid/SatiricalCards";

export const satiricalCardData: SatiricalCard[] = [
  {
    category: "Métricas Nórdicas",
    counter: {
      target: 100,
      startFrom: 0,
      suffix: "%",
    },
    title: "Barba Preenchida",
    footer: "Erros 404 serão saqueados",
    gridPosition: "lg:col-span-1 md:col-span-3"
  },
  {
    category: "Pilhagem de Bugs",
    counter: {
      target: 4721,
    },
    title: "Bugs Decapitados",
    footer: "Nenhum stack overflow sobreviveu",
    gridPosition: "md:col-span-3 lg:col-span-2"
  },
  {
    category: "Sacrifício aos Deuses",
    counter: {
      target: 3,
    },
    title: "Teclados em Valhalla",
    footer: "Guerreiros mortos em combate contra o CSS",
    gridPosition: "md:col-span-3 lg:col-span-1"
  },
  {
    category: "Banquete no Git",
    counter: {
      target: 890,
      suffix: "L",
    },
    title: "Hidromel & Café",
    footer: "Deploys em sexta-feira exigem coragem",
    gridPosition: "md:col-span-3 lg:col-span-2"
  },
];