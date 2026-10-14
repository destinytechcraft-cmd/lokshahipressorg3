import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { GOOGLE_FORM_LINKS } from '../../config/forms';

const heroBadges = [
  { mr: '११+ वर्षे वाटचाल', en: '11+ Years Journey', color: 'border-[#E6530C]/40 text-[#E6530C] bg-[#E6530C]/10' },
  { mr: '७,६००+ सदस्य', en: '7,600+ Members', color: 'border-white/30 text-white bg-white/10' },
  { mr: '७८ समित्या', en: '78 Committees', color: 'border-[#2855A5]/60 text-[#93C5FD] bg-[#2855A5]/20' },
  { mr: 'भारतभर कार्यक्षेत्र', en: 'Pan-India Reach', color: 'border-[#287A18]/50 text-[#86EFAC] bg-[#287A18]/20' },
];

export interface BackgroundSlide {
  id: number;
  imageSrc: string;
  titleMr: string;
  titleEn: string;
  durationMs: number;
}

// 6 Background Slides for the event photos with custom timings (1st slide: 8s, rest: 4s)
const backgroundSlides: BackgroundSlide[] = [
  {
    id: 1,
    imageSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZyFveTX0izQX1vVdtTV2j9Hr1LSkf3.png',
    titleMr: 'लोकशाही पत्रकार महासंघ बैठक व पत्रकार प्रशिक्षण मेळावा',
    titleEn: 'Press Federation Meeting and Journalist Training Seminar',
    durationMs: 8000,
  },
  {
    id: 2,
    imageSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NPaPIGpkmpzfHfjquZmJDNy2xVyoEA.png',
    titleMr: 'शिवस्मारक सोलापूर येथील पत्रकार व मान्यवरांचा कार्यक्रम',
    titleEn: 'Journalists and Dignitaries at ShivSmarak Solapur',
    durationMs: 4000,
  },
  {
    id: 3,
    imageSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-57ZnFUnCzZXAljLU1jgwfdl8G0YfQK.png',
    titleMr: 'वृत्तपत्र व पत्रकारांचा विशेष कार्यक्रम',
    titleEn: 'Special Newspaper and Journalist Event',
    durationMs: 4000,
  },
  {
    id: 4,
    imageSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uGiASrsN5C6sr7gQ8coskqIi7UBvAw.png',
    titleMr: 'ज्येष्ठ मान्यवरांची सदिच्छा भेट',
    titleEn: 'Courtesy Meeting with Senior Dignitaries',
    durationMs: 4000,
  },
  {
    id: 5,
    imageSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-92H0pAshBqurUFJIkPT3pUk4oUMhKe.png',
    titleMr: 'दैनिक लोकनेता वर्धापन दिन सोहळा',
    titleEn: 'Dainik Lokneta Anniversary Celebration',
    durationMs: 4000,
  },
  {
    id: 6,
    imageSrc: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-deIesYcbJyAzcCmzvJem8F9RxpPs0E.png',
    titleMr: 'प्रशासकीय अधिकाऱ्यांची सदिच्छा भेट',
    titleEn: 'Courtesy Meeting with Administrative Officials',
    durationMs: 4000,
  },
];

