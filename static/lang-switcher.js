(function () {
  var LOCALES = ['en', 'km'];

  var FLAGS = {
    en: 'https://flagcdn.com/w40/gb.png',
    km: 'https://flagcdn.com/w40/kh.png',
  };

  var CODES = {
    en: 'EN',
    km: 'KM',
  };

  var _open = false;

  /* ── helpers ─────────────────────────────────────────────── */

  function currentLang() {
    var html = document.documentElement;
    var lang = (html.getAttribute('lang') || '').toLowerCase().slice(0, 2);
    return LOCALES.indexOf(lang) !== -1 ? lang : 'en';
  }

  function stripLocale(path) {
    for (var i = 0; i < LOCALES.length; i++) {
      var prefix = '/' + LOCALES[i];
      if (path === prefix) return '/';
      if (path.indexOf(prefix + '/') === 0) return path.slice(prefix.length);
    }
    return path;
  }

  function buildPath(lang, stripped) {
    if (lang === 'en') return stripped || '/';
    return '/' + lang + (stripped.charAt(0) === '/' ? stripped : '/' + stripped);
  }

  /* ── UI update ───────────────────────────────────────────── */

  function setActive(lang) {
    var flag = document.getElementById('langFlag');
    var code = document.getElementById('langCode');

    if (flag) flag.src = FLAGS[lang] || FLAGS['en'];
    if (code) code.textContent = CODES[lang] || 'EN';

    LOCALES.forEach(function (l) {
      var opt = document.getElementById('langOpt-' + l);
      if (!opt) return;
      if (l === lang) {
        opt.classList.add('lang-active');
        opt.setAttribute('aria-selected', 'true');
      } else {
        opt.classList.remove('lang-active');
        opt.setAttribute('aria-selected', 'false');
      }
    });
  }

  /* ── menu open / close ───────────────────────────────────── */

  function openMenu() {
    var menu    = document.getElementById('langMenu');
    var trigger = document.getElementById('langTrigger');
    var chevron = document.getElementById('langChevron');
    if (menu)    menu.classList.add('lang-open');
    if (trigger) trigger.classList.add('lang-open');
    if (chevron) chevron.classList.add('lang-open');
    _open = true;
  }


  function closeMenu() {
    var menu    = document.getElementById('langMenu');
    var trigger = document.getElementById('langTrigger');
    var chevron = document.getElementById('langChevron');
    if (menu)    menu.classList.remove('lang-open');
    if (trigger) trigger.classList.remove('lang-open');
    if (chevron) chevron.classList.remove('lang-open');
    _open = false;
  }

  /* ── public API ──────────────────────────────────────────── */

  window.toggleLangMenu = function (e) {
    e.stopPropagation();
    if (_open) { closeMenu(); } else { openMenu(); }
  };

  window.switchLang = function (e, lang) {
    e.preventDefault();
    e.stopPropagation();

    if (LOCALES.indexOf(lang) === -1) return;

    setActive(lang);
    closeMenu();

    var stripped = stripLocale(window.location.pathname);
    var newPath  = buildPath(lang, stripped);

    if (newPath !== window.location.pathname) {
      window.location.pathname = newPath;
    }
  };

  /* ── close on outside click ──────────────────────────────── */

  document.addEventListener('click', function (e) {
    if (!_open) return;
    var menu    = document.getElementById('langMenu');
    var trigger = document.getElementById('langTrigger');
    var inside  = (menu    && menu.contains(e.target)) ||
                  (trigger && trigger.contains(e.target));
    if (!inside) closeMenu();
  });

  /* ── close on Escape ─────────────────────────────────────── */

  document.addEventListener('keydown', function (e) {
    if (_open && (e.key === 'Escape' || e.keyCode === 27)) {
      closeMenu();
      var trigger = document.getElementById('langTrigger');
      if (trigger) trigger.focus();
    }
  });

  /* ── init ────────────────────────────────────────────────── */

  function init() {
    setActive(currentLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();