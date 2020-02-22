// ====================
// Открытие попАпа и запрет скрола на body
// ====================

define(["jquery"], function($) {
  let $linkTheme = $(".js-switch-theme");
  let $BG = $(".js-background-wrapper");
  let isOn = true;

  if (
    document.cookie.split(";").filter(item => item.includes("theme=light"))
      .length
  ) {
    isOn = false;
  } else {
    isOn = true;
  }
  toggleOn();

  function toggleTheme(flag) {
    const themeName = flag ? "dark" : "light";
    $("html").attr("data-theme", themeName);

    document.cookie = `theme=${themeName}; max-age=31536000`;
  }

  function toggleSwitch(flag) {
    flag ? $linkTheme.removeClass("on") : $linkTheme.addClass("on");
  }

  function toggleBG(flag) {
    flag ? $BG.removeClass("g-hide") : $BG.addClass("g-hide");
  }

  function toggleOn() {
    toggleTheme(isOn);
    toggleSwitch(isOn);
    toggleBG(isOn);
  }

  $linkTheme.click(function() {
    isOn = !isOn;
    toggleOn();
  });
});
