'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoldButton from '@/components/GoldButton';

const serviceItems = [
  {
    title: '24/7 Call Answering & Booking Capture',
    description:
      'We answer inbound calls in your business name and follow your booking rules and preferred call style. The focus is speed, accuracy and professionalism.',
    includes: [
      'Professional greeting and customer verification',
      'Accurate booking details capture (pickup, destination, timing)',
      'Pre-bookings scheduled correctly',
      'Amendments and cancellations handled properly',
      'Customer updates and reassurance during delays (based on your policy)',
    ],
  },
  {
    title: 'Dispatch Assistance & Fleet Coordination',
    description:
      'We support your dispatch team during busy periods to keep the queue controlled, drivers utilised, and customers updated consistently.',
    includes: [
      'Job allocation support based on your workflow',
      'Monitoring queues and reducing dispatch backlog',
      'Driver communication assistance (as per your process)',
      'Support during disruption periods (high demand / low supply)',
    ],
  },
  {
    title: 'Overflow Dispatch & Peak Coverage',
    description:
      'Keep control in-house while we handle overflow calls and booking capture. Ideal for weekends, school runs, weather spikes, events and peak hours.',
    includes: [
      'Fast pickup to reduce abandoned calls',
      'Temporary scaling without recruitment',
      'Flexible hours and quick activation',
      'Smooth handover rules and clear escalation points',
    ],
  },
  {
    title: 'Admin & Operations Support',
    description:
      'We handle behind-the-scenes tasks that slow teams downorganised, accurate and process-driven.',
    includes: [
      'Documentation and record handling',
      'Reporting support (daily/weekly/monthly)',
      'Data updates (customer records, driver records)',
      'Compliance task support (based on your checklist)',
    ],
  },
  {
    title: 'Accounting & Bookkeeping Support',
    description:
      'Improve visibility and control with structured bookkeeping support. We can work alongside your accountant to keep records clean and up to date.',
    includes: [
      'Bookkeeping and reconciliation support',
      'Invoice organisation and tracking',
      'Payroll assistance (process support)',
      'Monthly reporting preparation support',
    ],
  },
  {
    title: 'Email Handling & Customer Communication',
    description:
      'We manage routine email traffic so nothing is missed and customers receive timely, consistent responses.',
    includes: [
      'Customer enquiries and confirmations',
      'Partner / account communications',
      'Complaint logging and routing (per your policy)',
      'Follow-up and resolution tracking',
    ],
  },
  {
    title: 'Digital Marketing for Taxi Companies',
    description:
      'Great operations need steady demand. We improve visibility and inbound leads using practical marketing focused on bookingsnot vanity metrics.',
    includes: [
      'Local SEO optimisation',
      'Google Ads / paid campaigns support',
      'Social media content and management',
      'Landing pages and conversion improvements',
      'Monthly reporting and growth insights',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: 'var(--bg-dark)' }}>
        <section className="relative pt-36 pb-20" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Taxi Outsourcing Services for UK Operators
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}
            >
              Your customers want fast answers and reliable updates. Your drivers need clear job flow.
              AKR Global provides trained dispatch and back-office support to help taxi and private hire
              companies deliver consistent service at predictable staffing levels.
            </motion.p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {serviceItems.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-strong rounded-2xl p-8"
              >
                <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {service.title}
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-inter)' }}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                      <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* UPGRADED OPTIONAL ADD-ON SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl p-10 md:p-12 text-center mt-12"
              style={{
                background: 'linear-gradient(145deg, rgba(212, 175, 55, 0.1) 0%, rgba(20, 20, 20, 0.9) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 10px 40px rgba(212, 175, 55, 0.1)',
              }}
            >
              {/* Subtle top glow effect */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 blur-2xl opacity-40" 
                style={{ backgroundColor: 'var(--gold)' }} 
              />
              
              <div className="flex justify-center mb-4">
                <Star size={32} style={{ color: 'var(--gold)' }} fill="var(--gold)" fillOpacity={0.2} />
              </div>
              
              <h2 className="text-2xl md:text-4xl font-black mb-4" style={{ fontFamily: 'var(--font-cinzel)', color: 'var(--gold)' }}>
                Optional Add-On: Project & Operations Management
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-inter)' }}>
                From new workflows to service expansion, we help you implement improvements without
                disrupting day-to-day operations. Elevate your business efficiency seamlessly.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: 'var(--bg-mid)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Not Sure Which Service You Need?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-inter)' }}>
             Tell us your current challenges, such as missed calls, peak-time overload, staffing gaps, back-office pressure, or growth goals. We’ll recommend the best plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <GoldButton href="/contact" variant="primary">Get a Quote</GoldButton>
              <GoldButton href="/contact" variant="ghost">Book a Call</GoldButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}