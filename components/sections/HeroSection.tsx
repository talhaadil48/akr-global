'use client';

import { motion } from 'framer-motion';
import { heroContent } from '@/lib/data';
import GoldButton from '@/components/GoldButton';

const HERO_BG_IMAGE = './HERO1.png';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-dark)' }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, rgba(6,6,12,0.92) 0%, rgba(6,6,12,0.6) 48%, rgba(6,6,12,0.92) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 85% 20%, rgba(212,175,55,0.25), transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
          style={{ fontFamily: 'var(--font-cinzel)', color: '#ffffff' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {heroContent.headline}
        </motion.h1>
        <motion.p
          className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto mt-8"
          style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-inter)' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          {heroContent.subheading}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <GoldButton href="/contact" variant="primary">{heroContent.ctaPrimary}</GoldButton>
          <GoldButton href="/contact" variant="ghost">{heroContent.ctaSecondary}</GoldButton>
        </motion.div>
      </div>
    </section>
  );
}
