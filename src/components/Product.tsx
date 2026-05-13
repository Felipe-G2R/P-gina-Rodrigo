import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRODUCT } from '../lib/content';
import { Divider } from './ornaments/Divider';
import { HeartCross } from './ornaments/HeartCross';

export function Product() {
  const reduce = useReducedMotion();

  return (
    <section
      id="produto"
      className="bg-parchment py-24 md:py-32"
      aria-labelledby="product-title"
    >
      <div className="container-sacro">
        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-center"
        >
          {PRODUCT.eyebrow}
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mt-4"
        >
          <HeartCross size={56} stroke="#A6764B" />
        </motion.div>

        <motion.h2
          id="product-title"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-title text-teal-deep text-center mt-4 text-balance"
        >
          {PRODUCT.title}
        </motion.h2>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-caslon italic text-xl md:text-2xl text-charcoal/70 text-center mt-4 max-w-3xl mx-auto text-balance"
        >
          {PRODUCT.subtitle}
        </motion.p>

        <Divider className="my-12" />

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="prose-sacro text-center max-w-3xl mx-auto text-balance"
        >
          {PRODUCT.pitch}
        </motion.p>

        {/* 10 áreas */}
        <div className="mt-16">
          <h3 className="font-cinzel uppercase tracking-[0.22em] text-xs text-brass-dark text-center mb-8">
            10 áreas de conteúdo
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {PRODUCT.areas.map((area, idx) => (
              <motion.li
                key={area}
                initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.05 }}
                className="card-sacro flex items-start gap-4"
              >
                <span className="roman-numeral text-2xl leading-none mt-1 min-w-[40px]">
                  {romanize(idx + 1)}
                </span>
                <span className="font-serif text-base md:text-lg text-charcoal/85 leading-snug">
                  {area}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="font-caslon italic text-lg text-charcoal/70 text-center max-w-3xl mx-auto mt-12 text-balance"
        >
          {PRODUCT.disclaimer}
        </motion.p>

        <Divider className="my-16" />

        {/* 8 transformações */}
        <h3 className="font-cinzel uppercase tracking-[0.22em] text-xs text-brass-dark text-center mb-8">
          As transformações que você vive
        </h3>
        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl mx-auto">
          {PRODUCT.transformations.map((t, idx) => (
            <motion.li
              key={t}
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="flex items-start gap-3 py-3 border-b border-brass/15"
            >
              <Check size={18} strokeWidth={1.6} className="text-brass-dark mt-1 shrink-0" />
              <span className="font-serif text-lg text-charcoal/85">{t}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function romanize(num: number): string {
  const map: [number, string][] = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let result = '';
  let n = num;
  for (const [value, numeral] of map) {
    while (n >= value) {
      result += numeral;
      n -= value;
    }
  }
  return result;
}
