import { STEPS } from "@/app/_constants/steps";

export type StepProps = {
  step: (typeof STEPS)[number];
  index: number;
  className?: string;
  refCallback: (element: HTMLDivElement | null) => void;
};

export function Step({
  step,
  className = '',
  refCallback,
}: StepProps) {
  const Icon = step.icon;

  return (
    <article
      ref={refCallback}
      className={`
        group
        ${className}
      `}
    >
      {/* ==========================================================
          NÓ
      ========================================================== */}

      <div className="relative mb-7 flex items-center gap-4">
        <div
          data-process-node
          className="
            relative
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-amber-600/80
            bg-[#15100C]
            text-amber-400
            shadow-[0_0_0_6px_rgba(21,16,12,0.9),0_0_30px_rgba(245,158,11,0.08)]
            transition-all
            duration-500
            group-hover:border-amber-400
            group-hover:text-amber-300
            group-hover:shadow-[0_0_0_6px_rgba(21,16,12,0.9),0_0_35px_rgba(245,158,11,0.18)]
          "
        >
          <Icon className="text-xl" />

          {/* Número */}

          <span
            className="
              absolute
              -right-2
              -top-2
              flex
              h-6
              min-w-6
              items-center
              justify-center
              rounded-full
              border
              border-amber-800
              bg-[#211710]
              px-1.5
              font-mono
              text-[9px]
              font-bold
              text-amber-400
            "
          >
            {step.number}
          </span>
        </div>

        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-amber-500/90
          "
        >
          {step.keyword}
        </span>
      </div>

      {/* ==========================================================
          CONTEÚDO
      ========================================================== */}

      <h3
        className="
          font-serif
          text-3xl
          font-bold
          text-stone-100
          transition-colors
          duration-300
          group-hover:text-amber-400
        "
      >
        {step.title}
      </h3>

      <p
        className="
          mt-4
          text-sm
          leading-7
          text-stone-300
        "
      >
        {step.description}
      </p>

      {/* Indicador */}

      <div
        className="
          mt-6
          h-px
          w-12
          bg-amber-800/70
          transition-all
          duration-500
          group-hover:w-20
          group-hover:bg-amber-500
        "
      />
    </article>
  );
}
