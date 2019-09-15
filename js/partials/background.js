// ====================
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery'], function ($) {
  const $backgroundLink = $('.js-background-link'); // Ссылка на картинку
  const $listItemLink = $('.js-background-link').parent();
  const $backgroundImage = $('.js-background'); //картинка
  const $backgroundWrapper = $('.js-background-wrapper'); //обёртка фонов
  const $backgroundClose = $('.js-background-link-close'); //Кнопка очистки слайдера
  const $mainNavButton = $('.js-main-nav'); //кнопочка для переходу на страницу
  const $sfx = document.querySelector('.line-sfx'); // Кружочек спецэфектов
  let $backgroundImageData; // Дата для фона
  let textBefore = $mainNavButton.text(); //текст До
  let textAfter = 'Show more'; //текст После
  let colorButtonData; // Цвет для кнопки из ссылки
  let dataHrefMainNavigation; //дата для передачи ссылки в другую кнопку
  let xy; // $sfx геометрич значение
  const $descriptionBlock = $('.js-description');
  const $descriptionText = $('.js-description-block p');
  const $tagBar = $('.b-main-nav__tag-bar');

  let state = {
    backgroundIsOpen: false,
  }

  const dataDescription = {
    id_login: {
      text: 'Форма входа на сайт',
      tags: ['Animation', 'Vue.JS', 'UI/UX']
    },
    id_timer: {
      text: 'Приложение для запуска таймера с возможностью поделиться своим событием',
      tags: ['SPA', 'Vue.JS', 'UI/UX', 'Alarm', 'Animation', 'firebase']
    },
    id_css_vars: {
      text: `
        <p>CSS переменные и цветовая тема для сайта в несколько строк</p>
        <a href="https://habr.com/ru/post/466587/" target="_blank">Читать на Habr</a>
      `,
      tags: ['CSS', 'post', 'habr']
    },
    id_fractus: {
      text: 'Динамическое создание фракталов на JS',
      tags: ['mathematic', 'geometry', 'algorithm', 'canvas']
    },
    id_game: {
      text: '2D игра с поддержкой геймпадов',
      tags: ['2D', 'game', 'canvas']
    },
    id_xcom: {
      text: 'Стратегическая пошаговая игра в жанре X-com',
      tags: ['2D', 'game', 'canvas']
    },
    id_animation: {
      text: 'Возможности стоковых и не только анимаций на CSS и JS',
      tags: ['CSS', 'animation']
    },
    id_chart: {
      text: 'Создание графиков и их отрисовка',
      tags: ['mathematic', 'geometry', 'algorithm', 'canvas']
    },
    id_calculator: {
      text: 'Красивый калькулятор',
      tags: ['mathematic'],
    },
    id_form: {
      text: 'Пример форм с плавающим лейблом',
      tags: ['CSS', 'animation', 'UX']
    },
    id_blog: {
      text: 'Страница блога',
      tags: ['markdown', 'CSS-vars', 'themes']
    },
    id_portfolio: {
      text: 'Чек лист скилов',
      tags: ['markdown']
    },
    id_3d: {
      text: 'Демонстрация 3D возможностей CSS',
      tags: ['3D', 'CSS']
    },

    // default
    id_: {
      text: '',
      tags: []
    },
  }

  function enableDescription(text, tags) {
    $descriptionText.html(text);

    $tagBar.html('');
    tags.forEach(element => {
      $tagBar.append(`<span class="b-main-nav__tag">${element}</span>`);
    });

    $descriptionBlock.addClass('active');
  }

  function disableDescription(e) {
    $descriptionBlock.removeClass('active');
  }

  // Дизейблит кнопку перехода на др страницу
  function disableNavButton() {
    $mainNavButton.addClass('disable');
    $mainNavButton.text(textBefore);
    $mainNavButton.css('background-color', 'transparent');
    state.backgroundIsOpen = false;
  };

  // Активирует кнопку перехода на др страницу
  function enableNavButton() {
    $mainNavButton.removeClass('disable');
    $mainNavButton.text(textAfter);
    $mainNavButton.css('background-color', colorButtonData);
    $mainNavButton.attr('href', dataHrefMainNavigation);
    state.backgroundIsOpen = true;
  };

  // Анимация активации кнопки перехода и подчёркивания
  function goInBtnAnimation(e) {
    let oldXY = xy;
    let elHeight = e.target.clientHeight;
    let sfxWidth = elHeight > 25 ? 2 : 3;
    let animationTime = 0;
    xy = e.target.getBoundingClientRect();

    // считаем дистанцию
    let distance;
    if (oldXY === undefined) {
      distance = 0;
    } else {
      distance = Math.abs(xy.top - oldXY.top);
    }
    // расчитываем время анимации
    // график уровнения корня
    animationTime = (Math.pow(distance, 1 / 1.7) - (distance / 100)) / 30;

    $sfx.classList.add('active');
    // styles
    $sfx.style.transition = `all ${animationTime}s, opacity .2s`;
    $sfx.style.top = `${xy.top - 4}px`;
    $sfx.style.left = `${xy.left - 25}px`;
    $sfx.style.height = `${elHeight + 8}px`;
    $sfx.style.width = `${sfxWidth}px`;
  };

  function goOutBtnAnimation(e) {
    $sfx.classList.remove('active');
  }

  // Клик по клавише
  $(document).on('keydown', function (event) {
    // Клик по табу
    if (event.keyCode === 9) {
      if (state.backgroundIsOpen) {
        setTimeout(() => {
          let element = $(':focus');
          if (element.hasClass('js-background-link')) {
            element.click();
          }
        }, 0);
      }
    }

    // ESC
    if (event.keyCode === 27) {
      if (state.backgroundIsOpen) {
        $backgroundClose.click();
      }
    }
  });

  // клик по ссылке для фона
  $backgroundLink.on('click', function (event) {
    $backgroundImageData = $('.js-background[data-background=\'' + ($(this).attr('data-background')) + '\']'); // Забираем дату из ссылки клика и закидываем в переменную картинки
    colorButtonData = $(this).attr('data-color'); // Забираем цвет фона кнопки из даты
    dataHrefMainNavigation = $(this).attr('data-href'); // забираем адресс ссылки из даты
    idElement = $(this).attr('data-element-id');

    // Если картинка со ссылкой ещё не октрыты (не совпадает ссылка с открытой фоткой)
    if (!($backgroundImageData.hasClass('show'))) {
      event.preventDefault();
      // делаем кнопку и li активной
      $backgroundLink.removeClass('active');
      $listItemLink.removeClass('active-li');
      $(this).addClass('active');
      $(this).parent().addClass('active-li');
      $backgroundWrapper.addClass('active'); // Добавляем обёртке атив
      $backgroundImage.removeClass('show'); // скрываем все фоны
      $backgroundImageData.addClass('show'); // показываем конкретный фон
      $backgroundClose.addClass('active'); // показываем кнопку закрыть
      enableNavButton();
      enableDescription(dataDescription[idElement].text, dataDescription[idElement].tags);
      goInBtnAnimation(event);
    } else {
      // дабл клик для перехода
    }
  });

  // Кликаем по закрывашки фона
  $backgroundClose.on('click', function () {
    $backgroundWrapper.removeClass('active');
    $backgroundLink.removeClass('active');
    $backgroundImage.removeClass('show');
    $listItemLink.removeClass('active-li');
    $(this).removeClass('active');
    goOutBtnAnimation();
    disableNavButton();
    disableDescription();
    xy = undefined;
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09XHJcbi8vINCe0YLQutGA0YvRgtC40LUg0L/QvtC/0JDQv9CwINC4INC30LDQv9GA0LXRgiDRgdC60YDQvtC70LAg0L3QsCBib2R5XHJcbi8vID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5kZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKCQpIHtcclxuICBjb25zdCAkYmFja2dyb3VuZExpbmsgPSAkKCcuanMtYmFja2dyb3VuZC1saW5rJyk7IC8vINCh0YHRi9C70LrQsCDQvdCwINC60LDRgNGC0LjQvdC60YNcclxuICBjb25zdCAkbGlzdEl0ZW1MaW5rID0gJCgnLmpzLWJhY2tncm91bmQtbGluaycpLnBhcmVudCgpO1xyXG4gIGNvbnN0ICRiYWNrZ3JvdW5kSW1hZ2UgPSAkKCcuanMtYmFja2dyb3VuZCcpOyAvL9C60LDRgNGC0LjQvdC60LBcclxuICBjb25zdCAkYmFja2dyb3VuZFdyYXBwZXIgPSAkKCcuanMtYmFja2dyb3VuZC13cmFwcGVyJyk7IC8v0L7QsdGR0YDRgtC60LAg0YTQvtC90L7QslxyXG4gIGNvbnN0ICRiYWNrZ3JvdW5kQ2xvc2UgPSAkKCcuanMtYmFja2dyb3VuZC1saW5rLWNsb3NlJyk7IC8v0JrQvdC+0L/QutCwINC+0YfQuNGB0YLQutC4INGB0LvQsNC50LTQtdGA0LBcclxuICBjb25zdCAkbWFpbk5hdkJ1dHRvbiA9ICQoJy5qcy1tYWluLW5hdicpOyAvL9C60L3QvtC/0L7Rh9C60LAg0LTQu9GPINC/0LXRgNC10YXQvtC00YMg0L3QsCDRgdGC0YDQsNC90LjRhtGDXHJcbiAgY29uc3QgJHNmeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLXNmeCcpOyAvLyDQmtGA0YPQttC+0YfQtdC6INGB0L/QtdGG0Y3RhNC10LrRgtC+0LJcclxuICBsZXQgJGJhY2tncm91bmRJbWFnZURhdGE7IC8vINCU0LDRgtCwINC00LvRjyDRhNC+0L3QsFxyXG4gIGxldCB0ZXh0QmVmb3JlID0gJG1haW5OYXZCdXR0b24udGV4dCgpOyAvL9GC0LXQutGB0YIg0JTQvlxyXG4gIGxldCB0ZXh0QWZ0ZXIgPSAnU2hvdyBtb3JlJzsgLy/RgtC10LrRgdGCINCf0L7RgdC70LVcclxuICBsZXQgY29sb3JCdXR0b25EYXRhOyAvLyDQptCy0LXRgiDQtNC70Y8g0LrQvdC+0L/QutC4INC40Lcg0YHRgdGL0LvQutC4XHJcbiAgbGV0IGRhdGFIcmVmTWFpbk5hdmlnYXRpb247IC8v0LTQsNGC0LAg0LTQu9GPINC/0LXRgNC10LTQsNGH0Lgg0YHRgdGL0LvQutC4INCyINC00YDRg9Cz0YPRjiDQutC90L7Qv9C60YNcclxuICBsZXQgeHk7IC8vICRzZngg0LPQtdC+0LzQtdGC0YDQuNGHINC30L3QsNGH0LXQvdC40LVcclxuICBjb25zdCAkZGVzY3JpcHRpb25CbG9jayA9ICQoJy5qcy1kZXNjcmlwdGlvbicpO1xyXG4gIGNvbnN0ICRkZXNjcmlwdGlvblRleHQgPSAkKCcuanMtZGVzY3JpcHRpb24tYmxvY2sgcCcpO1xyXG4gIGNvbnN0ICR0YWdCYXIgPSAkKCcuYi1tYWluLW5hdl9fdGFnLWJhcicpO1xyXG5cclxuICBsZXQgc3RhdGUgPSB7XHJcbiAgICBiYWNrZ3JvdW5kSXNPcGVuOiBmYWxzZSxcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGFEZXNjcmlwdGlvbiA9IHtcclxuICAgIGlkX2xvZ2luOiB7XHJcbiAgICAgIHRleHQ6ICfQpNC+0YDQvNCwINCy0YXQvtC00LAg0L3QsCDRgdCw0LnRgicsXHJcbiAgICAgIHRhZ3M6IFsnQW5pbWF0aW9uJywgJ1Z1ZS5KUycsICdVSS9VWCddXHJcbiAgICB9LFxyXG4gICAgaWRfdGltZXI6IHtcclxuICAgICAgdGV4dDogJ9Cf0YDQuNC70L7QttC10L3QuNC1INC00LvRjyDQt9Cw0L/Rg9GB0LrQsCDRgtCw0LnQvNC10YDQsCDRgSDQstC+0LfQvNC+0LbQvdC+0YHRgtGM0Y4g0L/QvtC00LXQu9C40YLRjNGB0Y8g0YHQstC+0LjQvCDRgdC+0LHRi9GC0LjQtdC8JyxcclxuICAgICAgdGFnczogWydTUEEnLCAnVnVlLkpTJywgJ1VJL1VYJywgJ0FsYXJtJywgJ0FuaW1hdGlvbicsICdmaXJlYmFzZSddXHJcbiAgICB9LFxyXG4gICAgaWRfY3NzX3ZhcnM6IHtcclxuICAgICAgdGV4dDogYFxyXG4gICAgICAgIDxwPkNTUyDQv9C10YDQtdC80LXQvdC90YvQtSDQuCDRhtCy0LXRgtC+0LLQsNGPINGC0LXQvNCwINC00LvRjyDRgdCw0LnRgtCwINCyINC90LXRgdC60L7Qu9GM0LrQviDRgdGC0YDQvtC6PC9wPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2hhYnIuY29tL3J1L3Bvc3QvNDY2NTg3L1wiIHRhcmdldD1cIl9ibGFua1wiPtCn0LjRgtCw0YLRjCDQvdCwIEhhYnI8L2E+XHJcbiAgICAgIGAsXHJcbiAgICAgIHRhZ3M6IFsnQ1NTJywgJ3Bvc3QnLCAnaGFiciddXHJcbiAgICB9LFxyXG4gICAgaWRfZnJhY3R1czoge1xyXG4gICAgICB0ZXh0OiAn0JTQuNC90LDQvNC40YfQtdGB0LrQvtC1INGB0L7Qt9C00LDQvdC40LUg0YTRgNCw0LrRgtCw0LvQvtCyINC90LAgSlMnLFxyXG4gICAgICB0YWdzOiBbJ21hdGhlbWF0aWMnLCAnZ2VvbWV0cnknLCAnYWxnb3JpdGhtJywgJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gICAgaWRfZ2FtZToge1xyXG4gICAgICB0ZXh0OiAnMkQg0LjQs9GA0LAg0YEg0L/QvtC00LTQtdGA0LbQutC+0Lkg0LPQtdC50LzQv9Cw0LTQvtCyJyxcclxuICAgICAgdGFnczogWycyRCcsICdnYW1lJywgJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gICAgaWRfeGNvbToge1xyXG4gICAgICB0ZXh0OiAn0KHRgtGA0LDRgtC10LPQuNGH0LXRgdC60LDRjyDQv9C+0YjQsNCz0L7QstCw0Y8g0LjQs9GA0LAg0LIg0LbQsNC90YDQtSBYLWNvbScsXHJcbiAgICAgIHRhZ3M6IFsnMkQnLCAnZ2FtZScsICdjYW52YXMnXVxyXG4gICAgfSxcclxuICAgIGlkX2FuaW1hdGlvbjoge1xyXG4gICAgICB0ZXh0OiAn0JLQvtC30LzQvtC20L3QvtGB0YLQuCDRgdGC0L7QutC+0LLRi9GFINC4INC90LUg0YLQvtC70YzQutC+INCw0L3QuNC80LDRhtC40Lkg0L3QsCBDU1Mg0LggSlMnLFxyXG4gICAgICB0YWdzOiBbJ0NTUycsICdhbmltYXRpb24nXVxyXG4gICAgfSxcclxuICAgIGlkX2NoYXJ0OiB7XHJcbiAgICAgIHRleHQ6ICfQodC+0LfQtNCw0L3QuNC1INCz0YDQsNGE0LjQutC+0LIg0Lgg0LjRhSDQvtGC0YDQuNGB0L7QstC60LAnLFxyXG4gICAgICB0YWdzOiBbJ21hdGhlbWF0aWMnLCAnZ2VvbWV0cnknLCAnYWxnb3JpdGhtJywgJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gICAgaWRfY2FsY3VsYXRvcjoge1xyXG4gICAgICB0ZXh0OiAn0JrRgNCw0YHQuNCy0YvQuSDQutCw0LvRjNC60YPQu9GP0YLQvtGAJyxcclxuICAgICAgdGFnczogWydtYXRoZW1hdGljJ10sXHJcbiAgICB9LFxyXG4gICAgaWRfZm9ybToge1xyXG4gICAgICB0ZXh0OiAn0J/RgNC40LzQtdGAINGE0L7RgNC8INGBINC/0LvQsNCy0LDRjtGJ0LjQvCDQu9C10LnQsdC70L7QvCcsXHJcbiAgICAgIHRhZ3M6IFsnQ1NTJywgJ2FuaW1hdGlvbicsICdVWCddXHJcbiAgICB9LFxyXG4gICAgaWRfYmxvZzoge1xyXG4gICAgICB0ZXh0OiAn0KHRgtGA0LDQvdC40YbQsCDQsdC70L7Qs9CwJyxcclxuICAgICAgdGFnczogWydtYXJrZG93bicsICdDU1MtdmFycycsICd0aGVtZXMnXVxyXG4gICAgfSxcclxuICAgIGlkX3BvcnRmb2xpbzoge1xyXG4gICAgICB0ZXh0OiAn0KfQtdC6INC70LjRgdGCINGB0LrQuNC70L7QsicsXHJcbiAgICAgIHRhZ3M6IFsnbWFya2Rvd24nXVxyXG4gICAgfSxcclxuICAgIGlkXzNkOiB7XHJcbiAgICAgIHRleHQ6ICfQlNC10LzQvtC90YHRgtGA0LDRhtC40Y8gM0Qg0LLQvtC30LzQvtC20L3QvtGB0YLQtdC5IENTUycsXHJcbiAgICAgIHRhZ3M6IFsnM0QnLCAnQ1NTJ11cclxuICAgIH0sXHJcblxyXG4gICAgLy8gZGVmYXVsdFxyXG4gICAgaWRfOiB7XHJcbiAgICAgIHRleHQ6ICcnLFxyXG4gICAgICB0YWdzOiBbXVxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuYWJsZURlc2NyaXB0aW9uKHRleHQsIHRhZ3MpIHtcclxuICAgICRkZXNjcmlwdGlvblRleHQuaHRtbCh0ZXh0KTtcclxuXHJcbiAgICAkdGFnQmFyLmh0bWwoJycpO1xyXG4gICAgdGFncy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAkdGFnQmFyLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJiLW1haW4tbmF2X190YWdcIj4ke2VsZW1lbnR9PC9zcGFuPmApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlc2NyaXB0aW9uQmxvY2suYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGlzYWJsZURlc2NyaXB0aW9uKGUpIHtcclxuICAgICRkZXNjcmlwdGlvbkJsb2NrLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIC8vINCU0LjQt9C10LnQsdC70LjRgiDQutC90L7Qv9C60YMg0L/QtdGA0LXRhdC+0LTQsCDQvdCwINC00YAg0YHRgtGA0LDQvdC40YbRg1xyXG4gIGZ1bmN0aW9uIGRpc2FibGVOYXZCdXR0b24oKSB7XHJcbiAgICAkbWFpbk5hdkJ1dHRvbi5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgJG1haW5OYXZCdXR0b24udGV4dCh0ZXh0QmVmb3JlKTtcclxuICAgICRtYWluTmF2QnV0dG9uLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICd0cmFuc3BhcmVudCcpO1xyXG4gICAgc3RhdGUuYmFja2dyb3VuZElzT3BlbiA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIC8vINCQ0LrRgtC40LLQuNGA0YPQtdGCINC60L3QvtC/0LrRgyDQv9C10YDQtdGF0L7QtNCwINC90LAg0LTRgCDRgdGC0YDQsNC90LjRhtGDXHJcbiAgZnVuY3Rpb24gZW5hYmxlTmF2QnV0dG9uKCkge1xyXG4gICAgJG1haW5OYXZCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcclxuICAgICRtYWluTmF2QnV0dG9uLnRleHQodGV4dEFmdGVyKTtcclxuICAgICRtYWluTmF2QnV0dG9uLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yQnV0dG9uRGF0YSk7XHJcbiAgICAkbWFpbk5hdkJ1dHRvbi5hdHRyKCdocmVmJywgZGF0YUhyZWZNYWluTmF2aWdhdGlvbik7XHJcbiAgICBzdGF0ZS5iYWNrZ3JvdW5kSXNPcGVuID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICAvLyDQkNC90LjQvNCw0YbQuNGPINCw0LrRgtC40LLQsNGG0LjQuCDQutC90L7Qv9C60Lgg0L/QtdGA0LXRhdC+0LTQsCDQuCDQv9C+0LTRh9GR0YDQutC40LLQsNC90LjRj1xyXG4gIGZ1bmN0aW9uIGdvSW5CdG5BbmltYXRpb24oZSkge1xyXG4gICAgbGV0IG9sZFhZID0geHk7XHJcbiAgICBsZXQgZWxIZWlnaHQgPSBlLnRhcmdldC5jbGllbnRIZWlnaHQ7XHJcbiAgICBsZXQgc2Z4V2lkdGggPSBlbEhlaWdodCA+IDI1ID8gMiA6IDM7XHJcbiAgICBsZXQgYW5pbWF0aW9uVGltZSA9IDA7XHJcbiAgICB4eSA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIC8vINGB0YfQuNGC0LDQtdC8INC00LjRgdGC0LDQvdGG0LjRjlxyXG4gICAgbGV0IGRpc3RhbmNlO1xyXG4gICAgaWYgKG9sZFhZID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzdGFuY2UgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyh4eS50b3AgLSBvbGRYWS50b3ApO1xyXG4gICAgfVxyXG4gICAgLy8g0YDQsNGB0YfQuNGC0YvQstCw0LXQvCDQstGA0LXQvNGPINCw0L3QuNC80LDRhtC40LhcclxuICAgIC8vINCz0YDQsNGE0LjQuiDRg9GA0L7QstC90LXQvdC40Y8g0LrQvtGA0L3Rj1xyXG4gICAgYW5pbWF0aW9uVGltZSA9IChNYXRoLnBvdyhkaXN0YW5jZSwgMSAvIDEuNykgLSAoZGlzdGFuY2UgLyAxMDApKSAvIDMwO1xyXG5cclxuICAgICRzZnguY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAvLyBzdHlsZXNcclxuICAgICRzZnguc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHthbmltYXRpb25UaW1lfXMsIG9wYWNpdHkgLjJzYDtcclxuICAgICRzZnguc3R5bGUudG9wID0gYCR7eHkudG9wIC0gNH1weGA7XHJcbiAgICAkc2Z4LnN0eWxlLmxlZnQgPSBgJHt4eS5sZWZ0IC0gMjV9cHhgO1xyXG4gICAgJHNmeC5zdHlsZS5oZWlnaHQgPSBgJHtlbEhlaWdodCArIDh9cHhgO1xyXG4gICAgJHNmeC5zdHlsZS53aWR0aCA9IGAke3NmeFdpZHRofXB4YDtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnb091dEJ0bkFuaW1hdGlvbihlKSB7XHJcbiAgICAkc2Z4LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgLy8g0JrQu9C40Log0L/QviDQutC70LDQstC40YjQtVxyXG4gICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyDQmtC70LjQuiDQv9C+INGC0LDQsdGDXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSkge1xyXG4gICAgICBpZiAoc3RhdGUuYmFja2dyb3VuZElzT3Blbikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGVsZW1lbnQgPSAkKCc6Zm9jdXMnKTtcclxuICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKCdqcy1iYWNrZ3JvdW5kLWxpbmsnKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFU0NcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICBpZiAoc3RhdGUuYmFja2dyb3VuZElzT3Blbikge1xyXG4gICAgICAgICRiYWNrZ3JvdW5kQ2xvc2UuY2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyDQutC70LjQuiDQv9C+INGB0YHRi9C70LrQtSDQtNC70Y8g0YTQvtC90LBcclxuICAkYmFja2dyb3VuZExpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAkYmFja2dyb3VuZEltYWdlRGF0YSA9ICQoJy5qcy1iYWNrZ3JvdW5kW2RhdGEtYmFja2dyb3VuZD1cXCcnICsgKCQodGhpcykuYXR0cignZGF0YS1iYWNrZ3JvdW5kJykpICsgJ1xcJ10nKTsgLy8g0JfQsNCx0LjRgNCw0LXQvCDQtNCw0YLRgyDQuNC3INGB0YHRi9C70LrQuCDQutC70LjQutCwINC4INC30LDQutC40LTRi9Cy0LDQtdC8INCyINC/0LXRgNC10LzQtdC90L3Rg9GOINC60LDRgNGC0LjQvdC60LhcclxuICAgIGNvbG9yQnV0dG9uRGF0YSA9ICQodGhpcykuYXR0cignZGF0YS1jb2xvcicpOyAvLyDQl9Cw0LHQuNGA0LDQtdC8INGG0LLQtdGCINGE0L7QvdCwINC60L3QvtC/0LrQuCDQuNC3INC00LDRgtGLXHJcbiAgICBkYXRhSHJlZk1haW5OYXZpZ2F0aW9uID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTsgLy8g0LfQsNCx0LjRgNCw0LXQvCDQsNC00YDQtdGB0YEg0YHRgdGL0LvQutC4INC40Lcg0LTQsNGC0YtcclxuICAgIGlkRWxlbWVudCA9ICQodGhpcykuYXR0cignZGF0YS1lbGVtZW50LWlkJyk7XHJcblxyXG4gICAgLy8g0JXRgdC70Lgg0LrQsNGA0YLQuNC90LrQsCDRgdC+INGB0YHRi9C70LrQvtC5INC10YnRkSDQvdC1INC+0LrRgtGA0YvRgtGLICjQvdC1INGB0L7QstC/0LDQtNCw0LXRgiDRgdGB0YvQu9C60LAg0YEg0L7RgtC60YDRi9GC0L7QuSDRhNC+0YLQutC+0LkpXHJcbiAgICBpZiAoISgkYmFja2dyb3VuZEltYWdlRGF0YS5oYXNDbGFzcygnc2hvdycpKSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvLyDQtNC10LvQsNC10Lwg0LrQvdC+0L/QutGDINC4IGxpINCw0LrRgtC40LLQvdC+0LlcclxuICAgICAgJGJhY2tncm91bmRMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJGxpc3RJdGVtTGluay5yZW1vdmVDbGFzcygnYWN0aXZlLWxpJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUtbGknKTtcclxuICAgICAgJGJhY2tncm91bmRXcmFwcGVyLmFkZENsYXNzKCdhY3RpdmUnKTsgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC+0LHRkdGA0YLQutC1INCw0YLQuNCyXHJcbiAgICAgICRiYWNrZ3JvdW5kSW1hZ2UucmVtb3ZlQ2xhc3MoJ3Nob3cnKTsgLy8g0YHQutGA0YvQstCw0LXQvCDQstGB0LUg0YTQvtC90YtcclxuICAgICAgJGJhY2tncm91bmRJbWFnZURhdGEuYWRkQ2xhc3MoJ3Nob3cnKTsgLy8g0L/QvtC60LDQt9GL0LLQsNC10Lwg0LrQvtC90LrRgNC10YLQvdGL0Lkg0YTQvtC9XHJcbiAgICAgICRiYWNrZ3JvdW5kQ2xvc2UuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAvLyDQv9C+0LrQsNC30YvQstCw0LXQvCDQutC90L7Qv9C60YMg0LfQsNC60YDRi9GC0YxcclxuICAgICAgZW5hYmxlTmF2QnV0dG9uKCk7XHJcbiAgICAgIGVuYWJsZURlc2NyaXB0aW9uKGRhdGFEZXNjcmlwdGlvbltpZEVsZW1lbnRdLnRleHQsIGRhdGFEZXNjcmlwdGlvbltpZEVsZW1lbnRdLnRhZ3MpO1xyXG4gICAgICBnb0luQnRuQW5pbWF0aW9uKGV2ZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vINC00LDQsdC7INC60LvQuNC6INC00LvRjyDQv9C10YDQtdGF0L7QtNCwXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vINCa0LvQuNC60LDQtdC8INC/0L4g0LfQsNC60YDRi9Cy0LDRiNC60Lgg0YTQvtC90LBcclxuICAkYmFja2dyb3VuZENsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICRiYWNrZ3JvdW5kV3JhcHBlci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkYmFja2dyb3VuZExpbmsucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJGJhY2tncm91bmRJbWFnZS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgJGxpc3RJdGVtTGluay5yZW1vdmVDbGFzcygnYWN0aXZlLWxpJyk7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIGdvT3V0QnRuQW5pbWF0aW9uKCk7XHJcbiAgICBkaXNhYmxlTmF2QnV0dG9uKCk7XHJcbiAgICBkaXNhYmxlRGVzY3JpcHRpb24oKTtcclxuICAgIHh5ID0gdW5kZWZpbmVkO1xyXG4gIH0pO1xyXG59KTsiXSwiZmlsZSI6InBhcnRpYWxzL2JhY2tncm91bmQuanMifQ==
