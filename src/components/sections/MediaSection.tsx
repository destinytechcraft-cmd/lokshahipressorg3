import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { Logo } from '../Logo';
import { FacebookIcon, YouTubeIcon, InstagramIcon, XIcon, WhatsAppIcon } from '../SocialIcons';
import {
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  MessageCircle,
  Share2,
  ExternalLink,
  CheckCircle2,
  Play,
  Flame,
  Globe,
  Radio,
  Link as LinkIcon,
  Copy,
  Check,
} from 'lucide-react';

const EMBED_URL = 'https://sites.google.com/view/lokshahipressorg/home';
const OFFICIAL_FB_URL = 'https://www.facebook.com/share/1Ekodo5ECG/?mibextid=wwXIfr';
const OFFICIAL_WA_URL = 'https://wa.me/918788734440';

export function MediaSection() {
  const { t, lang } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'facebook' | 'reels' | 'youtube' | 'statements'>('all');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCopyLink = (url: string, id: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(id);
      setTimeout(() => setCopiedLink(null), 2000);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const socialPosts = [
    {
      id: 'fb-live-page',
      platform: 'facebook',
      type: 'page-plugin',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      handle: '@lokshahipressorg',
      timeMr: 'अधिकृत फेसबुक पेज',
      timeEn: 'Official Facebook Page',
      titleMr: 'अधिकृत फेसबुक पेज व लाइव्ह अपडेट्स',
      titleEn: 'Official Facebook Page & Live Updates',
      descMr: 'आमच्या अधिकृत फेसबुक पेजला फॉलो करा आणि देश-विदेशातील पत्रकारांच्या हक्कांच्या लढाया व बातम्यांचे ताजे अपडेट मिळवा.',
      descEn: 'Follow our official Facebook page for the latest broadcasts, journalist advocacy updates, and press releases.',
      badge: 'LIVE PAGE',
      url: OFFICIAL_FB_URL,
      embedSource: 'facebook.com/share/1Ekodo5ECG',
    },
    // The 9 specific Facebook Reels & Videos requested by user:
    {
      id: 'fb-reel-1',
      platform: 'facebook',
      type: 'facebook-reel',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: 'अधिकृत व्हिडिओ • 🌐 Facebook Video',
      timeEn: 'Official Video • 🌐 Facebook Video',
      contentMr:
        'पत्रकार हक्क व संरक्षण परिषद — ज्येष्ठ पत्रकारांचे कायदेशीर मार्गदर्शन, पत्रकार सुरक्षा कायदे आणि हक्कांची जनजागृती विशेष भाषण.',
      contentEn:
        'Journalist Rights & Security Convention — Keynote address, journalist safety legislation, and press rights legal guidance.',
      image: '/event-2.jpg',
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
        'लोकशाही पत्रकार महासंघ — पत्रकार संरक्षण कायद्याची प्रभावी अंमलबजावणी व राज्यव्यापी जनजागृती मोहीम.',
      contentEn:
        'Lokshahi Patrakar Mahasangh — Statewide advocacy campaign for strict enforcement of the Journalist Protection Act.',
      image: '/event-4.jpg',
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
        'सत्यासाठी लढणार, अन्यायाला भिडणार! पत्रकार एकता जिंदाबाद — लोकशाही पत्रकार महासंघ महाअधिवेशन झलक.',
      contentEn:
        'Fight for Truth, Stand Against Injustice! Press Unity Anthem & Highlights from the Federation Convention.',
      image: '/event-6.jpg',
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
        'ग्रामीण व तालुका पातळीवरील पत्रकारांच्या समस्यांवर विधानभवन व शासन दरबारी सादर केलेले महत्त्वपूर्ण निवेदन.',
      contentEn:
        'Crucial official memorandum presented to the State Government addressing grievances of rural and taluka press correspondents.',
      image: '/event-7.jpg',
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
        'डिजिटल मीडिया, यूट्यूब न्यूज व सोशल मीडिया पत्रकारांचे कायदेशीर हक्क आणि सुरक्षा कवच यावर विशेष विश्लेषण.',
      contentEn:
        'Special legal analysis on press accreditation and rights safeguards for digital news creators and YouTube reporters.',
      image: '/event-9.jpg',
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
        'पत्रकारांसाठी मोफत आरोग्य विमा व वैद्यकीय सहाय्य योजना — संघटनेच्या पुढाकाराने आरोग्य शिबिराचे थेट अपडेट.',
      contentEn:
        'Free Health Insurance & Medical Support Scheme — Live footage from the federation’s journalist welfare medical camp.',
      image: '/event-10.jpg',
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
        'लोकशाहीचा चौथा स्तंभ अधिक सक्षम करण्यासाठी आयोजित भव्य पत्रकार संमेलन — पत्रकारांच्या बुलंद आवाजाची साक्ष.',
      contentEn:
        'Statewide Grand Journalists Convention to strengthen democratic press values — A resolute stand for media freedom.',
      image: '/event-11.jpg',
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
        'जिल्हास्तरीय कार्यकारणी आढावा व नवनियुक्त पदाधिकाऱ्यांचा सत्कार सोहळा — संघटनेच्या कार्यविस्ताराची नवी दिशा.',
      contentEn:
        'District Executive Committee Review and felicitation ceremony for newly inducted district office bearers.',
      image: '/gallery-3.jpg',
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
        'पत्रकार संरक्षण कायदा: कर्तव्य बजावताना पत्रकारांनी समजून घ्यावेत हे महत्त्वाचे कायदे व अधिकार!',
      contentEn:
        'Journalist Safety Act: Crucial legal rights and immediate helpline procedures every reporter on the field must know!',
      image: '/gallery-4.jpg',
      badge: 'FB REEL',
      likes: '7.2K',
      comments: '950',
      shares: '510',
      url: 'https://www.facebook.com/share/r/14rcoPLCgY6/?mibextid=wwXIfr',
      embedSource: 'facebook.com/share/r/14rcoPLCgY6',
    },
    // Main official feed posts:
    {
      id: 'fb-post-1',
      platform: 'facebook',
      type: 'post',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: '५ तासांपूर्वी • 🌐 Public',
      timeEn: '5 hrs ago • 🌐 Public',
      contentMr:
        'पत्रकारांच्या न्याय्य हक्कांसाठी आणि सन्मानासाठी लोकशाही पत्रकार महासंघ भारत सदैव कटिबद्ध! ✊ पत्रकारांवरील हल्ले रोखण्यासाठी आणि सुरक्षा कायद्याची कडक अंमलबजावणी करण्यासाठी राज्यभर जनजागृती मोहीम सुरू करण्यात आली आहे. सर्व पत्रकार बांधवांनी एकत्र येऊन लोकशाहीचा चौथा स्तंभ अधिक बळकट करावा. #PressFreedom #JournalistRights #LokshahiPatrakar',
      contentEn:
        'Committed to the rights, dignity, and security of every journalist! Lokshahi Patrakar Mahasangh Bharat is leading statewide advocacy for rigorous enforcement of journalist safety protections. #PressFreedom #JournalistRights',
      image: '/event-1.jpg',
      imageAlt: 'राज्यस्तरीय पत्रकार अधिवेशन व जनजागृती परिषद',
      likes: '1.8K',
      comments: '242',
      shares: '115',
      url: OFFICIAL_FB_URL,
      embedSource: 'facebook.com/posts/journalists-rights',
    },
    {
      id: 'fb-post-convention',
      platform: 'facebook',
      type: 'post',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: '८ तासांपूर्वी • 🔴 थेट प्रक्षेपण',
      timeEn: '8 hrs ago • 🔴 Live Stream',
      contentMr:
        'महाराष्ट्र राज्य पत्रकार हक्क परिषद २०२६ थेट प्रक्षेपण! राज्यभरातील ३६ जिल्ह्यांमधील पत्रकार प्रतिनिधी, कायदेतज्ज्ञ व मान्यवर संपादक उपस्थित. पत्रकारांच्या संरक्षण व सन्मानासाठी महत्वपूर्ण ठराव मंजूर. #LiveStream #PatrakarParishad',
      contentEn:
        'Maharashtra State Journalist Rights Convention 2026 Live Stream! Press representatives from all 36 districts gathered to pass landmark security resolutions. #LiveStream',
      image: '/event-3.jpg',
      imageAlt: 'पत्रकार हक्क परिषद थेट प्रक्षेपण',
      likes: '2.5K',
      comments: '412',
      shares: '280',
      url: OFFICIAL_FB_URL,
      embedSource: 'facebook.com/live/convention-2026',
    },
    {
      id: 'yt-video-1',
      platform: 'youtube',
      type: 'video',
      author: 'Lokshahi Patrakar Media TV',
      authorMr: 'लोकशाही पत्रकार मीडिया टीव्ही',
      timeMr: 'काल • 🔴 विशेष प्रसारण',
      timeEn: 'Yesterday • 🔴 Special Broadcast',
      contentMr:
        'पत्रकार संरक्षण कायदा आणि डिजिटल मीडिया पत्रकारांचे अधिकार या विषयावर विशेष परिसंवाद. कायदेतज्ज्ञ व ज्येष्ठ पत्रकारांचे महत्त्वपूर्ण मार्गदर्शन व विश्लेषण.',
      contentEn:
        'Special panel discussion on journalist protection laws and legal safeguards for digital news creators and field reporters.',
      videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      thumbnail: '/hero-photo-1.jpg',
      views: '16.4K views',
      duration: '18:45',
      url: 'https://youtube.com',
      embedSource: 'youtube.com/watch?v=media-rights-panel',
    },
    {
      id: 'fb-post-2',
      platform: 'facebook',
      type: 'post',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: '२ दिवसांपूर्वी • 🌐 Public',
      timeEn: '2 days ago • 🌐 Public',
      contentMr:
        'सामाजिक बांधिलकी आणि समाजकल्याण उपक्रम! महासंघातर्फे ग्रामीण पत्रकार व त्यांच्या कुटुंबीयांसाठी मोफत आरोग्य व नेत्रतपासणी शिबिर उत्साहात पार पडले. १०० हून अधिक पत्रकारांनी लाभ घेतला. #SocialWork #Welfare #HealthCamp',
      contentEn:
        'Community healthcare initiative! Free health check-up and eye testing camp conducted for rural journalists and their families with over 100 participants. #SocialWork #Welfare',
      image: '/social-1.jpg',
      imageAlt: 'मोफत आरोग्य व नेत्रतपासणी शिबिर',
      likes: '1.3K',
      comments: '178',
      shares: '82',
      url: OFFICIAL_FB_URL,
      embedSource: 'facebook.com/posts/health-camp-initiative',
    },
    {
      id: 'wa-channel-1',
      platform: 'facebook',
      type: 'whatsapp-feed',
      author: 'Lokshahi Journalist Helpdesk',
      authorMr: 'लोकशाही पत्रकार २४x७ हेल्पडेस्क',
      timeMr: '२४x७ २४ तास सेवेत • अधिकृत चॅनेल',
      timeEn: '24x7 Active • Official Channel',
      contentMr:
        'पत्रकारांसाठी २४x७ कायदेशीर सल्ला व तात्काळ मदत कक्ष सुरू! कोणत्याही अन्यायाविरोधात तक्रार नोंदवण्यासाठी आणि शासकीय योजनांच्या माहितीसाठी आमच्या अधिकृत व्हॉट्सॲप चॅनेलला जॉइन व्हा.',
      contentEn:
        '24x7 Legal & Helpdesk line for journalists! Join our official WhatsApp channel for urgent assistance, circulars, and grievance registration.',
      image: '/social-2.jpg',
      imageAlt: 'पत्रकार हेल्पडेस्क व जनसंवाद',
      likes: '3.2K',
      comments: '520',
      shares: '340',
      url: OFFICIAL_WA_URL,
      embedSource: 'wa.me/918788734440',
    },
    {
      id: 'fb-post-3',
      platform: 'facebook',
      type: 'post',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: '४ दिवसांपूर्वी • 🌐 Public',
      timeEn: '4 days ago • 🌐 Public',
      contentMr:
        'केंद्रीय व राज्य कार्यकारिणी २०२६ बैठक! संघटनेचा विस्तार, तालुका व जिल्हा पातळीवरील समिती पुनर्रचना आणि पत्रकारांच्या निवृत्तीवेतन योजनेवर महत्त्वपूर्ण ठराव मंजूर. #MediaUnity #ExecutiveMeeting',
      contentEn:
        'Central & State Executive Meeting 2026! Crucial resolutions passed for federation expansion, district-level committees, and journalist pension schemes. #MediaUnity',
      image: '/gallery-2.jpg',
      imageAlt: 'केंद्रीय व राज्य कार्यकारिणी बैठक',
      likes: '2.1K',
      comments: '315',
      shares: '164',
      url: OFFICIAL_FB_URL,
      embedSource: 'facebook.com/posts/executive-meeting-2026',
    },
    {
      id: 'fb-post-district',
      platform: 'facebook',
      type: 'post',
      author: 'Lokshahi Patrakar Mahasangh Bharat',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      timeMr: '५ दिवसांपूर्वी • 🌐 Public',
      timeEn: '5 days ago • 🌐 Public',
      contentMr:
        'जिल्हा व तालुका पत्रकार ओळखपत्र वाटप आणि कायदेशीर सुरक्षा मार्गदर्शिका प्रकाशन सोहळा! सर्व सभासदांना अधिकृत ओळखपत्र व डिजिटल प्रेस कार्डचे वाटप संपन्न. #PressID #MembershipDrive',
      contentEn:
        'Distribution of official Press Identity Cards and Journalist Legal Security Guidelines ceremony successfully conducted across district centers. #PressID',
      image: '/event-8.jpg',
      imageAlt: 'पत्रकार ओळखपत्र वाटप सोहळा',
      likes: '1.7K',
      comments: '198',
      shares: '94',
      url: OFFICIAL_FB_URL,
      embedSource: 'facebook.com/posts/press-id-distribution',
    },
    {
      id: 'statement-post-1',
      platform: 'statements',
      type: 'statement',
      author: 'National Press Directorate',
      authorMr: 'राष्ट्रीय प्रसिद्धी विभाग',
      timeMr: 'अधिकृत प्रसिद्धीपत्रक • ५ दिवसांपूर्वी',
      timeEn: 'Official Press Statement • 5 days ago',
      contentMr:
        'लोकशाही पत्रकार महासंघाची राज्य शासनाकडे मागणी: कर्तव्य बजावताना पत्रकारांवर होणाऱ्या खोट्या तक्रारी व हल्ल्यांची तात्काळ दखल घेऊन विशेष न्यायालयीन चौकशी सुरू करावी आणि मोफत वैद्यकीय विमा कवच लागू करावे. #JusticeForJournalists',
      contentEn:
        'Official Representation to the Government: Demand for fast-track judicial tribunals for journalist protection and universal medical insurance coverage. #JusticeForJournalists',
      image: '/event-5.jpg',
      imageAlt: 'पत्रकार परिषद व प्रसिद्धीपत्रक',
      likes: '960',
      comments: '124',
      shares: '73',
      url: OFFICIAL_FB_URL,
      embedSource: 'lokshahipressorg.com/press-releases/01',
    },
  ];

  const filteredPosts = socialPosts.filter((post) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'facebook') return post.platform === 'facebook';
    if (activeTab === 'reels') return post.type === 'facebook-reel';
    return post.platform === activeTab;
  });

  return (
    <SectionShell
      id="media"
      title={t('sec_media')}
      icon={
        <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#E30620] text-white text-xs sm:text-sm font-black shadow-xs shrink-0 select-none">
          ★
        </span>
      }
    >
      <div className="space-y-10 text-left">
        {/* 1. Digital Portal Header Bar */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#172A4A]/15 bg-white shadow-xs">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#E30620]">
              {lang === 'mr' ? 'अधिकृत डिजिटल न्यूज व मीडिया पोर्टल' : 'OFFICIAL DIGITAL NEWS PORTAL'}
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

        {/* 2. Auto Layout Embedded Container (Google Sites iframe) */}
        <div className="rounded-3xl border-2 border-[#172A4A]/20 bg-white overflow-hidden shadow-md">
          {/* Browser-style address bar header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#172A4A] text-white/90 border-b border-[#172A4A]/20 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
              </span>
              <span className="text-[11px] font-bold text-white/60 ml-2 hidden sm:inline">
                🔒 HTTPS Secure
              </span>
            </div>

            {/* URL pill */}
            <div className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-lg text-[11px] text-white/80 font-mono max-w-xs sm:max-w-md truncate">
              <span>🌐</span>
              <span className="truncate">{EMBED_URL}</span>
            </div>

            <a
              href={EMBED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white hover:text-amber-300 font-bold hidden sm:inline"
            >
              sites.google.com ↗
            </a>
          </div>

          {/* Iframe Viewport */}
          <div className="relative w-full bg-neutral-100">
            {/* Loading indicator overlay */}
            {loading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 p-6 space-y-3">
                <div className="h-10 w-10 border-4 border-[#172A4A]/20 border-t-[#E30620] rounded-full animate-spin" />
                <p className="text-xs sm:text-sm font-bold text-[#172A4A]">
                  {lang === 'mr'
                    ? 'लोकशाही पत्रकार महासंघ भारत पोर्टल लोड होत आहे...'
                    : 'Loading Lokshahi Patrakar Mahasangh Bharat portal...'}
                </p>
              </div>
            )}

            <iframe
              src="/api/embed-site"
              title="Lokshahi Press Org Portal"
              onLoad={() => setLoading(false)}
              className="w-full border-0 h-[850px] sm:h-[950px] md:h-[1050px] transition-all duration-300"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* 3. Social Media & Facebook Feeds Header Bar - Matched sizing with media section box */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#172A4A]/15 bg-white shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#E30620]">
                  {lang === 'mr' ? 'अधिकृत सोशल मीडिया व फेसबुक कव्हरेज' : 'OFFICIAL SOCIAL MEDIA & FACEBOOK FEEDS'}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 text-blue-800 border border-blue-300 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1877F2] animate-pulse" />
                  <span>Verified Feed</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
                {lang === 'mr'
                  ? 'फेसबुक व सोशल मीडियावरील ताज्या पोस्ट्स आणि उपक्रम'
                  : 'Live Facebook & Social Media Embedded Posts'}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-semibold">
                {lang === 'mr'
                  ? 'महासंघाचे अधिकृत फेसबुक पेज, थेट व्हिडिओ निवेदने आणि राज्यव्यापी मोहिमांचे लाइव्ह अपडेट्स.'
                  : 'Official announcements, convention photos, live statements, and updates from the federation.'}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
              <a
                href={OFFICIAL_FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-4 py-2.5 text-xs font-black text-white shadow-xs hover:bg-[#166fe5] transition-all"
              >
                <FacebookIcon size={16} />
                <span>{lang === 'mr' ? 'अधिकृत फेसबुक पेज' : 'Visit Official Facebook'}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Filter Pills and Carousel Navigation Buttons */}
          <div className="mt-5 pt-4 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#172A4A] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {lang === 'mr' ? 'सर्व पोस्ट्स (All)' : 'All Posts'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('reels')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'reels'
                    ? 'bg-[#1877F2] text-white shadow-xs'
                    : 'bg-blue-50 text-[#1877F2] hover:bg-blue-100 border border-[#1877F2]/30'
                }`}
              >
                <FacebookIcon size={14} />
                <span>{lang === 'mr' ? 'फेसबुक रील्स व व्हिडिओ (९)' : 'FB Reels & Videos (9)'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('facebook')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'facebook'
                    ? 'bg-[#1877F2] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <FacebookIcon size={14} />
                <span>Facebook All</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('youtube')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'youtube'
                    ? 'bg-[#FF0000] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <YouTubeIcon size={14} />
                <span>YouTube Media</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('statements')}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'statements'
                    ? 'bg-[#E30620] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {lang === 'mr' ? 'प्रसिद्धीपत्रके (Press Notes)' : 'Press Releases'}
              </button>
            </div>

            {/* Scroll Element Controls */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-neutral-500 hidden sm:inline">
                {lang === 'mr' ? 'स्क्रोल करा ➔' : 'Scroll Posts ➔'}
              </span>
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
          </div>
        </div>

        {/* 4. Social Media & Facebook Posts Embedded Container - EXACT same container size as media section box */}
        <div className="rounded-3xl border-2 border-[#172A4A]/20 bg-white overflow-hidden shadow-md">
          {/* Top Bar matching media section iframe top bar */}
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
          <div className="bg-[#F7F3EC]/50 p-4 sm:p-6">
            <div
              ref={scrollContainerRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 px-1 select-none scroll-smooth [scrollbar-width:thin] [scrollbar-color:#172A4A33_transparent]"
            >
              {filteredPosts.map((post) => {
                // Card 1: Official Facebook Page Live Embed Card
                if (post.type === 'page-plugin') {
                  return (
                    <article
                      key={post.id}
                      className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl border-2 border-[#1877F2]/40 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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

                        {/* Official Facebook Embed Box */}
                        <div className="my-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <FacebookIcon size={20} />
                            <span className="text-xs font-black text-[#172A4A]">
                              {lang === 'mr' ? post.titleMr : post.titleEn}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                            {lang === 'mr' ? post.descMr : post.descEn}
                          </p>

                          <div className="mt-3 flex items-center justify-between rounded-lg bg-white p-2.5 border border-neutral-200/80">
                            <div className="text-left">
                              <span className="block text-xs font-black text-[#172A4A]">25,000+</span>
                              <span className="text-[10px] text-neutral-500 font-semibold">
                                {lang === 'mr' ? 'फॉलोअर्स व सदस्य' : 'Followers & Members'}
                              </span>
                            </div>
                            <a
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg bg-[#1877F2] px-3 py-1.5 text-xs font-black text-white hover:bg-[#166fe5] transition-colors"
                            >
                              + Follow
                            </a>
                          </div>
                        </div>

                        {/* Embedded Source Link Pill */}
                        <div className="mb-3 flex items-center justify-between text-[10px] font-semibold text-neutral-500 bg-neutral-50 rounded-lg px-2.5 py-1.5 border border-neutral-200/70">
                          <div className="flex items-center gap-1.5 truncate">
                            <LinkIcon className="h-3 w-3 text-[#1877F2] shrink-0" />
                            <span className="truncate text-neutral-700 font-mono font-medium">{post.embedSource}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopyLink(post.url, post.id)}
                            className="flex items-center gap-1 text-[10px] font-bold text-[#172A4A] hover:text-[#E30620] transition-colors cursor-pointer shrink-0 ml-2"
                          >
                            {copiedLink === post.id ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-600" />
                                <span className="text-emerald-600 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy Link</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Interactive Facebook Preview Banner */}
                        <div className="relative rounded-xl overflow-hidden border border-neutral-200 aspect-[16/10] bg-neutral-900 group">
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
                        </div>
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

                // Card: Facebook Reel & Video Embed Card (for user's 9 specific links)
                if (post.type === 'facebook-reel') {
                  return (
                    <article
                      key={post.id}
                      className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl border-2 border-[#1877F2]/30 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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

                        {/* Title / Description */}
                        <p className="mt-3 text-xs text-neutral-800 leading-relaxed font-semibold">
                          {lang === 'mr' ? post.contentMr : post.contentEn}
                        </p>

                        {/* Embedded Source Link Pill with 1-Click Copy */}
                        <div className="mt-2.5 mb-2 flex items-center justify-between text-[10px] font-semibold text-neutral-500 bg-blue-50/70 rounded-lg px-2.5 py-1.5 border border-[#1877F2]/20">
                          <div className="flex items-center gap-1.5 truncate">
                            <LinkIcon className="h-3 w-3 text-[#1877F2] shrink-0" />
                            <a
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="truncate text-[#1877F2] font-mono font-bold hover:underline"
                            >
                              {post.embedSource || post.url}
                            </a>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopyLink(post.url, post.id)}
                            className="flex items-center gap-1 text-[10px] font-bold text-[#172A4A] hover:text-[#E30620] transition-colors cursor-pointer shrink-0 ml-2"
                          >
                            {copiedLink === post.id ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-600" />
                                <span className="text-emerald-600 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy Link</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Responsive Embedded Video / Reel Frame with Real Facebook Embed */}
                        <div className="relative mt-2 rounded-xl overflow-hidden border border-neutral-200 aspect-[16/10] bg-neutral-900 group">
                          {/* Embedded Facebook Video/Reel iframe */}
                          <iframe
                            src={`https://www.facebook.com/plugins/video.php?height=300&href=${encodeURIComponent(
                              post.url
                            )}&show_text=false&width=360`}
                            title={post.contentMr || 'Facebook Video'}
                            className="w-full h-full border-0 absolute inset-0 z-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                          {post.image && (
                            <img
                              src={post.image}
                              alt="Thumbnail"
                              className="h-full w-full object-cover opacity-80 pointer-events-none"
                            />
                          )}
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-2 right-2 z-10 rounded-md bg-black/85 hover:bg-[#1877F2] text-white px-2 py-1 text-[10px] font-bold flex items-center gap-1 transition-colors"
                          >
                            <Play className="h-3 w-3 fill-white" />
                            <span>Open in FB ↗</span>
                          </a>
                        </div>

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

                // Card 2: YouTube Media Broadcast Embed Card
                if (post.type === 'video') {
                  return (
                    <article
                      key={post.id}
                      className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl border-2 border-[#FF0000]/30 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Video Author Header */}
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
                              </div>
                              <p className="text-[10px] text-neutral-500 font-semibold">
                                {lang === 'mr' ? post.timeMr : post.timeEn}
                              </p>
                            </div>
                          </div>
                          <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-black text-red-700 flex items-center gap-1">
                            <YouTubeIcon size={12} />
                            <span>VIDEO</span>
                          </span>
                        </div>

                        {/* Caption Text */}
                        <p className="mt-3 text-xs text-neutral-800 leading-relaxed font-semibold">
                          {lang === 'mr' ? post.contentMr : post.contentEn}
                        </p>

                        {/* Embedded Source Link Pill */}
                        <div className="mt-2.5 mb-1 flex items-center justify-between text-[10px] font-semibold text-neutral-500 bg-neutral-50 rounded-lg px-2.5 py-1.5 border border-neutral-200/70">
                          <div className="flex items-center gap-1.5 truncate">
                            <LinkIcon className="h-3 w-3 text-[#FF0000] shrink-0" />
                            <span className="truncate text-neutral-700 font-mono font-medium">{post.embedSource}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopyLink(post.url, post.id)}
                            className="flex items-center gap-1 text-[10px] font-bold text-[#172A4A] hover:text-[#E30620] transition-colors cursor-pointer shrink-0 ml-2"
                          >
                            {copiedLink === post.id ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-600" />
                                <span className="text-emerald-600 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy Link</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Video Media Container with Thumbnail & Play Overlay */}
                        <div className="relative mt-2 rounded-xl overflow-hidden border border-neutral-200 aspect-video bg-black group cursor-pointer">
                          <img
                            src={post.thumbnail}
                            alt="Video Thumbnail"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-85"
                          />
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all"
                          >
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg transition-transform group-hover:scale-110">
                              <Play className="h-6 w-6 fill-white ml-0.5" />
                            </span>
                          </a>
                          <span className="absolute bottom-2 right-2 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-white">
                            {post.duration}
                          </span>
                          <span className="absolute bottom-2 left-2 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-sans font-bold text-white">
                            {post.views}
                          </span>
                        </div>
                      </div>

                      {/* Video Actions */}
                      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-black text-[#FF0000] hover:underline"
                        >
                          <YouTubeIcon size={16} />
                          <span>{lang === 'mr' ? 'यूट्यूबवर व्हिडिओ पहा' : 'Watch on YouTube'}</span>
                        </a>
                        <span className="text-[10px] text-neutral-400 font-bold">1080p HD</span>
                      </div>
                    </article>
                  );
                }

                // Card 3: WhatsApp Channel Feed Card
                if (post.type === 'whatsapp-feed') {
                  return (
                    <article
                      key={post.id}
                      className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl border-2 border-[#25D366]/40 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Post Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                          <div className="flex items-center gap-2.5">
                            <div className="h-10 w-10 rounded-full border border-[#25D366] bg-white p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                              <Logo className="h-full w-full object-contain" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1">
                                <h4 className="text-xs sm:text-sm font-black text-[#172A4A] leading-tight">
                                  {lang === 'mr' ? post.authorMr : post.author}
                                </h4>
                                <CheckCircle2 className="h-3.5 w-3.5 text-[#25D366] shrink-0 fill-[#25D366] text-white" />
                              </div>
                              <p className="text-[10px] text-neutral-500 font-bold">
                                {lang === 'mr' ? post.timeMr : post.timeEn}
                              </p>
                            </div>
                          </div>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-[#25D366]">
                            <WhatsAppIcon size={18} />
                          </span>
                        </div>

                        {/* Post Caption */}
                        <p className="mt-3 text-xs text-neutral-800 leading-relaxed font-semibold">
                          {lang === 'mr' ? post.contentMr : post.contentEn}
                        </p>

                        {/* Embedded Source Link Pill */}
                        <div className="mt-2.5 mb-1 flex items-center justify-between text-[10px] font-semibold text-neutral-500 bg-neutral-50 rounded-lg px-2.5 py-1.5 border border-neutral-200/70">
                          <div className="flex items-center gap-1.5 truncate">
                            <LinkIcon className="h-3 w-3 text-[#25D366] shrink-0" />
                            <span className="truncate text-neutral-700 font-mono font-medium">{post.embedSource}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopyLink(post.url, post.id)}
                            className="flex items-center gap-1 text-[10px] font-bold text-[#172A4A] hover:text-[#E30620] transition-colors cursor-pointer shrink-0 ml-2"
                          >
                            {copiedLink === post.id ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-600" />
                                <span className="text-emerald-600 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy Link</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Attached Media Photo */}
                        {post.image && (
                          <div className="relative mt-2 rounded-xl overflow-hidden border border-neutral-200 aspect-[4/3] bg-neutral-100">
                            <img
                              src={post.image}
                              alt={post.imageAlt || 'Post Media'}
                              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        )}
                      </div>

                      {/* Action Bar */}
                      <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-600">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-lg hover:bg-[#20ba5a] transition-colors shadow-2xs font-bold text-xs flex-1 justify-center"
                        >
                          <WhatsAppIcon size={16} />
                          <span>{lang === 'mr' ? 'व्हॉट्सॲपवर संपर्क करा' : 'Connect on WhatsApp'}</span>
                        </a>
                      </div>
                    </article>
                  );
                }

                // Card 4: Authentic Facebook Embedded Post Cards & Statements
                return (
                  <article
                    key={post.id}
                    className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl border-2 border-[#172A4A]/15 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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

                      {/* Post Caption */}
                      <p className="mt-3 text-xs text-neutral-800 leading-relaxed font-semibold">
                        {lang === 'mr' ? post.contentMr : post.contentEn}
                      </p>

                      {/* Embedded Source Link Pill */}
                      <div className="mt-2.5 mb-1 flex items-center justify-between text-[10px] font-semibold text-neutral-500 bg-neutral-50 rounded-lg px-2.5 py-1.5 border border-neutral-200/70">
                        <div className="flex items-center gap-1.5 truncate">
                          <LinkIcon className="h-3 w-3 text-[#1877F2] shrink-0" />
                          <span className="truncate text-neutral-700 font-mono font-medium">{post.embedSource}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopyLink(post.url, post.id)}
                          className="flex items-center gap-1 text-[10px] font-bold text-[#172A4A] hover:text-[#E30620] transition-colors cursor-pointer shrink-0 ml-2"
                        >
                          {copiedLink === post.id ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-600" />
                              <span className="text-emerald-600 font-bold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy Link</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Attached Media Photo */}
                      {post.image && (
                        <div className="relative mt-2 rounded-xl overflow-hidden border border-neutral-200 aspect-[4/3] bg-neutral-100">
                          <img
                            src={post.image}
                            alt={post.imageAlt || 'Post Media'}
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
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open post"
                        className="flex items-center justify-center h-7 w-7 rounded-md hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Quick Embedded Channels & Permanent Links Directory Strip */}
          <div className="border-t border-neutral-200/80 bg-white p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
              <div className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4 text-[#E30620]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#172A4A]">
                  {lang === 'mr' ? 'अधिकृत सोशल व मीडिया एम्बेड लिंक्स' : 'Official Social & Media Embedded Links'}
                </span>
              </div>
              <span className="text-[10px] font-bold text-neutral-500">
                {lang === 'mr' ? 'थेट उघडा व अधिकृत अपडेट्स मिळवा' : 'Click to visit and connect with the federation'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <a
                href={OFFICIAL_FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-blue-50 hover:border-[#1877F2] transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <FacebookIcon size={20} />
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-black text-[#172A4A] truncate">Facebook Page</p>
                    <p className="text-[10px] text-neutral-500 font-mono truncate">facebook.com/share/1Ekodo5ECG</p>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-[#1877F2] shrink-0" />
              </a>

              <a
                href={OFFICIAL_WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-emerald-50 hover:border-[#25D366] transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <WhatsAppIcon size={20} />
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-black text-[#172A4A] truncate">WhatsApp 24x7 Helpdesk</p>
                    <p className="text-[10px] text-neutral-500 font-mono truncate">wa.me/918788734440</p>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-[#25D366] shrink-0" />
              </a>

              <a
                href={EMBED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-amber-50 hover:border-amber-400 transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-lg">🌐</span>
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-black text-[#172A4A] truncate">Google Sites News Portal</p>
                    <p className="text-[10px] text-neutral-500 font-mono truncate">sites.google.com/view/lokshahipressorg</p>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-amber-600 shrink-0" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-red-50 hover:border-[#FF0000] transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <YouTubeIcon size={20} />
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-black text-[#172A4A] truncate">YouTube Press Channel</p>
                    <p className="text-[10px] text-neutral-500 font-mono truncate">youtube.com/@lokshahipress</p>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-[#FF0000] shrink-0" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-pink-50 hover:border-[#E1306C] transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <InstagramIcon size={20} />
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-black text-[#172A4A] truncate">Instagram Media Feed</p>
                    <p className="text-[10px] text-neutral-500 font-mono truncate">instagram.com/lokshahipress</p>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-[#E1306C] shrink-0" />
              </a>

              <a
                href="/membership-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-red-50 hover:border-[#E30620] transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-lg">📄</span>
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-black text-[#172A4A] truncate">Membership Circular PDF</p>
                    <p className="text-[10px] text-neutral-500 font-mono truncate">lokshahipressorg.com/membership.pdf</p>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-[#E30620] shrink-0" />
              </a>
            </div>

            {/* Official Facebook Video & Reels Embedded Links Directory */}
            <div className="mt-5 pt-4 border-t border-neutral-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <FacebookIcon size={16} />
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1877F2]">
                    {lang === 'mr' ? 'अधिकृत फेसबुक व्हिडिओ व रील्स लिंक्स (९ व्हिडिओ)' : 'Official Facebook Video & Reel Embed Links (9 Links)'}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-neutral-400">
                  {lang === 'mr' ? 'थेट लिंक कॉपी करा किंवा फेसबुकवर उघडा' : 'Direct permanent links'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                  {
                    titleMr: 'पत्रकार हक्क व संरक्षण परिषद कायदेशीर मार्गदर्शन',
                    titleEn: 'Journalist Rights & Security Convention Session',
                    badge: 'VIDEO',
                    url: 'https://www.facebook.com/share/v/1JG48PjXvK/?mibextid=wwXIfr',
                    id: 'dir-v1',
                  },
                  {
                    titleMr: 'पत्रकार संरक्षण कायद्याची प्रभावी अंमलबजावणी मोहीम',
                    titleEn: 'Journalist Protection Act Campaign',
                    badge: 'REEL',
                    url: 'https://www.facebook.com/share/r/1HAscg1bWn/?mibextid=wwXIfr',
                    id: 'dir-r1',
                  },
                  {
                    titleMr: 'सत्यासाठी लढणार, अन्यायाला भिडणार! एकता मेळावा',
                    titleEn: 'Press Unity Anthem & Highlights',
                    badge: 'REEL',
                    url: 'https://www.facebook.com/share/r/1RM159QQ6U/?mibextid=wwXIfr',
                    id: 'dir-r2',
                  },
                  {
                    titleMr: 'ग्रामीण व तालुका पत्रकारांच्या समस्यांवर शासन निवेदन',
                    titleEn: 'Rural Journalists Govt Memorandum',
                    badge: 'REEL',
                    url: 'https://www.facebook.com/share/r/1BxfKawSfu/?mibextid=wwXIfr',
                    id: 'dir-r3',
                  },
                  {
                    titleMr: 'डिजिटल मीडिया व यूट्यूब पत्रकारांचे कायदेशीर कवच',
                    titleEn: 'Digital Media Rights Legal Safeguards',
                    badge: 'REEL',
                    url: 'https://www.facebook.com/share/r/1L3aTJz8j9/?mibextid=wwXIfr',
                    id: 'dir-r4',
                  },
                  {
                    titleMr: 'पत्रकारांसाठी मोफत आरोग्य विमा व वैद्यकीय सहाय्य योजना',
                    titleEn: 'Journalist Medical Insurance Initiative',
                    badge: 'REEL',
                    url: 'https://www.facebook.com/share/r/1Er5Csbft7/?mibextid=wwXIfr',
                    id: 'dir-r5',
                  },
                  {
                    titleMr: 'लोकशाहीचा चौथा स्तंभ अधिक सक्षम करण्यासाठी संमेलन',
                    titleEn: 'Grand Media Rights Convention',
                    badge: 'REEL',
                    url: 'https://www.facebook.com/share/r/1EqFdY2qsS/?mibextid=wwXIfr',
                    id: 'dir-r6',
                  },
                  {
                    titleMr: 'जिल्हास्तरीय कार्यकारणी आढावा व सत्कार सोहळा',
                    titleEn: 'District Executive Review Felicitation',
                    badge: 'REEL',
                    url: 'https://www.facebook.com/share/r/1KuKYcgpC6/?mibextid=wwXIfr',
                    id: 'dir-r7',
                  },
                  {
                    titleMr: 'पत्रकार संरक्षण कायदा: महत्त्वाचे कायदे व हक्क',
                    titleEn: 'Journalist Safety Legal Provisions',
                    badge: 'REEL',
                    url: 'https://www.facebook.com/share/r/14rcoPLCgY6/?mibextid=wwXIfr',
                    id: 'dir-r8',
                  },
                ].map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-2 p-2.5 rounded-lg border border-neutral-200/80 bg-neutral-50 hover:bg-blue-50/60 hover:border-[#1877F2]/40 transition-colors text-left"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="rounded bg-[#1877F2] text-white text-[9px] font-black px-1.5 py-0.2">
                          #{idx + 1} {item.badge}
                        </span>
                        <p className="text-[11px] font-bold text-[#172A4A] truncate">
                          {lang === 'mr' ? item.titleMr : item.titleEn}
                        </p>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-[#1877F2] font-mono truncate block hover:underline"
                      >
                        {item.url.replace('https://www.', '')}
                      </a>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopyLink(item.url, item.id)}
                        title="Copy Link"
                        className="p-1 rounded text-neutral-400 hover:text-[#172A4A] transition-colors cursor-pointer"
                      >
                        {copiedLink === item.id ? (
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open in Facebook"
                        className="p-1 rounded text-neutral-400 hover:text-[#1877F2] transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

