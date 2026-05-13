import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoldButton from '@/components/GoldButton';

const values = [
  'Reliability: If your line rings, someone answers—promptly and professionally.',
  'Accuracy: Booking details matter. We reduce mistakes and rework.',
  'Customer Care: Calm, respectful communication protects your reputation.',
  'Accountability: Clear processes, reporting and performance standards.',
  'Partnership: We operate as part of your team—not a generic call centre.',
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
      <main className="bg-[var(--bg-main)] text-[var(--text-main)]">
        <section className="pt-36 pb-16 bg-[var(--bg-soft)] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-4">Built to Support UK Taxi Operators With Always-On Operations</h1>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">
                AKR Global exists to help taxi and private hire businesses answer faster, dispatch smoother, and operate reliably—without constant pressure from staffing gaps, night cover, and peak-time overload.
              </p>
            </div>
            <div className="glass-strong rounded-2xl p-4">
              <img src="/images/about-hero-placeholder.svg" alt="Taxi operations team placeholder" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Our Story</h2>
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
              <p>
                Taxi companies operate in real time. A delay of seconds can mean a lost booking—and when demand spikes, it’s difficult to recruit, train and retain reliable dispatch staff quickly. Customer expectations keep rising, while the phones keep ringing.
              </p>
              <p>
                AKR Global was created to provide trained operational support that blends into your business like an in-house team. We follow your call style, booking rules, and service standards—so customers receive a consistent experience and drivers get clear job flow.
              </p>
              <p>
                Our approach is structured and measurable: quality checks, reporting, and continuous improvement. Clients don’t just get “coverage”—they get better performance and stronger customer experience.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--bg-soft)] border-y border-black/10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-5">What We Believe</h2>
              <ul className="space-y-3">
                {values.map((value) => (
                  <li key={value} className="glass-strong rounded-xl p-4 text-sm leading-relaxed">{value}</li>
                ))}
              </ul>
            </div>
            <div className="glass-strong rounded-2xl p-4">
              <img src="/images/about-values-placeholder.svg" alt="Service quality placeholder" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Who We Work With</h2>
              <ul className="grid gap-3">
                {audiences.map((audience) => (
                  <li key={audience} className="glass rounded-lg px-4 py-3 text-sm">{audience}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Not a Scripted Call Centre—A Taxi Operations Partner</h2>
              <p className="text-[var(--text-muted)] leading-relaxed">
                We tailor procedures to your business: how you confirm addresses, what details you collect, how you handle delays, and how you communicate with drivers and customers. Your customers experience your brand—just with stronger coverage and smoother operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-8">Let’s Build a More Reliable Taxi Operation Together</h2>
            <div className="flex flex-wrap justify-center gap-3">
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
