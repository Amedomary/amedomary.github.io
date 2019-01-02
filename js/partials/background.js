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
    animationTime = (Math.pow(distance, 1/1.7) - (distance / 100)) / 30;

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
    xy = undefined;
  });
});