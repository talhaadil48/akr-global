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
      'We handle behind-the-scenes tasks that slow teams down—organised, accurate and process-driven.',
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
      'Great operations need steady demand. We improve visibility and inbound leads using practical marketing focused on bookings—not vanity metrics.',
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
      <main className="bg-[var(--bg-main)] text-[var(--text-main)]">
        <section className="pt-36 pb-16 bg-[var(--bg-soft)] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-4">Taxi Outsourcing Services for UK Operators</h1>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">
                Your customers want fast answers and reliable updates. Your drivers need clear job flow. AKR Global provides trained dispatch and back-office support to help taxi and private hire companies deliver consistent service at predictable staffing levels.
              </p>
            </div>
            <div className="glass-strong rounded-2xl p-4">
              <img src="/images/services-overview-placeholder.svg" alt="Taxi service support placeholder" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 space-y-6">
            {serviceItems.map((service) => (
              <article key={service.title} className="glass-strong rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black mb-3">{service.title}</h2>
                <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed mb-4">{service.description}</p>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--gold-dark)' }}>Includes</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-[var(--text-muted)]">
                  {service.includes.map((item) => (
                    <li key={item} className="glass rounded-lg px-3 py-2">{item}</li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="glass-strong rounded-2xl p-6 md:p-8 border-l-4 border-[var(--gold)]">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Project & Operations Management (Optional Add-On)</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                From new workflows to service expansion, we help you implement improvements without disrupting day-to-day operations.
              </p>
            </article>
          </div>
        </section>

        <section className="py-16 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-white/80 mb-8">
              Tell us your current challenge—missed calls, peak overload, staffing gaps, back-office pressure, or growth goals. We’ll recommend the best plan.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
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
