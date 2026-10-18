import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from '../Logo';
import { FacebookIcon, WhatsAppIcon } from '../SocialIcons';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Play,
  ThumbsUp,
  MessageCircle,
  Share2,
} from 'lucide-react';

const OFFICIAL_FB_URL = 'https://www.facebook.com/share/1Ekodo5ECG/?mibextid=wwXIfr';

interface HomeFacebookSectionProps {
  onSeeMore?: () => void;
}

export function HomeFacebookSection({ onSeeMore }: HomeFacebookSectionProps) {
  const { lang } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.75;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const facebookPosts = [
    {
      id: 'fb-live-page',
      platform: 'facebook',
      type: 'page-plugin',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      handle: '@lokshahipressorg',
      timeMr: 'अधिकृत फेसबुक पेज',
      timeEn: 'Official Facebook Page',
      badge: 'LIVE PAGE',
      url: OFFICIAL_FB_URL,
      embedSource: 'facebook.com/share/1Ekodo5ECG',
    },
    // The 9 specific Facebook Reels & Videos with authentic FB thumbnails and content:
    {
      id: 'fb-reel-1',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत व्हिडिओ • 🌐 Facebook Video',
      timeEn: 'Official Video • 🌐 Facebook Video',
      contentMr:
        'लोकशाहीचा श्वास जिवंत ठेवायचा असेल, तर पत्रकारांनी जाग राहणे गरजेचे 🎤 — पत्रकार प्रशिक्षण कार्यशाळा व मार्गदर्शन #JournalismTraining #PressFreedom #लोकशाहीपत्रकारसंघ',
      contentEn:
        'To keep democracy alive, journalists must stay vigilant 🎤 — Journalism training workshop and address.',
      image: '/fb/fb-reel-1.jpg',
      badge: 'FB VIDEO',
      likes: '3.4K',
      comments: '420',
      shares: '185',
      url: 'https://www.facebook.com/share/v/1JG48PjXvK/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/v/1JG48PjXvK',
    },
    {
      id: 'fb-reel-2',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'विचारातून क्रांती जन्माला येते ✊🎙️ — युवा नेतृत्व व प्रेरणादायी संवाद #MotivationSpeech #LeadershipTalk #TeamLokshahi #SandeepJadhav',
      contentEn:
        'Revolution is born from ideas ✊🎙️ — Youth leadership and inspirational reel by Shri Sandeep Jadhav.',
      image: '/fb/fb-reel-2.jpg',
      badge: 'FB REEL',
      likes: '4.8K',
      comments: '610',
      shares: '290',
      url: 'https://www.facebook.com/share/r/1HAscg1bWn/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1HAscg1bWn',
    },
    {
      id: 'fb-reel-3',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'मराठवाडा कृषी संजीवनी महोत्सवाच्या नियोजनाबाबत परभणी शहराचे महापौर सय्यद इकबालजी यांच्याशी सविस्तर व सकारात्मक चर्चा संपन्न. #MarathwadaSanjeevaniMahotsav #Parbhani #Agriculture',
      contentEn:
        'Constructive discussion held with Parbhani Mayor Syed Iqbal regarding planning of the Marathwada Krishi Sanjeevani Mahotsav.',
      image: '/fb/fb-reel-3.jpg',
      badge: 'FB REEL',
      likes: '5.2K',
      comments: '730',
      shares: '345',
      url: 'https://www.facebook.com/share/r/1RM159QQ6U/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1RM159QQ6U',
    },
    {
      id: 'fb-reel-4',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'तलवारीची धार संपते, पण विचारांची क्रांती कधीच संपत नाही हेच शिवतत्त्व 🚩 शिवराय शक्तीदाता ❤️🙌⛳️ #शिवजयंती #ShivJayanti #ShivajiMaharaj',
      contentEn:
        'The sharpness of a sword ends, but the revolution of ideals never dies 🚩 Chhatrapati Shivaji Maharaj Jayanti tribute.',
      image: '/fb/fb-reel-4.jpg',
      badge: 'FB REEL',
      likes: '2.9K',
      comments: '345',
      shares: '160',
      url: 'https://www.facebook.com/share/r/1BxfKawSfu/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1BxfKawSfu',
    },
    {
      id: 'fb-reel-5',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'लोकशाही पत्रकार संघाची मराठवाडा आढावा बैठक उत्साहात संपन्न 🎙️ पत्रकारांच्या समस्या, संघ विस्तार व कल्याणकारी उपक्रमांवर सखोल मार्गदर्शन. #lokshahi #marathwada #teamlokshahi',
      contentEn:
        'Marathwada Regional Review Meeting of Lokshahi Patrakar Sangh successfully conducted — strategic roadmap for journalist welfare.',
      image: '/fb/fb-reel-5.jpg',
      badge: 'FB REEL',
      likes: '3.8K',
      comments: '490',
      shares: '215',
      url: 'https://www.facebook.com/share/r/1L3aTJz8j9/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1L3aTJz8j9',
    },
    {
      id: 'fb-reel-6',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'गर्जा जयजयकार… क्रांतीचा ✊🔥 एखाद्याला मदत करणं चांगलं, पण त्याला स्वतःच्या हक्कासाठी उभं करणं हीच खरी परिवर्तनाची सुरुवात! #Motivation #SocialChange #SandeepJadhav',
      contentEn:
        'Empowering people to stand up for their rights is the true beginning of real transformation ✊🔥 #Motivation #SocialChange',
      image: '/fb/fb-reel-6.jpg',
      badge: 'FB REEL',
      likes: '4.1K',
      comments: '530',
      shares: '275',
      url: 'https://www.facebook.com/share/r/1Er5Csbft7/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1Er5Csbft7',
    },
    {
      id: 'fb-reel-7',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'जे सर्व सुंदर, सर्वथा आजन्म तयाचा ध्यास दे ❤️🍀✨ #TeamLokshahi 🎙️ #motivational #sandeepjadhav #trendingreel',
      contentEn:
        'Dedicated to truth, beauty, and public good — Team Lokshahi inspirational reel by Sandeep Jadhav.',
      image: '/fb/fb-reel-7.jpg',
      badge: 'FB REEL',
      likes: '6.4K',
      comments: '880',
      shares: '430',
      url: 'https://www.facebook.com/share/r/1EqFdY2qsS/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1EqFdY2qsS',
    },
    {
      id: 'fb-reel-8',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'मैं उस मिट्टी का वृक्ष नहीं, जिसे नदियों ने सींचा है; मैं उस मिट्टी का वृक्ष हूँ, जिसने बंजर जमीन पर रहकर मृत्यु से जीवन सीचा है। 🌱🔥 #Motivation #SandeepJadhav #LokshahiPatrakar',
      contentEn:
        'Resilience and dedication: Rising through adversity to serve society and press freedom 🌱🔥 #Motivation #LokshahiPatrakar',
      image: '/fb/fb-reel-8.jpg',
      badge: 'FB REEL',
      likes: '3.1K',
      comments: '395',
      shares: '180',
      url: 'https://www.facebook.com/share/r/1KuKYcgpC6/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1KuKYcgpC6',
    },
    {
      id: 'fb-reel-9',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'लोकशाही पत्रकार महासंघ भारत — राष्ट्रीय व राज्यस्तरीय उपक्रम, पत्रकार हक्क व सुरक्षा जनजागृती संवाद 🎙️ #LokshahiPatrakar #PressFreedom',
      contentEn:
        'Lokshahi Patrakar Mahasangh Bharat — Nationwide awareness campaign for journalist rights and legal protection 🎙️',
      image: '/fb/fb-reel-9.jpg',
      badge: 'FB REEL',
      likes: '7.2K',
      comments: '950',
      shares: '510',
      url: 'https://www.facebook.com/share/r/12DY9c2a1eE/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/12DY9c2a1eE',
    },
    {
      id: 'fb-reel-10',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'मराठवाडा दौऱ्यादरम्यान उमरगा येथे आपुलकीची भेट❤️... आमचे बंधू किशोर दादा पवार व मित्र बालाजीजी सूर्यवंशी यांच्या उमरगा अर्बन बँक, उमरगा शाखेला सदिच्छा भेट दिली. - पत्रकार संदिप जाधव✍️ #marathwada #meet #friends #trendingreels',
      contentEn:
        'Heartfelt visit to Umarga Urban Bank branch during Marathwada tour with Kishor Dada Pawar and Balaji Suryavanshi. - Sandeep Jadhav',
      image: '/fb/fb-reel-10.jpg',
      badge: 'FB REEL',
      likes: '6.4K',
      comments: '810',
      shares: '430',
      url: 'https://www.facebook.com/share/r/1HQRLuEqrW/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1HQRLuEqrW',
    },
    {
      id: 'fb-reel-11',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        '#लोकशाहीर❤️ वंचितांच्या वेदनांना शब्द देणारे, संघर्ष, समता, श्रम आणि सामाजिक न्यायाचा बुलंद आवाज, जनतेचे लोकशाहीर साहित्यरत्न अण्णाभाऊ साठे यांना जयंतीनिमित्त विनम्र अभिवादन! 💐 #annabhausathe #jayanti #trendingreels',
      contentEn:
        'Tribute to Lokshahir Annabhau Sathe on his birth anniversary — fearless voice of social justice, equality, and dignity. 💐 #annabhausathe',
      image: '/fb/fb-reel-11.jpg',
      badge: 'FB REEL',
      likes: '5.9K',
      comments: '740',
      shares: '390',
      url: 'https://www.facebook.com/share/r/1QfLYib2gM/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1QfLYib2gM',
    },
    {
      id: 'fb-reel-12',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत रील • 🎬 Facebook Reel',
      timeEn: 'Official Reel • 🎬 Facebook Reel',
      contentMr:
        'स्वतःवर विश्वास ठेवा… बाकी सगळं आपोआप घडतं❤️...... #selfconfidence #motivational #inspiration #viralreels #trendingvideos | Sandeep Jadhav',
      contentEn:
        'Believe in yourself... everything else falls into place naturally. ❤️ #selfconfidence #motivational #viralreels | Sandeep Jadhav',
      image: '/fb/fb-reel-12.jpg',
      badge: 'FB REEL',
      likes: '6.8K',
      comments: '880',
      shares: '470',
      url: 'https://www.facebook.com/share/r/1Co5CQnQfw/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/1Co5CQnQfw',
    },
    {
      id: 'fb-post-statement-1',
      platform: 'facebook',
      type: 'post-card',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत निवेदन • 📢 Press Release',
      timeEn: 'Official Statement • 📢 Press Release',
      contentMr:
        'पत्रकारांवरील हल्ले व खोट्या गुन्ह्यांचा महासंघातर्फे तीव्र निषेध. राज्यभरातील सर्व जिल्ह्यांमध्ये निषेध मोर्चे व जिल्हाधिकाऱ्यांना निवेदने सादर.',
      contentEn:
        'Strong condemnation of intimidation against press reporters. Delegations across all districts submitted formal appeals to authorities.',
      image: '/vision-1.jpg',
      likes: '2.8K',
      comments: '340',
      shares: '190',
      url: OFFICIAL_FB_URL,
      embedSource: 'facebook.com/share/1Ekodo5ECG',
    },
    {
      id: 'fb-post-statement-2',
      platform: 'facebook',
      type: 'post-card',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'थेट सभा • 🔴 Live Session',
      timeEn: 'Live Session • 🔴 Broadcast',
      contentMr:
        'राष्ट्रीय कार्यकारिणी वार्षिक अधिवेशन — देशातील २८ राज्यांमधील प्रतिनिधींची उपस्थिती व संघटनात्मक आराखडा जाहीर.',
      contentEn:
        'National Executive Council Annual Assembly with delegates from across states outlining future action roadmap.',
      image: '/event-10.jpg',
      likes: '3.6K',
      comments: '415',
      shares: '220',
      url: OFFICIAL_FB_URL,
      embedSource: 'facebook.com/share/1Ekodo5ECG',
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-5 text-left">
      {/* Section Header */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1877F2] text-white text-[10px] font-black">
              f
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-[#1877F2]">
              {lang === 'mr' ? 'फेसबुक लाइव्ह व सोशल मीडिया कव्हरेज' : 'FACEBOOK LIVE & SOCIAL COVERAGE'}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
            {lang === 'mr' ? 'अधिकृत फेसबुक पेज, रील्स व व्हिडिओ' : 'Official Facebook Page, Reels & Videos'}
          </h2>
        </div>

        {/* Header Controls: Scroll buttons + See More */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 hover:text-black transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 hover:text-black transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {onSeeMore && (
            <button
              type="button"
              onClick={onSeeMore}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white px-3.5 py-1.5 text-xs font-black transition-colors cursor-pointer"
            >
              <span>{lang === 'mr' ? 'सर्व मीडिया पहा' : 'View All Media'}</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>

      {/* Social Media & Facebook Posts Embedded Container - EXACT same container from media page */}
      <div className="rounded-3xl border-2 border-[#172A4A]/20 bg-white overflow-hidden shadow-md">
        {/* Top Window Bar matching media section iframe top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#172A4A] text-white/90 border-b border-[#172A4A]/20 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 inline-block" />
            </span>
            <span className="text-[11px] font-bold text-white/70 ml-2 hidden sm:inline">
              📱 facebook.com/share/1Ekodo5ECG/
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg text-[11px] text-white/90 font-mono">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>LIVE FEED CAROUSEL</span>
          </div>

          <a
            href={OFFICIAL_FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-white hover:text-amber-300 font-bold hidden sm:inline flex items-center gap-1"
          >
            <span>fb.com/lokshahipress</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Horizontally Scrollable Element Container */}
        <div className="bg-[#F7F3EC]/50 p-2.5 sm:p-6">
          <div
            ref={scrollContainerRef}
            className="flex gap-3.5 sm:gap-6 overflow-x-auto pb-4 pt-1 px-1 sm:px-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] [scrollbar-color:#172A4A33_transparent]"
          >
            {facebookPosts.map((post) => {
              // Card 1: Official Facebook Page Live Embed Card
              if (post.type === 'page-plugin') {
                return (
                  <article
                    key={post.id}
                    className="w-[84vw] max-w-[340px] sm:w-[380px] shrink-0 snap-center sm:snap-start rounded-2xl border-2 border-[#1877F2]/40 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Page Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                        <div className="flex items-center gap-2.5">
                          <div className="h-11 w-11 rounded-full border-2 border-[#1877F2] p-0.5 bg-white shrink-0 overflow-hidden flex items-center justify-center">
                            <Logo className="h-full w-full object-contain" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <h4 className="text-xs sm:text-sm font-black text-[#172A4A] leading-tight">
                                {lang === 'mr' ? post.authorMr : post.author}
                              </h4>
                              <CheckCircle2 className="h-4 w-4 text-[#1877F2] shrink-0 fill-[#1877F2] text-white" />
                            </div>
                            <p className="text-[10px] text-neutral-500 font-bold">{post.handle}</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-[#1877F2]/10 px-2.5 py-0.5 text-[10px] font-black text-[#1877F2]">
                          {post.badge}
                        </span>
                      </div>

                      {/* Interactive Facebook Preview Banner (Thumbnail Image) */}
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 relative block rounded-xl overflow-hidden border border-neutral-200 aspect-[16/10] bg-neutral-900 group cursor-pointer"
                      >
                        <img
                          src="/leadership-banner.jpg"
                          alt="Facebook Banner"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3">
                          <span className="text-[10px] font-black uppercase text-amber-300">
                            {lang === 'mr' ? 'राज्यव्यापी पत्रकार संघटना' : 'National Press Federation'}
                          </span>
                          <p className="text-xs font-bold text-white line-clamp-1">
                            {lang === 'mr' ? 'सत्यासाठी लढणार, अन्यायाला भिडणार!' : 'Fight for Truth, Stand Against Injustice!'}
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Direct Facebook Action */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 rounded-xl bg-[#1877F2]/10 py-2.5 text-xs font-black text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all"
                      >
                        <FacebookIcon size={16} />
                        <span>{lang === 'mr' ? 'फेसबुकवर पेज उघडा' : 'Open Page on Facebook'}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </article>
                );
              }

              // Card: Facebook Reel & Video Embed Card
              if (post.type === 'facebook-reel') {
                return (
                  <article
                    key={post.id}
                    className="w-[84vw] max-w-[340px] sm:w-[380px] shrink-0 snap-center sm:snap-start rounded-2xl border-2 border-[#1877F2]/30 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Header with Original Logo */}
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                        <div className="flex items-center gap-2.5">
                          <div className="h-10 w-10 rounded-full border-2 border-[#1877F2] bg-white p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                            <Logo className="h-full w-full object-contain" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <h4 className="text-xs sm:text-sm font-black text-[#172A4A] leading-tight">
                                {lang === 'mr' ? post.authorMr : post.author}
                              </h4>
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#1877F2] shrink-0 fill-[#1877F2] text-white" />
                            </div>
                            <p className="text-[10px] text-neutral-500 font-bold">
                              {lang === 'mr' ? post.timeMr : post.timeEn}
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-[#1877F2]/10 px-2.5 py-0.5 text-[10px] font-black text-[#1877F2] flex items-center gap-1">
                          <FacebookIcon size={12} />
                          <span>{post.badge || 'FB REEL'}</span>
                        </span>
                      </div>

                      {/* Video / Reel Preview Banner (Thumbnail Image) */}
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative mt-3 block rounded-xl overflow-hidden border border-neutral-200 aspect-[16/10] bg-neutral-950 group cursor-pointer"
                      >
                        <img
                          src={post.image || '/leadership-banner.jpg'}
                          alt={post.contentMr || 'Facebook Reel'}
                          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 group-hover:via-transparent transition-colors" />

                        {/* Center Big Play Button with Pulse */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#166fe5]">
                            <Play className="h-5 w-5 fill-white ml-0.5" />
                          </div>
                        </div>

                        {/* Top-left Badge */}
                        <div className="absolute top-2 left-2 flex items-center gap-1 rounded-md bg-black/75 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                          <FacebookIcon size={12} />
                          <span>Facebook Reel</span>
                        </div>

                        {/* Bottom Info Strip */}
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-bold text-white">
                          <span className="flex items-center gap-1 rounded bg-black/60 px-1.5 py-0.5 backdrop-blur-xs">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                            <span>HD Video</span>
                          </span>
                          <span className="flex items-center gap-1 text-white group-hover:text-blue-300 transition-colors">
                            <span>{lang === 'mr' ? 'फेसबुकवर पहा' : 'Watch on FB'}</span>
                            <ExternalLink className="h-3 w-3" />
                          </span>
                        </div>
                      </a>

                      {/* Reaction Stats */}
                      <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500 font-semibold px-1">
                        <div className="flex items-center gap-1">
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1877F2] text-white text-[9px]">
                            👍
                          </span>
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[9px]">
                            ❤️
                          </span>
                          <span className="ml-1 font-bold text-neutral-700">{post.likes || '3.2K'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{post.comments || '250'} {lang === 'mr' ? 'कमेंट्स' : 'Comments'}</span>
                          <span>•</span>
                          <span>{post.shares || '120'} {lang === 'mr' ? 'शेअर्स' : 'Shares'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center gap-2">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 flex-1 rounded-xl bg-[#1877F2] py-2 text-xs font-black text-white hover:bg-[#166fe5] transition-colors shadow-2xs"
                      >
                        <Play className="h-3.5 w-3.5 fill-white" />
                        <span>{lang === 'mr' ? 'फेसबुकवर रील पहा' : 'Watch Reel on Facebook'}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                          (lang === 'mr' ? post.contentMr : post.contentEn) + ' ' + post.url
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on WhatsApp"
                        className="flex items-center justify-center h-8 w-8 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                      >
                        <WhatsAppIcon size={16} />
                      </a>
                    </div>
                  </article>
                );
              }

              // Card 4: Authentic Facebook Embedded Post Cards & Statements
              return (
                <article
                  key={post.id}
                  className="w-[84vw] max-w-[340px] sm:w-[380px] shrink-0 snap-center sm:snap-start rounded-2xl border-2 border-[#172A4A]/15 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Post Header with Original Logo */}
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                      <div className="flex items-center gap-2.5">
                        <div className="h-10 w-10 rounded-full border border-neutral-200 bg-white p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                          <Logo className="h-full w-full object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <h4 className="text-xs sm:text-sm font-black text-[#172A4A] leading-tight">
                              {lang === 'mr' ? post.authorMr : post.author}
                            </h4>
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#1877F2] shrink-0 fill-[#1877F2] text-white" />
                          </div>
                          <p className="text-[10px] text-neutral-500 font-bold">
                            {lang === 'mr' ? post.timeMr : post.timeEn}
                          </p>
                        </div>
                      </div>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#1877F2]">
                        <FacebookIcon size={18} />
                      </span>
                    </div>

                    {/* Attached Media Photo (Thumbnail Image) */}
                    {post.image && (
                      <div className="relative mt-3 rounded-xl overflow-hidden border border-neutral-200 aspect-[4/3] bg-neutral-100">
                        <img
                          src={post.image}
                          alt="Post Media"
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Social Reaction Stats */}
                    <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500 font-semibold px-1">
                      <div className="flex items-center gap-1">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1877F2] text-white text-[9px]">
                          👍
                        </span>
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[9px]">
                          ❤️
                        </span>
                        <span className="ml-1 font-bold text-neutral-700">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{post.comments} {lang === 'mr' ? 'कमेंट्स' : 'Comments'}</span>
                        <span>•</span>
                        <span>{post.shares} {lang === 'mr' ? 'शेअर्स' : 'Shares'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-600">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-[#1877F2] transition-colors py-1 px-2 rounded-md hover:bg-blue-50"
                    >
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span>Like</span>
                    </a>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-[#1877F2] transition-colors py-1 px-2 rounded-md hover:bg-blue-50"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Comment</span>
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        (lang === 'mr' ? post.contentMr : post.contentEn) + ' ' + post.url
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors py-1 px-2 rounded-md hover:bg-emerald-50"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                      <span>Share</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