export function Hero({
  onJoinClick,
  onVoiceClick,
}: {
  onJoinClick?: () => void;
  onVoiceClick?: () => void;
}) {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const currentDuration = backgroundSlides[currentSlide]?.durationMs || 4000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, currentDuration);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="w-full bg-[#F7F3EC] sm:py-3 md:py-5">
      <div className="mx-auto w-full max-w-6xl px-0 sm:px-4">
        <div
          className="relative w-full aspect-[16/9] min-h-[235px] max-h-[310px] sm:aspect-auto sm:min-h-0 sm:max-h-none sm:h-[460px] md:h-[530px] lg:h-[580px] xl:h-[620px] flex items-end justify-start overflow-hidden sm:rounded-2xl md:rounded-3xl border-b-4 sm:border-2 sm:border-b-4 border-[#E30620] bg-[#0B1E36] sm:shadow-lg"
        >
          {/* Background Image Slides with Smooth Crossfade */}
          <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
            {backgroundSlides.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.imageSrc}
                    alt={slide.titleEn}
                    onError={(e) => {
                      const fallback = `/hero-photo-${idx + 1}.jpg`;
                      if (e.currentTarget.src !== fallback) {
                        e.currentTarget.src = fallback;
                      }
                    }}
                    className="w-full h-full object-cover object-center sm:object-[center_20%] scale-100 sm:scale-102 transition-transform duration-[4000ms] ease-out"
                  />
                </div>
              );
            })}

            {/* Clear visibility on photos above with high-contrast protection for text at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 via-35% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>

          {/* Hero Foreground Content - Positioned to Left Bottom */}
          <div className="relative z-10 w-full px-3.5 sm:px-6 md:px-8 pb-6 sm:pb-7 md:pb-9 pt-2 sm:pt-6 flex flex-col items-start justify-end text-left mr-auto">
            <div className="flex flex-col items-start text-left max-w-4xl lg:max-w-5xl">
              {/* Top Eyebrow Header */}
              <div className="flex flex-wrap items-center justify-start gap-1 sm:gap-2.5 mb-1 sm:mb-2">
                <span className="text-[9.5px] sm:text-base md:text-lg font-black uppercase tracking-wide text-white drop-shadow-md">
                  {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'LOKSHAHI PATRAKAR MAHASANGH BHARAT'}
                </span>
                <span className="hidden sm:inline text-white/50 text-base font-bold select-none">•</span>
                <span className="text-[9.5px] sm:text-base md:text-lg font-black uppercase tracking-wide text-[#E30620] drop-shadow-md">
                  {lang === 'mr' ? 'राष्ट्रीय नोंदणीकृत व्यासपीठ' : 'Nationally Registered Body'}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[17px] leading-tight sm:text-4xl sm:leading-tight md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight drop-shadow-2xl text-left">
                {lang === 'mr' ? (
                  <>
                    <span className="text-[#E30620]">सत्यासाठी</span> लढणार, <span className="text-white">अन्यायाला</span> भिडणार!
                  </>
                ) : (
                  <>
                    <span className="text-[#E30620]">Fight for Truth</span>, <span className="text-white">Stand Against Injustice!</span>
                  </>
                )}
              </h1>

              {/* Strength Badges */}
              <div className="mt-2 sm:mt-3.5 md:mt-4 flex flex-wrap items-center justify-start gap-1 sm:gap-2.5 max-w-2xl">
                {heroBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`rounded-lg sm:rounded-xl border px-1.5 sm:px-3 py-0.5 sm:py-1 text-[8.5px] sm:text-xs md:text-sm font-bold shadow-sm backdrop-blur-md transition-transform hover:scale-105 ${badge.color}`}
                  >
                    {badge[lang]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Indian Tricolor Bottom Accent Band */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 flex z-20">
            <div className="h-full flex-1 bg-[#E6530C]" />
            <div className="h-full flex-1 bg-white" />
            <div className="h-full flex-1 bg-[#287A18]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Editorial Intro Section placed right after the Hero Section ends.
 * Contains verbatim text from PDF Page 18 followed by the action CTA buttons.
 */
export function HeroIntroSection({
  onJoinClick,
  onHelpDeskClick,
  onVoiceClick,
  onKnowMoreClick,
}: {
  onJoinClick?: () => void;
  onHelpDeskClick?: () => void;
  onVoiceClick?: () => void;
  onKnowMoreClick?: () => void;
}) {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-white border-b border-[#172A4A]/15 py-10 sm:py-14 text-left">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="rounded-2xl border-2 border-[#172A4A]/10 bg-[#F7F3EC]/60 p-6 sm:p-9 shadow-xs">
          <div className="border-l-4 border-[#E30620] pl-4 sm:pl-5 mb-5">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#E30620] block mb-1">
              {lang === 'mr' ? 'राष्ट्रीय नोंदणीकृत व्यासपीठ' : 'NATIONALLY REGISTERED PLATFORM'}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'Lokshahi Patrakar Mahasangh Bharat'}
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#172A4A]/90 leading-relaxed font-medium">
            <p>
              {lang === 'mr' ? (
                <>
                  <span className="text-2xl sm:text-3xl font-black text-[#E30620] inline-block align-baseline leading-none mr-0.5">लोक</span>शाही पत्रकार महासंघ भारत हे देशभरातील पत्रकार आणि सामाजिक कार्यकर्त्यांच्या न्याय, हक्क, अधिकार आणि सन्मानासाठी कार्यरत असलेले राष्ट्रीय नोंदणीकृत व्यासपीठ आहे. गेल्या ११ वर्षांपासून पत्रकारिता, सामाजिक बांधिलकी आणि लोकशाही मूल्यांच्या संरक्षणासाठी सातत्याने कार्यरत असलेल्या महासंघाने पत्रकार कल्याण, जनहित आणि सामाजिक उत्तरदायित्वाच्या विविध उपक्रमांद्वारे देशभरात आपली स्वतंत्र व विश्वासार्ह ओळख निर्माण केली आहे.
                </>
              ) : (
                <>
                  <span className="text-2xl sm:text-3xl font-black text-[#E30620] inline-block align-baseline leading-none mr-0.5">Lok</span>shahi Patrakar Mahasangh Bharat is a nationally registered platform operating for the justice, rights, dignity and empowerment of journalists and social activists across India. Committed for over 11 years, the federation stands for democratic ethics, media welfare, and constitutional freedom.
                </>
              )}
            </p>
            <p>
              {lang === 'mr'
                ? 'आज महासंघ देशभरातील प्रिंट मीडिया, इलेक्ट्रॉनिक मीडिया, डिजिटल मीडिया, वृत्तसंस्था, नियतकालिके आणि स्वतंत्र पत्रकारांना एका सक्षम व्यासपीठावर एकत्र आणत पत्रकारांच्या हक्कांचे संरक्षण, व्यावसायिक सक्षमीकरण आणि जबाबदार पत्रकारितेचा प्रसार करण्यासाठी कटिबद्ध आहे.'
                : 'Today, the federation unites print media, electronic broadcast media, digital portals, news agencies, periodicals, and independent journalists onto an empowered platform, committed to protecting journalists’ rights, ensuring professional empowerment, and advancing responsible journalism.'}
            </p>

            {/* Action Buttons: JOIN US (Red) & JOURNALIST & PUBLIC HELPDESK (Green) */}
            <div className="pt-2 pb-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="/membership"
                onClick={(e) => {
                  e.preventDefault();
                  if (onJoinClick) {
                    onJoinClick();
                  }
                }}
                className="w-full sm:w-auto min-h-[46px] px-8 py-3 inline-flex items-center justify-center rounded-full bg-[#E30620] hover:bg-[#c7051b] text-white text-sm sm:text-base font-black tracking-wide shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer select-none active:scale-[0.98] text-center"
              >
                {t('btn_join')}
              </a>
              <a
                href="/help-desk"
                onClick={(e) => {
                  e.preventDefault();
                  if (onHelpDeskClick) {
                    onHelpDeskClick();
                  } else if (onVoiceClick) {
                    onVoiceClick();
                  }
                }}
                className="w-full sm:w-auto min-h-[46px] px-7 sm:px-8 py-3 inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-black tracking-wide shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer select-none active:scale-[0.98] text-center"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white flex-shrink-0 animate-pulse" />
                <span>
                  {lang === 'mr' ? 'पत्रकार व जन मदत कक्ष' : 'Journalist & Public Helpdesk'}
                </span>
              </a>
            </div>

            {/* लोकशाही परिवार — पत्रकारांचे एक राष्ट्रीय कुटुंब */}
            <div className="rounded-2xl border border-[#172A4A]/15 bg-white p-5 sm:p-6 shadow-xs text-left">
              <h4 className="flex items-center gap-2 text-base sm:text-lg font-black text-[#172A4A] mb-2.5">
                <span className="text-lg">🏛️</span>
                <span>
                  {lang === 'mr'
                    ? 'लोकशाही परिवार — पत्रकारांचे एक राष्ट्रीय कुटुंब'
                    : 'Lokshahi Pariwar — A National Family of Journalists'}
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-[#172A4A]/85 leading-relaxed font-medium">
                {lang === 'mr' ? (
                  <>
                    <span className="text-[#E30620] font-black">लोक</span>शाही पत्रकार महासंघ भारत ही केवळ पत्रकारांची संघटना नसून पत्रकार, समाजसेवक आणि लोकशाही मूल्यांवर विश्वास ठेवणाऱ्या नागरिकांचे एक संयुक्त राष्ट्रीय कुटुंब आहे. समाजहित, पत्रकारांचे संरक्षण आणि समाजसेवकांच्या कल्याणाचा विचार करून महासंघ विविध सामाजिक, शैक्षणिक आणि जनहिताचे उपक्रम सातत्याने राबवितो.
                  </>
                ) : (
                  <>
                    <span className="text-[#E30620] font-black">Lok</span>shahi Patrakar Mahasangh Bharat is not merely an association of journalists, but a united national family of journalists, social workers, and citizens who believe in democratic values. With a focus on public interest, journalist protection, and welfare of social workers, the federation consistently carries out various social, educational, and public welfare initiatives.
                  </>
                )}
              </p>
            </div>

            {/* निर्भय पत्रकारितेच्या रक्षणाचा ठाम निर्धार */}
            <div className="rounded-2xl border border-[#172A4A]/15 bg-white p-5 sm:p-6 shadow-xs text-left">
              <h4 className="text-base sm:text-lg font-black text-[#172A4A] mb-2.5">
                {lang === 'mr'
                  ? 'निर्भय पत्रकारितेच्या रक्षणाचा ठाम निर्धार :'
                  : 'Firm Commitment to Protecting Fearless Journalism :'}
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-[#172A4A]/85 leading-relaxed font-medium">
                {lang === 'mr'
                  ? '“जेव्हा एखादा पत्रकार धाडसी शोधपत्रकारिता करून सत्य जनतेसमोर आणतो, तेव्हा अनेकदा त्याच्यावर दबाव, धमक्या, खोटे गुन्हे किंवा अन्याय होण्याची शक्यता निर्माण होते. अशा प्रत्येक प्रसंगी लोकशाही पत्रकार महासंघ भारत संबंधित पत्रकाराच्या न्याय, संरक्षण आणि सन्मानासाठी ठामपणे त्यांच्या पाठीशी उभा राहतो. आमचा ठाम विश्वास आहे की निर्भय पत्रकारितेचे संरक्षण म्हणजेच लोकशाहीचे संरक्षण.”'
                  : '“When a journalist undertakes daring investigative journalism to bring truth before the public, they often face pressure, threats, false cases, or injustice. On every such occasion, Lokshahi Patrakar Mahasangh Bharat stands firmly behind them for their justice, protection, and dignity. We firmly believe that defending fearless journalism is defending democracy itself.”'}
              </p>
            </div>

            {/* Know More Button */}
            <div className="pt-2 flex justify-start">
              <button
                type="button"
                onClick={onKnowMoreClick}
                className="inline-flex items-center gap-2 rounded-xl bg-[#172A4A] hover:bg-[#E30620] text-white px-7 py-3 text-xs sm:text-sm font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>{lang === 'mr' ? 'अधिक जाणून घ्या' : 'Know More'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
