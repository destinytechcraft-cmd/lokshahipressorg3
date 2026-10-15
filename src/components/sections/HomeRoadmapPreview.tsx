import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, ArrowRight } from 'lucide-react';

interface HomeRoadmapPreviewProps {
  onSeeMore: () => void;
}

export function HomeRoadmapPreview({ onSeeMore }: HomeRoadmapPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-3 text-left">
      <div className="relative rounded-3xl border-2 border-indigo-500/40 bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:border-indigo-600/60">
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-[#172A4A]" />

        {/* Subtle Watermark Icon in Background */}
        <div className="absolute -right-8 -bottom-8 text-indigo-900/5 pointer-events-none group-hover:scale-105 transition-transform duration-500">
          <Compass size={220} strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-4xl">
            {/* Eyebrow Header */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <Compass className="h-4 w-4 text-indigo-200" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100/80 px-3 py-1 text-xs font-black uppercase tracking-wider text-indigo-700 border border-indigo-200">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse" />
                {lang === 'mr' ? 'धोरणात्मक वाटचाल • व्हिजन २०२६-२०३०' : 'STRATEGIC VISION • ROADMAP 2026-2030'}
              </span>
            </div>

            {/* Main Headline */}
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight group-hover:text-indigo-600 transition-colors">
              {lang === 'mr' ? 'भविष्यातील रोडमॅप व धोरणात्मक वाटचाल' : 'Future Roadmap & Strategic Vision'}
            </h3>

            {/* Featured Sub-card */}
            <div className="rounded-2xl border border-indigo-100 bg-white/90 p-4 shadow-2xs space-y-1.5">
              <h4 className="text-base sm:text-lg font-black text-[#172A4A] tracking-tight flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                <span>{lang === 'mr' ? 'भारतभर सक्षम पत्रकार संघटन उभारणी' : 'Building a Strong Journalist Network Across India'}</span>
              </h4>
              <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/85 leading-relaxed font-medium">
                {lang === 'mr'
                  ? 'लोकशाही पत्रकार महासंघ भारत आगामी काळात पत्रकारांच्या प्रश्नांना अधिक व्यापक आणि संघटित स्वरूप देण्यासाठी देशभरातील पत्रकारांना एकत्र आणण्याचा आणखीन मोठ्या प्रमाणात प्रयत्न करणार आहे.'
                  : 'Lokshahi Patrakar Mahasangh Bharat will further expand efforts to unite media professionals nationwide, giving their rights and challenges a stronger, structured voice.'}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="shrink-0 self-start lg:self-center pt-2 lg:pt-0">
            <button
              type="button"
              onClick={onSeeMore}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#172A4A] hover:bg-indigo-600 text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-black shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group/btn active:scale-[0.98]"
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
