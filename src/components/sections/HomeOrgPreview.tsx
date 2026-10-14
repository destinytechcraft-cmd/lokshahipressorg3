import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface HomeOrgPreviewProps {
  onSeeMore: () => void;
}

export function HomeOrgPreview({ onSeeMore }: HomeOrgPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-2 pb-4 sm:pb-6 text-left">
      <div className="rounded-2xl border-2 border-neutral-300 bg-neutral-50/90 p-5 sm:p-7 shadow-xs transition-all hover:border-[#172A4A]/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-2 max-w-4xl">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-neutral-900 tracking-tight">
              {lang === 'mr' ? 'संघटनेची रचना व अधिकार स्तर' : 'Organisational Structure & Hierarchy'}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारताने देशातील पत्रकारांच्या हक्कांचे संरक्षण, सक्षमीकरण आणि जबाबदार पत्रकारितेच्या प्रसारासाठी राष्ट्रीय पातळीपासून गावपातळीपर्यंत एक मजबूत, पारदर्शक आणि लोकशाहीवादी संरचना उभी केली आहे.'
                : 'Lokshahi Patrakar Mahasangh Bharat has instituted a robust, decentralized democratic structure ranging from apex national policymaking bodies to grassroots rural networks, ensuring nationwide press defense and empowerment.'}
            </p>
          </div>

          <div className="shrink-0 pt-1 md:pt-0">
            <button
              type="button"
              onClick={onSeeMore}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#172A4A] hover:bg-[#0f1c32] text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer group active:scale-[0.98]"
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
