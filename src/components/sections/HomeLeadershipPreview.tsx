import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Users2, ArrowRight } from 'lucide-react';

interface HomeLeadershipPreviewProps {
  onSeeMore: () => void;
}

export function HomeLeadershipPreview({ onSeeMore }: HomeLeadershipPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-3 text-left">
      <div className="relative rounded-3xl border-2 border-red-500/40 bg-gradient-to-br from-red-50/60 via-white to-amber-50/40 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:border-[#E30620]/60">
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E30620] via-[#E6530C] to-[#172A4A]" />

        {/* Subtle Watermark Icon in Background */}
        <div className="absolute -right-8 -bottom-8 text-red-900/5 pointer-events-none group-hover:scale-105 transition-transform duration-500">
          <Users2 size={220} strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-4xl">
            {/* Eyebrow Header */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E30620] text-white shadow-sm">
                <Users2 className="h-4 w-4 text-white" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100/80 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#E30620] border border-red-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E30620] animate-pulse" />
                {lang === 'mr' ? 'मार्गदर्शक मंडळ व नेतृत्व' : 'GOVERNING LEADERSHIP & COUNCIL'}
              </span>
              <span className="text-xs font-bold text-neutral-600 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200 hidden sm:inline">
                {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ, भारत' : 'Lokshahi Patrakar Mahasangh, Bharat'}
              </span>
            </div>

            {/* Main Headline */}
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight group-hover:text-[#E30620] transition-colors">
              {lang === 'mr' ? 'टीम लोकशाही — राष्ट्रीय व राज्यस्तरीय नेतृत्व' : 'Team Lokshahi — National & State Leadership'}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/85 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'पत्रकार संरक्षण, न्यायव्यवस्था, सामाजिक समता आणि लोकशाही मूल्यांसाठी अविरत संघर्ष करणारे लोकशाही पत्रकार महासंघाचे मार्गदर्शक व कार्यकारी नेतृत्व.'
                : 'The governing leadership and council guiding Lokshahi Patrakar Mahasangh in safeguarding journalist rights, judicial oversight, and democratic freedoms.'}
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 self-start lg:self-center pt-2 lg:pt-0">
            <button
              type="button"
              onClick={onSeeMore}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#172A4A] hover:bg-[#E30620] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-black shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group/btn active:scale-[0.98]"
            >
              <span>{lang === 'mr' ? 'अधिक पाहा' : 'See More'}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
