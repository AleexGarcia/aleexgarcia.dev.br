import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "./SocialLink";
import { github, linkedin } from "@/app/_constants/contacts";

const curriculumURL = process.env.NEXT_PUBLIC_CV_URL || '#';

const socials = [
    {
        href: `https://github.com/${github}`,
        icon: FaGithub,
        label: "GitHub",
        actionText: "Acessar ↗",
        hoverColor: "group-hover:text-white"
    },
    {
        href: `https://www.linkedin.com/in/${linkedin}`,
        icon: FaLinkedin,
        label: "LinkedIn",
        actionText: "Conectar ↗",
        hoverColor: "group-hover:text-blue-400"
    },
    {
        href: curriculumURL,
        icon: FaFilePdf,
        label: "Baixar Pergaminho (CV)",
        actionText: "PDF ↴",
        hoverColor: "group-hover:text-red-400"
    }

]

export default function Socials() {
    return (

        <div className="flex flex-col gap-2.5 flex-grow justify-center">
            {socials.map((social) => (
                <SocialLink key={social.label} {...social}  />
            ))}
        </div>
    );
}