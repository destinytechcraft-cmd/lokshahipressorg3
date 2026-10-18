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
  Bell,
} from 'lucide-react';

const OFFICIAL_FB_URL = 'https://www.facebook.com/share/1Ekodo5ECG/?mibextid=wwXIfr';
const OFFICIAL_INSTA_URL = 'https://www.instagram.com/lokshahipressorg?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==';
const OFFICIAL_TWITTER_URL = 'https://x.com/lokshahipress?s=11';
const OFFICIAL_WA_URL = 'https://wa.me/918788734440';
const OFFICIAL_YT_URL = 'https://youtube.com/@lokshahipatrakarmahasanghindia?si=Bf0f_OWURoC1FCox';

export interface MediaSectionProps {
  initialTab?: 'all' | 'facebook' | 'reels' | 'youtube' | 'statements';
}

export function MediaSection({ initialTab = 'all' }: MediaSectionProps = {}) {
  const { t, lang } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'facebook' | 'reels' | 'youtube' | 'statements'>(initialTab);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.firstElementChild as HTMLElement;
      const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 320;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
        'To keep democracy alive, journalists must stay vigilant 🎤 — Journalism training workshop and keynote address.',
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
      id: 'yt-channel-1',
      platform: 'youtube',
      type: 'youtube-channel',
      author: 'Lokshahi Patrakar Mahasangh India',
      authorMr: 'लोकशाही पत्रकार महासंघ भारत',
      handle: '@lokshahipatrakarmahasanghindia',
      timeMr: 'अधिकृत चॅनेल • 🔴 अधिकृत यूट्यूब प्रसारण',
      timeEn: 'Official Channel • 🔴 Official YouTube Broadcast',
      contentMr:
        'लोकशाही पत्रकार महासंघाचे अधिकृत यूट्यूब चॅनेल! पत्रकारांचे न्याय्य हक्क, संरक्षण कायदे, राज्यव्यापी अधिवेशने आणि विशेष पत्रकार परिषदांचे थेट प्रक्षेपण पाहण्यासाठी आत्ताच सबस्क्राईब करा.',
      contentEn:
        'Official YouTube Channel of Lokshahi Patrakar Mahasangh India! Subscribe now for upcoming live press conferences, journalist legal rights sessions, and national conventions.',
      url: OFFICIAL_YT_URL,
      embedSource: 'youtube.com/@lokshahipatrakarmahasanghindia',
      badge: 'OFFICIAL YOUTUBE',
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
      id="social-media"
      title={lang === 'mr' ? 'अधिकृत सोशल मीडिया व फेसबुक कव्हरेज' : 'Social Media & Facebook Coverage'}
      icon={
        <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#1877F2] text-white text-xs sm:text-sm font-black shadow-xs shrink-0 select-none">
          f
        </span>
      }
    >
      <div className="space-y-6 sm:space-y-8 text-left">
        {/* Social Media & Facebook Feeds Header Bar - Matched sizing with media section box */}
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

            <div className="flex flex-wrap items-center gap-2 self-start md:self-auto shrink-0">
              <a
                href={OFFICIAL_FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-3.5 py-2.5 text-xs font-black text-white shadow-xs hover:bg-[#166fe5] transition-all"
              >
                <FacebookIcon size={16} />
                <span>{lang === 'mr' ? 'फेसबुक' : 'Facebook'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href={OFFICIAL_INSTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] px-3.5 py-2.5 text-xs font-black text-white shadow-xs hover:opacity-90 transition-all"
              >
                <InstagramIcon size={16} />
                <span>{lang === 'mr' ? 'इन्स्टाग्राम (@lokshahipressorg)' : 'Instagram'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href={OFFICIAL_TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-3.5 py-2.5 text-xs font-black text-white shadow-xs hover:bg-neutral-800 transition-all"
              >
                <XIcon size={16} />
                <span>{lang === 'mr' ? 'X (@lokshahipress)' : 'X / Twitter'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Filter Pills and Carousel Navigation Buttons */}
          <div className="mt-5 pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none [scrollbar-width:none] -mx-1 px-1 flex-nowrap">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer shrink-0 ${
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
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  activeTab === 'reels'
                    ? 'bg-[#1877F2] text-white shadow-xs'
                    : 'bg-blue-50 text-[#1877F2] hover:bg-blue-100 border border-[#1877F2]/30'
                }`}
              >
                <FacebookIcon size={14} />
                <span>{lang === 'mr' ? 'फेसबुक रील्स व व्हिडिओ (१२)' : 'FB Reels & Videos (12)'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('facebook')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer shrink-0 ${
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
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  activeTab === 'youtube'
                    ? 'bg-[#FF0000] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <YouTubeIcon size={14} />
                <span>{lang === 'mr' ? 'यूट्यूब चॅनेल' : 'YouTube Channel'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('statements')}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  activeTab === 'statements'
                    ? 'bg-[#E30620] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {lang === 'mr' ? 'प्रसिद्धीपत्रके (Press Notes)' : 'Press Releases'}
              </button>
            </div>

            {/* Scroll Element Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-2 pt-1 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
              <span className="text-[11px] font-bold text-neutral-500 flex items-center gap-1">
                <span>{lang === 'mr' ? '👈 स्वाइप करा / स्क्रोल 👉' : '👈 Swipe / Scroll 👉'}</span>
              </span>
              <div className="flex items-center gap-1.5">
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
                {activeTab === 'youtube'
                  ? '📺 youtube.com/@lokshahipatrakarmahasanghindia'
                  : '📱 facebook.com/share/1Ekodo5ECG/'}
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg text-[11px] text-white/90 font-mono">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{activeTab === 'youtube' ? 'YOUTUBE OFFICIAL EMBED' : 'LIVE FEED CAROUSEL'}</span>
            </div>

            <a
              href={activeTab === 'youtube' ? OFFICIAL_YT_URL : OFFICIAL_FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white hover:text-amber-300 font-bold hidden sm:inline flex items-center gap-1"
            >
              <span>{activeTab === 'youtube' ? 'yt/@lokshahipatrakarmahasanghindia' : 'fb.com/lokshahipress'}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Horizontally Scrollable Element Container */}
          <div className="bg-[#F7F3EC]/50 p-2.5 sm:p-6">
            <div
              ref={scrollContainerRef}
              className="flex gap-3.5 sm:gap-6 overflow-x-auto pb-4 pt-1 px-1 sm:px-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] [scrollbar-color:#172A4A33_transparent]"
            >
              {filteredPosts.map((post) => {
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

                        {/* Interactive Facebook Preview Banner */}
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

                // Card: Facebook Reel & Video Embed Card (for user's 9 specific links)
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

                // Card 2: YouTube Official Channel Embed Card (embedded perfectly for channel with no videos uploaded yet)
                if (post.type === 'youtube-channel' || post.platform === 'youtube') {
                  return (
                    <article
                      key={post.id}
                      className="w-[84vw] max-w-[340px] sm:w-[380px] shrink-0 snap-center sm:snap-start rounded-2xl border-2 border-[#FF0000]/40 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Channel Author Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                          <div className="flex items-center gap-2.5">
                            <div className="relative h-11 w-11 rounded-full border-2 border-[#FF0000] p-0.5 bg-white shrink-0 overflow-hidden flex items-center justify-center">
                              <Logo className="h-full w-full object-contain" />
                              <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-[#FF0000] p-0.5 text-white shadow-xs">
                                <YouTubeIcon size={10} />
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-1">
                                <h4 className="text-xs sm:text-sm font-black text-[#172A4A] leading-tight">
                                  {lang === 'mr' ? post.authorMr : post.author}
                                </h4>
                                <CheckCircle2 className="h-4 w-4 text-[#FF0000] shrink-0 fill-[#FF0000] text-white" />
                              </div>
                              <p className="text-[10px] text-neutral-500 font-bold font-mono">
                                @lokshahipatrakarmahasanghindia
                              </p>
                            </div>
                          </div>
                          <span className="rounded-full bg-[#FF0000]/10 border border-[#FF0000]/25 px-2.5 py-0.5 text-[10px] font-black text-[#FF0000] flex items-center gap-1">
                            <YouTubeIcon size={12} />
                            <span>{lang === 'mr' ? 'अधिकृत चॅनेल' : 'OFFICIAL'}</span>
                          </span>
                        </div>

                        {/* Caption / Description */}
                        <p className="mt-3 text-xs text-neutral-800 leading-relaxed font-semibold">
                          {lang === 'mr' ? post.contentMr : post.contentEn}
                        </p>

                        {/* Embedded YouTube Channel Player Screen (Optimized for channel with no videos uploaded yet) */}
                        <div className="relative mt-3 rounded-xl overflow-hidden border border-neutral-800 bg-[#0F0F0F] aspect-[16/10] text-white flex flex-col justify-between p-3.5 shadow-inner group">
                          {/* Dark Radial Ambience */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] via-[#0f0f0f] to-[#050505] pointer-events-none" />
                          <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[#FF0000]/15 blur-2xl pointer-events-none" />

                          {/* Top Embedded Header Bar */}
                          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
                            <div className="flex items-center gap-1.5">
                              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#FF0000] text-white">
                                <Play className="h-2.5 w-2.5 fill-white" />
                              </span>
                              <span className="text-[11px] font-black tracking-wide">YouTube</span>
                              <span className="text-[9px] text-neutral-400 font-mono hidden sm:inline">• Channel Hub</span>
                            </div>
                            <span className="inline-flex items-center gap-1 rounded-full bg-red-950/80 border border-red-500/40 px-2 py-0.5 text-[9px] font-bold text-red-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                              <span>{lang === 'mr' ? 'अधिकृत चॅनेल' : 'Official Launch'}</span>
                            </span>
                          </div>

                          {/* Center Screen: Official Logo & Launch Notification */}
                          <div className="relative z-10 my-auto text-center py-1">
                            <div className="mx-auto mb-1.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#172A4A] to-[#E30620] p-1.5 shadow-lg border border-white/20">
                              <Logo className="h-full w-full object-contain filter drop-shadow" />
                            </div>
                            <h5 className="text-xs font-black text-white tracking-tight line-clamp-1">
                              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'Lokshahi Patrakar Mahasangh India'}
                            </h5>
                            <p className="mt-0.5 text-[10px] font-medium text-neutral-300">
                              {lang === 'mr'
                                ? 'नवीन व्हिडिओ व थेट प्रक्षेपण लवकरच!'
                                : 'New Videos & Live Streams Premiering Soon!'}
                            </p>

                            {/* Embedded In-Player Subscribe CTA */}
                            <a
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#FF0000] hover:bg-[#cc0000] text-white px-4 py-1.5 text-[11px] font-black shadow-md transition-all hover:scale-105 active:scale-95"
                            >
                              <YouTubeIcon size={13} />
                              <span>{lang === 'mr' ? 'चॅनेल सबस्क्राईब करा' : 'Subscribe to Channel'}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>

                          {/* Bottom Info Bar of Player */}
                          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[9px] text-neutral-400">
                            <span className="flex items-center gap-1 font-mono text-neutral-300">
                              <Bell className="h-3 w-3 text-amber-400 fill-amber-400" />
                              <span>{lang === 'mr' ? 'सर्व नोटिफिकेशन्स सुरू ठेवा' : 'Turn on Notifications'}</span>
                            </span>
                            <span className="font-bold text-red-400 font-mono">@lokshahipatrakarmahasanghindia</span>
                          </div>
                        </div>

                        {/* Broadcast Pillars Row */}
                        <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-[10px] font-semibold text-neutral-700">
                          <div className="flex items-center gap-1 rounded-lg bg-neutral-50 border border-neutral-200/80 px-2 py-1.5">
                            <span className="text-red-500 font-bold shrink-0">🔴</span>
                            <span className="truncate">{lang === 'mr' ? 'थेट पत्रकार परिषद' : 'Live Press Briefings'}</span>
                          </div>
                          <div className="flex items-center gap-1 rounded-lg bg-neutral-50 border border-neutral-200/80 px-2 py-1.5">
                            <span className="text-blue-600 font-bold shrink-0">🛡️</span>
                            <span className="truncate">{lang === 'mr' ? 'पत्रकार हक्क मार्गदर्शन' : 'Legal Rights Series'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Action Bar */}
                      <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 flex-1 rounded-xl bg-[#FF0000] hover:bg-[#cc0000] py-2.5 text-xs font-black text-white shadow-xs transition-colors"
                        >
                          <YouTubeIcon size={16} />
                          <span>{lang === 'mr' ? 'यूट्यूबवर चॅनेल उघडा' : 'Open Official Channel'}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                            (lang === 'mr'
                              ? 'लोकशाही पत्रकार महासंघाचे अधिकृत यूट्यूब चॅनेल जॉइन करा आणि सबस्क्राईब करा: '
                              : 'Subscribe to Lokshahi Patrakar Mahasangh India Official YouTube Channel: ') + post.url
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={lang === 'mr' ? 'व्हॉट्सॲपवर शेअर करा' : 'Share on WhatsApp'}
                          className="flex items-center justify-center h-9 w-9 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors shrink-0"
                        >
                          <WhatsAppIcon size={18} />
                        </a>
                      </div>
                    </article>
                  );
                }

                // Card 3: WhatsApp Channel Feed Card
                if (post.type === 'whatsapp-feed') {
                  return (
                    <article
                      key={post.id}
                      className="w-[84vw] max-w-[340px] sm:w-[380px] shrink-0 snap-center sm:snap-start rounded-2xl border-2 border-[#25D366]/40 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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


        </div>
      </div>
    </SectionShell>
  );
}

