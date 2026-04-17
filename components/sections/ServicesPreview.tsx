'use client';

import type { LucideIcon } from 'lucide-react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Smartphone, Sparkles, ShoppingCart, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/data';
import TiltCard from '@/components/TiltCard';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Smartphone,
  Sparkles,
  ShoppingCart,
  BarChart3,
};

export default function ServicesPreview() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="py-28" style={{ backgroundColor: 'var(--bg-mid)' }}>
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
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Our Core{' '}
            <span style={{ color: 'var(--gold)' }}>Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base mt-4 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}
          >
            From concept to launch, we deliver end-to-end digital solutions that elevate your brand and accelerate growth.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <TiltCard
                  className="h-full rounded-2xl p-7 glass-strong transition-all duration-300 group hover:border-[var(--gold)] cursor-default"
                  tiltOptions={{ max: 10, speed: 400, glare: true, 'max-glare': 0.1 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}
                  >
                    <Icon size={22} style={{ color: 'var(--gold)' }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'var(--font-cinzel)', color: '#fff' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}
                  >
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3"
                    style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--gold)] hover:text-black"
            style={{ borderColor: 'var(--gold)', color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
