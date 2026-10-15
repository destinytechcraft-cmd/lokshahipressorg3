import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface HomeMembershipPreviewProps {
  onSeeMore: () => void;
}

export function HomeMembershipPreview({ onSeeMore }: HomeMembershipPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-left">
      <div className="rounded-2xl border-2 border-blue-500/70 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/20 p-6 sm:p-7 shadow-xs transition-all hover:border-[#172A4A]/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 max-w-4xl">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-[#172A4A] tracking-tight">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारताचे सदस्य व्हा' : 'Become a Member of Lokshahi Patrakar Mahasangh Bharat'}
            </h3>
            <p className="text-xs sm:text-sm font-black text-[#E30620] tracking-wide">
              {lang === 'mr' ? 'एकजुटीतून शक्ती... संघटनेतून हक्क...' : 'Strength through Unity... Rights through Organisation...'}
            </p>
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/90 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'पत्रकारिता क्षेत्रात कार्यरत असाल किंवा समाजहितासाठी काम करत असाल, महासंघाच्या संघटनात्मक कार्याशी जोडले जाण्यासाठी सदस्यत्वाचा पर्याय उपलब्ध आहे. संपूर्ण देशभरातील पत्रकारांच्या हक्कांचे संरक्षण, सहकार्य आणि सन्मानासाठी लोकशाही परिवार सदैव कटिबद्ध आहे.'
                : 'Whether actively reporting in media or serving public welfare, membership connects you with our nationwide institutional movement. The Lokshahi family stands resolutely for your protection, mutual cooperation, and dignity.'}
            </p>
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
