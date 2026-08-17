import { GiCompass } from "react-icons/gi";
import Image from 'next/image'
import { Ref } from "react";
const technologies = ['TypeScript', 'Next.js', 'NestJS', 'AWS'];

interface IdentityProps {
  imageRef: Ref<HTMLDivElement> | undefined;
  axeRef: Ref<HTMLDivElement> | undefined;
}

export default function Identity({ imageRef, axeRef }:IdentityProps) {
  return (
    <div className="lg:col-span-2">
      <div
        ref={imageRef}
        className="relative h-full min-h-[460px] overflow-hidden rounded-3xl border border-amber-950/60 bg-gradient-to-b from-[#221A15] to-[#1A1410] p-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.4)]"
      >
        <div
          aria-hidden="true"
          className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.35em] text-amber-900/70"
        >
          ᚨ ᛚ ᛖ ᚲ
        </div>

        <div className="flex h-full flex-col justify-between">
          {/* Foto */}
          <div
            ref={axeRef}
            className="relative flex flex-1 items-center justify-center overflow-hidden will-change-transform"
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute h-56 w-56 rounded-full bg-amber-500/5 blur-3xl"
            />

            <Image
              src="/assets/aleexgarcia.webp"
              alt="Alexandre Garcia, Full-Stack Developer"
              width={600}
              height={750}
              priority={false}
              className="relative z-10 max-h-[390px] object-cover object-top"
            />

            {/* Vinheta */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#1A1410] via-transparent to-transparent"
            />
          </div>

          {/* Identidade */}
          <div className="relative z-30">
            <div className="mb-4 h-px w-full bg-gradient-to-r from-amber-950/0 via-amber-950/70 to-amber-950/0" />

            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="block font-mono text-[9px] uppercase tracking-[0.25em] text-amber-700">
                  identidade
                </h3>

                <span className="font-[--font-cinzel] mt-1 block text-lg font-black tracking-tight text-white uppercase">
                  Alexandre Garcia
                </span>

                <span className="mt-1 block text-xs text-gray-400">
                  Full-Stack Developer
                </span>
              </div>

              <GiCompass
                className="mb-1 text-3xl text-amber-700/60"
                aria-hidden="true"
              />
            </div>

            {/* Stack */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-amber-950/50 bg-black/20 px-2.5 py-1 font-mono text-[10px] text-gray-400 transition-colors duration-200 hover:border-amber-500/20 hover:text-amber-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}