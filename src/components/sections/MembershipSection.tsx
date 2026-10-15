import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell, WFButton, WFCard } from '../ui/WireframePrimitives';
import { GOOGLE_FORM_LINKS } from '../../config/forms';
import { FileDown } from 'lucide-react';

const membershipCategories = [
  {
    badgeMr: 'प्रिंट व इलेक्ट्रॉनिक',
    badgeEn: 'Print & Broadcast',
    titleMr: 'पत्रकार सदस्यत्व',
    titleEn: 'Journalist Membership',
    descMr: 'प्रिंट मीडिया, वर्तमानपत्रे, नियतकालिके, टीव्ही चॅनेल्स, वृत्तसंस्था आणि अधिकृत बातमीदारांसाठी प्राथमिक सभासदत्व.',
    descEn: 'Official primary membership for journalists, reporters, and correspondents working across print media, newspapers, periodicals, and TV news agencies.',
    featuresMr: ['प्रेस ओळखपत्र व प्रमाणपत्र', 'कायदेशीर संरक्षण व संघटनात्मक मदत', 'राज्य व राष्ट्रीय अधिवेशने'],
    featuresEn: ['Official Press ID & Certificate', 'Legal Aid & Organisational Support', 'State & National Conventions'],
  },
  {
    badgeMr: 'डिजिटल व ऑनलाइन',
    badgeEn: 'Digital & Online',
    titleMr: 'डिजिटल पत्रकार सदस्यत्व',
    titleEn: 'Digital Journalist Membership',
    descMr: 'वेब न्यूज पोर्टल्स, यूट्यूब न्यूज चॅनेल्स, डिजिटल मीडिया, पॉडकास्ट आणि स्वतंत्र ऑनलाइन वार्ताहरांसाठी.',
    descEn: 'Dedicated membership for digital news creators, web portal editors, YouTube news channels, and online journalists.',
    featuresMr: ['डिजिटल मीडिया मान्यता', 'तथ्य पडताळणी व सायबर सुरक्षा', 'डिजिटल पत्रकार प्रशिक्षण'],
    featuresEn: ['Digital Media Accreditation', 'Fact-Checking & Cyber Security', 'Digital Journalism Workshops'],
  },
  {
    badgeMr: 'समाजकार्य व जनहित',
    badgeEn: 'Social Welfare',
    titleMr: 'समाजसेवक सदस्यत्व',
    titleEn: 'Social Worker Membership',
    descMr: 'समाजहित, मानवाधिकार, जनसमस्या निवारण आणि लोकशाही मूल्यांच्या रक्षणासाठी सक्रिय समाजसेवकांसाठी.',
    descEn: 'For dedicated community leaders, human rights defenders, public welfare activists, and grassroots social workers.',
    featuresMr: ['सामाजिक सहकार्य व्यासपीठ', 'जनहित अभियान समन्वय', 'समाजभूषण सन्मान व गौरव'],
    featuresEn: ['Civil Society Network', 'Public Campaign Coordination', 'Social Honors & Recognition'],
  },
  {
    badgeMr: 'सहयोगी व मार्गदर्शक',
    badgeEn: 'Associate & Ally',
    titleMr: 'सहयोगी सदस्यत्व',
    titleEn: 'Associate Membership',
    descMr: 'महासंघाच्या सामाजिक, शैक्षणिक व जनहित उपक्रमांशी सहकार्य करणाऱ्या हितचिंतक नागरिकांसाठी.',
    descEn: 'For civic allies, mentors, patrons, and contributing citizens actively cooperating with the federation’s public mission.',
    featuresMr: ['सल्लागार व मार्गदर्शक सहभाग', 'वार्षिक उपक्रम आमंत्रण', 'लोकशाही परिवार जोडणी'],
    featuresEn: ['Advisory & Mentor Role', 'Annual Event Invitations', 'Lokshahi Family Linkage'],
  },
];

export function MembershipSection({ onJoinClick }: { onJoinClick?: () => void }) {
  const { t, lang } = useLanguage();

  return (
    <SectionShell id="membership" title={t('sec_membership')}>
      <div className="space-y-6 text-left">
        {/* Intro from PDF Page 13 */}
        <div className="rounded-xl border-2 border-neutral-300 bg-neutral-50 p-5 sm:p-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2">
            <h3 className="text-lg sm:text-xl font-black text-neutral-900">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारताचे सदस्य व्हा' : 'Become a Member of Lokshahi Patrakar Mahasangh Bharat'}
            </h3>
            <a
              href="/membership-form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E30620] hover:bg-[#c7051b] text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-black shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 self-start sm:self-auto shrink-0 border border-red-700 cursor-pointer"
              title={lang === 'mr' ? 'सभासद नोंदणी अर्ज पहा किंवा डाउनलोड करा' : 'View or download membership registration form'}
            >
              <FileDown className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>{lang === 'mr' ? '📄 सभासद नोंदणी अर्ज डाउनलोड / पहा (PDF)' : '📄 Download / View Membership Form (PDF)'}</span>
            </a>
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#172A4A] mb-2">
            {lang === 'mr' ? 'एकजुटीतून शक्ती… संघटनेतून हक्क…' : 'Strength through unity… Rights through organisation…'}
          </p>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {lang === 'mr'
              ? 'पत्रकारिता क्षेत्रात कार्यरत असाल किंवा समाजहितासाठी काम करत असाल, महासंघाच्या संघटनात्मक कार्याशी जोडले जाण्यासाठी सदस्यत्वाचा पर्याय उपलब्ध आहे. संपूर्ण देशभरातील पत्रकारांच्या हक्कांचे संरक्षण, सहकार्य आणि सन्मानासाठी लोकशाही परिवार सदैव कटिबद्ध आहे.'
              : 'If you are active in journalism or public welfare, membership connects you with our nationwide framework dedicated to journalists’ rights, security, and professional empowerment.'}
          </p>
        </div>

        {/* 4 Membership Categories */}
        <div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {membershipCategories.map((cat, idx) => (
              <WFCard
                key={idx}
                className="flex flex-col text-left p-4 sm:p-5 hover:border-[#172A4A] transition-all bg-white shadow-xs rounded-xl border border-neutral-200 h-full"
              >
                <div>
                  <div className="mb-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 font-black text-xs">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black text-[#172A4A] leading-snug mb-2">
                    {lang === 'mr' ? cat.titleMr : cat.titleEn}
                  </h4>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {lang === 'mr' ? cat.descMr : cat.descEn}
                  </p>
                </div>
              </WFCard>
            ))}
          </div>
        </div>

        {/* Direct Form CTA Buttons: Offline PDF Form + Online Google Form */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="/membership-form.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-black tracking-wide uppercase shadow-md rounded-xl bg-[#E30620] hover:bg-[#c7051b] text-white text-center transition-all cursor-pointer border border-[#c7051b]"
          >
            <FileDown className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>{lang === 'mr' ? '📄 सभासद नोंदणी अर्ज पहा / डाउनलोड करा (PDF)' : '📄 View / Download Form (PDF)'}</span>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScZurlqeCu98YVLlnhRah-brI0uhCsKhm1Wka1ypic-LNLlFw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-black tracking-wide uppercase shadow-md bg-[#172A4A] hover:bg-[#0f1c32] text-white text-center rounded-xl transition-all cursor-pointer border border-[#172A4A]"
          >
            <span>{lang === 'mr' ? 'ऑनलाइन नोंदणी फॉर्म ↗' : 'ONLINE MEMBERSHIP FORM ↗'}</span>
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
