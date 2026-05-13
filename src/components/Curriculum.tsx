import { motion, useReducedMotion } from 'framer-motion';
import { CURRICULUM } from '../lib/content';
import { OpenBook } from './ornaments/OpenBook';

export function Curriculum() {
  const reduce = useReducedMotion();

  return (
    <section
      id="conteudo"
      className="bg-paper-dark text-ivory py-24 md:py-32"
      aria-labelledby="curriculum-title"
    >
      <div className="container-sacro">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-brass-bright text-center"
        >
          {CURRICULUM.eyebrow}
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mt-4"
        >
          <OpenBook size={56} stroke="#DDB388" />
        </motion.div>

        <motion.h2
          id="curriculum-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-title text-ivory text-center mt-6 text-balance"
        >
          {CURRICULUM.title}
        </motion.h2>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-caslon italic text-lg md:text-xl text-ivory/70 text-center mt-4 text-balance"
        >
          {CURRICULUM.subtitle}
        </motion.p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {CURRICULUM.lessons.map((lesson, idx) => (
            <motion.li
              key={lesson.roman}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
              className="card-dark flex items-start gap-4"
            >
              <span className="font-display text-2xl text-brass-bright leading-none min-w-[44px]">
                {lesson.roman}
              </span>
              <span className="font-serif text-base md:text-lg text-ivory/90 leading-snug">
                {lesson.title}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="font-caslon italic text-lg text-brass-bright/85 text-center mt-12"
        >
          {CURRICULUM.outro}
        </motion.p>
      </div>
    </section>
  );
}
