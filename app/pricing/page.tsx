'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TiltCard from '@/components/TiltCard';
import GoldButton from '@/components/GoldButton';
import { pricing } from '@/lib/data';

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-dark)' }}>
        {/* Header */}
        <section className="pt-36 pb-20" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
            >
              Transparent Pricing
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Simple, <span style={{ color: 'var(--gold)' }}>Honest</span> Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-10"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}
            >
              No hidden fees. No surprises. Just world-class work at a fair price.
            </motion.p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-sm font-semibold" style={{ color: !annual ? '#fff' : 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}>
                Per Project
              </span>
              <button
                onClick={() => setAnnual((v) => !v)}
                className="relative w-12 h-6 rounded-full transition-colors duration-300"
                style={{ backgroundColor: annual ? 'var(--gold)' : 'rgba(255,255,255,0.15)' }}
                aria-label="Toggle annual pricing"
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 rounded-full bg-white"
                  animate={{ left: annual ? '28px' : '4px' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <span className="text-sm font-semibold" style={{ color: annual ? '#fff' : 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}>
                Retainer{' '}
                <span className="px-1.5 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--gold)' }}>
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {pricing.map((plan, i) => {
                const displayPrice = annual
                  ? Math.round(plan.price * 0.8)
                  : plan.price;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                    className={plan.highlighted ? 'md:-mt-8' : ''}
                  >
                    <TiltCard
                      className={`h-full rounded-2xl p-8 transition-all duration-300 ${
                        plan.highlighted
                          ? 'gold-glow animate-pulse-gold'
                          : 'glass-strong hover:gold-glow'
                      }`}
                      style={{
                        border: plan.highlighted
                          ? '2px solid var(--gold)'
                          : '1px solid rgba(212,175,55,0.15)',
                        backgroundColor: plan.highlighted ? 'rgba(212,175,55,0.05)' : undefined,
                      } as React.CSSProperties}
                      tiltOptions={{
                        max: plan.highlighted ? 15 : 10,
                        speed: 400,
                        glare: true,
                        'max-glare': plan.highlighted ? 0.2 : 0.1,
                        scale: plan.highlighted ? 1.05 : 1.03,
                      }}
                    >
                      {plan.highlighted && (
                        <div
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase"
                          style={{ backgroundColor: 'var(--gold)', color: '#000', fontFamily: 'var(--font-inter)' }}
                        >
                          Most Popular
                        </div>
                      )}

                      <h3
                        className="text-2xl font-black mb-2"
                        style={{ fontFamily: 'var(--font-cinzel)', color: plan.highlighted ? 'var(--gold)' : '#fff' }}
                      >
                        {plan.name}
                      </h3>

                      <div className="flex items-end gap-1 mb-1">
                        <span
                          className="text-5xl font-black"
                          style={{ fontFamily: 'var(--font-cinzel)', color: '#fff' }}
                        >
                          ${displayPrice.toLocaleString()}
                        </span>
                      </div>
                      <p
                        className="text-xs uppercase tracking-widest mb-8"
                        style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}
                      >
                        per {annual ? 'month' : 'project'}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                            <CheckCircle
                              size={15}
                              className="mt-0.5 flex-shrink-0"
                              style={{ color: plan.highlighted ? 'var(--gold)' : 'rgba(212,175,55,0.7)' }}
                            />
                            <span style={{ color: 'rgba(255,255,255,0.65)' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <GoldButton
                        href="/contact"
                        variant={plan.highlighted ? 'primary' : 'ghost'}
                        className="w-full justify-center"
                      >
                        Get Started
                      </GoldButton>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enterprise note */}
        <section className="py-16" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
              Need a custom engagement? Enterprise clients and long-term retainer partners receive dedicated pricing.
            </p>
            <GoldButton href="/contact" variant="primary">
              Contact for Custom Quote
            </GoldButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
