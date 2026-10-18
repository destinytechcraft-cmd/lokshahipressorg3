import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function MediaCoverage() {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const clippingImages = [
    '/2222.jpeg',
    '/3333.jpeg',
    '/1111.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.2-hVgu4X76jUFd201E7zBdPqVsJ25wXk.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.1-2K7d7ZZsvVEpxt8dR31lwwWb0V0Eug.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.3-Jogr8dMKM2wfZXApSKjtt2Ipa9uoaN.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.5-OUqHyNmEhLpRUmGhKrH0FF316P0OK0.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0.4-p2octuouPCofN5F725O3prDLDVi6Zt.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-mT1pxCXptDN376cM2UW1Am7iLDqBTy.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-QM8N3fPa7QO1bekWuaJu2oK6qLShaG.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-y2zjj0342VG2lPjlmvVnprUxhVw03x.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-PEVnjTYYU47WWWuL0bOduge9VNUQla.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-37hlqIypEhwBIubazFmmapiYxW91tv.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.5-dqwmXhrxoBgcpbWPGRZuyvaNSMQR4O.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-eOLlAh7z7rKBmKUkhLPd8r5QGWvwTk.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-TFN1jgNET9aCevU8tjKXrW6OHdtEn2.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-y7baYHYusgjS5TUmASjU5Koxamx0r1.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-9LpzGdRKkxmJCAOKSxx87y4ZlTABe9.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-J4SMTvYoqpCWn9nP5HL9Q5xbJY9uR5.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-oa5FcsJpjvjUDsy9odjMd0yswAUjLh.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-C18BYdEq4mTeqqNe80PWJn5o3RNR9X.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-5vuPKrWBcJmXm9ooUkUyhznlRwD91P.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-oOwBnLslD8anbr1yvoSoUaVfh4MM0E.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-jb0bRuVDtXRdz58AxrbisaNG6l81WM.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-10%20at%2011.31.23%20PM-GP4JS0UdgG5CKu5J1LlPJdEDXETOQB.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/last-dSEOaeCew5Vp9vyrmxtGNuUClDGgyc.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-10%20at%2011.36.59%20PM-fiKwGD4PkOZqLEmzKPCTE4VOMKczrp.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-10%20at%2011.36.59%20PMlast-eCCoHoLQYmC9MNEWBSiy1LapGQEfsR.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-10%20at%2011.37.00%20PM-QyHJJmAXhPabZNmeSPIQot5Q1CrD3G.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-10%20at%2011.37.00%20PMlast1-uYU819B1AbpjmbUzfSqcN22ELWdO5P.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-10%20at%2011.37.18%20PM-rSkJAVVVKJoEAkWQOKnngXtvUBE2ZD.jpeg',
    '/news/news-coverage-1.jpeg',
    '/news/news-coverage-2.jpeg',
    '/news/news-coverage-3.jpeg',
    '/news/news-coverage-4.jpeg',
    '/news/news-coverage-5.jpeg',
    '/news/news-coverage-6.jpeg',
    '/news/news-coverage-7.jpeg',
    '/news/news-coverage-8.jpeg',
    '/news/news-coverage-9.jpeg',
    '/news/news-coverage-10.jpeg',
  ];

  // Duplicate the gallery for seamless infinite looping autoscroll.
  const scrollImages = [...clippingImages, ...clippingImages];

  // Pause scrolling while hovered or touched
  const isScrollingPaused = isPaused;

  // Continuous smooth autoscroll loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    let scrollPos = scrollRef.current ? scrollRef.current.scrollLeft : 0;

    const step = (now: number) => {
      const el = scrollRef.current;
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (el && !isScrollingPaused) {
        scrollPos += 45 * dt; // 45px/second smooth movement
        const halfWidth = el.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos -= halfWidth;
        }
        el.scrollLeft = scrollPos;
      } else if (el) {
        scrollPos = el.scrollLeft;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isScrollingPaused]);

  return (
    <section id="media-coverage" className="border-b border-[#172A4A]/10 bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4 text-left">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E30620] text-white text-xs font-black">
              ★
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#E30620]">
              {lang === 'mr' ? 'वृत्तपत्र व मीडिया कव्हरेज' : 'PRESS & MEDIA COVERAGE'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#172A4A]">
            {lang === 'mr' ? 'प्रमुख वृत्तपत्रांमधील बातम्या व प्रसिद्धी' : 'Leading News Outlets on Lokshahi Press Federation'}
          </h2>
          <p className="mt-1 text-xs text-[#172A4A]/70 font-medium">
            {lang === 'mr'
              ? 'देशभरातील प्रतिष्ठित वृत्तपत्रे, वृत्तसंस्था व वृत्तवाहिन्यांनी घेतलेली महासंघाच्या कार्याची दखल.'
              : 'National and regional press coverage chronicling our campaigns, conventions, and media rights advocacy.'}
          </p>
        </div>

        {/* Continuous Smooth Auto-Scroller of Cards */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 select-none touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {scrollImages.map((image, idx) => (
            <article
              key={`${image}-${idx}`}
              className="w-[270px] sm:w-80 shrink-0 rounded-2xl border-2 border-[#172A4A]/15 bg-white p-3 shadow-xs"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group block w-full cursor-zoom-in text-left"
                aria-label={lang === 'mr' ? 'सविस्तर बातमी वाचा' : 'Read full coverage'}
              >
                <div className="overflow-hidden rounded-xl border border-[#172A4A]/15 bg-[#F7F3EC]">
                  <img
                    src={image}
                    alt={lang === 'mr' ? 'वृत्तपत्रातील बातमी' : 'Newspaper coverage'}
                    className="h-72 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] sm:h-80"
                    loading={idx < clippingImages.length ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="flex items-center justify-between px-1 pt-3 text-xs font-black text-[#E30620]">
                  <span>{lang === 'mr' ? 'सविस्तर बातमी वाचा' : 'Read Full Coverage'}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'mr' ? 'सविस्तर बातमी' : 'Full news coverage'}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-black text-[#172A4A] shadow-lg"
            onClick={() => setSelectedImage(null)}
            aria-label={lang === 'mr' ? 'बंद करा' : 'Close'}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt={lang === 'mr' ? 'सविस्तर वृत्तपत्र बातमी' : 'Full newspaper coverage'}
            className="max-h-[92vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
