// ====================
// robinzon: popup.js
// 15.01.2018: Amedomary
// ---------------------
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery'], function ($) {

    var $backgroundLink = $('.js-background-link'); // Ссылка на картинку
    var $listItemLink = $('.js-background-link').parent();
    var $backgroundImage = $('.js-background'); //картинка
    var $backgroundWrapper = $('.js-background-wrapper'); //обёртка фонов
    var $backgroundClose = $('.js-background-link-close'); //Кнопка очистки слайдера
    var $backgroundImageData; // Дата для фона
    var $mainNavButton = $('.js-main-nav'); //кнопочка для переходу на страницу
    var textBefore    = 'Выберите раздел...'; //текст До
    var textAfter = 'Смотреть подробнее'; //текст После
    var colorButtonData; // Цвет для кнопки из ссылки
    var dataHrefMainNavigation; //дата для передачи ссылки в другую кнопку
    // Дизейблит кнопку перехода на др страницу
    function disableNavButton() {
        $mainNavButton.addClass('disable');
        $mainNavButton.text(textBefore);
        $mainNavButton.css('background-color', 'transparent');
    }
    // Активирует кнопку перехода на др страницу
    function enableNavButton() {
        $mainNavButton.removeClass('disable');
        $mainNavButton.text(textAfter);
        $mainNavButton.css('background-color', colorButtonData);
        $mainNavButton.attr('href', dataHrefMainNavigation);
    }

    // клик по ссылке для фона
    $backgroundLink.on('click', function () {
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
            enableNavButton()
        }
    });

    // Кликаем по закрывашки фона
    $backgroundClose.on('click', function() {
        $backgroundWrapper.removeClass('active');
        $backgroundLink.removeClass('active');
        $backgroundImage.removeClass('show');
        $listItemLink.removeClass('active-li');
        $(this).removeClass('active');
        disableNavButton();
    });

});