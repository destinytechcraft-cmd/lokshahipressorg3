import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from './ui/WireframePrimitives';
import type { DictKey, Language } from '../types';

export interface NavSubItemDef {
  key: DictKey;
  href: string;
}

export interface NavItemDef {
  key: DictKey;
  href: string;
  children?: NavSubItemDef[];
}

export const navItems: NavItemDef[] = [
  { key: 'nav_home', href: '/' },
  { key: 'nav_about', href: '/about' },
  { key: 'nav_org', href: '/organisation' },
  { key: 'nav_leadership', href: '/leadership' },
  { key: 'nav_rights', href: '/rights' },
  { key: 'nav_social', href: '/social-work' },
  {
    key: 'nav_media',
    href: '/media',
    children: [
      { key: 'nav_media_live', href: '/media/live-news' },
      { key: 'nav_media_social', href: '/media/social-media' },
    ],
  },
  { key: 'nav_events', href: '/events' },
  { key: 'nav_roadmap', href: '/roadmap' },
  { key: 'nav_membership', href: '/membership' },
  { key: 'nav_helpdesk', href: '/help-desk' },
  { key: 'nav_gallery', href: '/gallery' },
  { key: 'nav_contact', href: '/contact' },
];

const languages: { value: Language; label: string }[] = [
  { value: 'mr', label: 'मराठी' },
  { value: 'en', label: 'English' },
];

