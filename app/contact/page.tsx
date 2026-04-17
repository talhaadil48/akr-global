'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoldButton from '@/components/GoldButton';
import { faqs } from '@/lib/data';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@akrglobal.studio', href: 'mailto:hello@akrglobal.studio' },
  { icon: Phone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
  { icon: MapPin, label: 'Office', value: 'Dubai Media City, UAE', href: '#' },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: 'rgba(212,175,55,0.12)' }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <h3 className="text-base font-semibold" style={{ fontFamily: 'var(--font-inter)', color: '#fff' }}>
          {question}
        </h3>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '', email: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: This is a front-end demo. No data is transmitted to a backend.
    // Integrate your preferred API/email service (e.g. Resend, SendGrid) here.
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-dark)' }}>
        {/* Header */}
        <section className="pt-36 pb-16" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-inter)' }}
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-4"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Let&apos;s <span style={{ color: 'var(--gold)' }}>Connect</span>
            </motion.h1>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-black mb-8" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Start a <span style={{ color: 'var(--gold)' }}>Conversation</span>
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
                Whether you have a detailed brief or just a spark of an idea, we&apos;d love to hear from you. Our team typically responds within 4 business hours.
              </p>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-5 glass-strong rounded-xl p-5 transition-all hover:gold-glow group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--gold)' }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}>{label}</p>
                      <p className="text-sm font-semibold" style={{ color: '#fff', fontFamily: 'var(--font-inter)' }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                className="mt-8 rounded-2xl overflow-hidden flex items-center justify-center h-48"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(212,175,55,0.12)' }}
              >
                <div className="text-center">
                  <MapPin size={32} style={{ color: 'var(--gold)', margin: '0 auto 8px' }} />
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}>
                    Dubai Media City, UAE
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="glass-strong rounded-2xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2"
                    style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(212,175,55,0.1)' }}
                  >
                    <Send size={24} style={{ color: 'var(--gold)' }} />
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)' }}>
                    Form Submitted
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
                    Thank you! This is a demo — connect a backend (e.g. Resend or SendGrid) to enable real delivery. We&apos;ll get back to you within 4 business hours once live.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-black mb-6" style={{ fontFamily: 'var(--font-cinzel)' }}>
                    Send a Message
                  </h3>
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
                  ].map((field) => (
                    <div key={field.id} className="relative">
                      <label
                        htmlFor={field.id}
                        className="block text-xs uppercase tracking-widest mb-2 font-semibold"
                        style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={formState[field.id as keyof typeof formState]}
                        onChange={(e) => setFormState((s) => ({ ...s, [field.id]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(212,175,55,0.2)',
                          color: '#fff',
                          fontFamily: 'var(--font-inter)',
                        }}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--gold)'; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(212,175,55,0.2)'; }}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs uppercase tracking-widest mb-2 font-semibold"
                      style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(e) => setFormState((s) => ({ ...s, service: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(212,175,55,0.2)',
                        color: formState.service ? '#fff' : 'rgba(255,255,255,0.35)',
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      <option value="" disabled style={{ backgroundColor: '#111' }}>Select a service</option>
                      <option value="web" style={{ backgroundColor: '#111' }}>Web Development</option>
                      <option value="design" style={{ backgroundColor: '#111' }}>UI/UX Design</option>
                      <option value="mobile" style={{ backgroundColor: '#111' }}>Mobile App</option>
                      <option value="branding" style={{ backgroundColor: '#111' }}>Brand Identity</option>
                      <option value="ecommerce" style={{ backgroundColor: '#111' }}>E-Commerce</option>
                      <option value="marketing" style={{ backgroundColor: '#111' }}>Digital Marketing</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-widest mb-2 font-semibold"
                      style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      required
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(212,175,55,0.2)',
                        color: '#fff',
                        fontFamily: 'var(--font-inter)',
                      }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--gold)'; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(212,175,55,0.2)'; }}
                    />
                  </div>
                  <GoldButton type="submit" variant="primary" className="w-full justify-center">
                    Send Message
                  </GoldButton>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Frequently Asked <span style={{ color: 'var(--gold)' }}>Questions</span>
              </h2>
            </div>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
