import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface HomeRightsPreviewProps {
  onSeeMore: () => void;
}

export function HomeRightsPreview({ onSeeMore }: HomeRightsPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-left">
      <div className="rounded-2xl border-2 border-blue-500/70 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/20 p-6 sm:p-7 shadow-xs transition-all hover:border-[#172A4A]/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 max-w-4xl">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-[#172A4A] tracking-tight">
              {lang === 'mr' ? 'पत्रकारांचे न्याय, हक्क आणि अधिकार' : "Journalists' Justice, Rights & Dignity"}
            </h3>
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/90 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'पत्रकार हा लोकशाही व्यवस्थेतील अत्यंत महत्त्वाचा घटक आहे. बातमीच्या माध्यमातून समाजातील प्रश्न शासन-प्रशासन आणि जनतेसमोर आणताना पत्रकारांना अनेक व्यावसायिक, सामाजिक आणि कार्यक्षेत्रातील आव्हानांना सामोरे जावे लागते.'
                : 'Journalists are a vital pillar of the democratic system. While bringing societal issues before the government, administration, and public through news reporting, journalists confront numerous professional, social, and on-field challenges.'}
            </p>
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/90 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारत पत्रकारांच्या न्याय हक्कांसाठी संविधानिक, कायदेशीर आणि लोकशाही मार्गाने आवाज उठविण्याच्या भूमिकेत सातत्याने कार्यरत आहे.'
                : 'Lokshahi Patrakar Mahasangh Bharat is steadfastly dedicated to championing journalists’ legal rights and safety through constitutional, judicial, and democratic means.'}
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
