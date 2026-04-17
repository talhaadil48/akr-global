'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { team, timeline } from '@/lib/data';
import GoldButton from '@/components/GoldButton';

const values = [
  { title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we create.' },
  { title: 'Integrity', description: 'Transparent communication and honest partnerships, always.' },
  { title: 'Innovation', description: 'We push boundaries and embrace new technologies to deliver better outcomes.' },
  { title: 'Impact', description: 'Every project is measured by the real business results it delivers.' },
];

function TeamCard({ member }: { member: typeof team[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-80 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl glass-strong flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black border-2 mb-4"
            style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--gold)', fontFamily: 'var(--font-cinzel)' }}
          >
            {member.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-cinzel)', color: '#fff' }}>{member.name}</h3>
          <p className="text-sm" style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}>{member.role}</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.3)',
          }}
        >
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-inter)' }}>
            {member.bio}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {member.expertise.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-full text-xs"
                style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-dark)' }}>
        {/* Hero */}
        <section className="relative pt-36 pb-24 overflow-hidden" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
          />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Built on <span style={{ color: 'var(--gold)' }}>Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}
            >
              AKR Global Studios was founded with a singular mission: to bring Fortune 500-level digital execution to the companies that need it most. We believe great design and engineering should be accessible to every ambitious business.
            </motion.p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Our <span style={{ color: 'var(--gold)' }}>Journey</span>
              </h2>
            </div>
            <div className="relative">
              <div
                className="absolute left-6 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)' }}
              />
              <div className="space-y-12 pl-16">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Node */}
                    <div
                      className="absolute -left-[46px] w-8 h-8 rounded-full flex items-center justify-center border-2 text-xs font-black"
                      style={{ borderColor: 'var(--gold)', backgroundColor: 'var(--bg-dark)', color: 'var(--gold)', fontFamily: 'var(--font-cinzel)' }}
                    >
                      &bull;
                    </div>
                    <div className="glass-strong rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-2xl font-black"
                          style={{ color: 'var(--gold)', fontFamily: 'var(--font-cinzel)' }}
                        >
                          {item.year}
                        </span>
                        <span
                          className="px-3 py-0.5 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
                        >
                          {item.event}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-inter)' }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Meet the <span style={{ color: 'var(--gold)' }}>Team</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-inter)' }}>
                Hover over each card to learn more.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Our <span style={{ color: 'var(--gold)' }}>Values</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-strong rounded-2xl p-7 text-center hover:gold-glow transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)' }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Let&apos;s Work <span style={{ color: 'var(--gold)' }}>Together</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <GoldButton href="/contact" variant="primary">Get in Touch</GoldButton>
              <GoldButton href="/services" variant="ghost">Our Services</GoldButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
