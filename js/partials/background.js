// ====================
// Открытие попАпа и запрет скрола на body
// ====================

define(["jquery"], function($) {
  const $backgroundLink = $(".js-background-link"); // Ссылка на картинку
  const $listItemLink = $(".js-background-link").parent();
  const $backgroundImage = $(".js-background"); //картинка
  const $backgroundWrapper = $(".js-background-wrapper"); //обёртка фонов
  const $backgroundClose = $(".js-background-link-close"); //Кнопка очистки слайдера
  const $mainNavButton = $(".js-main-nav"); //кнопочка для переходу на страницу
  const $mainNavButtonText = $(".js-main-nav .text"); // текст кнопки для переходу на страницу
  const textBefore = $mainNavButtonText.text(); //текст До
  const $sfx = document.querySelector(".line-sfx"); // Кружочек спецэфектов
  const textAfter = "Show more"; //текст После
  const $mainNavList = $(".js-main-list-nav");
  const $descriptionBlock = $(".js-description");
  const $descriptionText = $(".js-description-block p");
  const $tagBar = $(".b-main-nav__tag-bar");
  let $backgroundImageData; // Дата для фона
  let colorButtonData; // Цвет для кнопки из ссылки
  let dataHrefMainNavigation; //дата для передачи ссылки в другую кнопку
  let xy; // $sfx геометрич значение

  const state = {
    backgroundIsOpen: false
  };

  const dataDescription = {
    id_login: {
      text: "Форма входа на сайт",
      tags: ["Animation", "Vue.JS", "UI/UX"]
    },
    id_timer: {
      text:
        "Приложение для запуска таймера с возможностью поделиться своим событием",
      tags: ["SPA", "Vue.JS", "UI/UX", "Alarm", "Animation", "firebase"]
    },
    id_css_vars: {
      text: `
        <p>CSS переменные и цветовая тема для сайта в несколько строк</p>
        <a href="https://habr.com/ru/post/466587/" target="_blank">Читать на Habr</a>
      `,
      tags: ["CSS", "post", "habr"]
    },
    id_fractus: {
      text: "Динамическое создание фракталов на JS",
      tags: ["mathematic", "geometry", "algorithm", "canvas"]
    },
    id_game: {
      text: "2D игра с поддержкой геймпадов",
      tags: ["2D", "game", "canvas"]
    },
    id_xcom: {
      text: "Стратегическая пошаговая игра в жанре X-com",
      tags: ["2D", "game", "canvas"]
    },
    id_animation: {
      text: "Возможности стоковых и не только анимаций на CSS и JS",
      tags: ["CSS", "animation"]
    },
    id_chart: {
      text: "Создание графиков и их отрисовка",
      tags: ["mathematic", "geometry", "algorithm", "canvas"]
    },
    id_calculator: {
      text: "Красивый калькулятор",
      tags: ["mathematic"]
    },
    id_form: {
      text: "Пример форм с плавающим лейблом",
      tags: ["CSS", "animation", "UX"]
    },
    id_blog: {
      text: "Страница блога",
      tags: ["markdown", "CSS-vars", "themes"]
    },
    id_portfolio: {
      text: "Чек лист скилов",
      tags: ["markdown"]
    },
    id_3d: {
      text: "Демонстрация 3D возможностей CSS",
      tags: ["3D", "CSS"]
    },

    id_beercoin: {
      text: "Подкинь монетку и пей бесплатно! Закрути свою удачу и получи скидку в случайном баре.",
      tags: ["3D", "CSS", "React", "Start up"]
    },

    // default
    id_: {
      text: "",
      tags: []
    }
  };

  function updateCanvas() {
    properties.partColor = `rgba(${colorButtonData}, 1)`;
    properties.partLineSubColor = `rgba(${colorButtonData}, `;
    $("html").css({ "--canvas-color": `rgba(${colorButtonData}, 1)` });
  }

  function enableDescription(text, tags) {
    $descriptionText.html(text);

    $tagBar.html("");
    tags.forEach(element => {
      $tagBar.append(`<span class="b-main-nav__tag">${element}</span>`);
    });

    $descriptionBlock.addClass("active");
    $mainNavList.addClass("active");
  }

  function disableDescription() {
    $descriptionBlock.removeClass("active");
    $mainNavList.removeClass("active");
  }

  // Дизейблит кнопку перехода на др страницу
  function disableNavButton() {
    $mainNavButton.addClass("disable");
    $mainNavButtonText.text(textBefore);
    $mainNavButton.css("background-color", "transparent");
    $mainNavButton.css("border-color", "transparent");
    state.backgroundIsOpen = false;
  }

  // Активирует кнопку перехода на др страницу
  function enableNavButton() {
    $mainNavButton.removeClass("disable");
    $mainNavButtonText.text(textAfter);
    $mainNavButton.css("border-color", `rgba(${colorButtonData}, .2)`);
    $mainNavButton.css("background-color", `rgba(${colorButtonData}, .1)`);
    $mainNavButton.attr("href", dataHrefMainNavigation);
    state.backgroundIsOpen = true;
  }

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
    animationTime = (Math.pow(distance, 1 / 1.7) - distance / 100) / 30;

    // alert('dsd ');

    $sfx.classList.add("active");
    // styles
    $sfx.style.transition = `all ${animationTime}s, opacity .2s`;
    $sfx.style.top = `${xy.top - 4}px`;
    $sfx.style.left = `${xy.left - 25}px`;
    $sfx.style.height = `${elHeight + 8}px`;
    $sfx.style.width = `${sfxWidth}px`;
  }

  function goOutBtnAnimation() {
    $sfx.classList.remove("active");
  }

  function closeBackground() {
    $backgroundWrapper.removeClass("active");
    $backgroundLink.removeClass("active");
    $backgroundImage.removeClass("show");
    $listItemLink.removeClass("active-li");
    $backgroundClose.removeClass("active");
    goOutBtnAnimation();
    disableNavButton();
    disableDescription();
    xy = undefined;
  }

  // Клик по клавише
  $(document).on("keydown", function(event) {
    // Клик по табу
    if (event.keyCode === 9) {
      if (state.backgroundIsOpen) {
        setTimeout(() => {
          let element = $(":focus");
          if (element.hasClass("js-background-link")) {
            element.click();
          }
        }, 0);
      }
    }

    // ESC
    if (event.keyCode === 27) {
      if (state.backgroundIsOpen) {
        closeBackground();
      }
    }
  });

  // клик по ссылке для фона
  $backgroundLink.on("click", function(event) {
    $backgroundImageData = $(
      ".js-background[data-background='" +
        $(this).attr("data-background") +
        "']"
    ); // Забираем дату из ссылки клика и закидываем в переменную картинки
    colorButtonData = $(this).attr("data-color"); // Забираем цвет фона кнопки из даты
    dataHrefMainNavigation = $(this).attr("data-href"); // забираем адресс ссылки из даты
    idElement = $(this).attr("data-element-id");

    // Если картинка со ссылкой ещё не октрыты (не совпадает ссылка с открытой фоткой)
    if (!$backgroundImageData.hasClass("show")) {
      event.preventDefault();
      // делаем кнопку и li активной
      $backgroundLink.removeClass("active");
      $listItemLink.removeClass("active-li");
      $(this).addClass("active");
      $(this)
        .parent()
        .addClass("active-li");
      $backgroundWrapper.addClass("active"); // Добавляем обёртке атив
      $backgroundImage.removeClass("show"); // скрываем все фоны
      $backgroundImageData.addClass("show"); // показываем конкретный фон
      $backgroundClose.addClass("active"); // показываем кнопку закрыть
      updateCanvas();
      enableNavButton();
      enableDescription(
        dataDescription[idElement].text,
        dataDescription[idElement].tags
      );
      goInBtnAnimation(event);
    } else {
      // дабл клик для перехода
    }
  });

  // Кликаем по закрывашки фона
  $backgroundClose.on("click", function() {
    closeBackground();
  });
});
