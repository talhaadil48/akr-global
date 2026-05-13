'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const serviceLinks = [
  { label: '24/7 Dispatch & Call Handling', href: '/services' },
  { label: 'Overflow / Peak-Time Cover', href: '/services' },
  { label: 'Administrative Support', href: '/services' },
  { label: 'Accounting & Bookkeeping', href: '/services' },
  { label: 'Digital Marketing', href: '/services' },
];

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border-soft)', backgroundColor: '#111' }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold tracking-widest mb-3 text-white" style={{ fontFamily: 'var(--font-cinzel)' }}>
              AKR <span style={{ color: 'var(--gold)' }}>GLOBAL</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
              24/7 taxi dispatch outsourcing support for UK operators.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-[var(--gold)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-[var(--gold)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2"><Phone size={15} className="mt-0.5" /> <a href="tel:+923109910222">+92 310 991 0222</a></li>
              <li className="flex items-start gap-2"><Mail size={15} className="mt-0.5" /> <a href="mailto:info@taximservice.com">info@taximservice.com</a></li>
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5" /> St 16, Chaklala Scheme-III, Chaklala Cantt, Rawalpindi</li>
              <li className="text-white/65">UK service coverage supported with dedicated taxi workflows and SLA-based operations.</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t text-xs text-white/65 flex flex-col md:flex-row items-center justify-between gap-2" style={{ borderColor: 'rgba(255,255,255,0.16)' }}>
          <p>© {new Date().getFullYear()} AKR Global. All rights reserved.</p>
          <p>Taxi operations support built for UK operators.</p>
        </div>
      </div>
    </footer>
  );
}
