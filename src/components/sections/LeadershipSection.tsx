import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFImage } from '../ui/WireframePrimitives';
import { leadershipMembers } from '../../data/pdfContent';

const leadershipPhotos = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XL24YlyJkAlyDbDfUT0hhRnutDfwXP.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y9j2edZ4WeP1FLEQR1XAIfGg0B9h88.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PQB4L96YI81oAEwVVu6dW32xmJNI7f.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qfv31g8FLY8nPOzjvkM6cYTYQoMtYg.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8PkZV3dTVQtEOc5FRkbN1VwOjHZRii.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ApxngpFHnMNEIIz9YjxeZID0qBqgyg.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LujB1VEfJROXnogtvGEYmmJyJIeZIm.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6b2evZ45iPQWZynIQjccWgmeOvsFUJ.png',
  '/images/leadership/santoshkumar-jaiswal.png',
] as const;

export function LeadershipSection() {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="leadership" title={t('sec_leadership')}>
      <div className="space-y-8 text-left">
        {/* Intro Banner from PDF Page 15 */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-8 shadow-xs">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30620] block mb-1">
            17. LEADERSHIP
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
            {lang === 'mr' ? 'टीम लोकशाही — राष्ट्रीय नेतृत्व' : 'Team Lokshahi — National Leadership'}
          </h3>
        </div>

        {/* Leadership Grid matching PDF Page 16 specifications: Photo + Name + Designation + State + Short Profile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-5 rounded-2xl border border-[#172A4A]/15 bg-white shadow-xs hover:border-[#172A4A] transition-all"
            >
              <div>
                {/* Photo frame */}
                <div className="mb-4">
                  {leadershipPhotos[idx] ? (
                    <img
                      src={leadershipPhotos[idx]}
                      alt={lang === 'mr' ? `${member.nameMr} यांचा फोटो` : `Portrait of ${member.nameEn}`}
                      className="aspect-[4/3] w-full rounded-xl border-2 border-[#172A4A]/15 object-cover object-top shadow-xs"
                      loading={idx < 3 ? 'eager' : 'lazy'}
                    />
                  ) : (
                    <WFImage
                      label={lang === 'mr' ? 'फोटो लवकरच' : 'Photo coming soon'}
                      ratio="aspect-[4/3]"
                      className="w-full rounded-xl"
                    />
                  )}
                </div>

                <div className="space-y-1.5">
                  <span className="inline-block rounded-md bg-[#172A4A]/5 text-[#172A4A] border border-[#172A4A]/15 px-2.5 py-0.5 text-xs font-black">
                    {lang === 'mr' ? member.roleMr : member.roleEn}
                  </span>
                  <h4 className="text-base font-black text-[#172A4A]">
                    {lang === 'mr' ? member.nameMr : member.nameEn}
                  </h4>
                  <div className="text-xs text-neutral-500 font-semibold">
                    {lang === 'mr' ? 'कार्य क्षेत्र: ' : 'Area: '}
                    {lang === 'mr' ? member.stateMr : member.stateEn}
                  </div>
                </div>

                <div className="border-t border-[#172A4A]/10 mt-3 pt-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                    {lang === 'mr' ? 'परिचय' : 'Profile'}
                  </span>
                  <p className="text-xs leading-relaxed text-neutral-600 font-medium">
                    {lang === 'mr' ? member.profileMr : member.profileEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-dashed border-[#172A4A]/30 bg-neutral-50 p-4 text-center">
          <p className="text-xs font-bold text-neutral-700">
            {lang === 'mr'
              ? 'आणि इतर पदाधिकारी.'
              : 'And other office-bearers.'}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
