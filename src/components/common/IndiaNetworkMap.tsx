import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { INDIA_MAP_VIEWBOX, INDIA_STATES, ACTIVE_STATES_LIST } from '../../data/indiaMapData';
import { CheckCircle2, Globe2, X, Compass, MapPin } from 'lucide-react';

interface IndiaNetworkMapProps {
  className?: string;
}

export function IndiaNetworkMap({ className = '' }: IndiaNetworkMapProps) {
  const { lang } = useLanguage();
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [showPillList, setShowPillList] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'active' | 'all'>('active');

  const activeId = hoveredStateId || selectedStateId;
  const currentActiveState = ACTIVE_STATES_LIST.find((s) => s.id === activeId);
  const currentAnyState = INDIA_STATES.find((s) => s.id === activeId);

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#172A4A]/25 bg-gradient-to-b from-[#F0F5FA] via-[#E8F0F8] to-[#DFEAF5] shadow-lg ${className}`}
    >
      {/* Tricolor top indicator band */}
      <div className="h-1.5 w-full flex">
        <div className="h-full flex-1 bg-[#E6530C]" />
        <div className="h-full flex-1 bg-white" />
        <div className="h-full flex-1 bg-[#287A18]" />
      </div>

      {/* Frame Top Header */}
      <div className="flex items-center justify-between border-b border-[#172A4A]/15 bg-white/95 px-3.5 py-2.5 sm:px-4 backdrop-blur-xs">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex h-2.5 w-2.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E30620] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E30620]"></span>
          </span>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#172A4A] truncate">
              {lang === 'mr' ? 'अखिल भारतीय संघटनात्मक जाळे' : 'PAN-INDIA NETWORK'}
            </div>
            <div className="text-[10px] text-neutral-500 font-semibold truncate hidden sm:block">
              {lang === 'mr' ? 'अखंड भारत व्याप्ती • १७ राज्ये सक्रिय कार्यकारिणी' : 'All-India Coverage • 17 Active State Units'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="rounded-full bg-[#E30620]/10 border border-[#E30620]/30 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-[#E30620]">
            {lang === 'mr' ? '१७ राज्ये सक्रिय' : '17 States Active'}
          </span>
          <button
            type="button"
            onClick={() => setShowPillList(!showPillList)}
            className="rounded-lg border border-[#172A4A]/20 bg-white px-2 py-1 text-[10px] sm:text-[11px] font-bold text-[#172A4A] hover:border-[#E30620] hover:text-[#E30620] transition-colors cursor-pointer shadow-2xs"
          >
            {showPillList ? (lang === 'mr' ? '🗺️ नकाशा' : '🗺️ Map') : (lang === 'mr' ? '📋 यादी' : '📋 List')}
          </button>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-4 select-none min-h-[380px] sm:min-h-[440px]">
        {/* Subtle Latitude/Longitude Coordinate Grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #172A4A 1px, transparent 1px), linear-gradient(to bottom, #172A4A 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Floating State Info Tooltip Card (Works for ALL States) */}
        {currentAnyState && !showPillList && (
          <div className="absolute top-3 left-3 z-30 max-w-[210px] sm:max-w-[250px] rounded-xl border border-[#172A4A]/20 bg-white/95 p-2.5 shadow-xl backdrop-blur-md transition-all pointer-events-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-1.5">
              <div className="flex items-center gap-1.5 min-w-0">
                {currentActiveState ? (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E30620] text-[10px] font-black text-white shadow-xs">
                    {currentActiveState.num}
                  </span>
                ) : (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#172A4A] text-[10px] font-black text-white shadow-xs">
                    🇮🇳
                  </span>
                )}
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-black text-[#172A4A] leading-tight truncate">
                    {lang === 'mr' ? (currentAnyState.mrName || currentAnyState.name) : currentAnyState.name}
                  </div>
                  <div className="text-[9.5px] text-neutral-500 font-semibold truncate">
                    {lang === 'mr' ? currentAnyState.name : (currentAnyState.mrName || currentAnyState.name)}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedStateId(null);
                  setHoveredStateId(null);
                }}
                className="text-neutral-400 hover:text-neutral-700 p-0.5 rounded-md hover:bg-neutral-100 cursor-pointer"
                aria-label="Close"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {currentActiveState ? (
              <div className="mt-2 pt-1.5 border-t border-neutral-100">
                <p className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                  <span>{lang === 'mr' ? 'सक्रिय राज्य कार्यकारिणी व शाखा' : 'Active State Executive & Units'}</span>
                </p>
                <p className="mt-0.5 text-[9px] text-neutral-500">
                  {lang === 'mr' ? 'अधिकृत प्रतिनिधी व जिल्हा समित्या कार्यरत' : 'Official Representatives & District Committees'}
                </p>
              </div>
            ) : (
              <div className="mt-2 pt-1.5 border-t border-neutral-100">
                <p className="text-[10px] font-bold text-[#172A4A] flex items-center gap-1">
                  <Globe2 className="h-3 w-3 shrink-0 text-blue-600" />
                  <span>{lang === 'mr' ? 'अखिल भारतीय संलग्न जाळे' : 'Pan-India Affiliated Reach'}</span>
                </p>
                <p className="mt-0.5 text-[9px] text-neutral-500">
                  {lang === 'mr' ? 'कार्यविस्तार नियोजित व संपर्क प्रतिनिधी' : 'Expansion Outreach & Contact Representatives'}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Interactive SVG Map */}
        <div className={`w-full h-full flex items-center justify-center ${showPillList ? 'hidden' : 'block'}`}>
          <svg
            viewBox={INDIA_MAP_VIEWBOX}
            className="w-full h-auto max-h-[410px] sm:max-h-[480px] object-contain drop-shadow-md"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Defs for gradients, patterns, and shadows */}
            <defs>
              <filter id="india-land-shadow" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.18" />
              </filter>
              <filter id="pin-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.4" />
              </filter>
              
              {/* Active State Gradient (Vibrant Crimson) */}
              <linearGradient id="active-state-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF1F2" />
                <stop offset="100%" stopColor="#FEE2E2" />
              </linearGradient>

              {/* Active State Hover Gradient */}
              <linearGradient id="active-state-hover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FECACA" />
                <stop offset="100%" stopColor="#FCA5A5" />
              </linearGradient>

              {/* Affiliated / National State Gradient (Warm Solid Slate Landmass) */}
              <linearGradient id="affiliated-state-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>

              {/* Affiliated Hover Gradient */}
              <linearGradient id="affiliated-state-hover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>

              {/* Pin Gradient */}
              <linearGradient id="pin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
            </defs>

            {/* Ocean / Surrounding Sea Cartographic Labels */}
            <g className="ocean-labels pointer-events-none select-none">
              {/* Arabian Sea */}
              <g transform="translate(60, 520)">
                <text x="0" y="0" fill="#64748B" opacity="0.75" fontSize="11" fontWeight="800" fontStyle="italic" letterSpacing="1.5">
                  अरबी समुद्र
                </text>
                <text x="0" y="14" fill="#94A3B8" opacity="0.65" fontSize="8" fontWeight="700" letterSpacing="2">
                  ARABIAN SEA
                </text>
              </g>

              {/* Bay of Bengal */}
              <g transform="translate(390, 470)">
                <text x="0" y="0" fill="#64748B" opacity="0.75" fontSize="11" fontWeight="800" fontStyle="italic" letterSpacing="1.5">
                  बंगालचा उपसागर
                </text>
                <text x="0" y="14" fill="#94A3B8" opacity="0.65" fontSize="8" fontWeight="700" letterSpacing="2">
                  BAY OF BENGAL
                </text>
              </g>

              {/* Indian Ocean */}
              <g transform="translate(250, 675)">
                <text x="0" y="0" textAnchor="middle" fill="#64748B" opacity="0.75" fontSize="11" fontWeight="800" fontStyle="italic" letterSpacing="1.5">
                  हिंदी महासागर
                </text>
                <text x="0" y="13" textAnchor="middle" fill="#94A3B8" opacity="0.65" fontSize="8" fontWeight="700" letterSpacing="2">
                  INDIAN OCEAN
                </text>
              </g>

              {/* Compass Rose in Top-Right Corner */}
              <g transform="translate(540, 50)" opacity="0.75">
                <circle cx="0" cy="0" r="18" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
                {/* 4 point star */}
                <polygon points="0,-15 3,-3 15,0 3,3 0,15 -3,3 -15,0 -3,-3" fill="#94A3B8" opacity="0.4" />
                <polygon points="0,-15 3,-3 0,0 -3,-3" fill="#DC2626" />
                <text x="0" y="-18" textAnchor="middle" fill="#DC2626" fontSize="9" fontWeight="900">
                  N
                </text>
                <text x="0" y="27" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="700">
                  उत्तर
                </text>
              </g>
            </g>

            {/* India All States Group with Subtle Grounding Drop Shadow */}
            <g className="states-group" filter="url(#india-land-shadow)">
              {INDIA_STATES.map((state) => {
                const isSelected = selectedStateId === state.id;
                const isHovered = hoveredStateId === state.id;
                const isItemActive = state.isActive;

                // Color styling:
                // Active states: Rich crimson-tinted fill with red outline
                // Affiliated states: Solid, warm ivory-slate landmass with firm slate boundary
                let fill = isHovered || isSelected ? 'url(#affiliated-state-hover)' : 'url(#affiliated-state-grad)';
                let stroke = isHovered || isSelected ? '#334155' : '#64748B';
                let strokeWidth = isHovered || isSelected ? '1.6' : '1.2';

                if (isItemActive) {
                  fill = isSelected || isHovered ? 'url(#active-state-hover)' : 'url(#active-state-grad)';
                  stroke = isSelected || isHovered ? '#991B1B' : '#DC2626';
                  strokeWidth = isSelected || isHovered ? '2.2' : '1.6';
                }

                return (
                  <path
                    key={state.id}
                    d={state.path}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                    className="transition-colors duration-150 cursor-pointer"
                    onMouseEnter={() => setHoveredStateId(state.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    onClick={() => setSelectedStateId(state.id)}
                  >
                    <title>{`${state.pinNumber ? `${state.pinNumber}. ` : ''}${state.name}${state.mrName ? ` (${state.mrName})` : ''} - ${isItemActive ? (lang === 'mr' ? 'सक्रिय राज्य' : 'Active State') : (lang === 'mr' ? 'संलग्न राज्य' : 'Affiliated State')}`}</title>
                  </path>
                );
              })}
            </g>

            {/* 17 Red Pin Points for the Active Executive States */}
            <g className="pins-group">
              {ACTIVE_STATES_LIST.map((item) => {
                const isSelected = selectedStateId === item.id;
                const isHovered = hoveredStateId === item.id;
                const isHighlighted = isSelected || isHovered;
                const { x, y } = item.pin;

                return (
                  <g
                    key={`pin-${item.id}`}
                    transform={`translate(${x}, ${y})`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredStateId(item.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStateId(item.id);
                    }}
                  >
                    {/* Pulsing beacon radar on highlight or key states */}
                    <circle
                      r={isHighlighted ? 15 : 8}
                      fill="#EF4444"
                      opacity={isHighlighted ? 0.6 : 0.25}
                      className={isHighlighted ? 'animate-ping' : ''}
                    />

                    {/* Pin Anchor Circle */}
                    <circle
                      r={isHighlighted ? 4.5 : 3}
                      fill="#991B1B"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />

                    {/* 3D Pin Marker Shape */}
                    <g
                      transform={`translate(0, -${isHighlighted ? 23 : 19}) scale(${
                        isHighlighted ? 1.25 : 0.98
                      })`}
                      filter="url(#pin-shadow)"
                      style={{ transformOrigin: '0px 19px', transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                    >
                      {/* Pin teardrop body */}
                      <path
                        d="M 0 0 C -7.5 -10, -7.5 -17, 0 -23 C 7.5 -17, 7.5 -10, 0 0 Z"
                        fill="url(#pin-grad)"
                        stroke="#FFFFFF"
                        strokeWidth="1.2"
                      />
                      {/* Inner White Badge with State Number */}
                      <circle cx="0" cy="-15" r="5.5" fill="#FFFFFF" />
                      <text
                        x="0"
                        y="-12.8"
                        textAnchor="middle"
                        fill="#B91C1C"
                        fontSize="7"
                        fontWeight="900"
                        fontFamily="sans-serif"
                      >
                        {item.num}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* State Pill List Overlay (When user taps "List") */}
        {showPillList && (
          <div className="w-full h-full max-h-[420px] overflow-y-auto p-2 bg-white/95 rounded-xl border border-neutral-200 shadow-inner">
            <div className="mb-3 flex items-center justify-between border-b pb-2">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('active')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                    activeTab === 'active'
                      ? 'bg-[#E30620] text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {lang === 'mr' ? '१७ सक्रिय राज्ये' : '17 Active States'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                    activeTab === 'all'
                      ? 'bg-[#172A4A] text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {lang === 'mr' ? 'सर्व राज्ये (अखंड भारत)' : 'All States (Pan-India)'}
                </button>
              </div>
              <span className="text-[10px] text-neutral-500 hidden sm:inline">
                {lang === 'mr' ? '(क्लिक करून नकाशावर पहा)' : '(Click to view on map)'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {(activeTab === 'active' ? ACTIVE_STATES_LIST : INDIA_STATES).map((state: any) => {
                const isSelected = selectedStateId === state.id;
                const isStateActive = Boolean(state.isActive ?? state.num);
                const num = state.num || state.pinNumber;
                return (
                  <button
                    key={state.id}
                    type="button"
                    onClick={() => {
                      setSelectedStateId(state.id);
                      setShowPillList(false);
                    }}
                    className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-left text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#E30620] bg-[#E30620]/10 font-bold text-[#E30620] shadow-xs'
                        : isStateActive
                        ? 'border-red-200 bg-red-50/50 hover:border-[#E30620]/50 hover:bg-red-50 text-neutral-900'
                        : 'border-neutral-200 bg-white hover:border-[#172A4A]/40 hover:bg-neutral-50 text-neutral-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {isStateActive && num ? (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E30620] text-[10px] font-black text-white">
                          {num}
                        </span>
                      ) : (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-black text-slate-700">
                          🇮🇳
                        </span>
                      )}
                      <span className="truncate">{lang === 'mr' ? (state.mr || state.mrName || state.name) : state.name}</span>
                    </div>
                    <span className={`text-[10px] font-medium shrink-0 ml-2 ${isStateActive ? 'text-[#E30620]' : 'text-slate-500'}`}>
                      {isStateActive ? (lang === 'mr' ? 'सक्रिय' : 'Active') : (lang === 'mr' ? 'संलग्न' : 'Affiliated')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Map Bottom Legend Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#172A4A]/15 bg-white/95 px-3 py-2 text-[10px] sm:text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-full bg-[#EF4444] border border-[#DC2626]" />
            <span className="font-bold text-[#172A4A]">
              {lang === 'mr' ? '१७ सक्रिय राज्य कार्यकारिणी' : '17 Active State Units'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-md bg-[#E2E8F0] border border-[#64748B]" />
            <span className="font-medium text-neutral-600">
              {lang === 'mr' ? 'संलग्न व विस्तारशील राज्ये (अखंड भारत)' : 'Affiliated Pan-India Reach'}
            </span>
          </div>
        </div>
        <div className="text-[10px] text-neutral-500 font-semibold flex items-center gap-1">
          <MapPin className="h-3 w-3 text-[#E30620]" />
          <span>{lang === 'mr' ? 'राज्यावर किंवा पिनवर क्लिक करा' : 'Click any state or pin'}</span>
        </div>
      </div>
    </div>
  );
}
