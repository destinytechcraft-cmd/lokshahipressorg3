import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { ExternalLink, Globe, LayoutTemplate, Layers, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';

const EMBED_URL = 'https://sites.google.com/view/lokshahipressorg/home';

export function DigitalBlogSection() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'feed' | 'iframe'>('feed');

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
      <div className="space-y-4 text-left">
        {/* Header Title Bar */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#172A4A]/15 bg-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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

          <div className="flex items-center gap-2.5 shrink-0">
            {/* View Switcher Tabs */}
            <div className="inline-flex rounded-xl bg-neutral-100 p-1 border border-neutral-200">
              <button
                type="button"
                onClick={() => setActiveTab('feed')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'feed'
                    ? 'bg-[#172A4A] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <LayoutTemplate className="h-3.5 w-3.5" />
                <span>{lang === 'mr' ? 'थेट वेब आवृत्ती' : 'Live Feed'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('iframe')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'iframe'
                    ? 'bg-[#172A4A] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>{lang === 'mr' ? 'आयफ्रेम खिडकी' : 'Iframe Window'}</span>
              </button>
            </div>

            <a
              href={EMBED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E30620] hover:bg-[#c7051b] text-white px-4 py-2 text-xs sm:text-sm font-black shadow-sm hover:shadow-md transition-all shrink-0 cursor-pointer"
            >
              <span>{lang === 'mr' ? 'थेट पोर्टल उघडा' : 'Open Live Site'}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Browser Window Frame for Google Sites Portal */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white overflow-hidden shadow-md">
          {/* Browser Address Bar Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#172A4A] text-white/90 border-b border-[#172A4A]/20 text-xs">
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
              <span className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Google Site</span>
              </span>
              <a
                href={EMBED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-amber-200 bg-amber-500/20 hover:bg-amber-500/30 px-2.5 py-1 rounded-md transition-colors"
              >
                <span>{lang === 'mr' ? 'नवीन टॅबमध्ये उघडा' : 'Open in New Tab'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* TAB 1: Live Interactive Google Site Content (Always 100% visible, no gray box) */}
          {activeTab === 'feed' && (
            <div className="w-full bg-[#FAF8F5]">
              {/* Main Content Area */}
              <div className="max-w-4xl mx-auto p-5 sm:p-8 space-y-6">
                {/* News Article Card */}
                <article className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5 sm:p-8 space-y-6">
                  {/* Headline & Badges */}
                  <div className="space-y-3 border-b border-neutral-100 pb-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-100 text-[#E30620] px-3 py-1 text-xs font-black uppercase tracking-wider">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>विशेष बातमी • राष्ट्रीय कार्यकारिणी</span>
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 text-[#172A4A] px-3 py-1 text-xs font-bold">
                        <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                        <span>अधिकृत प्रसिद्धीपत्रक</span>
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#172A4A] leading-tight">
                      संदिप जाधव यांची लोकशाही पत्रकार महासंघ भारताच्या राष्ट्रीय अध्यक्षपदी निवड!
                    </h1>
                  </div>

                  {/* President Photo */}
                  <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100">
                    <img
                      src="/google-site-president.jpg"
                      alt="श्री. संदिप जाधव यांची राष्ट्रीय अध्यक्षपदी निवड"
                      className="w-full h-auto block object-cover"
                      loading="lazy"
                    />
                    <div className="p-3 bg-neutral-50 border-t border-neutral-200 text-xs font-medium text-neutral-600 text-center">
                      लोकशाही पत्रकार महासंघ भारत — राष्ट्रीय अध्यक्ष श्री. संदिप जाधव सत्कार व नियुक्ती सोहळा
                    </div>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-4 text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
                    <p className="font-semibold text-[#172A4A]">
                      लोकशाही पत्रकार महासंघ भारताच्या राष्ट्रीय अध्यक्षपदी ज्येष्ठ पत्रकार श्री. संदिप जाधव यांची एकमुखाने निवड करण्यात आली आहे. राष्ट्रीय कार्यकारिणीच्या मान्यतेने निवड समितीने त्यांच्या नावावर एकमताने शिक्कामोर्तब केले. या निवडीमुळे महासंघाच्या राष्ट्रीय नेतृत्वाची महत्त्वपूर्ण जबाबदारी संदिप जाधव यांच्याकडे सोपविण्यात आली आहे.
                    </p>

                    <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-xl space-y-2">
                      <p className="text-xs sm:text-sm font-bold text-[#172A4A] flex items-center gap-1.5">
                        <UserCheck className="h-4 w-4 text-amber-600 shrink-0" />
                        <span>निवड समिती व राष्ट्रीय कार्यकारिणीचे प्रमुख पदाधिकारी:</span>
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                        या निवड प्रक्रियेत महासंघाचे राष्ट्रीय कार्यकारिणीचे प्रमुख सदस्य तथा निवृत्त न्यायाधीश <strong>डॉ. संतोषकुमार जयस्वाल</strong>, राष्ट्रीय महामंत्री <strong>टी. माधव</strong>, मार्गदर्शक <strong>प्रतापराव साळुंखे</strong>, <strong>किशोर दादा पवार</strong>, <strong>ज्ञानेश्वरजी बुधवंत</strong>, <strong>हलीमाताई शेख</strong>, आणि <strong>ॲड. रमाकांत पाटील</strong> या प्रमुख पदाधिकाऱ्यांनी संदिप जाधव यांच्या नावाला सर्वानुमते मंजुरी दिली. त्यानंतर त्यांच्या राष्ट्रीय अध्यक्षपदावरील निवडीची अधिकृत घोषणा करण्यात आली.
                      </p>
                    </div>

                    <p>
                      संदिप जाधव यांनी सात वर्षांपेक्षा अधिक काळ राष्ट्रीय आणि राज्यस्तरावरील प्रमुख माध्यम समूहांमध्ये पत्रकारिता केली आहे. या काळात त्यांनी राजकीय बीट सांभाळत राज्यातील राजकीय घडामोडी, राजकीय पक्षांचे कामकाज, नेत्यांच्या भूमिका आणि विविध सार्वजनिक प्रश्नांचे वार्तांकन केले. राजकीय घडामोडींचा अभ्यास, क्षेत्रीय स्तरावरील माहितीचे संकलन आणि जनहिताच्या प्रश्नांना माध्यमांतून वाचा फोडणे, हा त्यांच्या पत्रकारितेतील अनुभवाचा महत्त्वपूर्ण भाग राहिला आहे.
                    </p>

                    <p>
                      पत्रकारितेच्या क्षेत्रातील अनुभवाच्या बळावर त्यांनी आता संघटनात्मक नेतृत्वाची जबाबदारी स्वीकारली असून, पत्रकारांच्या प्रश्नांना राष्ट्रीय स्तरावर प्रभावी व्यासपीठ मिळवून देण्याच्या दृष्टीने त्यांच्या भूमिकेकडे लक्ष लागले आहे.
                    </p>

                    {/* President Quote Box */}
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-[#172A4A] to-[#243f6c] text-white space-y-2 shadow-sm">
                      <div className="text-xs font-black uppercase tracking-widest text-amber-300">
                        अध्यक्षीय मनोगत
                      </div>
                      <blockquote className="text-base sm:text-lg font-bold italic leading-snug">
                        “पत्रकारांच्या न्याय, हक्क आणि अधिकारांसाठी ठामपणे काम करणार!”
                      </blockquote>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal pt-1">
                        राष्ट्रीय अध्यक्षपदी निवड झाल्यानंतर संदिप जाधव यांनी पत्रकारांच्या न्याय, हक्क आणि अधिकारांसाठी ठामपणे काम करण्याचा निर्धार व्यक्त केला. पत्रकारांवरील अन्याय, पत्रकारांच्या सुरक्षिततेचे प्रश्न, पत्रकारितेच्या स्वातंत्र्याशी संबंधित अडचणी आणि पत्रकारांच्या न्याय्य मागण्यांसाठी संघटितपणे आवाज उठविण्यास आपण प्राधान्य देणार असल्याचे त्यांनी सांगितले.
                      </p>
                    </div>

                    <p>
                      तसेच, लोकशाही पत्रकार महासंघ भारताची संघटनात्मक ताकद वाढविणे, देशभरातील पत्रकारांना एका व्यासपीठावर आणणे, विविध राज्यांमध्ये संघटनेचा विस्तार करणे आणि जिल्हा व तालुकास्तरावर संघटन अधिक मजबूत करण्यासाठी प्रयत्न करणार असल्याचेही त्यांनी स्पष्ट केले.
                    </p>

                    <p>
                      पत्रकारांच्या प्रश्नांवर केवळ चर्चा न करता त्यांच्या न्याय्य मागण्यांसाठी सातत्याने पाठपुरावा करणे, पत्रकारांना संघटनात्मक आधार उपलब्ध करून देणे आणि लोकशाही मूल्यांचे संरक्षण करण्यासाठी निर्भीड पत्रकारितेला बळ देणे, हा आपल्या कार्याचा प्रमुख केंद्रबिंदू असेल, अशी भूमिका संदिप जाधव यांनी बोलताना मांडली.
                    </p>

                    <p>
                      राष्ट्रीय अध्यक्ष म्हणून संदिप जाधव यांच्यावर संघटनेचा विस्तार, राष्ट्रीय कार्यकारिणीशी समन्वय आणि पत्रकारांच्या प्रश्नांवर व्यापक स्तरावर काम करण्याची जबाबदारी असेल. त्यांच्या पत्रकारितेतील अनुभवाचा उपयोग करून महासंघाला अधिक संघटित, सक्रिय आणि पत्रकारांच्या प्रश्नांशी जोडलेले व्यासपीठ बनविण्याच्या दृष्टीने पुढील कार्याची दिशा निश्चित होण्याची अपेक्षा आहे.
                    </p>
                  </div>

                  {/* Article Footer */}
                  <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500 font-medium">
                    <span>© 2026 Lokshahi Patrakar Mahasangh Bharat. All Rights Reserved.</span>
                    <a
                      href={EMBED_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[#E30620] hover:underline"
                    >
                      <span>मूळ Google Site वर पहा</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </article>
              </div>
            </div>
          )}

          {/* TAB 2: Embedded Iframe View */}
          {activeTab === 'iframe' && (
            <div className="w-full bg-white relative">
              <iframe
                src="/api/embed-site"
                width="100%"
                height="1000px"
                style={{ border: 'none' }}
                title="लोकशाही पत्रकार महासंघ भारत"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
