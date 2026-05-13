'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoldButton from '@/components/GoldButton';

const values = [
  { title: 'Reliability', description: 'If your line rings, someone answers—promptly and professionally.' },
  { title: 'Accuracy', description: 'Booking details matter. We reduce mistakes and rework.' },
  { title: 'Customer Care', description: 'Calm, respectful communication protects your reputation.' },
  { title: 'Accountability', description: 'Clear processes, reporting and performance standards.' },
  { title: 'Partnership', description: 'We operate as part of your team—not a generic call centre.' },
];

const audiences = [
  'Local taxi operators',
  'Private hire companies',
  'Airport transfer services',
  'Fleet-based dispatch operations',
  'Growing businesses needing overflow support',
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-dark)' }}>
        <section className="relative pt-36 pb-24" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Built to Support UK Taxi Operators With Always-On Operations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}
            >
              AKR Global exists to help taxi and private hire businesses answer faster, dispatch smoother,
              and operate reliably—without constant pressure from staffing gaps, night cover, and peak-time overload.
            </motion.p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-8" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Our Story
            </h2>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'var(--font-inter)' }}>
              <p>
                Taxi companies operate in real time. A delay of seconds can mean a lost booking—and when demand
                spikes, it&apos;s difficult to recruit, train and retain reliable dispatch staff quickly. Customer
                expectations keep rising, while the phones keep ringing.
              </p>
              <p>
                AKR Global was created to provide trained operational support that blends into your business like
                an in-house team. We follow your call style, booking rules, and service standards—so customers
                receive a consistent experience and drivers get clear job flow.
              </p>
              <p>
                Our approach is structured and measurable: quality checks, reporting, and continuous improvement.
                Clients don&apos;t just get &ldquo;coverage&rdquo;—they get better performance and stronger customer experience.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-black text-center mb-12" style={{ fontFamily: 'var(--font-cinzel)' }}>
              What We Believe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass-strong rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)' }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-inter)' }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Who We Work With
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
              {audiences.map((audience) => (
                <li key={audience} className="glass rounded-xl px-5 py-4 text-sm" style={{ color: 'rgba(255,255,255,0.72)', fontFamily: 'var(--font-inter)' }}>
                  {audience}
                </li>
              ))}
            </ul>

            <h2 className="text-4xl font-black mb-5" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Not a Scripted Call Centre—A Taxi Operations Partner
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'var(--font-inter)' }}>
              We tailor procedures to your business: how you confirm addresses, what details you collect, how
              you handle delays, and how you communicate with drivers and customers. Your customers experience
              your brand—just with stronger coverage and smoother operations.
            </p>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Let&apos;s Build a More Reliable Taxi Operation Together
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <GoldButton href="/contact" variant="primary">Start Free Trial</GoldButton>
              <GoldButton href="/contact" variant="ghost">Contact Us</GoldButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
