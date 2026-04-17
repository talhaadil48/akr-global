'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { process } from '@/lib/data';

export default function ProcessSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="py-28" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Our{' '}
            <span style={{ color: 'var(--gold)' }}>Process</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line on desktop */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)' }}
          />

          <div className="flex flex-col gap-16">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <p
                    className="text-xs tracking-[0.2em] uppercase font-semibold mb-2"
                    style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}
                  >
                    Step {step.step}
                  </p>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-cinzel)', color: '#fff' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-sm"
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      fontFamily: 'var(--font-inter)',
                      marginLeft: i % 2 === 0 ? 'auto' : '0',
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Step Number - center node */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center gold-glow animate-pulse-gold"
                    style={{
                      border: '2px solid var(--gold)',
                      backgroundColor: 'rgba(212,175,55,0.08)',
                      fontFamily: 'var(--font-cinzel)',
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl font-black" style={{ color: 'var(--gold)' }}>
                      {step.step}
                    </span>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
