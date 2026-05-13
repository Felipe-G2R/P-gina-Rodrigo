import { motion, useReducedMotion } from 'framer-motion';
import { PROBLEM } from '../lib/content';
import { Divider } from './ornaments/Divider';

export function Problem() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-paper-dark text-ivory py-24 md:py-32"
      aria-labelledby="problem-title"
    >
      <div className="container-sacro max-w-5xl">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-brass-bright text-center"
        >
          {PROBLEM.eyebrow}
        </motion.p>

        <motion.h2
          id="problem-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-ivory text-center mt-6 text-balance"
        >
          {PROBLEM.title}
        </motion.h2>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-caslon italic text-xl md:text-2xl text-ivory/75 text-center mt-4 max-w-3xl mx-auto text-balance"
        >
          {PROBLEM.subtitle}
        </motion.p>

        <Divider className="my-12" variant="dark" />

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="prose-sacro text-ivory/80 max-w-3xl mx-auto text-balance"
        >
          {PROBLEM.paragraph}
        </motion.p>

        <ul className="grid md:grid-cols-2 gap-4 mt-14">
          {PROBLEM.cards.map((card, idx) => (
            <motion.li
              key={card}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="card-dark flex items-center gap-4"
            >
              <span className="font-cinzel text-brass-bright text-[11px] tracking-ultra">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="font-caslon italic text-lg text-ivory/90">{card}</span>
            </motion.li>
          ))}
        </ul>

        <motion.figure
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="mt-16 border-l-2 border-brass pl-6 md:pl-10 max-w-3xl mx-auto"
        >
          <blockquote className="font-display text-2xl md:text-3xl text-ivory leading-snug text-balance">
            “{PROBLEM.quote}”
          </blockquote>
        </motion.figure>
      </div>
    </section>
  );
}
