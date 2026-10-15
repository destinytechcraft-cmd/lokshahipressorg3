import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Network, ArrowRight } from 'lucide-react';

interface HomeOrgPreviewProps {
  onSeeMore: () => void;
}

export function HomeOrgPreview({ onSeeMore }: HomeOrgPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-3 text-left">
      <div className="relative rounded-3xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:border-[#172A4A]/50">
        {/* Top Accent Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#172A4A] via-[#1877F2] to-[#2855A5]" />

        {/* Subtle Watermark Icon in Background */}
        <div className="absolute -right-8 -bottom-8 text-blue-900/5 pointer-events-none group-hover:scale-105 transition-transform duration-500">
          <Network size={220} strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-4xl">
            {/* Eyebrow Tag with Icon */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#172A4A] text-white shadow-sm">
                <Network className="h-4 w-4 text-blue-300" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#172A4A] border border-blue-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1877F2] animate-pulse" />
                {lang === 'mr' ? 'संघटन संरचना • त्रिस्तरीय व्यवस्था' : 'ORGANISATIONAL STRUCTURE • 3-TIER APEX BODY'}
              </span>
            </div>

            {/* Main Headline */}
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight group-hover:text-[#1877F2] transition-colors">
              {lang === 'mr' ? 'संघटनेची रचना व अधिकार स्तर' : 'Organisational Structure & Hierarchy'}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/85 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारताने देशातील पत्रकारांच्या हक्कांचे संरक्षण, सक्षमीकरण आणि जबाबदार पत्रकारितेच्या प्रसारासाठी राष्ट्रीय पातळीपासून गावपातळीपर्यंत एक मजबूत, पारदर्शक आणि लोकशाहीवादी संरचना उभी केली आहे.'
                : 'Lokshahi Patrakar Mahasangh Bharat has instituted a robust, decentralized democratic structure ranging from apex national policymaking bodies to grassroots rural networks, ensuring nationwide press defense and empowerment.'}
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 self-start lg:self-center pt-2 lg:pt-0">
            <button
              type="button"
              onClick={onSeeMore}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#172A4A] hover:bg-[#1877F2] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-black shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group/btn active:scale-[0.98]"
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
