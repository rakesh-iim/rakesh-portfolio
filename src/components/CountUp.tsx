import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  value: string;
  durationMs?: number;
};

const numericPattern = /^(\D*)(\d[\d,]*)(.*)$/;

export default function CountUp({ value, durationMs = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) {
      setDisplay(parseValue(value).prefix + '0' + parseValue(value).suffix);
      return;
    }

    const parsed = parseValue(value);
    if (parsed.target === null) {
      setDisplay(value);
      return;
    }

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(eased * parsed.target!);
      setDisplay(parsed.prefix + current.toLocaleString() + parsed.suffix);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, durationMs]);

  return <span ref={ref}>{display}</span>;
}

function parseValue(value: string): {
  prefix: string;
  target: number | null;
  suffix: string;
} {
  const match = value.match(numericPattern);
  if (!match) return { prefix: '', target: null, suffix: value };
  const num = Number(match[2].replace(/,/g, ''));
  if (Number.isNaN(num)) return { prefix: '', target: null, suffix: value };
  return { prefix: match[1], target: num, suffix: match[3] };
}
