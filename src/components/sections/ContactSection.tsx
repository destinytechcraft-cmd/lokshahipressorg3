import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { WhatsAppIcon } from '../SocialIcons';
import { MapPin, Phone, Mail, Globe, ExternalLink, Building2, Building, ShieldCheck } from 'lucide-react';

export function ContactSection() {
  const { t, lang } = useLanguage();

  const officialPhone = '+91 878 873 4440';
  const officialPhoneRaw = '+918788734440';
  const statePhone = '+91 83080 89258';
  const statePhoneRaw = '+918308089258';
  const officialEmail = 'help@lokshahipressorg.com';
  const officialWebsite = 'lokshahipressorg.com';
  const officialWhatsApp = 'https://wa.me/918788734440';

  return (
    <SectionShell id="contact" title={t('sec_contact')}>
      <div className="space-y-8 text-left">
        {/* Header Office Card */}
        <div className="rounded-2xl border-2 border-[#172A4A]/15 bg-gradient-to-r from-neutral-50 via-white to-neutral-50 p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E30620]/10 text-[#E30620] border border-[#E30620]/20">
              <Building2 className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#172A4A] tracking-tight">
                {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ भारत' : 'Lokshahi Patrakar Mahasangh Bharat'}
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-bold text-neutral-600">
                {lang === 'mr'
                  ? 'राष्ट्रीय कार्यालय व राज्य कार्यालय संपर्क तपशील'
                  : 'National Office & State Office Contact Directory'}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <a
            href={`tel:${officialPhoneRaw}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-white border border-[#172A4A]/15 p-3.5 shadow-2xs hover:border-[#172A4A] hover:shadow-md transition-all text-[#172A4A] font-bold text-xs sm:text-sm cursor-pointer"
          >
            <Phone className="h-4 w-4 text-[#172A4A]" />
            <span>{lang === 'mr' ? 'कॉल करा' : 'Call Now'}</span>
          </a>
          <a
            href={officialWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-white border border-[#25D366]/30 p-3.5 shadow-2xs hover:border-[#25D366] hover:bg-[#25D366]/5 hover:shadow-md transition-all text-[#172A4A] font-bold text-xs sm:text-sm cursor-pointer"
          >
            <WhatsAppIcon size={18} />
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${officialEmail}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-white border border-[#E30620]/25 p-3.5 shadow-2xs hover:border-[#E30620] hover:bg-[#E30620]/5 hover:shadow-md transition-all text-[#172A4A] font-bold text-xs sm:text-sm cursor-pointer"
          >
            <Mail className="h-4 w-4 text-[#E30620]" />
            <span>{lang === 'mr' ? 'ई-मेल पाठवा' : 'Email Us'}</span>
          </a>
          <a
            href={`https://${officialWebsite}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-white border border-blue-200 p-3.5 shadow-2xs hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-md transition-all text-[#172A4A] font-bold text-xs sm:text-sm cursor-pointer"
          >
            <Globe className="h-4 w-4 text-blue-600" />
            <span>{lang === 'mr' ? 'वेबसाइट' : 'Website'}</span>
          </a>
        </div>

        {/* Parallel Offices Grid: National (राष्ट्रीय) & State (राज्य) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* 1. राष्ट्रीय कार्यालय (National Office) */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-7 shadow-xs hover:border-[#E30620] transition-colors">
            <div className="space-y-5">
              {/* Card Title */}
              <div className="flex items-center justify-between pb-3 border-b border-[#172A4A]/10">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#172A4A] text-white">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-[#172A4A]">
                      {lang === 'mr' ? 'राष्ट्रीय कार्यालय' : 'National Office'}
                    </h4>
                    <span className="text-[11px] font-bold text-neutral-500">
                      {lang === 'mr' ? 'उलवे नोड, नवी मुंबई' : 'Ulwe Node, Navi Mumbai'}
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-[#172A4A]/10 px-3 py-1 text-[11px] font-black text-[#172A4A] uppercase tracking-wider">
                  {lang === 'mr' ? 'राष्ट्रीय' : 'National'}
                </span>
              </div>

              {/* Registration Number Badge */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <ShieldCheck className="h-4 w-4 text-[#287A18] shrink-0" />
                <span className="text-xs font-black text-neutral-800">
                  {lang === 'mr' ? 'नोंदणी क्रमांक :' : 'Regd. No. :'}
                </span>
                <span className="font-mono text-xs font-bold text-[#E30620] bg-white px-2 py-0.5 rounded border border-neutral-300">
                  169/2026/RGD
                </span>
              </div>

              {/* Details */}
              <div className="space-y-4 text-xs sm:text-sm text-[#172A4A]">
                {/* Address */}
                <div className="border-b border-[#172A4A]/10 pb-3.5">
                  <span className="font-bold text-[#172A4A]/70 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <MapPin className="h-4 w-4 text-[#E30620]" />
                    {lang === 'mr' ? 'कार्यालय पत्ता :' : 'Office Address :'}
                  </span>
                  <p className="font-bold text-neutral-900 leading-relaxed text-sm">
                    {lang === 'mr'
                      ? '१०५, सी विंग, स्वस्तिक आराधना इमारत, सेक्टर २, उलवे नोड, नवी मुंबई ४१०२०६'
                      : '105, C Wing, Swastik Aradhana Building, Sector 2, Ulwe Node, Navi Mumbai - 410206'}
                  </p>
                </div>

                {/* Mobile */}
                <div className="border-b border-[#172A4A]/10 pb-3.5">
                  <span className="font-bold text-[#172A4A]/70 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Phone className="h-4 w-4 text-[#172A4A]" />
                    {lang === 'mr' ? 'मोबाईल क्रमांक :' : 'Mobile Number :'}
                  </span>
                  <a
                    href={`tel:${officialPhoneRaw}`}
                    className="font-black text-[#172A4A] text-base hover:text-[#E30620] transition-colors inline-block"
                  >
                    {officialPhone}
                  </a>
                </div>

                {/* Email */}
                <div className="border-b border-[#172A4A]/10 pb-3.5">
                  <span className="font-bold text-[#172A4A]/70 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Mail className="h-4 w-4 text-[#E30620]" />
                    {lang === 'mr' ? 'अधिकृत ई-मेल :' : 'Official Email :'}
                  </span>
                  <a
                    href={`mailto:${officialEmail}`}
                    className="font-bold text-[#172A4A] hover:text-[#E30620] transition-colors inline-block"
                  >
                    {officialEmail}
                  </a>
                </div>

                {/* Website */}
                <div>
                  <span className="font-bold text-[#172A4A]/70 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Globe className="h-4 w-4 text-blue-600" />
                    {lang === 'mr' ? 'अधिकृत वेबसाइट :' : 'Official Website :'}
                  </span>
                  <a
                    href={`https://${officialWebsite}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#172A4A] hover:text-[#E30620] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{officialWebsite}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. राज्य कार्यालय (State Office) */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-7 shadow-xs hover:border-[#E30620] transition-colors">
            <div className="space-y-5">
              {/* Card Title */}
              <div className="flex items-center justify-between pb-3 border-b border-[#172A4A]/10">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E30620] text-white">
                    <Building className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-[#172A4A]">
                      {lang === 'mr' ? 'राज्य कार्यालय' : 'State Office'}
                    </h4>
                    <span className="text-[11px] font-bold text-neutral-500">
                      {lang === 'mr' ? 'बदलापूर, जि. ठाणे' : 'Badlapur, Dist. Thane'}
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-[#E30620]/10 px-3 py-1 text-[11px] font-black text-[#E30620] uppercase tracking-wider border border-[#E30620]/20">
                  {lang === 'mr' ? 'राज्य' : 'State'}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-4 text-xs sm:text-sm text-[#172A4A]">
                {/* Address */}
                <div className="border-b border-[#172A4A]/10 pb-3.5">
                  <span className="font-bold text-[#172A4A]/70 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <MapPin className="h-4 w-4 text-[#E30620]" />
                    {lang === 'mr' ? 'कार्यालय पत्ता :' : 'Office Address :'}
                  </span>
                  <p className="font-bold text-neutral-900 leading-relaxed text-sm">
                    {lang === 'mr'
                      ? 'ऑफिस नं : 407, शुभ वास्तु सोसायटी, न्यू पनवेल हायवे, कोणार्क गार्डन जवळ, बदलापूर (पूर्व) ता अंबरनाथ जि ठाणे.- 421503'
                      : 'Office No: 407, Shubh Vastu Society, New Panvel Highway, Near Konark Garden, Badlapur (East), Tal. Ambernath, Dist. Thane - 421503'}
                  </p>
                </div>

                {/* Mobile */}
                <div className="border-b border-[#172A4A]/10 pb-3.5">
                  <span className="font-bold text-[#172A4A]/70 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Phone className="h-4 w-4 text-[#172A4A]" />
                    {lang === 'mr' ? 'मोबाईल क्रमांक :' : 'Mobile Number :'}
                  </span>
                  <a
                    href={`tel:${statePhoneRaw}`}
                    className="font-black text-[#172A4A] text-base hover:text-[#E30620] transition-colors inline-block"
                  >
                    {statePhone}
                  </a>
                </div>

                {/* Email */}
                <div className="border-b border-[#172A4A]/10 pb-3.5">
                  <span className="font-bold text-[#172A4A]/70 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Mail className="h-4 w-4 text-[#E30620]" />
                    {lang === 'mr' ? 'अधिकृत ई-मेल :' : 'Official Email :'}
                  </span>
                  <a
                    href={`mailto:${officialEmail}`}
                    className="font-bold text-[#172A4A] hover:text-[#E30620] transition-colors inline-block"
                  >
                    {officialEmail}
                  </a>
                </div>

                {/* Website */}
                <div>
                  <span className="font-bold text-[#172A4A]/70 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Globe className="h-4 w-4 text-blue-600" />
                    {lang === 'mr' ? 'अधिकृत वेबसाइट :' : 'Official Website :'}
                  </span>
                  <a
                    href={`https://${officialWebsite}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#172A4A] hover:text-[#E30620] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{officialWebsite}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
