import { motion, useReducedMotion } from 'framer-motion';
import { BONUSES } from '../lib/content';
import { Divider } from './ornaments/Divider';

export function Bonuses() {
  const reduce = useReducedMotion();

  return (
    <section
      id="bonus"
      className="bg-paper-dark text-ivory py-24 md:py-32"
      aria-labelledby="bonus-title"
    >
      <div className="container-sacro">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-brass-bright text-center"
        >
          {BONUSES.eyebrow}
        </motion.p>

        <motion.h2
          id="bonus-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-ivory text-center mt-6 text-balance"
        >
          {BONUSES.title}
        </motion.h2>

        <Divider className="my-12" variant="dark" />

        <ul className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {BONUSES.books.map((book, idx) => (
            <motion.li
              key={book.number}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="card-dark flex gap-6"
            >
              <div className="font-display text-5xl md:text-6xl text-brass-bright leading-none">
                {book.number}
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-ivory leading-snug">
                  {book.title}
                </h3>
                <p className="font-serif text-base text-ivory/70 mt-3 leading-relaxed">
                  {book.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
