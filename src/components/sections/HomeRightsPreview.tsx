import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Scale, ArrowRight } from 'lucide-react';

interface HomeRightsPreviewProps {
  onSeeMore: () => void;
}

export function HomeRightsPreview({ onSeeMore }: HomeRightsPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-3 text-left">
      <div className="relative rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:border-[#287A18]/60">
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#287A18] via-[#10B981] to-[#172A4A]" />

        {/* Subtle Watermark Icon in Background */}
        <div className="absolute -right-8 -bottom-8 text-emerald-900/5 pointer-events-none group-hover:scale-105 transition-transform duration-500">
          <Scale size={220} strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-4xl">
            {/* Eyebrow Header */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#287A18] text-white shadow-sm">
                <Scale className="h-4 w-4 text-emerald-200" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#287A18] border border-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[#287A18] animate-pulse" />
                {lang === 'mr' ? 'संविधानिक हक्क व संरक्षण' : 'CONSTITUTIONAL RIGHTS & LEGAL DEFENSE'}
              </span>
            </div>

            {/* Main Headline */}
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight group-hover:text-[#287A18] transition-colors">
              {lang === 'mr' ? 'पत्रकारांचे न्याय, हक्क आणि अधिकार' : "Journalists' Justice, Rights & Dignity"}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/85 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'पत्रकार हा लोकशाही व्यवस्थेतील अत्यंत महत्त्वाचा घटक आहे. बातमीच्या माध्यमातून समाजातील प्रश्न शासन-प्रशासन आणि जनतेसमोर आणताना पत्रकारांना अनेक व्यावसायिक, सामाजिक आणि कार्यक्षेत्रातील आव्हानांना सामोरे जावे लागते. लोकशाही पत्रकार महासंघ भारत पत्रकारांच्या न्याय हक्कांसाठी संविधानिक, कायदेशीर आणि लोकशाही मार्गाने आवाज उठविण्याच्या भूमिकेत सातत्याने कार्यरत आहे.'
                : 'Journalists are a vital pillar of the democratic system. While bringing societal issues before the government, administration, and public through news reporting, journalists confront numerous professional, social, and on-field challenges. Lokshahi Patrakar Mahasangh Bharat is steadfastly dedicated to championing journalists’ legal rights and safety through constitutional, judicial, and democratic means.'}
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 self-start lg:self-center pt-2 lg:pt-0">
            <button
              type="button"
              onClick={onSeeMore}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#172A4A] hover:bg-[#287A18] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-black shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group/btn active:scale-[0.98]"
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
