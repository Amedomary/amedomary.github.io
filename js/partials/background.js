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
    var textDo    = 'Выберите раздел...'; //текст До
    var textPosle = 'Смотреть подробнее'; //текст После
    var colorButtonData; // Цвет для кнопки из ссылки
    // Дизейблит кнопку перехода на др страницу
    function disableNavButton() {
        $mainNavButton.addClass('disable');
        $mainNavButton.text(textDo);
        $mainNavButton.css('background-color', 'transparent');
    }
    // Активирует кнопку перехода на др страницу
    function enableNavButton() {
        $mainNavButton.removeClass('disable');
        $mainNavButton.text(textPosle);
        $mainNavButton.css('background-color', colorButtonData);
    }

    // клик по ссылке для фона
    $backgroundLink.on('click', function () {
        // Забираем дату из ссылки клика и закидываем в переменную картинки
        $backgroundImageData = $('.js-background[data-background=\'' + ($(this).attr('data-background')) + '\']');
        colorButtonData = $(this).attr('data-color');

        // Если картинка со ссылкой ещё не октрыты (не совпадает ссылка с открытой фоткой)
        if (!($backgroundImageData.hasClass('show'))) {
            // делаем кнопку и li активной
            $backgroundLink.removeClass('active');
            $listItemLink.removeClass('active-li');
            $(this).addClass('active');
            $(this).parent().addClass('active-li');
            // Добавляем обёртке атив
            $backgroundWrapper.addClass('active');
            // скрываем все фоны
            $backgroundImage.removeClass('show');
            // показываем конкретный фон
            $backgroundImageData.addClass('show');
            // показываем кнопку закрыть
            $backgroundClose.addClass('active');
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