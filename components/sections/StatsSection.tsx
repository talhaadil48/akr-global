'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { quickHighlights } from '@/lib/data';

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
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
          >
            Quick Highlights
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {quickHighlights.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3 rounded-xl p-4 border"
              style={{ borderColor: 'rgba(212,175,55,0.18)', backgroundColor: 'rgba(255,255,255,0.02)' }}
            >
              <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
              <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-inter)' }}>
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
