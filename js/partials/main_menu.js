// ====================
// robinzon: popup.js
// 15.01.2018: Amedomary
// ---------------------
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery'], function ($) {

    var $hamburgerButton = $('.js-hamburger');
    var $mainMenu = $('.js-main-menu');
    var $page = $('.b-page-wrapper');
    var $pageWithScroll = $('.b-page-wrapper--scroll');
    var windowsOS = (navigator.userAgent.toLowerCase().indexOf('windows') !== -1); // true для Win
    if ($page.length > 0) {
        var windowsHasScroll = (windowsOS) && (getScroll('Height', '.b-page-wrapper')); // true Если Page у Windows имеет скролл
    }
    var scrollWrapper; // положение скрола
    
    // Проверка на наличие скролаа
    function getScroll(scroll, selector) {
        var doc = document;
        var body = doc.body;
        var element = doc.querySelector(selector);
        var client = 'client' + scroll;
        scroll = 'scroll' + scroll;
        return /CSS/.test(doc.compatMode) ? (element[client] < element[scroll]) : (body[client] < body[scroll]);
    }
    // Открываем меню
    function openMainMenu() {
        $hamburgerButton.addClass('open');
        $mainMenu.addClass('open');
        $page.addClass('no-scroll no-touch');
        // Если у винды есть скролл
        if (windowsHasScroll) {
            $page.addClass('no-jump-windows-os')
        }
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