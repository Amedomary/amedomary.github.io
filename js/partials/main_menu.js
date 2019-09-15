// ====================
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery'], function ($) {

  const $hamburgerButton = $('.js-hamburger');
  const $mainMenu = $('.js-main-menu');
  const $page = $('.b-page-wrapper');
  const $pageWithScroll = $('.b-page-wrapper--scroll');

  // let windowsOS = (navigator.userAgent.toLowerCase().indexOf('windows') !== -1); // true для Win
  // if ($page.length > 0) {
  //   let windowsHasScroll = (windowsOS) && (getScroll('Height', '.b-page-wrapper')); // true Если Page у Windows имеет скролл
  // }
  let scrollWrapper; // положение скрола

  // Проверка на наличие скролаа
  function getScroll(scroll, selector) {
    let doc = document;
    let body = doc.body;
    let element = doc.querySelector(selector);
    let client = 'client' + scroll;
    scroll = 'scroll' + scroll;
    return /CSS/.test(doc.compatMode) ? (element[client] < element[scroll]) : (body[client] < body[scroll]);
  }
  // Открываем меню
  function openMainMenu() {
    $hamburgerButton.addClass('open');
    $mainMenu.addClass('open');
    $page.addClass('no-scroll no-touch');
    // Если у винды есть скролл
    // if (windowsHasScroll) {
    //   $page.addClass('no-jump-windows-os')
    // }
  }
  // Закрываем меню
  function closeMainMenu() {
    $hamburgerButton.removeClass('open');
    $hamburgerButton.addClass('close');
    $mainMenu.removeClass('open');
    $page.removeClass('no-scroll no-touch no-jump-windows-os');
  }

  // клик на гамбургер
  $hamburgerButton.on('click', function () {
    // Работа с Гамбургером
    // Если гамбургер закрыт
    if ($hamburgerButton.hasClass('close')) {
      $hamburgerButton.removeClass('close');
      openMainMenu();
    }
    // Если гамбургер открыт
    else if ($hamburgerButton.hasClass('open')) {
      closeMainMenu();
    }
    // если гамбургер ещё не трогали
    else {
      openMainMenu();
    }
  });

  // Жмяк по 'M'
  $(document).on('keydown', function (event) {
    if (event.keyCode === 77) {
      // Если гамбургер закрыт
      if ($hamburgerButton.hasClass('close')) {
        $hamburgerButton.removeClass('close');
        openMainMenu();
      }
      // Если гамбургер открыт
      else if ($hamburgerButton.hasClass('open')) {
        closeMainMenu();
      }
      // если гамбургер ещё не трогали
      else {
        openMainMenu();
      }
    }
  });

  // Жмяк по Esc
  $(document).on('keydown', function (event) {
    if (event.keyCode === 27) {
      if ($hamburgerButton.hasClass('open')) {
        closeMainMenu();
      }
    }
  });

  if ($pageWithScroll.length > 0) {
    // скролим страницу
    $pageWithScroll.scroll(function () {
      scrollWrapper = $pageWithScroll.scrollTop();

      if (scrollWrapper > 3) {
        $hamburgerButton.addClass('scroll');
      } else {
        $hamburgerButton.removeClass('scroll');
      }
    });
  }

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9tYWluX21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT1cclxuLy8g0J7RgtC60YDRi9GC0LjQtSDQv9C+0L/QkNC/0LAg0Lgg0LfQsNC/0YDQtdGCINGB0LrRgNC+0LvQsCDQvdCwIGJvZHlcclxuLy8gPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoJCkge1xyXG5cclxuICBjb25zdCAkaGFtYnVyZ2VyQnV0dG9uID0gJCgnLmpzLWhhbWJ1cmdlcicpO1xyXG4gIGNvbnN0ICRtYWluTWVudSA9ICQoJy5qcy1tYWluLW1lbnUnKTtcclxuICBjb25zdCAkcGFnZSA9ICQoJy5iLXBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0ICRwYWdlV2l0aFNjcm9sbCA9ICQoJy5iLXBhZ2Utd3JhcHBlci0tc2Nyb2xsJyk7XHJcblxyXG4gIC8vIGxldCB3aW5kb3dzT1MgPSAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbmRvd3MnKSAhPT0gLTEpOyAvLyB0cnVlINC00LvRjyBXaW5cclxuICAvLyBpZiAoJHBhZ2UubGVuZ3RoID4gMCkge1xyXG4gIC8vICAgbGV0IHdpbmRvd3NIYXNTY3JvbGwgPSAod2luZG93c09TKSAmJiAoZ2V0U2Nyb2xsKCdIZWlnaHQnLCAnLmItcGFnZS13cmFwcGVyJykpOyAvLyB0cnVlINCV0YHQu9C4IFBhZ2Ug0YMgV2luZG93cyDQuNC80LXQtdGCINGB0LrRgNC+0LvQu1xyXG4gIC8vIH1cclxuICBsZXQgc2Nyb2xsV3JhcHBlcjsgLy8g0L/QvtC70L7QttC10L3QuNC1INGB0LrRgNC+0LvQsFxyXG5cclxuICAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0L3QsNC70LjRh9C40LUg0YHQutGA0L7Qu9Cw0LBcclxuICBmdW5jdGlvbiBnZXRTY3JvbGwoc2Nyb2xsLCBzZWxlY3Rvcikge1xyXG4gICAgbGV0IGRvYyA9IGRvY3VtZW50O1xyXG4gICAgbGV0IGJvZHkgPSBkb2MuYm9keTtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgbGV0IGNsaWVudCA9ICdjbGllbnQnICsgc2Nyb2xsO1xyXG4gICAgc2Nyb2xsID0gJ3Njcm9sbCcgKyBzY3JvbGw7XHJcbiAgICByZXR1cm4gL0NTUy8udGVzdChkb2MuY29tcGF0TW9kZSkgPyAoZWxlbWVudFtjbGllbnRdIDwgZWxlbWVudFtzY3JvbGxdKSA6IChib2R5W2NsaWVudF0gPCBib2R5W3Njcm9sbF0pO1xyXG4gIH1cclxuICAvLyDQntGC0LrRgNGL0LLQsNC10Lwg0LzQtdC90Y5cclxuICBmdW5jdGlvbiBvcGVuTWFpbk1lbnUoKSB7XHJcbiAgICAkaGFtYnVyZ2VyQnV0dG9uLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAkbWFpbk1lbnUuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICRwYWdlLmFkZENsYXNzKCduby1zY3JvbGwgbm8tdG91Y2gnKTtcclxuICAgIC8vINCV0YHQu9C4INGDINCy0LjQvdC00Ysg0LXRgdGC0Ywg0YHQutGA0L7Qu9C7XHJcbiAgICAvLyBpZiAod2luZG93c0hhc1Njcm9sbCkge1xyXG4gICAgLy8gICAkcGFnZS5hZGRDbGFzcygnbm8tanVtcC13aW5kb3dzLW9zJylcclxuICAgIC8vIH1cclxuICB9XHJcbiAgLy8g0JfQsNC60YDRi9Cy0LDQtdC8INC80LXQvdGOXHJcbiAgZnVuY3Rpb24gY2xvc2VNYWluTWVudSgpIHtcclxuICAgICRoYW1idXJnZXJCdXR0b24ucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICRoYW1idXJnZXJCdXR0b24uYWRkQ2xhc3MoJ2Nsb3NlJyk7XHJcbiAgICAkbWFpbk1lbnUucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICRwYWdlLnJlbW92ZUNsYXNzKCduby1zY3JvbGwgbm8tdG91Y2ggbm8tanVtcC13aW5kb3dzLW9zJyk7XHJcbiAgfVxyXG5cclxuICAvLyDQutC70LjQuiDQvdCwINCz0LDQvNCx0YPRgNCz0LXRgFxyXG4gICRoYW1idXJnZXJCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8g0KDQsNCx0L7RgtCwINGBINCT0LDQvNCx0YPRgNCz0LXRgNC+0LxcclxuICAgIC8vINCV0YHQu9C4INCz0LDQvNCx0YPRgNCz0LXRgCDQt9Cw0LrRgNGL0YJcclxuICAgIGlmICgkaGFtYnVyZ2VyQnV0dG9uLmhhc0NsYXNzKCdjbG9zZScpKSB7XHJcbiAgICAgICRoYW1idXJnZXJCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Nsb3NlJyk7XHJcbiAgICAgIG9wZW5NYWluTWVudSgpO1xyXG4gICAgfVxyXG4gICAgLy8g0JXRgdC70Lgg0LPQsNC80LHRg9GA0LPQtdGAINC+0YLQutGA0YvRglxyXG4gICAgZWxzZSBpZiAoJGhhbWJ1cmdlckJ1dHRvbi5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgIGNsb3NlTWFpbk1lbnUoKTtcclxuICAgIH1cclxuICAgIC8vINC10YHQu9C4INCz0LDQvNCx0YPRgNCz0LXRgCDQtdGJ0ZEg0L3QtSDRgtGA0L7Qs9Cw0LvQuFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIG9wZW5NYWluTWVudSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyDQltC80Y/QuiDQv9C+ICdNJ1xyXG4gICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNzcpIHtcclxuICAgICAgLy8g0JXRgdC70Lgg0LPQsNC80LHRg9GA0LPQtdGAINC30LDQutGA0YvRglxyXG4gICAgICBpZiAoJGhhbWJ1cmdlckJ1dHRvbi5oYXNDbGFzcygnY2xvc2UnKSkge1xyXG4gICAgICAgICRoYW1idXJnZXJCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Nsb3NlJyk7XHJcbiAgICAgICAgb3Blbk1haW5NZW51KCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8g0JXRgdC70Lgg0LPQsNC80LHRg9GA0LPQtdGAINC+0YLQutGA0YvRglxyXG4gICAgICBlbHNlIGlmICgkaGFtYnVyZ2VyQnV0dG9uLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICBjbG9zZU1haW5NZW51KCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8g0LXRgdC70Lgg0LPQsNC80LHRg9GA0LPQtdGAINC10YnRkSDQvdC1INGC0YDQvtCz0LDQu9C4XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG9wZW5NYWluTWVudSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vINCW0LzRj9C6INC/0L4gRXNjXHJcbiAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICBpZiAoJGhhbWJ1cmdlckJ1dHRvbi5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgY2xvc2VNYWluTWVudSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmICgkcGFnZVdpdGhTY3JvbGwubGVuZ3RoID4gMCkge1xyXG4gICAgLy8g0YHQutGA0L7Qu9C40Lwg0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgJHBhZ2VXaXRoU2Nyb2xsLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNjcm9sbFdyYXBwZXIgPSAkcGFnZVdpdGhTY3JvbGwuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsV3JhcHBlciA+IDMpIHtcclxuICAgICAgICAkaGFtYnVyZ2VyQnV0dG9uLmFkZENsYXNzKCdzY3JvbGwnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkaGFtYnVyZ2VyQnV0dG9uLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSk7Il0sImZpbGUiOiJwYXJ0aWFscy9tYWluX21lbnUuanMifQ==
