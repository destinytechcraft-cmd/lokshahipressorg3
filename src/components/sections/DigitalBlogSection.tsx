import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import {
  ExternalLink,
  Globe,
  Newspaper,
  FileText,
  ShieldAlert,
  Users2,
  CheckCircle2,
} from 'lucide-react';

const EMBED_URL = 'https://sites.google.com/view/lokshahipressorg/home';

export function DigitalBlogSection() {
  const { t, lang } = useLanguage();

  const portalSections = [
    {
      icon: Newspaper,
      titleMr: 'ताज्या बातम्या व अपडेट्स',
      titleEn: 'Latest News & Updates',
      descMr: 'पत्रकारितेतील घडामोडी, राष्ट्रीय घटना आणि महासंघाचे अधिकृत वार्तांकन.',
      descEn: 'Media advocacy updates, national journalism news, and press coverage.',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      icon: FileText,
      titleMr: 'अधिकृत प्रसिद्धीपत्रके',
      titleEn: 'Official Press Statements',
      descMr: 'शासन दरबारी सादर केलेली निवेदने, प्रसिद्धीपत्रके व ठराव.',
      descEn: 'Formal memorandums submitted to state ministries and press communiques.',
      color: 'text-red-600 bg-red-50 border-red-200',
    },
    {
      icon: ShieldAlert,
      titleMr: 'पत्रकार संरक्षण सेल',
      titleEn: 'Journalist Legal Defense',
      descMr: 'पत्रकारांवरील अन्याय व खोट्या गुन्ह्यांविरोधात कायदेशीर सहाय्य व मदत.',
      descEn: 'Free 24/7 legal aid and protection support for working press reporters.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      icon: Users2,
      titleMr: 'कार्यकारिणी व संपर्क',
      titleEn: 'Executive Directory',
      descMr: 'राष्ट्रीय व २८ राज्यांमधील प्रदेश कार्यकारणीचे संपर्क तपशील.',
      descEn: 'National and state executive committee member contacts across India.',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
  ];

  return (
    <SectionShell
      id="digital-press-blog"
      title={t('sec_media')}
      icon={
        <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#E30620] text-white text-xs sm:text-sm font-black shadow-xs shrink-0 select-none">
          ★
        </span>
      }
    >
      <div className="space-y-5 text-left">
        {/* Header Title Bar */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#172A4A]/15 bg-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#E30620]">
                {lang === 'mr' ? 'अधिकृत डिजिटल न्यूज व मीडिया पोर्टल' : 'OFFICIAL DIGITAL NEWS & MEDIA PORTAL'}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Live Portal</span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत — ताज्या बातम्या व प्रसिद्धीपत्रके' : 'Lokshahi Patrakar Mahasangh Bharat — News & Media Portal'}
            </h3>
          </div>

          <a
            href={EMBED_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E30620] hover:bg-[#c7051b] text-white px-5 py-2.5 text-xs sm:text-sm font-black shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>{lang === 'mr' ? 'थेट पोर्टल उघडा' : 'Open Live Site'}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Browser Window Frame for Google Sites Portal */}
        <div className="rounded-3xl border-2 border-[#172A4A]/20 bg-white overflow-hidden shadow-lg">
          {/* Top Browser Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#172A4A] text-white/90 border-b border-[#172A4A]/20 text-xs">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 inline-block" />
              </span>
              <a
                href={EMBED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-white/90 hover:text-white flex items-center gap-1.5 ml-2 font-mono truncate"
                title={EMBED_URL}
              >
                <span>🔒</span>
                <span className="truncate">{EMBED_URL}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center gap-1 rounded bg-white/10 px-2.5 py-0.5 text-[10px] font-mono text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Google Site</span>
              </span>
            </div>
          </div>

          {/* Interactive Window Content (No broken iframe sad-face) */}
          <div className="p-6 sm:p-10 bg-gradient-to-b from-[#FAF8F5] via-white to-blue-50/20 text-center flex flex-col items-center justify-center">
            {/* Animated Globe Icon Badge */}
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-[#172A4A] text-white shadow-xl mb-4">
              <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-blue-300 animate-pulse" />
            </div>

            <div className="max-w-2xl space-y-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 text-[#172A4A] px-3.5 py-1 text-xs font-black uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                <span>{lang === 'mr' ? 'अधिकृत Google Sites वेबपोर्टल' : 'Official Google Sites Portal'}</span>
              </span>

              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-[#172A4A] tracking-tight">
                {lang === 'mr'
                  ? 'लोकशाही पत्रकार महासंघ भारत — डिजिटल न्यूज पोर्टल'
                  : 'Lokshahi Patrakar Mahasangh Bharat — Digital Portal'}
              </h4>

              <p className="text-xs sm:text-sm text-[#172A4A]/80 leading-relaxed font-medium">
                {lang === 'mr'
                  ? 'Google Sites च्या अधिकृत सुरक्षा धोरणानुसार (X-Frame-Options: DENY) Google Sites बाह्य खिडकीमध्ये थेट प्रदर्शित होण्यास प्रतिबंध करते. हे मूळ पोर्टल थेट, पूर्ण स्क्रीनवर व सुरक्षितपणे चालवण्यासाठी खालील बटणावर क्लिक करा.'
                  : 'Under Google Sites security policies (X-Frame-Options: DENY), third-party inline window display is restricted by Google. Click below to launch the authentic, live portal in full screen.'}
              </p>
            </div>

            {/* Launch CTA Button */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={EMBED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#E30620] hover:bg-[#c7051b] text-white px-8 sm:px-10 py-4 sm:py-4.5 text-sm sm:text-base font-black shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Globe className="h-5 w-5" />
                <span>{lang === 'mr' ? '🚀 थेट अधिकृत Google Sites पोर्टल उघडा' : '🚀 Open Official Google Site in New Tab'}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* 4 Quick Category Gateway Cards into the Google Site */}
            <div className="mt-10 w-full max-w-4xl grid gap-4 sm:grid-cols-2 text-left">
              {portalSections.map((sec, idx) => {
                const IconComponent = sec.icon;
                return (
                  <a
                    key={idx}
                    href={EMBED_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border-2 border-neutral-200/80 bg-white shadow-xs hover:border-[#172A4A] hover:shadow-md transition-all group flex items-start gap-4 cursor-pointer"
                  >
                    <div className={`p-3 rounded-xl border shrink-0 ${sec.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="text-sm font-black text-[#172A4A] group-hover:text-[#E30620] transition-colors">
                          {lang === 'mr' ? sec.titleMr : sec.titleEn}
                        </h5>
                        <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-[#E30620] transition-colors shrink-0" />
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                        {lang === 'mr' ? sec.descMr : sec.descEn}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bottom Security / Trust Badges */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80 w-full max-w-3xl flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-neutral-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>{lang === 'mr' ? 'अधिकृत शासनमान्य व्यासपीठ' : 'Govt. Recognized Platform'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>{lang === 'mr' ? '११+ वर्षांची विश्वासार्ह वाटचाल' : '11+ Years of Service'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>{lang === 'mr' ? '२८ राज्यांत देशव्यापी जाळे' : 'Pan-India Footprint'}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
