import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle
        eyebrow="Education & Credentials"
        title="Continuous learning, certified."
        subtitle="Formal education and industry-recognized certifications spanning cloud, analytics, and engineering."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Education */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
            <GraduationCap className="h-4 w-4 text-accent-violet" /> Education
          </h3>
          <div className="space-y-4">
            {profile.education.map((e, i) => (
              <motion.div
                key={e.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass p-5"
              >
                <div className="text-xs font-medium uppercase tracking-wider text-accent-cyan">
                  {e.period}
                </div>
                <h4 className="mt-1 heading-display text-base font-semibold text-white">
                  {e.school}
                </h4>
                <p className="mt-1 text-sm text-slate-400">{e.degree}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
            <Award className="h-4 w-4 text-accent-cyan" /> Certifications
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {profile.certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="glass group p-4 transition hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent-violet/40 to-accent-cyan/30">
                    <Award className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium leading-snug text-white">{c.title}</div>
                    <div className="mt-0.5 text-xs text-slate-500">{c.issuer}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
