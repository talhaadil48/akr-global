'use client';

import type { LucideIcon } from 'lucide-react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Smartphone, Sparkles, ShoppingCart, BarChart3, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TiltCard from '@/components/TiltCard';
import GoldButton from '@/components/GoldButton';
import { services, process } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Code2, Palette, Smartphone, Sparkles, ShoppingCart, BarChart3,
};

const tools = [
  'Figma', 'React', 'Next.js', 'Node.js', 'TypeScript',
  'Tailwind', 'Adobe XD', 'Webflow',
];

export default function ServicesPage() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-dark)' }}>
        {/* Header */}
        <section className="relative pt-36 pb-24 overflow-hidden" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)' }}
          />
          {/* Floating shapes */}
          {[0.4, 0.6, 0.8].map((delay, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border opacity-20 animate-float"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                borderColor: 'var(--gold)',
                right: `${10 + i * 12}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${delay}s`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
            />
          ))}
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
            >
              Our Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              What We <span style={{ color: 'var(--gold)' }}>Deliver</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}
            >
              End-to-end digital solutions crafted with precision, passion, and an obsession for results.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      className="h-full rounded-2xl p-8 glass-strong transition-all duration-300 group hover:gold-glow cursor-default"
                      tiltOptions={{ max: 8, speed: 400, glare: true, 'max-glare': 0.1 }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}
                      >
                        <Icon size={26} style={{ color: 'var(--gold)' }} />
                      </div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ fontFamily: 'var(--font-cinzel)', color: '#fff' }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-6"
                        style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}
                      >
                        {service.description}
                      </p>
                      <ul className="space-y-2.5">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                            <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                            <span style={{ color: 'rgba(255,255,255,0.65)' }}>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div ref={titleRef} className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="text-3xl md:text-4xl font-black mb-4"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Our <span style={{ color: 'var(--gold)' }}>Tech Stack</span>
              </motion.h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-inter)' }}>
                We work with the best tools in the industry.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full glass border text-sm font-semibold tracking-wide transition-all hover:gold-glow hover:border-[var(--gold)]"
                  style={{ borderColor: 'rgba(212,175,55,0.2)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-inter)' }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Our <span style={{ color: 'var(--gold)' }}>Delivery Process</span>
              </h2>
            </div>
            <div className="space-y-6">
              {process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 glass-strong rounded-2xl p-6"
                >
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-black text-lg border"
                    style={{ borderColor: 'var(--gold)', color: 'var(--gold)', fontFamily: 'var(--font-cinzel)' }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Ready to Get <span style={{ color: 'var(--gold)' }}>Started?</span>
            </h2>
            <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}>
              Let&apos;s discuss your project and build something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <GoldButton href="/contact" variant="primary">Start a Project</GoldButton>
              <GoldButton href="/pricing" variant="ghost">See Pricing</GoldButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
