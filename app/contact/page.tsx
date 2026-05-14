'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoldButton from '@/components/GoldButton';
import { faqs } from '@/lib/data';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+44 78854 32707', href: 'tel:+447885432707' },
  { icon: Mail, label: 'Email', value: 'info@akrglobaloutsourcing.com', href: 'mailto:info@akrglobaloutsourcing.com' },
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
    fullName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    countryCity: '',
    preferredCoverageHours: '',
    message: '',
    consent: false,
    services: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setFormState((s) => ({
      ...s,
      services: s.services.includes(service)
        ? s.services.filter((item) => item !== service)
        : [...s.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-dark)' }}>
        <section className="pt-36 pb-16" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-5"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Talk to the AKR Global Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}
            >
              Whether you need 24/7 dispatch coverage, overflow support, admin help, or marketing tell us
              what&apos;s happening in your operation today. We&apos;ll recommend the right plan and next steps.
            </motion.p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black mb-6" style={{ fontFamily: 'var(--font-cinzel)' }}>Contact Details</h2>
                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-center gap-4 glass-strong rounded-xl p-5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
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
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <h3 className="text-2xl font-black mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>Request a Quote</h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
                  To recommend the right coverage plan, please share:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-sm" style={{ color: 'rgba(255,255,255,0.68)', fontFamily: 'var(--font-inter)' }}>
                  <li>Your coverage needs (24/7, nights, weekends, overflow, specific hours)</li>
                  <li>Approx. call volume and peak times</li>
                  <li>Your dispatch process (how you take bookings and assign drivers)</li>
                  <li>Any additional services needed (admin/accounting/marketing)</li>
                </ul>
              
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <h3 className="text-2xl font-black mb-3" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)' }}>
                    Message Sent
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
                    Thanks for your enquiry. We&apos;ll contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>Send Us a Message</h3>

                  {[
                    { id: 'fullName', label: 'Full Name', type: 'text' },
                    { id: 'companyName', label: 'Company Name', type: 'text' },
                    { id: 'phoneNumber', label: 'Phone Number', type: 'tel' },
                    { id: 'email', label: 'Email', type: 'email' },
                    { id: 'countryCity', label: 'Country / City', type: 'text' },
                    { id: 'preferredCoverageHours', label: 'Preferred Coverage Hours', type: 'text' },
                  ].map((field) => (
                    <div key={field.id}>
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
                        required
                        value={formState[field.id as keyof typeof formState] as string}
                        onChange={(e) => setFormState((s) => ({ ...s, [field.id]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(212,175,55,0.2)',
                          color: '#fff',
                          fontFamily: 'var(--font-inter)',
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-widest mb-2 font-semibold"
                      style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inter)' }}
                    >
                      Message / Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(212,175,55,0.2)',
                        color: '#fff',
                        fontFamily: 'var(--font-inter)',
                      }}
                    />
                  </div>

                  <label className="flex items-start gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
                    <input
                      type="checkbox"
                      checked={formState.consent}
                      onChange={(e) => setFormState((s) => ({ ...s, consent: e.target.checked }))}
                      required
                    />
                    By submitting this form, you agree to be contacted about your enquiry.
                  </label>

                  <GoldButton type="submit" variant="primary" className="w-full justify-center">
                    Send Message
                  </GoldButton>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="py-24" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black" style={{ fontFamily: 'var(--font-cinzel)' }}>
                FAQ
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
