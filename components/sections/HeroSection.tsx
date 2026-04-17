'use client';

import { useRef, useEffect, Suspense } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { heroContent } from '@/lib/data';
import GoldButton from '@/components/GoldButton';
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

const words = heroContent.headline.split(' ');

// Pre-computed particle data (stable across renders)
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  width: (((i * 7 + 3) % 30) / 10 + 1),
  height: (((i * 11 + 5) % 30) / 10 + 1),
  opacity: ((i * 13 + 7) % 40) / 100 + 0.1,
  left: ((i * 17 + 11) % 100),
  top: ((i * 23 + 3) % 100),
  delay: ((i * 7 + 2) % 60) / 10,
  duration: ((i * 11 + 4) % 40) / 10 + 4,
}));

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            backgroundColor: 'var(--gold)',
            opacity: p.opacity,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const controls = useAnimation();
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--bg-dark)' }}>
      {/* Background gold lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-px h-full opacity-10"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }}
        />
        <div
          className="absolute top-0 right-1/4 w-px h-full opacity-10"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }}
        />
        <div
          className="absolute left-0 top-1/3 h-px w-full opacity-5"
          style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
        />
      </div>

      <Particles />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Left */}
        <div className="flex flex-col gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-[0.2em] uppercase w-fit"
            style={{
              borderColor: 'rgba(212,175,55,0.4)',
              color: 'var(--gold)',
              fontFamily: 'var(--font-inter)',
              backgroundColor: 'rgba(212,175,55,0.05)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-gold" style={{ backgroundColor: 'var(--gold)' }} />
            Elite Digital Agency
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            style={{ fontFamily: 'var(--font-cinzel)' }}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
                style={{
                  color: ['Results', 'Digital', 'Drive'].includes(word)
                    ? 'var(--gold)'
                    : '#ffffff',
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-inter)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            {heroContent.subheading}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <GoldButton href="/contact" variant="primary">
              {heroContent.ctaPrimary}
            </GoldButton>
            <GoldButton href="/projects" variant="ghost">
              {heroContent.ctaSecondary}
            </GoldButton>
          </motion.div>
        </div>

        {/* Right — 3D */}
        <motion.div
          className="relative h-[400px] lg:h-[600px] w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<div className="w-full h-full" />}>
            <Hero3D />
          </Suspense>
          {/* Gold glow behind 3D */}
          <div
            className="absolute inset-0 pointer-events-none rounded-full blur-[80px] opacity-20"
            style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
