import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <SectionTitle
        eyebrow="Testimonials"
        title="Words from collaborators."
        subtitle="Curated reflections from managers, peers, and mentors — coming soon."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {profile.testimonials.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            className="glass group relative flex flex-col p-6"
          >
            {t.placeholder && (
              <span className="absolute right-4 top-4 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-amber-200">
                Draft
              </span>
            )}

            <Quote className="h-7 w-7 text-accent-emerald/60" />

            <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">
              "{t.quote}"
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent-emerald/40 to-accent-amber/30 text-xs font-semibold text-white">
                {t.author.slice(0, 1)}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{t.author}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
