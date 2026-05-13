import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoldButton from '@/components/GoldButton';
import Image from 'next/image';

const highlights = [
  'Answer calls fast—even during peak demand',
  'Trained dispatch operators using UK taxi workflows',
  'Works with your existing dispatch system and booking rules',
  'Flexible cover: overflow, nights, weekends, or full-time support',
  'Clear reporting, QA checks, and service standards',
];

const services = [
  '24/7 Dispatch & Call Handling',
  'Overflow / Peak-Time Cover',
  'Administrative Support',
  'Accounting & Bookkeeping Support',
  'Email & Customer Inbox Management',
  'Digital Marketing (SEO, Ads, Social)',
  'Project & Operations Management',
];

const processSteps = [
  'Discovery Call – We learn your booking rules, coverage needs, and call style.',
  'Custom Setup – Scripts, call flows, escalation rules, and reporting are agreed.',
  'Go Live – We start with supervision and quality checks for consistency.',
  'Optimise – Regular reviews to improve performance and scale coverage.',
];

const outcomes = [
  'Reduce missed calls during busy periods',
  'Improve customer experience and response times',
  'Lower staffing stress and management workload',
  'Scale support without hiring full-time staff',
  'Protect your reputation with consistent service standards',
];

const testimonials = [
  '“Our call coverage improved instantly. Even weekends are handled properly and bookings don’t get missed.”',
  '“Feels like an in-house team—professional tone, accurate booking capture, and smooth driver coordination.”',
  '“We started with overflow cover and expanded into evenings. It’s helped us keep up with demand.”',
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-[var(--bg-main)] text-[var(--text-main)]">
        <section className="pt-36 pb-16 bg-[var(--bg-soft)] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-5">24/7 Taxi Dispatch Outsourcing for UK Operators</h1>
              <p className="text-base md:text-lg leading-relaxed text-[var(--text-muted)] mb-8">
                AKR Global supports taxi and private hire businesses across the UK with professional call handling, dispatch support, admin and back-office assistance—so you capture more bookings, reduce staffing pressure, and keep drivers moving.
              </p>
              <div className="flex flex-wrap gap-3">
                <GoldButton href="/contact" variant="primary">Start Free Trial</GoldButton>
                <GoldButton href="/contact" variant="ghost">Get a Quote</GoldButton>
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-4">
              <Image src="/images/home-hero-placeholder.svg" alt="Taxi dispatch operations team placeholder" className="w-full h-auto rounded-xl" width={1200} height={800} />
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-7xl mx-auto px-6">
            <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {highlights.map((item) => (
                <li key={item} className="glass-strong rounded-xl p-4 text-sm leading-relaxed border-l-4 border-[var(--gold)]">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-[var(--bg-soft)] border-y border-black/10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">A Reliable Outsourcing Partner for Taxi Companies</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Taxi operations don’t stop when the phones spike, staff are off, or demand changes suddenly. AKR Global becomes an extension of your team—handling calls, bookings and dispatch support with speed, accuracy and a calm professional tone. We help you protect bookings, improve response times, and maintain service quality during the busiest moments.
              </p>
            </div>
            <div className="glass-strong rounded-2xl p-4">
              <Image src="/images/home-operations-placeholder.svg" alt="Dispatch dashboard placeholder" className="w-full h-auto rounded-xl" width={1000} height={700} />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ['24/7 Call Answering & Dispatch Support', 'Coverage that protects your bookings day and night.'],
                ['Booking Accuracy & Customer Care', 'We confirm key details carefully and keep customers informed.'],
                ['Admin & Back-Office Support', 'We handle time-consuming tasks so your team stays focused.'],
                ['Growth Support (Marketing + Strategy)', 'Support to improve visibility and help increase repeat bookings.'],
              ].map(([title, desc]) => (
                <article key={title} className="glass-strong rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--bg-soft)] border-y border-black/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Services Built for Real Taxi Operations</h2>
            <p className="text-[var(--text-muted)] mb-6">Choose one service or combine multiple to create a complete outsourced operations package.</p>
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              {services.map((service) => (
                <li key={service} className="glass rounded-xl px-4 py-3 text-sm">{service}</li>
              ))}
            </ul>
            <GoldButton href="/services" variant="primary">View All Services</GoldButton>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Simple Setup. Smooth Delivery. Ongoing Improvement.</h2>
            <ol className="grid md:grid-cols-2 gap-4">
              {processSteps.map((step, index) => (
                <li key={step} className="glass-strong rounded-xl p-5">
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--gold-dark)' }}>Step {index + 1}</p>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 bg-[var(--bg-soft)] border-y border-black/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-5">Turn Missed Calls Into Confirmed Bookings</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {outcomes.map((item) => (
                <li key={item} className="glass rounded-xl px-4 py-3 text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-6">What Taxi Operators Say</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((quote) => (
                <blockquote key={quote} className="glass-strong rounded-2xl p-6 text-sm leading-relaxed text-[var(--text-muted)]">
                  {quote}
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Improve Dispatch Performance Without Hiring More Staff?</h2>
            <p className="text-white/80 mb-8">
              Start with a short trial or request a tailored quote. We’ll recommend the right coverage plan for your taxi operation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <GoldButton href="/contact" variant="primary">Start Free Trial</GoldButton>
              <GoldButton href="/contact" variant="ghost">Contact Sales</GoldButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
