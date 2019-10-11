// ====================
// Открытие попАпа и запрет скрола на body
// ====================

define(["jquery", "lodash"], function ($, _) {
  const cursor = $(".b-cursor");
  const cursorInner = $(".b-cursor__inner");

  const mouse = {
    x: 0,
    y: 0,
  }
  const mouseOld = {
    x: 0,
    y: 0,
  }

  function handler(e) {
    mouse.x = e.x;
    mouse.y = e.y;
  }

  document.addEventListener('mousemove', handler);

  const mouseMove = () => {
    const difX = Math.abs(mouseOld.x - mouse.x);
    const difY = Math.abs(mouseOld.y - mouse.y);
    const difAll = difX + difY;
    const scale = 0.6/difAll + 0.4;

    cursor.css({ transform: `translate3d(${mouse.x - 50}px, ${mouse.y - 50}px, 1px)` });
    cursorInner.css({transform: `scale(${scale})`})

    mouseOld.x = mouse.x;
    mouseOld.y = mouse.y;
  };

  $(window).on('mousemove', _.throttle(mouseMove, 8));
});
