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
  const $sfx = $('.line-sfx'); // Кружочек спецэфектов
  // const $sfxLine = $('.svg-sfx'); // Линия спецэфектов
  let $backgroundImageData; // Дата для фона
  let textBefore = 'Выберите раздел...'; //текст До
  let textAfter = 'Смотреть подробнее'; //текст После
  let colorButtonData; // Цвет для кнопки из ссылки
  let dataHrefMainNavigation; //дата для передачи ссылки в другую кнопку

  let docHeight = document.documentElement.clientHeight;
  let docWidth = document.documentElement.clientWidth;


  let state = {
    backgroundIsOpen: false,
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

  // Анимация активации кнопки перехода
  function goInBtnAnimation(e) {
    let xy = e.target.getBoundingClientRect();
    $sfx.addClass('active');
    $sfx.css({
      "top": `${xy.top + 7}px`,
      "left": `${xy.left - 16}px`
    });
  };

  function goOutBtnAnimation(e) {
    $sfx.removeClass('active');
  }

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

    // Если картинка со ссылкой ещё не октрыты (не совпадает ссылка с открытой фоткой)
    if (!($backgroundImageData.hasClass('show'))) {
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
      goInBtnAnimation(event);
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
  });
});