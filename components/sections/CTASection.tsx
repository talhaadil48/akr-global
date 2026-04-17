'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GoldButton from '@/components/GoldButton';

// Pre-computed particle data
const CTA_PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  width: (((i * 7 + 3) % 40) / 10 + 1),
  height: (((i * 11 + 5) % 40) / 10 + 1),
  left: ((i * 17 + 11) % 100),
  top: ((i * 23 + 3) % 100),
  opacity: ((i * 13 + 7) % 40) / 100 + 0.05,
  yTravel: (((i * 19 + 7) % 60) + 20),
  duration: ((i * 11 + 4) % 40) / 10 + 3,
  delay: ((i * 7 + 2) % 40) / 10,
}));

function GoldParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {CTA_PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            backgroundColor: 'var(--gold)',
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -p.yTravel],
            opacity: [0.1, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-dark)' }}
    >
      <GoldParticles />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
          style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
        >
          Ready to Begin?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl md:text-6xl font-black leading-tight mb-6"
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          Let&apos;s Build Something{' '}
          <span className="shimmer-text">Exceptional</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}
        >
          Join 180+ ambitious companies that trusted AKR Global Studios to transform their digital presence. Let&apos;s make your vision a reality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <GoldButton href="/contact" variant="primary">
            Start Your Project
          </GoldButton>
          <GoldButton href="/pricing" variant="ghost">
            View Pricing
          </GoldButton>
        </motion.div>
      </div>
    </section>
  );
}
