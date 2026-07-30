'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { GiDrakkar, GiSkullCrossedBones } from "react-icons/gi";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">

            {/* Detalhe de Fundo: O Navio Perdido */}
            <div className="absolute opacity-15 pointer-events-none transform -translate-y-12">
                <GiDrakkar className="text-[400px] text-amber-700 animate-pulse" />
            </div>

            <div className="max-w-xl z-10 flex flex-col items-center gap-6">

                {/* Ícone de Alerta Viking */}
                <motion.div
                    animate={{
                        rotate: [0, -10, 10, -10, 10, 0],
                        y: [0, -5, 5, -5, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }}
                    className="text-amber-500 text-7xl drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                >
                    <GiSkullCrossedBones />
                </motion.div>

                {/* Título de Erro */}
                <h1 className="text-7xl font-black font-mono tracking-tighter text-amber-500 select-none">
                    ERRO 404
                </h1>

                {/* Mensagem Satírica */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-200">
                        Território Desconhecido!
                    </h2>
                    <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                        Pelos cabelos de Odin, você navegou seu drakkar para fora do mapa! Esta página não existe, foi devorada pelo Kraken ou <span className="text-amber-600 font-semibold">saqueada pelo nosso time de desenvolvimento</span>.
                    </p>
                </div>

                {/* Frase em Itálico (Mantendo o padrão dos seus cards) */}
                <div className="border-y border-amber-950/60 py-3 my-2 text-xs text-amber-700 font-medium tracking-wider italic uppercase">
                    {"Nenhum link quebrado escapa ao meu machado"}
                </div>

                <div className="mt-4">
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 shadow-lg shadow-amber-950/40 border border-amber-700 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Retornar ao Vilarejo
                    </Link>
                </div>

            </div>

            {/* Rodapé cômico da página 404 */}
            <span className="absolute bottom-6 text-[10px] text-gray-600 tracking-widest uppercase font-mono">
                Coordenadas atuais: Niflheim // Valhalla está em outra rota
            </span>
        </div>
    );
}