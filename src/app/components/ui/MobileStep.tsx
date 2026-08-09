import { STEPS } from "@/app/_constants/steps";

type MobileStepProps = {
  step: (typeof STEPS)[number];
  index: number;
  refCallback: (element: HTMLDivElement | null) => void;
};

export function MobileStep({
  step,
  index,
  refCallback,
}: MobileStepProps) {
  const Icon = step.icon;

  const isEven = index % 2 === 0;

  return (
    <article
      ref={refCallback}
      className={`
        relative
        pl-16
        ${isEven ? 'sm:ml-0' : 'sm:ml-16'}
      `}
    >
      {/* ==========================================================
          NÓ MOBILE
      ========================================================== */}

      <div
        data-process-node
        className="
          absolute
          left-0
          top-0
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-amber-600
          bg-[#15100C]
          text-amber-400
          shadow-[0_0_0_5px_rgba(21,16,12,0.95)]
        "
      >
        <Icon className="text-base" />

        <span
          className="
            absolute
            -right-2
            -top-2
            flex
            h-5
            min-w-5
            items-center
            justify-center
            rounded-full
            border
            border-amber-800
            bg-[#211710]
            px-1
            font-mono
            text-[8px]
            font-bold
            text-amber-400
          "
        >
          {step.number}
        </span>
      </div>

      {/* ==========================================================
          TEXTO
      ========================================================== */}

      <span
        className="
          font-mono
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-amber-500
        "
      >
        {step.keyword}
      </span>

      <h3
        className="
          mt-3
          font-serif
          text-2xl
          font-bold
          text-stone-100
        "
      >
        {step.title}
      </h3>

      <p
        className="
          mt-3
          max-w-md
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
          mt-5
          h-px
          w-12
          bg-amber-800/70
        "
      />
    </article>
  );
}