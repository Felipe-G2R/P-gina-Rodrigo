import { motion, useReducedMotion } from 'framer-motion';
import { EMOTIONAL_HOOK } from '../lib/content';
import { Divider } from './ornaments/Divider';

export function EmotionalHook() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-parchment py-24 md:py-32" aria-labelledby="hook-title">
      <div className="container-sacro max-w-4xl">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-center"
        >
          {EMOTIONAL_HOOK.eyebrow}
        </motion.p>

        <motion.h2
          id="hook-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-teal-deep text-center mt-6 text-balance"
        >
          {EMOTIONAL_HOOK.title}
        </motion.h2>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-caslon italic text-xl md:text-2xl text-charcoal/70 text-center mt-4 text-balance"
        >
          {EMOTIONAL_HOOK.subtitle}
        </motion.p>

        <Divider className="my-12" />

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="prose-sacro text-balance"
        >
          {EMOTIONAL_HOOK.opening}
        </motion.p>

        <ul className="mt-12 space-y-5">
          {EMOTIONAL_HOOK.bullets.map((bullet, idx) => (
            <motion.li
              key={bullet}
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex items-start gap-4 pb-4 border-b border-brass/15"
            >
              <span className="font-cinzel text-xs text-brass-dark mt-1.5 min-w-[20px]">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="font-caslon italic text-lg md:text-xl text-charcoal/85">
                {bullet}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.figure
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="my-14 border-l-2 border-brass pl-6 md:pl-8"
        >
          <blockquote className="font-display text-2xl md:text-3xl text-teal-deep leading-snug text-balance">
            “{EMOTIONAL_HOOK.callout}”
          </blockquote>
        </motion.figure>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="prose-sacro text-balance"
        >
          {EMOTIONAL_HOOK.closing}
        </motion.p>
      </div>
    </section>
  );
}
