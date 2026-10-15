import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { IdCard, ArrowRight } from 'lucide-react';

interface HomeMembershipPreviewProps {
  onSeeMore: () => void;
}

export function HomeMembershipPreview({ onSeeMore }: HomeMembershipPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-3 text-left">
      <div className="relative rounded-3xl border-2 border-amber-500/50 bg-gradient-to-br from-amber-50/70 via-white to-red-50/40 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:border-[#E30620]/60">
        {/* National Tricolor Top Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        {/* Subtle Watermark Icon in Background */}
        <div className="absolute -right-8 -bottom-8 text-amber-900/5 pointer-events-none group-hover:scale-105 transition-transform duration-500">
          <IdCard size={220} strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-4xl">
            {/* Eyebrow Header */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E30620] text-white shadow-sm">
                <IdCard className="h-4 w-4 text-amber-200" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100/80 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#E30620] border border-red-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E30620] animate-pulse" />
                {lang === 'mr' ? 'सदस्य नोंदणी • ओळखपत्र व प्रमाणपत्र' : 'NATIONWIDE MEMBERSHIP • ACCREDITED ID & CERTIFICATE'}
              </span>
            </div>

            {/* Main Headline */}
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight group-hover:text-[#E30620] transition-colors">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारताचे सदस्य व्हा' : 'Become a Member of Lokshahi Patrakar Mahasangh Bharat'}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/85 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'पत्रकारिता क्षेत्रात कार्यरत असाल किंवा समाजहितासाठी काम करत असाल, महासंघाच्या संघटनात्मक कार्याशी जोडले जाण्यासाठी सदस्यत्वाचा पर्याय उपलब्ध आहे. संपूर्ण देशभरातील पत्रकारांच्या हक्कांचे संरक्षण, सहकार्य आणि सन्मानासाठी लोकशाही परिवार सदैव कटिबद्ध आहे.'
                : 'Whether actively reporting in media or serving public welfare, membership connects you with our nationwide institutional movement. The Lokshahi family stands resolutely for your protection, mutual cooperation, and dignity.'}
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 self-start lg:self-center pt-2 lg:pt-0">
            <button
              type="button"
              onClick={onSeeMore}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#E30620] hover:bg-[#c7051b] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-black shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group/btn active:scale-[0.98]"
            >
              <span>{lang === 'mr' ? 'सभासद नोंदणी' : 'Membership Registration'}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
