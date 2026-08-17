import { BentoCard } from "./BentoCard";
import Counter from "./Counter";

export interface SatiricalCard {
    category: string;
    counter: {
        target: number,
        startFrom?: number,
        suffix?: string,
    },
    title: string,
    footer: string,
    gridPosition: string,
}


export default function SatiricalCards({ category, counter, footer, title, gridPosition }: SatiricalCard) {
    return (
        <BentoCard className={`${gridPosition} text-center p-5 justify-between h-full transition-all duration-300 hover:border-amber-900/40`} >
            <h3 className="text-[11px] uppercase tracking-widest text-amber-700 font-bold">{category}</h3>
            <div className="py-2">
                <span className="text-4xl font-black text-amber-500 font-mono block group-hover:scale-110 transition-transform duration-300">
                    <Counter target={counter.target} startFrom={counter.startFrom || 0} suffix={counter.suffix || ''} />
                </span>
                <span className="text-xs text-gray-300 font-medium mt-1 block">{title}</span>
            </div>
            <div className="border-t border-amber-950/60 pt-2 text-[11px] text-gray-400 italic">
                {`\"${footer}\"`}
            </div>
        </BentoCard>

    );

}