import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lineguru',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/in.png',

  url: 'https://I-Apparel-Intl.github.io',
  baseUrl: '/',

  organizationName: 'I-Apparel-Intl',
  projectName: 'I-Apparel-Intl.github.io',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  scripts: [
    {
      src: '/lang-switcher.js',
      async: false,
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'km'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr', htmlLang: 'en' },
      km: { label: 'ខ្មែរ',   direction: 'ltr', htmlLang: 'km' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        searchResultLimits: 8,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcut: false,
        searchBarShortcutHint: false,
        searchBarPosition: 'right',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    metadata: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],

    navbar: {
      title: 'Lineguru',
      logo: {
        alt: 'Lineguru Logo',
        src: 'img/in.png',
        href: '/menu/overview',
      },
      items: [

        // ── Lang switcher dropdown — RIGHT side ────────────────────
        {
          type: 'html',
          position: 'right',
          value: `
            <div class="lang-switcher lang-switcher--right">

              <div class="lang-trigger" id="langTrigger" onclick="toggleLangMenu(event)">
                <img id="langFlag" src="https://flagcdn.com/w40/gb.png" alt="flag" />
                <span class="lang-trigger-label" id="langCode">EN</span>
                <span class="lang-chevron" id="langChevron">&#8964;</span>
              </div>

              <div class="lang-menu" id="langMenu">

                <a href="#" class="lang-option lang-btn--en" id="langOptEn"
                   onclick="switchLang(event,'en')">
                  <img src="https://flagcdn.com/w40/gb.png" alt="EN" />
                  <div class="lang-opt-text">
                    <span class="lang-opt-name">English</span>
                    <span class="lang-opt-code">EN</span>
                  </div>
                  <span class="lang-check">&#10003;</span>
                </a>

                <div class="lang-divider"></div>

                <a href="#" class="lang-option lang-btn--km" id="langOptKm"
                   onclick="switchLang(event,'km')">
                  <img src="https://flagcdn.com/w40/kh.png" alt="KM" />
                  <div class="lang-opt-text">
                    <span class="lang-opt-name">ខ្មែរ</span>
                    <span class="lang-opt-code">KM</span>
                  </div>
                  <span class="lang-check">&#10003;</span>
                </a>

              </div>
            </div>
          `,
        },

        // ── Search — RIGHT side ────────────────────────────────────
        {
          type: 'search',
          position: 'right',
        },

      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Overview', to: '/menu/overview' },
            { label: 'Install',  to: '/install/quick-start' },
          ],
        },

        {
          title: 'Download',
          items: [
            { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.wipproject' },
            { label: 'App Store',   href: 'https://apps.apple.com/us/app/lineguru/id6504959110' },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;