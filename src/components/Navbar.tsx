import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl border border-white/10 px-4 py-2.5 backdrop-blur-xl transition-all ${
          scrolled ? 'bg-ink-900/70 shadow-glass' : 'bg-white/[0.03]'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan text-ink-950">
            R
          </span>
          <span className="hidden sm:inline gradient-text-soft">Rakesh Behera</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-xl border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
}
