'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoldButton from '@/components/GoldButton';
import Image from 'next/image';

const faqs = [
  {
    question: 'Can I start with nights only or overflow only?',
    answer: 'Yes. Many clients start with limited hours and expand as needed.',
  },
  {
    question: 'Will customers know it’s outsourced?',
    answer: 'No. We answer in your business name and follow your tone and rules.',
  },
  {
    question: 'How fast can we start?',
    answer: 'After onboarding and setup, we can begin quickly depending on the coverage required.',
  },
];

const serviceOptions = [
  '24/7 Dispatch Coverage',
  'Overflow Support',
  'Admin Support',
  'Accounting Support',
  'Marketing Support',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="bg-[var(--bg-main)] text-[var(--text-main)]">
        <section className="pt-36 pb-16 bg-[var(--bg-soft)] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-4">Talk to the AKR Global Team</h1>
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                Whether you need 24/7 dispatch coverage, overflow support, admin help, or marketing—tell us what’s happening in your operation today. We’ll recommend the right plan and next steps.
              </p>
            </div>
            <div className="glass-strong rounded-2xl p-4">
              <Image src="/images/contact-hero-placeholder.svg" alt="Contact and support placeholder" className="w-full h-auto rounded-xl" width={1000} height={700} />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-8">
              <div className="glass-strong rounded-2xl p-6">
                <h2 className="text-2xl font-black mb-4">Contact Details</h2>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li><strong>Phone:</strong> +92 310 991 0222</li>
                  <li><strong>Email:</strong> info@taximservice.com</li>
                  <li><strong>Address:</strong> St 16, Chaklala Scheme-III, Chaklala Cantt, Rawalpindi</li>
                </ul>
                <p className="mt-3 text-xs text-[var(--text-muted)]">
                  We provide UK-focused taxi dispatch support with structured onboarding, UK operator workflows, and SLA-driven service delivery.
                </p>
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <h2 className="text-2xl font-black mb-4">Request a Quote</h2>
                <p className="text-sm text-[var(--text-muted)] mb-3">To recommend the right coverage plan, please share:</p>
                <ul className="text-sm text-[var(--text-muted)] space-y-2 list-disc pl-5">
                  <li>Your coverage needs (24/7, nights, weekends, overflow, specific hours)</li>
                  <li>Approx. call volume and peak times</li>
                  <li>Your dispatch process (how you take bookings and assign drivers)</li>
                  <li>Any additional services needed (admin/accounting/marketing)</li>
                </ul>
                <div className="mt-5">
                  <GoldButton href="#contact-form" variant="primary">Get a Quote</GoldButton>
                </div>
              </div>
            </div>

            <div id="contact-form" className="glass-strong rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <h3 className="text-2xl font-black mb-3">Thank You</h3>
                  <p className="text-[var(--text-muted)]">Your enquiry has been received. We’ll contact you about your request soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl font-black mb-2">Send Us a Message</h2>

                  {[
                    ['fullName', 'Full Name'],
                    ['companyName', 'Company Name'],
                    ['phoneNumber', 'Phone Number'],
                    ['email', 'Email'],
                    ['countryCity', 'Country / City'],
                    ['coverageHours', 'Preferred Coverage Hours'],
                  ].map(([id, label]) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-semibold mb-1">{label}</label>
                      <input id={id} required className="w-full rounded-lg border border-black/20 px-3 py-2 text-sm" />
                    </div>
                  ))}

                  <fieldset>
                    <legend className="block text-sm font-semibold mb-2">Services Needed</legend>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {serviceOptions.map((service) => (
                        <label key={service} className="flex items-center gap-2 text-sm border border-black/15 rounded-lg px-3 py-2">
                          <input type="checkbox" name="services" value={service} />
                          {service}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-1">Message / Requirements</label>
                    <textarea id="message" required rows={5} className="w-full rounded-lg border border-black/20 px-3 py-2 text-sm" />
                  </div>

                  <p className="text-xs text-[var(--text-muted)]">
                    By submitting this form, you agree to be contacted about your enquiry.
                  </p>

                  <GoldButton type="submit" variant="primary" className="w-full justify-center">Send Message</GoldButton>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--bg-soft)] border-y border-black/10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black mb-6">FAQ</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.question} className="glass-strong rounded-xl p-4">
                  <h3 className="font-bold mb-1">{faq.question}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
