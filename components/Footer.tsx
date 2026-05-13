'use client';

import Link from 'next/link';
import { X, Globe, MessageCircle, Star } from 'lucide-react';

const serviceLinks = [
  { label: '24/7 Dispatch & Call Handling', href: '/services' },
  { label: 'Overflow / Peak-Time Cover', href: '/services' },
  { label: 'Administrative Support', href: '/services' },
  { label: 'Accounting & Bookkeeping Support', href: '/services' },
  { label: 'Email & Inbox Management', href: '/services' },
  { label: 'Digital Marketing', href: '/services' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Process', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: X, href: '#', label: 'X (Twitter)' },
  { icon: Globe, href: '#', label: 'LinkedIn' },
  { icon: MessageCircle, href: '#', label: 'Instagram' },
  { icon: Star, href: '#', label: 'Dribbble' },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'rgba(212,175,55,0.15)', backgroundColor: 'var(--bg-mid)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3
              className="text-2xl font-bold tracking-widest mb-3"
              style={{ fontFamily: 'var(--font-cinzel)', color: '#fff' }}
            >
              AKR{' '}
              <span style={{ color: 'var(--gold)' }}>GLOBAL</span>
            </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}>
                24/7 taxi dispatch and operational outsourcing support for UK operators.
              </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
                  style={{ borderColor: 'rgba(212,175,55,0.3)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--gold)';
                    el.style.color = 'var(--gold)';
                    el.style.backgroundColor = 'rgba(212,175,55,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(212,175,55,0.3)';
                    el.style.color = 'rgba(255,255,255,0.6)';
                    el.style.backgroundColor = 'transparent';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-cinzel)' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-cinzel)' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-cinzel)' }}
            >
              Connect
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inter)' }}>
              <li>
                <a href="mailto:info@taximservice.com" className="transition-colors hover:text-white">
                  info@taximservice.com
                </a>
              </li>
              <li>
                <a href="tel:+923109910222" className="transition-colors hover:text-white">
                  +92 310 991 0222
                </a>
              </li>
              <li className="leading-relaxed">
                St 16, Chaklala Scheme-III,<br />
                Chaklala Cantt, Rawalpindi
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t text-xs"
          style={{ borderColor: 'rgba(212,175,55,0.1)', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}
        >
          <p>© {new Date().getFullYear()} AKR Global. All rights reserved.</p>
          <p>
            Crafted with precision by{' '}
            <span style={{ color: 'var(--gold)' }}>AKR Global</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
