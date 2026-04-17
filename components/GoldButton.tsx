import Link from 'next/link';

interface GoldButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

export default function GoldButton({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
}: GoldButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border hover:scale-105 active:scale-95';

  const primaryStyles =
    'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black';

  const ghostStyles =
    'border-white/30 text-white/80 hover:border-[var(--gold)] hover:text-[var(--gold)]';

  const variantStyle = variant === 'primary' ? primaryStyles : ghostStyles;
  const combinedClass = `${baseStyles} ${variantStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass} style={{ fontFamily: 'var(--font-inter)' }}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {children}
    </button>
  );
}
