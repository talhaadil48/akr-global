'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="py-28" style={{ backgroundColor: 'var(--bg-mid)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            What Our Client  <span style={{ color: 'var(--gold)' }}>Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-8"
            >
              <p
                className="text-base leading-relaxed italic"
                style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-inter)' }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
