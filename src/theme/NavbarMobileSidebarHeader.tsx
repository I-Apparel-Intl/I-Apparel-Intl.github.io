import React from 'react';
import { useLocation } from '@docusaurus/router';

export default function NavbarMobileSidebarHeader(): React.ReactElement {
  const location = useLocation();
  const isKm = location.pathname.startsWith('/km');

  const switchLang = (lang: string) => {
    const path = location.pathname;
    if (lang === 'km' && !isKm) {
      window.location.href = '/km' + path;
    } else if (lang === 'en' && isKm) {
      window.location.href = path.replace(/^\/km/, '') || '/';
    }
  };

  return (
    <div className="sidebar-action-bar">
      {/* Language switcher */}
      <div className="sidebar-lang">
        <a
          href="#"
          className={`lang-btn lang-btn--en${!isKm ? ' lang-btn--active' : ''}`}
          title="English"
          onClick={(e) => { e.preventDefault(); switchLang('en'); }}
        >
          EN
        </a>
        <span className="lang-divider">|</span>
        <a
          href="#"
          className={`lang-btn lang-btn--km${isKm ? ' lang-btn--active' : ''}`}
          title="ខ្មែរ"
          onClick={(e) => { e.preventDefault(); switchLang('km'); }}
        >
          ខ្មែរ
        </a>
      </div>

      {/* Telegram */}
      <a
        href="https://t.me/your_telegram"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar-telegram"
        aria-label="Telegram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
        </svg>
        Telegram
      </a>
    </div>
  );
}