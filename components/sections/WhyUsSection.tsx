'use client';

import type { LucideIcon } from 'lucide-react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Globe, TrendingUp, Users } from 'lucide-react';
import { whyUs } from '@/lib/data';
import TiltCard from '@/components/TiltCard';
import SectionReveal from '@/components/SectionReveal';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Users,
};

export default function WhyUsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="py-28" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            The AKR{' '}
            <span style={{ color: 'var(--gold)' }}>Difference</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <SectionReveal key={item.title} delay={i * 0.08}>
                <TiltCard
                  className="h-full rounded-2xl p-7 glass transition-all duration-300 group hover:gold-glow cursor-default"
                  tiltOptions={{ max: 8, speed: 400, glare: true, 'max-glare': 0.08 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                  >
                    <Icon size={22} style={{ color: 'var(--gold)' }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'var(--font-cinzel)', color: '#fff' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}
                  >
                    {item.description}
                  </p>
                </TiltCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
