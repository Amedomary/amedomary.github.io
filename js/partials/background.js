// ====================
// robinzon: popup.js
// 15.01.2018: Amedomary
// ---------------------
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery'], function ($) {

    var $backgroundLink = $('.js-background-link'); // Ссылка на картинку
    var $backgroundImage = $('.js-background'); //картинка
    var $backgroundWrapper = $('.js-background-wrapper'); //обёртка фонов
    var $backgroundClose = $('.js-background-link-close'); //Кнопка очистки слайдера
    var $backgroundImageData;

    // клик по ссылке для фона
    $backgroundLink.on('click', function () {
        // Забираем дату из ссылки клика и закидываем в переменную картинки
        $backgroundImageData = $('.js-background[data-background=\'' + ($(this).attr('data-background')) + '\']');

        // Если картинка со ссылкой ещё не октрыты
        if (!($backgroundImageData.hasClass('show'))) {
            // делаем кнопку активной
            $backgroundLink.removeClass('active');
            $(this).addClass('active');
            // Добавляем обёртке атив
            $backgroundWrapper.addClass('active');
            // скрываем все фоны
            $backgroundImage.removeClass('show');
            // показываем конкретный фон
            $backgroundImageData.addClass('show');
        }
    });

    // Кликаем по закрывашки фона
    $backgroundClose.on('click', function() {
        $backgroundWrapper.removeClass('active');
        $backgroundLink.removeClass('active');
        $backgroundImage.removeClass('show');
    });

});