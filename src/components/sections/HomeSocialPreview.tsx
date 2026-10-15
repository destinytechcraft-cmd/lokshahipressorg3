import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HeartHandshake, ArrowRight } from 'lucide-react';

interface HomeSocialPreviewProps {
  onSeeMore: () => void;
}

export function HomeSocialPreview({ onSeeMore }: HomeSocialPreviewProps) {
  const { lang } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-3 text-left">
      <div className="relative rounded-3xl border-2 border-orange-500/40 bg-gradient-to-br from-orange-50/60 via-white to-amber-50/40 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:border-[#E6530C]/60">
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E6530C] via-[#F97316] to-[#172A4A]" />

        {/* Subtle Watermark Icon in Background */}
        <div className="absolute -right-8 -bottom-8 text-orange-900/5 pointer-events-none group-hover:scale-105 transition-transform duration-500">
          <HeartHandshake size={220} strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-4xl">
            {/* Eyebrow Header */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E6530C] text-white shadow-sm">
                <HeartHandshake className="h-4 w-4 text-orange-200" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/80 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#E6530C] border border-orange-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E6530C] animate-pulse" />
                {lang === 'mr' ? 'सामाजिक बांधिलकी व जनसेवा' : 'SOCIAL COMMITMENT & CITIZEN AID'}
              </span>
            </div>

            {/* Main Headline */}
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight group-hover:text-[#E6530C] transition-colors">
              {lang === 'mr' ? 'पत्रकारितेसोबत सामाजिक बांधिलकी' : 'Social Commitment Alongside Journalism'}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#172A4A]/85 leading-relaxed font-medium">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारताचे कार्य केवळ पत्रकारांच्या प्रश्नांपुरते मर्यादित नाही. गेल्या अनेक वर्षांपासून महासंघाच्या माध्यमातून विविध समाजोपयोगी, जनजागृतीपर आणि सामाजिक बांधिलकीचे कार्यक्रम आयोजित करण्यात आले आहेत. समाजातील गरजू व्यक्ती, सामान्य नागरिक, महिला सक्षमीकरण, विद्यार्थी आणि विविध सामाजिक घटकांपर्यंत पोहोचून समाजहिताच्या उपक्रमांना प्रोत्साहन देणे हा महासंघाच्या कार्याचा महत्त्वाचा भाग आहे.'
                : 'Lokshahi Patrakar Mahasangh Bharat’s mission extends far beyond media-specific concerns. Over the years, the federation has organized extensive community welfare, public awareness, and civic empowerment programs. Reaching out to marginalized citizens, women empowerment drives, student welfare, and underprivileged communities to foster public good is a central pillar of our organizational ethos.'}
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 self-start lg:self-center pt-2 lg:pt-0">
            <button
              type="button"
              onClick={onSeeMore}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#172A4A] hover:bg-[#E6530C] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-black shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group/btn active:scale-[0.98]"
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
