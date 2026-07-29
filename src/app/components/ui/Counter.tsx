'use client'

import { useEffect, useState } from "react";

export default function InfiniteCounter() {
  const [percent, setPercent] = useState(50);

  useEffect(() => {
    if (percent >= 100) {
      const timeout = setTimeout(() => {
        setPercent(50);
      }, 5000);

      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setPercent((prev) => prev + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [percent]);

  return (
    <span className="font-mono text-amber-500">
      {String(percent).padStart(2, '0')}%
    </span>
  );
}