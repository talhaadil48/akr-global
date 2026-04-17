'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="py-28" style={{ backgroundColor: 'var(--bg-mid)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Trusted by{' '}
            <span style={{ color: 'var(--gold)' }}>Industry Leaders</span>
          </motion.h2>
        </div>

        {/* Featured testimonial */}
        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto glass-strong rounded-2xl p-10 mb-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star key={i} size={18} fill="var(--gold)" style={{ color: 'var(--gold)' }} />
              ))}
            </div>
            <p
              className="text-lg leading-relaxed mb-8 italic"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-inter)' }}
            >
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black border"
                style={{
                  borderColor: 'var(--gold)',
                  backgroundColor: 'rgba(212,175,55,0.1)',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-cinzel)',
                }}
              >
                {testimonials[activeIndex].name[0]}
              </div>
              <div>
                <p className="font-semibold text-white" style={{ fontFamily: 'var(--font-inter)' }}>
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-inter)' }}>
                  {testimonials[activeIndex].role} — {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setPaused(true); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: i === activeIndex ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
