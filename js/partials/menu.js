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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09XHJcbi8vINC80LXQvdGOXHJcbi8vID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5kZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKCQpIHtcclxuICAgIC8vICFtZW51IGNvZGVcclxuICAgIGNvbnN0ICRwYWdlID0gJCgnLmItcGFnZS13cmFwcGVyJyk7XHJcbiAgICBjb25zdCAkcG9wVXAgPSAkKCcuYi1wb3B1cCcpO1xyXG4gICAgY29uc3QgJHBvcFVwQ29udGVudCA9ICQoJy5iLXBvcHVwX19jb250ZW50Jyk7XHJcbiAgICBjb25zdCAkb3BlbkxpbmsgPSAkKCcuanMtb3Blbi1wb3B1cCcpO1xyXG4gICAgY29uc3QgJGNsb3NlTGluayA9ICQoJy5qcy1jbG9zZS1wb3B1cCcpO1xyXG5cclxuICAgIC8vIGxldCB3aW5kb3dzT1MgPSAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3dpbmRvd3MnKSAhPT0gLTEpO1xyXG5cclxuICAgIC8vINCX0LDQutGA0YvRgtC40LUg0L/QvtC/0JDQv9C+0LJcclxuICAgIGZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XHJcbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8INC+0YLQutGA0YvRgiDQu9C4INC/0L7Qv9CQ0L9cclxuICAgICAgICBpZiAoJHBvcFVwLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgJHBhZ2UucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCBuby10b3VjaCB3aW5kb3dzJyk7XHJcbiAgICAgICAgICAgICRwb3BVcC5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkcG9wVXAuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0L3QsNC70LjRh9C40LUg0YHQutGA0L7Qu9Cw0LBcclxuICAgIGZ1bmN0aW9uIGdldF9zY3JvbGwoc2Nyb2xsLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIGxldCBkb2MgPSBkb2N1bWVudCxcclxuICAgICAgICAgICAgYm9keSA9IGRvYy5ib2R5LFxyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLFxyXG4gICAgICAgICAgICBjbGllbnQgPSAnY2xpZW50JyArIHNjcm9sbDtcclxuICAgICAgICBzY3JvbGwgPSAnc2Nyb2xsJyArIHNjcm9sbDtcclxuICAgICAgICByZXR1cm4gL0NTUy8udGVzdChkb2MuY29tcGF0TW9kZSkgPyAoZWxlbWVudFtjbGllbnRdIDwgZWxlbWVudFtzY3JvbGxdKSA6IChib2R5W2NsaWVudF0gPCBib2R5W3Njcm9sbF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCa0LvQuNC6INC/0L4g0YHRgdGL0LvQutC1INC+0YLQutGA0YvQstCw0Y7RidC10Lkg0L/QvtC/0JDQv1xyXG4gICAgJG9wZW5MaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgJHBvcFVwRGF0ZSA9ICQoJy5iLXBvcHVwW2RhdGEtcG9wdXA9XFwnJyArICgkKHRoaXMpLmF0dHIoJ2RhdGEtcG9wdXAnKSkgKyAnXFwnXScpO1xyXG5cclxuICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10Lwg0LXRgdGC0Ywg0LvQuCDQvdCw0Lwg0YfRgtC+INC+0YLQutGA0YvRgtGMXHJcbiAgICAgICAgaWYgKCRwb3BVcERhdGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10Lwg0L7Qv9C10YDQsNGG0LjQvtC90L3Rg9GOINGB0LjRgdGC0LXQvNGDINC90LAgV2luINC4INCh0LrRgNC+0LvQu1xyXG4gICAgICAgICAgICAvLyBpZiAoKHdpbmRvd3NPUykgJiYgKGdldF9zY3JvbGwoJ0hlaWdodCcsICcuYi1wYWdlLXdyYXBwZXInKSkpIHtcclxuICAgICAgICAgICAgLy8gICAgICRwYWdlLmFkZENsYXNzKCd3aW5kb3dzJyk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8g0JfQsNC60YDRi9Cy0LDQtdC8INC/0LXRgNC10LQg0L7RgtC60YDRi9GC0LjQtdC8INC00YDRg9Cz0LjQtVxyXG4gICAgICAgICAgICAkcG9wVXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJHBvcFVwLmZhZGVPdXQoMzAwKTtcclxuXHJcbiAgICAgICAgICAgICRwYWdlLmFkZENsYXNzKCduby1zY3JvbGwgbm8tdG91Y2gnKTtcclxuICAgICAgICAgICAgJHBvcFVwRGF0ZS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkcG9wVXBEYXRlLmNzcygnZGlzcGxheScsICdmbGV4JykuaGlkZSgpLmZhZGVJbigzMDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCa0LvQuNC6INC/0L4g0JfQsNC60YDRi9GC0LjRjiDQv9C+0L/QkNC/0L7QslxyXG4gICAgJGNsb3NlTGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xvc2VQb3BVcCgpO1xyXG4gICAgICAgIGlmICgkKCcuanMtbWVudS1pbi1wb3B1cC1iYWNrJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJy5qcy1tZW51LWluLXBvcHVwLWJhY2snKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCW0LzRj9C6INC/0L4gRXNjXHJcbiAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICBjbG9zZVBvcFVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICgkcG9wVXAuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAvLyDQmtC70LjQuiDQvdC1INC/0L4g0JrQvtC90YLQtdC90YLRgyDQuCDQvdC1INC10LPQviDQtNC+0YfQutCw0LxcclxuICAgICAgICAgICAgaWYgKCEkcG9wVXBDb250ZW50LmlzKGUudGFyZ2V0KSAmJiAkcG9wVXBDb250ZW50LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVBvcFVwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7Il0sImZpbGUiOiJwYXJ0aWFscy9tZW51LmpzIn0=
