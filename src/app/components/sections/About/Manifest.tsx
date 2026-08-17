import { GiAnvil, GiBattleAxe, GiCrossedAxes, GiShield } from "react-icons/gi";

const principles = [
  {
    icon: GiAnvil,
    title: 'Arquitetura antes do código',
    description:
      'Antes de construir, penso em como as peças devem se encaixar. Uma boa arquitetura reduz complexidade e prepara o software para evoluir.',
  },
  {
    icon: GiShield,
    title: 'Robustez por padrão',
    description:
      'Tipagem, validação, testes e boas práticas fazem parte da fundação de uma aplicação confiável.',
  },
  {
    icon: GiBattleAxe,
    title: 'Simplicidade como arma',
    description:
      'Complexidade nem sempre significa maturidade. Prefiro soluções claras, objetivas e fáceis de manter.',
  },
];


export default function Manifest() {
  return (
    <div className="lg:col-span-3">
      <div className="group relative h-full overflow-hidden rounded-3xl border border-amber-950/60 bg-gradient-to-b from-[#221A15] to-[#1A1410] p-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.04)] sm:p-8">
        {/* Linha superior */}
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-700">
              manifesto.exe
            </span>

            <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
              Meu manifesto
            </h3>
          </div>

          <div className="rounded-xl border border-amber-500/10 bg-amber-500/5 p-3 text-amber-500 transition-transform duration-300 group-hover:rotate-6">
            <GiCrossedAxes
              className="text-2xl"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="space-y-7">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className="group/principle flex gap-4"
              >
                {/* Número */}
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-amber-500/10 bg-black/20 font-mono text-xs font-bold text-amber-500 transition-all duration-300 group-hover/principle:border-amber-500/30 group-hover/principle:bg-amber-500/10">
                    0{index + 1}
                  </div>

                  {index !== principles.length - 1 && (
                    <div className="mt-2 h-full w-px bg-gradient-to-b from-amber-950/70 to-transparent" />
                  )}
                </div>

                {/* Conteúdo */}
                <div className="pb-1">
                  <div className="flex items-center gap-2">
                    <Icon
                      className="text-lg text-amber-600 transition-transform duration-300 group-hover/principle:scale-110"
                      aria-hidden="true"
                    />

                    <h4 className="font-bold text-gray-200">
                      {principle.title}
                    </h4>
                  </div>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Frase técnica */}
        <div className="mt-9 border-t border-amber-950/50 pt-6">
          <p className="font-mono text-xs leading-6 text-gray-400">
            <span className="text-amber-600">&gt;</span>{' '}
            Linhas de código forjadas para alta performance e escalabilidade.
          </p>
        </div>
      </div>
    </div>
  )
}