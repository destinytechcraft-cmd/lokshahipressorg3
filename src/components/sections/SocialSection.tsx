import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFCard } from '../ui/WireframePrimitives';
import { X, ZoomIn } from 'lucide-react';

import social1Img from '../../assets/images/social-1.jpg';

const socialWorkAreas = [
  { mr: 'जनजागृती', en: 'Public Awareness' },
  { mr: 'शिक्षण', en: 'Education' },
  { mr: 'सामाजिक मदत', en: 'Social Relief' },
  { mr: 'नागरिकांचे प्रश्न', en: 'Citizens’ Issues' },
  { mr: 'पर्यावरण', en: 'Environment' },
  { mr: 'आरोग्यविषयक जनजागृती', en: 'Health Awareness' },
  { mr: 'सामाजिक एकोपा', en: 'Social Harmony' },
  { mr: 'लोकशाही जनजागृती', en: 'Democratic Awareness' },
];

const socialPhotos = [
  { image: social1Img, alt: 'विद्यार्थी आरोग्य तपासणी व सामाजिक उपक्रम' },
  { image: '/social-2.jpg', alt: 'शेतकरी चर्चासत्र व कृषी मार्गदर्शन' },
  { image: '/social-3.jpg', alt: 'छत्रपती शिवाजी महाराज जयंती उत्सव व सत्कार' },
  { image: '/social-4.jpg', alt: 'महिला सक्षमीकरण व जनसंवाद बैठक' },
];

export function SocialSection() {
  const { t, lang } = useLanguage();
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePhoto(null);
    };
    if (activePhoto) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activePhoto]);

  return (
    <SectionShell id="social">
      <div className="space-y-6 text-left">
        {/* Main Text Content strictly from PDF Page 10 */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-8">
            <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
              {lang === 'mr' ? 'पत्रकारितेसोबत सामाजिक बांधिलकी' : 'Social Responsibility Alongside Journalism'}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {lang === 'mr'
                ? 'लोकशाही पत्रकार महासंघ भारताचे कार्य केवळ पत्रकारांच्या प्रश्नांपुरते मर्यादित नाही. गेल्या अनेक वर्षांपासून महासंघाच्या माध्यमातून विविध समाजोपयोगी, जनजागृतीपर आणि सामाजिक बांधिलकीचे कार्यक्रम आयोजित करण्यात आले आहेत.'
                : 'The work of Lokshahi Patrakar Mahasangh Bharat is not limited only to journalists’ issues. For several years, diverse public welfare, awareness, and social responsibility programs have been organized.'}
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {lang === 'mr'
                ? 'समाजातील गरजू व्यक्ती, सामान्य नागरिक, महिला सक्षमीकरण, विद्यार्थी आणि विविध सामाजिक घटकांपर्यंत पोहोचून समाजहिताच्या उपक्रमांना प्रोत्साहन देणे हा महासंघाच्या कार्याचा महत्त्वाचा भाग आहे.'
                : 'Reaching out to needy individuals, common citizens, women empowerment, students, and diverse social sections to promote public interest initiatives is an important part of the federation’s work.'}
            </p>

            <div className="rounded-lg border-2 border-neutral-300 bg-neutral-50 p-4">
              <p className="text-xs sm:text-sm font-semibold text-neutral-800 italic">
                {lang === 'mr'
                  ? 'महासंघाचा ठाम विश्वास आहे की "हक्क आणि कर्तव्ये ही एकाच नाण्याच्या दोन बाजू आहेत."'
                  : 'The federation firmly believes that "Rights and duties are two sides of the same coin."'}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {lang === 'mr'
                  ? 'पत्रकारांच्या हितासोबतच समाजातील शोषित, वंचित आणि सामान्य नागरिकांचा आवाज प्रभावीपणे लोकांपर्यंत पोहोचवणे ही आमची सामाजिक जबाबदारी आहे. शासनाच्या विविध योजना, धोरणे आणि सार्वजनिक प्रश्नांवर वस्तुनिष्ठ माहिती समाजापर्यंत पोहोचवून लोकशाही अधिक सक्षम करण्यासाठी महासंघ सातत्याने प्रयत्नशील आहे.'
                  : 'Along with journalists’ welfare, bringing the voice of exploited, underprivileged, and common citizens effectively to the public is our social responsibility. By delivering objective information on governmental schemes, policies, and public issues to society, the federation consistently strives to make democracy more robust.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <WFCard label={lang === 'mr' ? 'सामाजिक कार्याची प्रमुख क्षेत्रे' : 'Key Areas of Social Work'}>
              <div className="flex flex-wrap gap-2">
                {socialWorkAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border-2 border-neutral-300 bg-white px-3 py-1.5 text-xs font-bold text-neutral-700 shadow-2xs"
                  >
                    {area[lang]}
                  </span>
                ))}
              </div>
            </WFCard>
          </div>
        </div>

        {/* 4 Photos Grid - Enlarged 2-column layout without extra text lines */}
        <div className="pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {socialPhotos.map((photo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePhoto(photo.image)}
                className="group relative overflow-hidden rounded-2xl border-2 border-[#172A4A]/20 bg-white shadow-sm hover:border-[#E30620] hover:shadow-md transition-all cursor-pointer text-left block w-full focus:outline-none focus:ring-2 focus:ring-[#E30620]"
                title={lang === 'mr' ? 'पूर्ण फोटो पाहण्यासाठी क्लिक करा' : 'Click to view full image'}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 relative">
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-[#172A4A] shadow-md">
                      <ZoomIn className="h-4 w-4 text-[#E30620]" />
                      <span>{lang === 'mr' ? 'मोठा फोटो पहा' : 'View Full Image'}</span>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full Image Modal Lightbox */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 transition-all"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl border border-white/10"
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              aria-label="Close image preview"
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-[#E30620] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={activePhoto}
              alt="Full view"
              className="max-h-[88vh] max-w-full w-auto h-auto object-contain block mx-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </SectionShell>
  );
}
