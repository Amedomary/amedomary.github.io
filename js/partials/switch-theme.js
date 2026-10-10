define(['jquery'], function ($) {
  let $linkTheme = $('.js-switch-theme');
  let $BG = $('.js-background-wrapper');
  let isOn = true;

  const themeCookie = document.cookie.split(';')
    .map(cookie => cookie.trim())
    .find(cookie => /^theme=(light|dark)$/.test(cookie));
  let hasManualTheme = Boolean(themeCookie);

  const themeValueOS = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('content')
    .replace(/"/g, '');

  function toggleTheme(flag) {
    const themeName = flag ? 'dark' : 'light';
    $('html').attr('data-theme', themeName);
  }

  function setCookie(flag) {
    const themeName = flag ? 'dark' : 'light';
    document.cookie = `theme=${themeName}; max-age=31536000`;
  }

  function toggleSwitch(flag) {
    flag ? $linkTheme.removeClass('on') : $linkTheme.addClass('on');
  }

  function toggleBG(flag) {
    flag ? $BG.removeClass('g-hide') : $BG.addClass('g-hide');
  }

  function toggleOnWithCookie() {
    setCookie(isOn);
    toggleTheme(isOn);
    toggleSwitch(isOn);
    toggleBG(isOn);
  }
  function toggleOn() {
    toggleTheme(isOn);
    toggleSwitch(isOn);
    toggleBG(isOn);
  }

  isOn = hasManualTheme ? themeCookie === 'theme=dark' : themeValueOS !== 'light';
  toggleOn();

  $linkTheme.click(function () {
    hasManualTheme = true;
    isOn = !isOn;
    toggleOnWithCookie();
  });

  const DARK = '(prefers-color-scheme: dark)';
  const LIGHT = '(prefers-color-scheme: light)';

  function detectColorScheme() {
    if (!window.matchMedia) {
      return;
    }
    function listener({ matches, media }) {
      if (!matches || hasManualTheme) {
        // Not matching anymore = not interesting
        return;
      }

      if (media === LIGHT) {
        isOn = false;
      } else if (media === DARK) {
        isOn = true;
      }
      toggleOn();
    }
    const mqDark = window.matchMedia(DARK);
    mqDark.addListener(listener);
    const mqLight = window.matchMedia(LIGHT);
    mqLight.addListener(listener);
  }

  detectColorScheme();
});
