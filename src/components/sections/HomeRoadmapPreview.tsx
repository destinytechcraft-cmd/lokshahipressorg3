import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface HomeRoadmapPreviewProps {
  onSeeMore: () => void;
}

export function HomeRoadmapPreview({ onSeeMore }: HomeRoadmapPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-2.5 sm:py-3 text-left">
      <div className="rounded-2xl border-2 border-blue-500/70 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/20 p-6 sm:p-7 shadow-xs transition-all hover:border-[#172A4A]/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 max-w-4xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#172A4A] tracking-tight mb-2">
              {lang === 'mr' ? 'भविष्यातील रोडमॅप व धोरणात्मक वाटचाल' : 'Future Roadmap & Strategic Vision'}
            </h3>
            <div className="rounded-xl border border-[#172A4A]/10 bg-white/90 p-3.5 sm:p-4 space-y-1">
              <h4 className="text-base sm:text-lg font-black text-[#172A4A] tracking-tight">
                {lang === 'mr' ? 'भारतभर सक्षम पत्रकार संघटन उभारणी' : 'Building a Strong Journalist Network Across India'}
              </h4>
              <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/90 leading-relaxed font-medium">
                {lang === 'mr'
                  ? 'लोकशाही पत्रकार महासंघ भारत आगामी काळात पत्रकारांच्या प्रश्नांना अधिक व्यापक आणि संघटित स्वरूप देण्यासाठी देशभरातील पत्रकारांना एकत्र आणण्याचा आणखीन मोठ्या प्रमाणात प्रयत्न करणार आहे.'
                  : 'Lokshahi Patrakar Mahasangh Bharat will further expand efforts to unite media professionals nationwide, giving their rights and challenges a stronger, structured voice.'}
              </p>
            </div>
          </div>

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