export function LanguageDropdown() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = languages.find((l) => l.value === lang);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-[#172A4A]/25 bg-white px-2.5 sm:px-3.5 py-1.5 md:py-2 text-xs md:text-sm font-bold text-[#172A4A] hover:border-[#E30620] hover:text-[#E30620] transition-colors cursor-pointer shadow-2xs"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg
          className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#2855A5] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
        <span className="hidden sm:inline">{current?.label}</span>
        <span className="sm:hidden text-[11px] font-black uppercase">{lang === 'mr' ? 'मराठी' : 'EN'}</span>
        <svg
          className={cn('h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200 shrink-0', open && 'rotate-180')}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute right-0 z-50 mt-1 w-32 overflow-hidden rounded-xl border border-[#172A4A]/20 bg-white shadow-lg animate-in fade-in zoom-in-95 duration-100"
          role="listbox"
        >
          {languages.map((item) => (
            <li key={item.value} role="option" aria-selected={lang === item.value}>
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setLang(item.value);
                  setOpen(false);
                }}
                className={cn(
                  'block w-full px-3.5 py-2 text-left text-xs font-bold transition-colors cursor-pointer',
                  lang === item.value
                    ? 'bg-[#172A4A] text-white'
                    : 'text-[#172A4A] hover:bg-[#F7F3EC] hover:text-[#E30620]'
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header({
  currentPath,
  onNavigate,
}: {
  currentPath: string;
  onNavigate: (path: string) => void;
}) {
  const { lang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#172A4A]/20 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Tricolor top indicator band */}
      <div className="h-1 w-full flex">
        <div className="h-full flex-1 bg-[#E6530C]" />
        <div className="h-full flex-1 bg-white" />
        <div className="h-full flex-1 bg-[#287A18]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2.5">
        <button
          type="button"
          onClick={() => handleNavClick('/')}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3 md:gap-4 text-left cursor-pointer group flex-1"
        >
          <img
            src={lang === 'en'
              ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svg%20artboard%20copy-ehciRDupxecaWve0aPWnNuQdU7GEvb.svg'
              : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/svg%20artboard-eWBKKf7NmMizh6trK5quOrzLpBPGhS.svg'}
            alt={lang === 'en' ? 'Lokshahi Patrakar Mahasangh logo' : 'लोकशाही पत्रकार महासंघ लोगो'}
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 shrink-0 object-contain transition-transform group-hover:scale-105 drop-shadow-xs"
          />
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-base md:text-xl lg:text-2xl font-black tracking-tight text-[#172A4A] group-hover:text-[#E30620] transition-colors leading-tight line-clamp-2">
              {t('brand')}
            </div>
            <div className="text-[10px] sm:text-xs md:text-[13px] lg:text-sm font-semibold text-[#E30620] flex items-center gap-1.5 leading-tight truncate mt-0.5">
              <span>{t('values')}</span>
            </div>
          </div>
        </button>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
          <LanguageDropdown />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#172A4A]/30 bg-white text-[#172A4A] md:hidden cursor-pointer hover:bg-[#F7F3EC] active:bg-[#172A4A]/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden border-t border-[#172A4A]/10 bg-[#F7F3EC]/70 md:block">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-1.5 md:gap-x-2 gap-y-1.5 px-4 py-2 md:py-2.5">
          {navItems.map((item) => {
            if (item.children && item.children.length > 0) {
              const isChildActive = item.children.some((sub) => currentPath === sub.href);
              const isSelfActive = currentPath === item.href;
              const isActive = isSelfActive || isChildActive;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (openDropdown === item.key) {
                        setOpenDropdown(null);
                      } else {
                        setOpenDropdown(item.key);
                      }
                    }}
                    aria-expanded={openDropdown === item.key}
                    aria-haspopup="true"
                    className={cn(
                      'rounded-lg px-2.5 sm:px-3 md:px-3.5 py-1 md:py-1.5 text-xs md:text-[13px] lg:text-sm font-bold transition-all cursor-pointer select-none inline-flex items-center gap-1.5',
                      isActive
                        ? 'bg-[#172A4A] text-white shadow-2xs'
                        : 'text-[#172A4A]/80 hover:bg-[#172A4A]/10 hover:text-[#E30620]'
                    )}
                  >
                    <span>{t(item.key)}</span>
                    <svg
                      className={cn(
                        'h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200 shrink-0 opacity-75',
                        openDropdown === item.key && 'rotate-180 opacity-100'
                      )}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === item.key && (
                    <div className="absolute left-0 top-full pt-1.5 z-50 w-52 animate-in fade-in zoom-in-95 duration-100">
                      <div className="overflow-hidden rounded-xl border-2 border-[#172A4A]/20 bg-white py-1.5 shadow-xl ring-1 ring-black/5">
                        {item.children.map((sub) => {
                          const isSubActive = currentPath === sub.href;
                          return (
                            <button
                              key={sub.href}
                              type="button"
                              onClick={() => {
                                handleNavClick(sub.href);
                                setOpenDropdown(null);
                              }}
                              className={cn(
                                'flex items-center gap-2.5 w-full px-3.5 py-2 text-left text-xs sm:text-sm font-bold transition-all cursor-pointer',
                                isSubActive
                                  ? 'bg-[#172A4A] text-white'
                                  : 'text-[#172A4A] hover:bg-[#F7F3EC] hover:text-[#E30620]'
                              )}
                            >
                              {sub.key === 'nav_media_live' ? (
                                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse shrink-0" />
                              ) : (
                                <span className="flex h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                              )}
                              <span>{t(sub.key)}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = currentPath === item.href;
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'rounded-lg px-2.5 sm:px-3 md:px-3.5 py-1 md:py-1.5 text-xs md:text-[13px] lg:text-sm font-bold transition-all cursor-pointer select-none inline-flex items-center gap-1.5',
                  isActive
                    ? 'bg-[#172A4A] text-white shadow-2xs'
                    : 'text-[#172A4A]/80 hover:bg-[#172A4A]/10 hover:text-[#E30620]'
                )}
              >
                <span>{t(item.key)}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav id="mobile-nav" className="border-t border-[#172A4A]/15 md:hidden bg-white shadow-xl animate-in slide-in-from-top-2 duration-150 max-h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => {
              if (item.children && item.children.length > 0) {
                const isChildActive = item.children.some((sub) => currentPath === sub.href);
                const isSelfActive = currentPath === item.href;
                const isActive = isSelfActive || isChildActive;

                return (
                  <li key={item.href} className="space-y-1">
                    <div
                      className={cn(
                        'flex items-center justify-between w-full rounded-lg px-3.5 py-2.5 text-sm font-bold transition-colors',
                        isActive
                          ? 'bg-[#172A4A] text-white'
                          : 'text-[#172A4A] hover:bg-[#F7F3EC]'
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className="text-left flex-1"
                      >
                        {t(item.key)}
                      </button>
                      <span className="text-xs font-normal opacity-75">
                        ▼
                      </span>
                    </div>

                    {/* Sub items */}
                    <div className="pl-3 space-y-1">
                      {item.children.map((sub) => {
                        const isSubActive = currentPath === sub.href;
                        return (
                          <button
                            key={sub.href}
                            type="button"
                            onClick={() => handleNavClick(sub.href)}
                            className={cn(
                              'flex items-center gap-2.5 w-full text-left rounded-lg px-3 py-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer',
                              isSubActive
                                ? 'bg-[#E30620] text-white font-black'
                                : 'text-[#172A4A]/85 hover:bg-[#F7F3EC] hover:text-[#E30620] bg-neutral-50'
                            )}
                          >
                            {sub.key === 'nav_media_live' ? (
                              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse shrink-0" />
                            ) : (
                              <span className="flex h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                            )}
                            <span>{t(sub.key)}</span>
                          </button>
                        );
                      })}
                    </div>
                  </li>
                );
              }

              const isActive = currentPath === item.href;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex items-center gap-2 w-full text-left rounded-lg px-3.5 py-2.5 text-sm font-bold transition-colors cursor-pointer',
                      isActive
                        ? 'bg-[#172A4A] text-white'
                        : 'text-[#172A4A] hover:bg-[#F7F3EC] hover:text-[#E30620]'
                    )}
                  >
                    <span>{t(item.key)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Tricolor bottom indicator band - consistently visible across entire page scroll */}
      <div className="h-1 sm:h-1.5 w-full flex shrink-0 shadow-xs">
        <div className="h-full flex-1 bg-[#E6530C]" />
        <div className="h-full flex-1 bg-white border-y border-black/5" />
        <div className="h-full flex-1 bg-[#287A18]" />
      </div>
    </header>
  );
}
