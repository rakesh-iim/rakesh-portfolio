import { motion } from 'framer-motion';
import { Sparkles, Target, TrendingUp } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

const pillars = [
  {
    icon: Target,
    title: 'Strategy & Operations',
    body: 'Structured problem-solving with a bias for measurable business impact.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Decisions',
    body: 'Translating analysis into decisions that move the needle for stakeholders.',
  },
  {
    icon: Sparkles,
    title: 'Cross-Functional Leadership',
    body: 'Led 25+ member teams across student governance and corporate settings.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle
        eyebrow="About"
        title="Engineer turned strategist."
        subtitle={profile.tagline}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong p-7 lg:col-span-3"
        >
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-300">
            {profile.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 lg:col-span-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group p-5 transition hover:bg-white/[0.07]"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-emerald/30 to-accent-amber/20 ring-1 ring-white/10">
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{p.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
