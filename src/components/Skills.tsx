import { motion } from 'framer-motion';
import { BrainCircuit, Cog, BarChart3, Users, Code2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

const groups = [
  { key: 'strategy', label: 'Strategy & Marketing', icon: BrainCircuit, accent: 'from-accent-emerald/30' },
  { key: 'operations', label: 'Operations', icon: Cog, accent: 'from-accent-amber/30' },
  { key: 'analytics', label: 'Analytics & Finance', icon: BarChart3, accent: 'from-accent-cream/30' },
  { key: 'leadership', label: 'Leadership', icon: Users, accent: 'from-accent-emerald/30' },
  { key: 'technical', label: 'Technical', icon: Code2, accent: 'from-accent-amber/30' },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        eyebrow="Skills"
        title="A toolkit built across disciplines."
        subtitle="Layered expertise from engineering, MBA coursework, and on-the-ground leadership."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => {
          const items = profile.skills[g.key];
          return (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass group relative overflow-hidden p-6"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${g.accent} to-transparent blur-2xl opacity-60 transition group-hover:opacity-100`}
              />
              <div className="relative flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <g.icon className="h-4.5 w-4.5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white">{g.label}</h3>
              </div>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300 transition hover:border-white/20 hover:bg-white/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
