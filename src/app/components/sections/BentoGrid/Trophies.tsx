import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { TrophyItem, TrophyItemProps } from "./TrophyItem";

const trophies: TrophyItemProps[] = [
  {
    icon: FaGraduationCap,
    title: 'Bacharel em SI',
    subtitle: 'Sistemas de Informação',
    status: '✔ Grau Colado',
    variant: 'emerald'
  },
  {
    icon: '/assets/aws-certified-cloud-practitioner.png',
    title: 'AWS Certified',
    subtitle: 'Cloud Practitioner',
    status: '★ Validado em Nuvem',
    variant: 'amber'
  },
  {
    icon: FaBriefcase,
    title: 'Estágio em Back-end Node.js',
    subtitle: 'Compass UOL · 6 meses',
    status: '★ Primeira experiência profissional',
    variant: 'amber'
  }
];

export default function Trophies() {
    return (
        <div className="space-y-3 flex-grow flex flex-col justify-center">
           {trophies.map((trophy)=> (
            <TrophyItem {...trophy} key={trophy.title}/>
           ))}
        </div>
    )
}