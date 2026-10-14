import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { ExternalLink } from 'lucide-react';

const EMBED_URL = 'https://sites.google.com/view/lokshahipressorg/home';

export function DigitalBlogSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell
      id="digital-press-blog"
      title={t('sec_media')}
      icon={
        <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#E30620] text-white text-xs sm:text-sm font-black shadow-xs shrink-0 select-none">
          ★
        </span>
      }
    >
      <div className="space-y-6 sm:space-y-8 text-left">
        {/* 1. Digital Portal Header Bar */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#172A4A]/15 bg-white shadow-xs">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#E30620]">
              {lang === 'mr' ? 'अधिकृत डिजिटल न्यूज व मीडिया पोर्टल' : 'OFFICIAL DIGITAL NEWS PORTAL'}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Live Portal</span>
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
            {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत — ताज्या बातम्या व प्रसिद्धीपत्रके' : 'Lokshahi Patrakar Mahasangh Bharat — News & Media Portal'}
          </h3>
        </div>

        {/* 2. Official Blog & Press Release Display - Embedded directly without reconstruction */}
        <div className="rounded-3xl border-2 border-[#172A4A]/20 bg-white overflow-hidden shadow-md">
          {/* Browser-style address bar header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-[#172A4A] text-white/90 border-b border-[#172A4A]/20 text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
              </span>
              {/* Replaced 'Official Press Blog' with direct link https://sites.google.com/view/lokshahipressorg/home */}
              <a
                href={EMBED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-white/90 hover:text-white hover:underline flex items-center gap-1.5 ml-2 font-mono truncate"
                title={EMBED_URL}
              >
                <span>🔒</span>
                <span className="truncate">{EMBED_URL}</span>
              </a>
            </div>

            {/* Direct Open Link */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={EMBED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-amber-300 hover:text-amber-200 font-bold bg-amber-500/20 hover:bg-amber-500/30 px-3 py-1 rounded-md transition-colors"
              >
                <span>{lang === 'mr' ? 'थेट साइट उघडा' : 'Open Live Site'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Embedded View: Keeping original site as embedded without reconstructing */}
          <div className="relative w-full bg-white flex flex-col min-h-[750px] sm:min-h-[900px] md:min-h-[1100px]">
            <iframe
              src="/api/embed-site"
              title="Lokshahi Press Org Google Site"
              className="w-full border-0 h-[750px] sm:h-[900px] md:h-[1100px] bg-white transition-all duration-300"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
