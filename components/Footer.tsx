'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

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
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1TyaN7k4wE/?mibextid=wwXIfr',
    Icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/akrglobaloutsourcing?igsh=MWRyM29zeDJ1d2NqaA==',
    Icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/akr-global-outsourcing/',
    Icon: FaLinkedinIn,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/447885432707',
    Icon: FaWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: 'rgba(212,175,55,0.15)',
        backgroundColor: 'var(--bg-mid)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center group mb-4">
              <Image
                src="/logo.png"
                alt="AKR Global Logo"
                width={160}
                height={45}
                priority
                className="h-20 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-inter)',
              }}
            >
              24/7 taxi dispatch and operational outsourcing support for UK
              operators.
            </p>

            {/* Social Icons (React Icons - FontAwesome) */}
            <div className="flex gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgba(212,175,55,0.3)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
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
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{
                color: 'var(--gold)',
                fontFamily: 'var(--font-cinzel)',
              }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontFamily: 'var(--font-inter)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        'var(--gold)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        'rgba(255,255,255,0.5)';
                    }}
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
              style={{
                color: 'var(--gold)',
                fontFamily: 'var(--font-cinzel)',
              }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontFamily: 'var(--font-inter)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        'var(--gold)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        'rgba(255,255,255,0.5)';
                    }}
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
              style={{
                color: 'var(--gold)',
                fontFamily: 'var(--font-cinzel)',
              }}
            >
              Connect
            </h4>
            <ul
              className="space-y-3 text-sm"
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-inter)',
              }}
            >
              <li>
                <a
                  href="mailto:info@akrglobaloutsourcing.com"
                  className="transition-colors hover:text-white"
                >
                  info@akrglobaloutsourcing.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923109910222"
                  className="transition-colors hover:text-white"
                >
                  +92 310 9910222
                </a>
              </li>
              <li className="leading-relaxed">
                House # AS 11 Row 2, NCEHS
                <br />
                Gulshan-e-Iqbal Block 10-A, Karachi
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t text-xs"
          style={{
            borderColor: 'rgba(212,175,55,0.1)',
            color: 'rgba(255,255,255,0.35)',
            fontFamily: 'var(--font-inter)',
          }}
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