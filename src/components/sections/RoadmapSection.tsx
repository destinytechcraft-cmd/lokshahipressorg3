import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';
import { futureRoadmapPhases } from '../../data/pdfContent';
import roadmapBannerImage from '../../assets/images/roadmap-banner.jpg';

export function RoadmapSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell
      id="roadmap"
      title={t('sec_roadmap')}
      topBanner={
        <div className="overflow-hidden rounded-2xl border-2 border-[#172A4A]/20 bg-neutral-100 shadow-sm transition-all hover:shadow-md">
          <img
            src={roadmapBannerImage}
            alt={
              lang === 'mr'
                ? 'आगामी वाटचाल — संघटनात्मक बैठक व विस्तार चर्चा, लोकशाही पत्रकार महासंघ भारत'
                : 'Future Roadmap — Organisational Expansion Meeting, Lokshahi Patrakar Mahasangh Bharat'
            }
            className="h-auto w-full max-h-[520px] sm:max-h-[580px] object-cover object-center transition-transform duration-300 hover:scale-[1.01]"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.dataset.fallback) {
                img.dataset.fallback = '1';
                img.src = '/roadmap-banner.jpg';
              } else if (img.dataset.fallback === '1') {
                img.dataset.fallback = '2';
                img.src = '/image.png';
              } else if (img.dataset.fallback === '2') {
                img.dataset.fallback = '3';
                img.src = '/gallery-12.jpg';
              }
            }}
          />
        </div>
      }
    >
      <div className="space-y-6 text-left">
        {/* Intro from PDF Page 11 */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-6">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
            {lang === 'mr'
              ? 'भारतभर सक्षम पत्रकार संघटन उभारणी'
              : 'Building a Strong, Resilient Media Federation Across India'}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'लोकशाही पत्रकार महासंघ भारत आगामी काळात पत्रकारांच्या प्रश्नांना अधिक व्यापक आणि संघटित स्वरूप देण्यासाठी देशभरातील पत्रकारांना एकत्र आणण्याचा आणखीन मोठ्या प्रमाणात प्रयत्न करणार आहे.'
              : 'Lokshahi Patrakar Mahasangh Bharat is rolling out an ambitious eight-phase national masterplan to consolidate media solidarity, digital literacy, legal defense, and institutional documentation across India.'}
          </p>
        </div>

        {/* 8 Phases Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {futureRoadmapPhases.map((phaseItem) => (
            <WFCard
              key={phaseItem.phase}
              label={phaseItem.phase}
              className="flex flex-col justify-between hover:border-neutral-500 transition-colors p-5 bg-white shadow-2xs"
            >
              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-2">
                  {lang === 'mr' ? phaseItem.titleMr : phaseItem.titleEn}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {lang === 'mr' ? phaseItem.descMr : phaseItem.descEn}
                </p>
              </div>
            </WFCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
