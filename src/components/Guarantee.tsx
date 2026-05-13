import { motion, useReducedMotion } from 'framer-motion';
import { GUARANTEE } from '../lib/content';

export function Guarantee() {
  const reduce = useReducedMotion();

  return (
    <section
      id="garantia"
      className="bg-parchment py-24 md:py-32"
      aria-labelledby="guarantee-title"
    >
      <div className="container-sacro max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            whileHover={reduce ? undefined : { scale: 1.04, rotate: 2 }}
            className="md:col-span-4 flex justify-center"
          >
            <div className="relative">
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-brass/25 blur-3xl"
              />
              <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full glass-cream flex items-center justify-center float-medium">
                <Seal labels={GUARANTEE.seal} />
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-8">
            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              {GUARANTEE.eyebrow}
            </motion.p>

            <motion.h2
              id="guarantee-title"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title text-teal-deep mt-4 text-balance"
            >
              {GUARANTEE.title}
            </motion.h2>

            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-caslon italic text-xl md:text-2xl text-charcoal/75 mt-6 text-balance"
            >
              {GUARANTEE.lead}
            </motion.p>

            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="prose-sacro mt-6 text-balance"
            >
              {GUARANTEE.paragraph}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Seal({ labels }: { labels: readonly string[] }) {
  return (
    <div className="relative w-52 h-52 md:w-64 md:h-64">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full text-brass"
        aria-hidden="true"
      >
        <defs>
          <path
            id="seal-circle"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <text fill="currentColor" fontSize="11" fontFamily="Cinzel" letterSpacing="3.5">
          <textPath xlinkHref="#seal-circle" startOffset="0%">
            {`${labels[0]} · ${labels[1]} · ${labels[2]} · ${labels[0]} · ${labels[1]} · ${labels[2]} · `}
          </textPath>
        </text>
        {/* Cruz central */}
        <line x1="100" y1="78" x2="100" y2="122" stroke="currentColor" strokeWidth="1.2" />
        <line x1="86" y1="100" x2="114" y2="100" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <div className="font-display text-5xl text-brass-dark leading-none">7</div>
        <div className="font-cinzel uppercase tracking-[0.22em] text-[9px] text-brass-dark mt-1">
          dias
        </div>
      </div>
    </div>
  );
}
