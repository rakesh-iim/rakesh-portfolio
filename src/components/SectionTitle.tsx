import { motion } from 'framer-motion';

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 md:mb-16"
    >
      <div className="chip mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" />
        {eyebrow}
      </div>
      <h2 className="heading-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-slate-400 md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
