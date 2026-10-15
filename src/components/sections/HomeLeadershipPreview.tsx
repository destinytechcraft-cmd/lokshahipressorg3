import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface HomeLeadershipPreviewProps {
  onSeeMore: () => void;
}

export function HomeLeadershipPreview({ onSeeMore }: HomeLeadershipPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-2.5 sm:py-3 text-left">
      <div className="relative rounded-2xl border-2 border-blue-500/70 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/20 p-6 sm:p-7 shadow-xs transition-all hover:border-[#172A4A]/50 overflow-hidden">
        {/* Top Accent Stripe matching Image 1 */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E30620] via-[#E6530C] to-[#172A4A]" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 max-w-4xl">
            {/* Eyebrow Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.15em] text-[#E30620] flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#E30620]" />
                {lang === 'mr' ? 'राष्ट्रीय व राज्यस्तरीय नेतृत्व' : 'National & State Leadership'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-neutral-600 bg-[#172A4A]/5 px-2.5 py-0.5 rounded-full border border-[#172A4A]/10">
                {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ, भारत' : 'Lokshahi Patrakar Mahasangh, Bharat'}
              </span>
            </div>

            {/* Main Headline */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#172A4A] tracking-tight mb-2">
              {lang === 'mr' ? 'टीम लोकशाही — राष्ट्रीय व राज्यस्तरीय नेतृत्व' : 'Team Lokshahi — National & State Leadership'}
            </h3>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/90 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'पत्रकार संरक्षण, न्यायव्यवस्था, सामाजिक समता आणि लोकशाही मूल्यांसाठी अविरत संघर्ष करणारे लोकशाही पत्रकार महासंघाचे मार्गदर्शक व कार्यकारी नेतृत्व.'
                : 'The governing leadership and council guiding Lokshahi Patrakar Mahasangh in safeguarding journalist rights, judicial oversight, and democratic freedoms.'}
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 pt-1 md:pt-0">
            <button
              type="button"
              onClick={onSeeMore}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#172A4A] hover:bg-[#0f1c32] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer group active:scale-[0.98]"
            >
              <span>{lang === 'mr' ? 'अधिक पाहा (See More)' : 'See More'}</span>
              <span className="transition-transform group-hover:translate-x-1 font-black">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
