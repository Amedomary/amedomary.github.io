// ====================
// Открытие попАпа и запрет скрола на body
// ====================

define(["jquery"], function($) {
  let $linkTheme = $(".js-switch-theme");
  let $BG = $('.js-background-wrapper');
  let isOn = true;

  function toggleTheme(flag) {
    const themeName = flag ? 'dark' : 'light';
    $("html").attr("data-theme", themeName);
  }

  function toggleSwitch(flag) {
    flag
    ? $linkTheme.removeClass('on')
    : $linkTheme.addClass('on');
  }

  function toggleBG(flag) {
    flag
    ? $BG.removeClass('g-hide')
    : $BG.addClass('g-hide');
  }

  $linkTheme.click(function() {
    isOn = !isOn;
    toggleTheme(isOn);
    toggleSwitch(isOn);
    toggleBG(isOn);
  });
});
