// ====================
// robinzon: popup.js
// 15.01.2018: Amedomary
// ---------------------
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery'], function ($) {

    // var $hamburgerButton = $('.js-hamburger');

    // // клик на гамбургер
    // $hamburgerButton.on('click', function () {
    //     // Если гамбургер закрыт
    //     if ($hamburgerButton.hasClass('close')) {
    //         $hamburgerButton.removeClass('close');
    //         $hamburgerButton.addClass('open');
    //     }
    //     // Если гамбургер открыт
    //     else if ($hamburgerButton.hasClass('open')) {
    //         $hamburgerButton.removeClass('open');
    //         $hamburgerButton.addClass('close');
    //     }
    //     // если гамбургер ещё не трогали
    //     else {
    //         $hamburgerButton.addClass('open');
    //     }
    // });



// 0 - open - close


    // !menu code
    var $page = $('.b-page-wrapper');
    var $popUp = $('.b-popup');
    var $popUpContent = $('.b-popup__content');
    var $openLink = $('.js-open-popup');
    var $closeLink = $('.js-close-popup');
    var windowsOS = (navigator.userAgent.toLowerCase().indexOf('windows') !== -1);


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
        var doc = document,
            body = doc.body,
            element = doc.querySelector(selector),
            client = 'client' + scroll;
        scroll = 'scroll' + scroll;
        return /CSS/.test(doc.compatMode)? (element[client]< element[scroll]) : (body[client]< body[scroll]);
    }

    // Клик по ссылке открывающей попАп
    $openLink.on('click', function () {
        var $popUpDate = $('.b-popup[data-popup=\'' + ($(this).attr('data-popup')) + '\']');

        // Проверяем есть ли нам что открыть
        if ($popUpDate.length > 0) {
            // Проверяем операционную систему на Win и Скролл
            if ((windowsOS) && (get_scroll('Height', '.b-page-wrapper'))) {
                $page.addClass('windows');
            }
            // Закрываем перед открытиме другие
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
            if (!$popUpContent.is(e.target)&& $popUpContent.has(e.target).length === 0) {
                closePopUp();
            }
        }
    });

});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09XHJcbi8vIHJvYmluem9uOiBwb3B1cC5qc1xyXG4vLyAxNS4wMS4yMDE4OiBBbWVkb21hcnlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vINCe0YLQutGA0YvRgtC40LUg0L/QvtC/0JDQv9CwINC4INC30LDQv9GA0LXRgiDRgdC60YDQvtC70LAg0L3QsCBib2R5XHJcbi8vID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5kZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICAvLyB2YXIgJGhhbWJ1cmdlckJ1dHRvbiA9ICQoJy5qcy1oYW1idXJnZXInKTtcclxuXHJcbiAgICAvLyAvLyDQutC70LjQuiDQvdCwINCz0LDQvNCx0YPRgNCz0LXRgFxyXG4gICAgLy8gJGhhbWJ1cmdlckJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgLy8g0JXRgdC70Lgg0LPQsNC80LHRg9GA0LPQtdGAINC30LDQutGA0YvRglxyXG4gICAgLy8gICAgIGlmICgkaGFtYnVyZ2VyQnV0dG9uLmhhc0NsYXNzKCdjbG9zZScpKSB7XHJcbiAgICAvLyAgICAgICAgICRoYW1idXJnZXJCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Nsb3NlJyk7XHJcbiAgICAvLyAgICAgICAgICRoYW1idXJnZXJCdXR0b24uYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8g0JXRgdC70Lgg0LPQsNC80LHRg9GA0LPQtdGAINC+0YLQutGA0YvRglxyXG4gICAgLy8gICAgIGVsc2UgaWYgKCRoYW1idXJnZXJCdXR0b24uaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgLy8gICAgICAgICAkaGFtYnVyZ2VyQnV0dG9uLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAvLyAgICAgICAgICRoYW1idXJnZXJCdXR0b24uYWRkQ2xhc3MoJ2Nsb3NlJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vINC10YHQu9C4INCz0LDQvNCx0YPRgNCz0LXRgCDQtdGJ0ZEg0L3QtSDRgtGA0L7Qs9Cw0LvQuFxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAkaGFtYnVyZ2VyQnV0dG9uLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuXHJcbi8vIDAgLSBvcGVuIC0gY2xvc2VcclxuXHJcblxyXG4gICAgLy8gIW1lbnUgY29kZVxyXG4gICAgdmFyICRwYWdlID0gJCgnLmItcGFnZS13cmFwcGVyJyk7XHJcbiAgICB2YXIgJHBvcFVwID0gJCgnLmItcG9wdXAnKTtcclxuICAgIHZhciAkcG9wVXBDb250ZW50ID0gJCgnLmItcG9wdXBfX2NvbnRlbnQnKTtcclxuICAgIHZhciAkb3BlbkxpbmsgPSAkKCcuanMtb3Blbi1wb3B1cCcpO1xyXG4gICAgdmFyICRjbG9zZUxpbmsgPSAkKCcuanMtY2xvc2UtcG9wdXAnKTtcclxuICAgIHZhciB3aW5kb3dzT1MgPSAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbmRvd3MnKSAhPT0gLTEpO1xyXG5cclxuXHJcbiAgICAvLyDQl9Cw0LrRgNGL0YLQuNC1INC/0L7Qv9CQ0L/QvtCyXHJcbiAgICBmdW5jdGlvbiBjbG9zZVBvcFVwKCkge1xyXG4gICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCDQvtGC0LrRgNGL0YIg0LvQuCDQv9C+0L/QkNC/XHJcbiAgICAgICAgaWYgKCRwb3BVcC5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICRwYWdlLnJlbW92ZUNsYXNzKCduby1zY3JvbGwgbm8tdG91Y2ggd2luZG93cycpO1xyXG4gICAgICAgICAgICAkcG9wVXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJHBvcFVwLmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQvdCwINC90LDQu9C40YfQuNC1INGB0LrRgNC+0LvQsNCwXHJcbiAgICBmdW5jdGlvbiBnZXRfc2Nyb2xsKHNjcm9sbCwgc2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgZG9jID0gZG9jdW1lbnQsXHJcbiAgICAgICAgICAgIGJvZHkgPSBkb2MuYm9keSxcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSxcclxuICAgICAgICAgICAgY2xpZW50ID0gJ2NsaWVudCcgKyBzY3JvbGw7XHJcbiAgICAgICAgc2Nyb2xsID0gJ3Njcm9sbCcgKyBzY3JvbGw7XHJcbiAgICAgICAgcmV0dXJuIC9DU1MvLnRlc3QoZG9jLmNvbXBhdE1vZGUpPyAoZWxlbWVudFtjbGllbnRdPCBlbGVtZW50W3Njcm9sbF0pIDogKGJvZHlbY2xpZW50XTwgYm9keVtzY3JvbGxdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQmtC70LjQuiDQv9C+INGB0YHRi9C70LrQtSDQvtGC0LrRgNGL0LLQsNGO0YnQtdC5INC/0L7Qv9CQ0L9cclxuICAgICRvcGVuTGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICRwb3BVcERhdGUgPSAkKCcuYi1wb3B1cFtkYXRhLXBvcHVwPVxcJycgKyAoJCh0aGlzKS5hdHRyKCdkYXRhLXBvcHVwJykpICsgJ1xcJ10nKTtcclxuXHJcbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8INC10YHRgtGMINC70Lgg0L3QsNC8INGH0YLQviDQvtGC0LrRgNGL0YLRjFxyXG4gICAgICAgIGlmICgkcG9wVXBEYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8INC+0L/QtdGA0LDRhtC40L7QvdC90YPRjiDRgdC40YHRgtC10LzRgyDQvdCwIFdpbiDQuCDQodC60YDQvtC70LtcclxuICAgICAgICAgICAgaWYgKCh3aW5kb3dzT1MpICYmIChnZXRfc2Nyb2xsKCdIZWlnaHQnLCAnLmItcGFnZS13cmFwcGVyJykpKSB7XHJcbiAgICAgICAgICAgICAgICAkcGFnZS5hZGRDbGFzcygnd2luZG93cycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vINCX0LDQutGA0YvQstCw0LXQvCDQv9C10YDQtdC0INC+0YLQutGA0YvRgtC40LzQtSDQtNGA0YPQs9C40LVcclxuICAgICAgICAgICAgJHBvcFVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICRwb3BVcC5mYWRlT3V0KDMwMCk7XHJcblxyXG4gICAgICAgICAgICAkcGFnZS5hZGRDbGFzcygnbm8tc2Nyb2xsIG5vLXRvdWNoJyk7XHJcbiAgICAgICAgICAgICRwb3BVcERhdGUuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJHBvcFVwRGF0ZS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpLmhpZGUoKS5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQmtC70LjQuiDQv9C+INCX0LDQutGA0YvRgtC40Y4g0L/QvtC/0JDQv9C+0LJcclxuICAgICRjbG9zZUxpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsb3NlUG9wVXAoKTtcclxuICAgICAgICBpZiAoJCgnLmpzLW1lbnUtaW4tcG9wdXAtYmFjaycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcuanMtbWVudS1pbi1wb3B1cC1iYWNrJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQltC80Y/QuiDQv9C+IEVzY1xyXG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICAgICAgY2xvc2VQb3BVcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoJHBvcFVwLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgLy8g0JrQu9C40Log0L3QtSDQv9C+INCa0L7QvdGC0LXQvdGC0YMg0Lgg0L3QtSDQtdCz0L4g0LTQvtGH0LrQsNC8XHJcbiAgICAgICAgICAgIGlmICghJHBvcFVwQ29udGVudC5pcyhlLnRhcmdldCkmJiAkcG9wVXBDb250ZW50LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVBvcFVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJmaWxlIjoicGFydGlhbHMvbWVudS5qcyJ9
