import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const eventPhotos = [
  { image: '/deep.png', alt: 'लोकशाही पत्रकार महासंघ विशेष सोहळा व कार्यक्रम' },
  { image: '/event-2.jpg', alt: 'छत्रपती शिवाजी महाराज स्मारक अभिवादन व पूजन' },
  { image: '/con.png', alt: 'महासंघ महत्त्वपूर्ण बैठक व संवाद' },
  { image: '/event-7.jpg', alt: 'पत्रकार महासंघ संवाद व बैठक' },
  { image: '/event-3.jpg', alt: 'पत्रकार प्रशिक्षण कार्यशाळा व सन्मान सोहळा' },
  { image: '/event-8.jpg', alt: 'राज्य कार्यकारिणी निवड कार्यक्रम व सन्मान' },
  { image: '/event-9.jpg', alt: 'आरोग्य तपासणी शिबीर व सामाजिक उपक्रम' },
  { image: '/event-10.jpg', alt: 'लोकशाही पत्रकार संघ बैठक व सन्मान सोहळा' },
  { image: '/event-11.jpg', alt: 'छत्रपती शिवाजी महाराज भव्य शिवमूर्ती पूजन व सन्मान सोहळा' },
];

export function EventsSection() {
  const { lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : eventPhotos.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev !== null && prev < eventPhotos.length - 1 ? prev + 1 : 0));
      }
    };
    if (activeIdx !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIdx]);

  return (
    <SectionShell id="events">
      <div className="space-y-6">
        {/* Uniform Consistent Grid - Identical Card Sizes for All Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {eventPhotos.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className="group relative overflow-hidden rounded-2xl bg-neutral-950 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer text-left block w-full focus:outline-none focus:ring-2 focus:ring-[#E30620]"
              title={lang === 'mr' ? 'पूर्ण फोटो पाहण्यासाठी क्लिक करा' : 'Click to view full image'}
            >
              {/* Fixed Uniform Container Height & Width */}
              <div className="aspect-[4/3] w-full overflow-hidden relative flex items-center justify-center bg-neutral-950">
                {/* Matching ambient blurred backdrop */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover blur-xl opacity-40 scale-125 pointer-events-none select-none"
                />

                {/* Main uncropped image fitted consistently inside container */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] select-none p-1.5"
                  loading="lazy"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 z-20 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-[#172A4A] shadow-lg">
                    <ZoomIn className="h-4 w-4 text-[#E30620]" />
                    <span>{lang === 'mr' ? 'मोठा फोटो पहा' : 'View Full Image'}</span>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Full Image Lightbox Modal with Next / Prev */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-3 sm:p-6 transition-all"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[94vh] max-w-6xl w-full flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveIdx(null)}
              aria-label="Close image preview"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 text-white hover:bg-[#E30620] transition-colors cursor-pointer border border-white/20 shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : eventPhotos.length - 1))}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/75 text-white hover:bg-[#E30620] transition-colors cursor-pointer border border-white/20 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev !== null && prev < eventPhotos.length - 1 ? prev + 1 : 0))}
              aria-label="Next photo"
              className="absolute right-2 sm:right-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/75 text-white hover:bg-[#E30620] transition-colors cursor-pointer border border-white/20 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            {/* Image Container */}
            <div className="overflow-hidden rounded-2xl bg-neutral-950 shadow-2xl border border-white/10 max-h-[88vh] flex items-center justify-center">
              <img
                src={eventPhotos[activeIdx].image}
                alt={eventPhotos[activeIdx].alt}
                className="max-h-[86vh] max-w-full w-auto h-auto object-contain block mx-auto rounded-xl"
              />
            </div>

            {/* Counter */}
            <div className="mt-3 text-center">
              <span className="text-xs font-semibold text-white/80 bg-black/60 px-4 py-1.5 rounded-full border border-white/15">
                {activeIdx + 1} / {eventPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  );
}
