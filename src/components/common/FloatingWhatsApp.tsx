import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function FloatingWhatsApp() {
  const { lang } = useLanguage();

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[9999] pointer-events-auto">
      <a
        href="https://wa.me/918788734440"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={lang === 'mr' ? 'व्हॉट्सॲपवर संपर्क करा' : 'Chat on WhatsApp'}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group"
      >
        {/* Clean, official centered WhatsApp icon */}
        <svg
          className="w-8 h-8 fill-white shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.769.834 2.791.835 3.18 0 5.766-2.587 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm3.364 8.163c-.144.405-.837.774-1.17.822-.312.043-.683.07-1.109-.068-.266-.086-.607-.22-1.037-.409-1.828-.802-3.023-2.658-3.114-2.779-.092-.122-.745-.992-.745-1.892s.471-1.341.638-1.523c.168-.182.366-.228.489-.228.122 0 .244.001.35.006.112.005.263-.042.411.314.153.368.522 1.272.568 1.365.046.092.077.2.015.323s-.093.2-.184.307c-.093.107-.196.24-.28.322-.093.092-.19.192-.082.378.108.184.479.79 1.027 1.279.706.63 1.302.825 1.487.917.185.093.293.078.401-.046.108-.124.463-.538.586-.723.123-.184.246-.153.414-.092.169.062 1.077.508 1.262.6.185.093.308.139.354.216.046.077.046.446-.098.851zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.93.55 3.73 1.5 5.27L2 22l4.86-1.48c1.49.87 3.21 1.38 5.06 1.38 5.53 0 10.02-4.49 10.02-10.02C21.94 6.49 17.57 2 12.04 2zm0 18.27c-1.63 0-3.14-.49-4.41-1.33l-.32-.21-2.88.88.9-2.8-.23-.34c-.95-1.36-1.5-2.99-1.5-4.73 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24z" />
        </svg>

        {/* Hover label for desktop */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#172A4A] text-white text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
          {lang === 'mr' ? 'WhatsApp वर संपर्क करा' : 'Chat on WhatsApp'}
        </span>
      </a>
    </aside>
  );
}
