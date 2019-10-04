// ====================
// меню
// ====================

define(['jquery'], function ($) {
    // !menu code
    const $page = $('.b-page-wrapper');
    const $popUp = $('.b-popup');
    const $popUpContent = $('.b-popup__content');
    const $openLink = $('.js-open-popup');
    const $closeLink = $('.js-close-popup');

    // let windowsOS = (navigator.userAgent.toLowerCase().indexOf('windows') !== -1);

    // Закрытие попАпов
    function closePopUp() {
        // Проверяем открыт ли попАп
        if ($popUp.hasClass('open')) {
            $page.removeClass('no-scroll no-touch windows');
            $popUp.removeClass('open');
            $popUp.fadeOut(300);
        }
    }

    // Проверка на наличие скролаа
    function get_scroll(scroll, selector) {
        let doc = document,
            body = doc.body,
            element = doc.querySelector(selector),
            client = 'client' + scroll;
        scroll = 'scroll' + scroll;
        return /CSS/.test(doc.compatMode) ? (element[client] < element[scroll]) : (body[client] < body[scroll]);
    }

    // Клик по ссылке открывающей попАп
    $openLink.on('click', function () {
        let $popUpDate = $('.b-popup[data-popup=\'' + ($(this).attr('data-popup')) + '\']');

        // Проверяем есть ли нам что открыть
        if ($popUpDate.length > 0) {
            // Проверяем операционную систему на Win и Скролл
            // if ((windowsOS) && (get_scroll('Height', '.b-page-wrapper'))) {
            //     $page.addClass('windows');
            // }
            // Закрываем перед открытием другие
            $popUp.removeClass('open');
            $popUp.fadeOut(300);

            $page.addClass('no-scroll no-touch');
            $popUpDate.addClass('open');
            $popUpDate.css('display', 'flex').hide().fadeIn(300);
        }
    });

    // Клик по Закрытию попАпов
    $closeLink.on('click', function () {
        closePopUp();
        if ($('.js-menu-in-popup-back').length) {
            $('.js-menu-in-popup-back').trigger('click');
        }
    });

    // Жмяк по Esc
    $(document).on('keydown', function (event) {
        if (event.keyCode === 27) {
            closePopUp();
        }
    });

    $(document).mouseup(function (e) {
        if ($popUp.hasClass('open')) {
            // Клик не по Контенту и не его дочкам
            if (!$popUpContent.is(e.target) && $popUpContent.has(e.target).length === 0) {
                closePopUp();
            }
        }
    });
});