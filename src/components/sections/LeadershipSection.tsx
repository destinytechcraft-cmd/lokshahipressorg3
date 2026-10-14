import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionShell } from '../ui/WireframePrimitives';
import { leadershipMembers } from '../../data/pdfContent';
import type { LeadershipMember } from '../../types';
import { MapPin, Briefcase, FileText, X } from 'lucide-react';

export function LeadershipSection() {
  const { t, lang } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(null);

  return (
    <SectionShell id="leadership" title={t('sec_leadership')}>
      <div className="space-y-8 text-left">
        {/* Intro Banner - Clean, dignified heading without arbitrary section numbers */}
        <div className="rounded-2xl border-2 border-[#172A4A]/20 bg-white p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E30620] via-[#E6530C] to-[#172A4A]" />
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#E30620] flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#E30620]" />
              {lang === 'mr' ? 'राष्ट्रीय व राज्यस्तरीय नेतृत्व' : 'National & State Leadership'}
            </span>
            <span className="text-xs font-bold text-neutral-500 bg-[#172A4A]/5 px-2.5 py-0.5 rounded-full border border-[#172A4A]/10">
              {lang === 'mr' ? 'लोकशाही पत्रकार महासंघ, भारत' : 'Lokshahi Patrakar Mahasangh Bharat'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#172A4A] tracking-tight">
            {lang === 'mr' ? 'टीम लोकशाही — राष्ट्रीय व राज्यस्तरीय नेतृत्व' : 'Team Lokshahi — Apex Leadership Council'}
          </h3>
          <p className="mt-2 text-sm font-medium text-neutral-600 max-w-3xl leading-relaxed">
            {lang === 'mr'
              ? 'पत्रकार संरक्षण, न्यायव्यवस्था, सामाजिक समता आणि लोकशाही मूल्यांसाठी अविरत संघर्ष करणारे लोकशाही पत्रकार महासंघाचे मार्गदर्शक व कार्यकारी नेतृत्व.'
              : 'The governing council and leadership guiding Lokshahi Patrakar Mahasangh in safeguarding journalist rights, judicial oversight, and democratic freedoms.'}
          </p>
        </div>

        {/* Leadership Grid matching the wireframe card specifications:
            Image / Photo + Position Badge + Name + Location + Subtitle Tags + Divider + SHORT PROFILE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipMembers.map((member) => {
            const role = lang === 'mr' ? member.roleMr : member.roleEn;
            const name = lang === 'mr' ? member.nameMr : member.nameEn;
            const location = lang === 'mr' ? member.stateMr : member.stateEn;
            const subtitle = lang === 'mr' ? member.subtitleMr : member.subtitleEn;
            const profile = lang === 'mr' ? member.profileMr : member.profileEn;

            return (
              <div
                key={member.id}
                className="flex flex-col justify-between rounded-2xl border-2 border-[#172A4A]/15 bg-white shadow-xs hover:border-[#E30620] hover:shadow-md transition-all duration-200 overflow-hidden group"
              >
                <div>
                  {/* Photo frame - perfect portrait container for candidate photos */}
                  <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[#0B1E36] via-[#172A4A] to-[#1e3a5f] overflow-hidden select-none border-b border-[#172A4A]/15">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const fallback = `/leadership/leader-${member.id}.svg`;
                          if (e.currentTarget.src !== window.location.origin + fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                      />
                    ) : null}

                    {/* Subtle bottom shadow overlay for smooth transition into card */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Official badge overlay at top right */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 rounded-md bg-[#0B1E36]/85 backdrop-blur-xs text-white border border-white/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider shadow-sm">
                        लोकशाही
                      </span>
                    </div>
                  </div>

                  {/* Member details card body */}
                  <div className="p-5 space-y-3">
                    {/* Position Badge - prominent in box as specified */}
                    <div>
                      <span className="inline-block rounded-md bg-[#E30620]/10 text-[#E30620] border border-[#E30620]/25 px-3 py-1 text-xs font-black tracking-wide shadow-2xs">
                        {role}
                      </span>
                    </div>

                    {/* Member Full Name */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-[#172A4A] tracking-tight group-hover:text-[#E30620] transition-colors">
                        {name}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-neutral-500 font-semibold mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E30620] shrink-0" />
                        <span>{location}</span>
                      </div>
                    </div>

                    {/* Professional Domain / Subtitle Tags */}
                    {subtitle ? (
                      <div className="text-[11px] font-semibold text-neutral-600 bg-neutral-50 border border-neutral-200/80 rounded-lg p-2 leading-relaxed">
                        {subtitle}
                      </div>
                    ) : null}

                    {/* Short Profile section matching requested wireframe card */}
                    <div className="border-t border-[#172A4A]/10 pt-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400 block mb-1">
                        SHORT PROFILE
                      </span>
                      <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                        {profile}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions: Open Full Detailed Modal */}
                <div className="p-4 pt-3 border-t border-neutral-100 mt-2 bg-neutral-50/50">
                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#172A4A] hover:bg-[#E30620] text-white px-3 py-2 text-xs font-bold transition-all duration-150 cursor-pointer shadow-2xs hover:shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{lang === 'mr' ? 'सविस्तर परिचय' : 'Full Bio'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="rounded-xl border border-dashed border-[#172A4A]/30 bg-neutral-50 p-4 text-center">
          <p className="text-xs font-bold text-neutral-700">
            {lang === 'mr'
              ? 'आणि लोकशाही पत्रकार महासंघ भारत अंतर्गत कार्यरत सर्व राज्य, विभागीय व जिल्हास्तरीय पदाधिकारी.'
              : 'And all state, divisional, and district office-bearers serving across Lokshahi Patrakar Mahasangh Bharat.'}
          </p>
        </div>
      </div>

      {/* Comprehensive Biography Modal Dialog */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border-2 border-[#172A4A] p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#172A4A]/15">
              <div className="space-y-1">
                <span className="inline-block rounded-md bg-[#E30620]/10 text-[#E30620] border border-[#E30620]/25 px-2.5 py-0.5 text-xs font-black">
                  {lang === 'mr' ? selectedMember.roleMr : selectedMember.roleEn}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#172A4A]">
                  {lang === 'mr' ? selectedMember.nameMr : selectedMember.nameEn}
                </h3>
                <div className="flex items-center gap-1 text-xs text-neutral-500 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#E30620]" />
                  <span>{lang === 'mr' ? selectedMember.stateMr : selectedMember.stateEn}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                aria-label="Close dialog"
                className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-6 space-y-6">
              {/* Leader Avatar & Domain */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-xl overflow-hidden shrink-0 border-2 border-[#172A4A]/20 bg-[#0B1E36] shadow-sm">
                  {selectedMember.image ? (
                    <img
                      src={selectedMember.image}
                      alt={lang === 'mr' ? selectedMember.nameMr : selectedMember.nameEn}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const fallback = `/leadership/leader-${selectedMember.id}.svg`;
                        if (e.currentTarget.src !== window.location.origin + fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                    />
                  ) : null}
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block">
                    {lang === 'mr' ? 'कार्यक्षेत्र व ओळख' : 'Field & Domains'}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#172A4A] leading-relaxed">
                    {lang === 'mr' ? selectedMember.subtitleMr : selectedMember.subtitleEn}
                  </p>
                  <p className="text-xs text-neutral-600 font-medium">
                    {lang === 'mr' ? selectedMember.profileMr : selectedMember.profileEn}
                  </p>
                </div>
              </div>

              {/* Full Biography Paragraphs from Official Document */}
              <div className="space-y-3">
                <h4 className="text-sm font-black text-[#172A4A] uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#E30620]" />
                  <span>{lang === 'mr' ? 'सविस्तर परिचय व कार्यकीर्द' : 'Full Career & Biographical Profile'}</span>
                </h4>
                <div className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  {((lang === 'mr' ? selectedMember.fullBioMr : selectedMember.fullBioEn) || []).map(
                    (paragraph, idx) => (
                      <p key={idx} className="p-3 rounded-lg bg-neutral-50/70 border border-neutral-150">
                        {paragraph}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Modal Close Button */}
            <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="rounded-lg bg-[#172A4A] hover:bg-[#E30620] text-white px-5 py-2 text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                {lang === 'mr' ? 'बंद करा' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  );
}
