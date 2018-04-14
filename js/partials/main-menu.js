// ====================
// robinzon: popup.js
// 15.01.2018: Amedomary
// ---------------------
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery'], function ($) {

    var $hamburgerButton = $('.js-hamburger');
    var $mainMenu = $('.js-main-menu');

    // клик на гамбургер
    $hamburgerButton.on('click', function () {
        // Если гамбургер закрыт
        if ($hamburgerButton.hasClass('close')) {
            $hamburgerButton.removeClass('close');
            $hamburgerButton.addClass('open');
            $mainMenu.addClass('open');
        }
        // Если гамбургер открыт
        else if ($hamburgerButton.hasClass('open')) {
            $hamburgerButton.removeClass('open');
            $hamburgerButton.addClass('close');
            $mainMenu.removeClass('open');
        }
        // если гамбургер ещё не трогали
        else {
            $hamburgerButton.addClass('open');
            $mainMenu.addClass('open');
        }
    });

});