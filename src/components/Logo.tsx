import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'auto' | 'marathi' | 'empty';
  title?: string;
  alt?: string;
}

/**
 * Official Lokshahi Patrakar Mahasangh Logo component.
 * Renders the crisp official emblem with automatic language adaptation.
 */
export function Logo({
  className = 'h-10 w-10',
  size,
  variant = 'auto',
  title,
  alt,
}: LogoProps) {
  const langContext = useContext(LanguageContext);
  const lang = langContext?.lang || 'mr';

  if (variant === 'empty') {
    return (
      <div
        style={size ? { width: size, height: size } : undefined}
        className={`rounded-full border-2 border-dashed border-current/40 bg-current/5 shrink-0 transition-all ${className}`}
        aria-label={title || 'Logo placeholder (empty circle)'}
        role="img"
      />
    );
  }

  const isEnglish = variant !== 'marathi' && lang === 'en';
  const primarySrc = '/LPMB_ANTON.png';
  const fallbackSrc = '/logo-official.png';

  const logoAlt =
    alt ||
    title ||
    (isEnglish ? 'Lokshahi Patrakar Mahasangh Bharat Logo' : 'लोकशाही पत्रकार महासंघ भारत लोगो');

  return (
    <img
      src={primarySrc}
      onError={(e) => {
        if (e.currentTarget.src !== fallbackSrc) {
          e.currentTarget.src = fallbackSrc;
        }
      }}
      alt={logoAlt}
      title={title || logoAlt}
      style={size ? { width: size, height: size } : undefined}
      className={`shrink-0 object-contain rounded-full ${className}`}
    />
  );
}

export function MarathiLogoGraphic(props: LogoProps) {
  return <Logo {...props} variant="marathi" />;
}
