define(['jquery'], function ($) {
  let $linkTheme = $('.js-switch-theme');
  let $BG = $('.js-background-wrapper');
  let isOn = true;

  const cookiesArray = document.cookie.split(';');

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

  if (cookiesArray[0].length) {
    // Если есть куки
    if (cookiesArray.filter((item) => item.includes('theme=light')).length) {
      isOn = false;
    } else if (
      cookiesArray.filter((item) => item.includes('theme=dark')).length
    ) {
      isOn = true;
    }
    toggleOnWithCookie();
  } else {
    // если куки нет - используем настройки ОС
    if (themeValueOS === 'light') {
      isOn = false;
    } else if (themeValueOS === 'dark') {
      isOn = true;
    }
    toggleOn();
  }

  $linkTheme.click(function () {
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
      if (!matches) {
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
