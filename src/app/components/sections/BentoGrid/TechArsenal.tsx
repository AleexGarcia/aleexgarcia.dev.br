import { TECH_ARSENAL } from "@/app/_constants/techs";

export default function TechArsenal() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1" role="list" aria-label="Tecnologias utilizadas no arsenal">
            {TECH_ARSENAL.map((tech, idx) => (
                <div
                    key={idx}
                    role="listitem"
                    aria-label={`Tecnologia: ${tech.name}`}
                    className={`flex items-center gap-3 p-3 bg-black/20 border border-amber-950/30 rounded-xl transition-all duration-300 text-gray-400 group ${tech.color}`}
                >
                    <tech.icon className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-105" aria-hidden="true" />
                    <span className="text-sm font-medium text-gray-300 text-ellipsis">{tech.name}</span>
                </div>
            ))}
        </div>
    )
}