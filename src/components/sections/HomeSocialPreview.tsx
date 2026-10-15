import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface HomeSocialPreviewProps {
  onSeeMore: () => void;
}

export function HomeSocialPreview({ onSeeMore }: HomeSocialPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-left">
      <div className="rounded-2xl border-2 border-blue-500/70 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/20 p-6 sm:p-7 shadow-xs transition-all hover:border-[#172A4A]/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 max-w-4xl">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-[#172A4A] tracking-tight">
              {lang === 'mr' ? 'पत्रकारितेसोबत सामाजिक बांधिलकी' : 'Social Commitment Alongside Journalism'}
            </h3>
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/90 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारताचे कार्य केवळ पत्रकारांच्या प्रश्नांपुरते मर्यादित नाही. गेल्या अनेक वर्षांपासून महासंघाच्या माध्यमातून विविध समाजोपयोगी, जनजागृतीपर आणि सामाजिक बांधिलकीचे कार्यक्रम आयोजित करण्यात आले आहेत.'
                : 'Lokshahi Patrakar Mahasangh Bharat’s mission extends far beyond media-specific concerns. Over the years, the federation has organized extensive community welfare, public awareness, and civic empowerment programs.'}
            </p>
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/90 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'समाजातील गरजू व्यक्ती, सामान्य नागरिक, महिला सक्षमीकरण, विद्यार्थी आणि विविध सामाजिक घटकांपर्यंत पोहोचून समाजहिताच्या उपक्रमांना प्रोत्साहन देणे हा महासंघाच्या कार्याचा महत्त्वाचा भाग आहे.'
                : 'Reaching out to marginalized citizens, women empowerment drives, student welfare, and underprivileged communities to foster public good is a central pillar of our organizational ethos.'}
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
