'use client'

import { useEffect, useState } from "react";

interface CounterProps {
  target: number;      
  suffix?: string;     
  startFrom?: number;  
}

export default function Counter({ target, suffix = "", startFrom = 0 }: CounterProps) {
  const [value, setValue] = useState(startFrom);

  useEffect(() => {
    if (value >= target) {
      // Quando chega no alvo, espera 5 segundos e reinicia
      const timeout = setTimeout(() => {
        setValue(startFrom);
      }, 5000);

      return () => clearTimeout(timeout);
    }

    // Calcula a velocidade do intervalo baseado no tamanho do número 
    // para números grandes não demorarem uma eternidade
    const increment = Math.max(1, Math.floor(target / 100));
    const speed = target > 1000 ? 10 : 50;

    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [value, target, startFrom]);

  return (
    <span className="font-mono text-amber-500">
      {value.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}