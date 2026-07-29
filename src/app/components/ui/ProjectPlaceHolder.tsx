import React from "react";
import { FaTerminal, FaHammer } from "react-icons/fa";


interface ProjectPlaceholderProps {
  project: boolean;
}

export const ProjectPlaceholder: React.FC<ProjectPlaceholderProps> = ({ project }) => {
  return (
    <>
      {project ? (
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
        <div className="flex-1 flex flex-col justify-center items-center text-gray-500 space-y-2">
          <FaHammer className="text-4xl text-amber-950 group-hover:text-amber-500/30 transition-colors duration-300" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-amber-900/60">
            Interface Web Ativa
          </span>
        </div>
      )}
    </>
  );
};

export default ProjectPlaceholder;