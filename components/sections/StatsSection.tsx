'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '@/lib/data';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-20 border-y"
      style={{
        borderColor: 'rgba(212,175,55,0.12)',
        backgroundColor: 'var(--bg-mid)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x"
          style={{ borderColor: 'rgba(212,175,55,0.12)' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center px-6 py-4 group"
            >
              <span
                className="text-5xl md:text-6xl font-black mb-2 transition-all duration-300 group-hover:gold-glow-text"
                style={{
                  fontFamily: 'var(--font-cinzel)',
                  color: 'var(--gold)',
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
              </span>
              <span
                className="text-xs tracking-[0.15em] uppercase font-medium"
                style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-inter)' }}
              >
                {stat.label}
              </span>
              {i < stats.length - 1 && (
                <div
                  className="absolute right-0 top-1/4 h-1/2 w-px hidden md:block"
                  style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
