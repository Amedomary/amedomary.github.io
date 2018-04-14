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
    var windowsHasScroll = (windowsOS) && (getScroll('Height', '.b-page-wrapper')); // true Если Page у Windows имеет скролл
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9tYWluLW1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT1cclxuLy8gcm9iaW56b246IHBvcHVwLmpzXHJcbi8vIDE1LjAxLjIwMTg6IEFtZWRvbWFyeVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g0J7RgtC60YDRi9GC0LjQtSDQv9C+0L/QkNC/0LAg0Lgg0LfQsNC/0YDQtdGCINGB0LrRgNC+0LvQsCDQvdCwIGJvZHlcclxuLy8gPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciAkaGFtYnVyZ2VyQnV0dG9uID0gJCgnLmpzLWhhbWJ1cmdlcicpO1xyXG4gICAgdmFyICRtYWluTWVudSA9ICQoJy5qcy1tYWluLW1lbnUnKTtcclxuICAgIHZhciAkcGFnZSA9ICQoJy5iLXBhZ2Utd3JhcHBlcicpO1xyXG4gICAgdmFyICRwYWdlV2l0aFNjcm9sbCA9ICQoJy5iLXBhZ2Utd3JhcHBlci0tc2Nyb2xsJyk7XHJcbiAgICB2YXIgd2luZG93c09TID0gKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd3aW5kb3dzJykgIT09IC0xKTsgLy8gdHJ1ZSDQtNC70Y8gV2luXHJcbiAgICB2YXIgd2luZG93c0hhc1Njcm9sbCA9ICh3aW5kb3dzT1MpICYmIChnZXRTY3JvbGwoJ0hlaWdodCcsICcuYi1wYWdlLXdyYXBwZXInKSk7IC8vIHRydWUg0JXRgdC70LggUGFnZSDRgyBXaW5kb3dzINC40LzQtdC10YIg0YHQutGA0L7Qu9C7XHJcbiAgICB2YXIgc2Nyb2xsV3JhcHBlcjsgLy8g0L/QvtC70L7QttC10L3QuNC1INGB0LrRgNC+0LvQsFxyXG4gICAgXHJcbiAgICAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0L3QsNC70LjRh9C40LUg0YHQutGA0L7Qu9Cw0LBcclxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbChzY3JvbGwsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGRvYyA9IGRvY3VtZW50O1xyXG4gICAgICAgIHZhciBib2R5ID0gZG9jLmJvZHk7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2MucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGNsaWVudCA9ICdjbGllbnQnICsgc2Nyb2xsO1xyXG4gICAgICAgIHNjcm9sbCA9ICdzY3JvbGwnICsgc2Nyb2xsO1xyXG4gICAgICAgIHJldHVybiAvQ1NTLy50ZXN0KGRvYy5jb21wYXRNb2RlKSA/IChlbGVtZW50W2NsaWVudF0gPCBlbGVtZW50W3Njcm9sbF0pIDogKGJvZHlbY2xpZW50XSA8IGJvZHlbc2Nyb2xsXSk7XHJcbiAgICB9XHJcbiAgICAvLyDQntGC0LrRgNGL0LLQsNC10Lwg0LzQtdC90Y5cclxuICAgIGZ1bmN0aW9uIG9wZW5NYWluTWVudSgpIHtcclxuICAgICAgICAkaGFtYnVyZ2VyQnV0dG9uLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJG1haW5NZW51LmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJHBhZ2UuYWRkQ2xhc3MoJ25vLXNjcm9sbCBuby10b3VjaCcpO1xyXG4gICAgICAgIC8vINCV0YHQu9C4INGDINCy0LjQvdC00Ysg0LXRgdGC0Ywg0YHQutGA0L7Qu9C7XHJcbiAgICAgICAgaWYgKHdpbmRvd3NIYXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgJHBhZ2UuYWRkQ2xhc3MoJ25vLWp1bXAtd2luZG93cy1vcycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g0JfQsNC60YDRi9Cy0LDQtdC8INC80LXQvdGOXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1haW5NZW51KCkge1xyXG4gICAgICAgICRoYW1idXJnZXJCdXR0b24ucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAkaGFtYnVyZ2VyQnV0dG9uLmFkZENsYXNzKCdjbG9zZScpO1xyXG4gICAgICAgICRtYWluTWVudS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICRwYWdlLnJlbW92ZUNsYXNzKCduby1zY3JvbGwgbm8tdG91Y2ggbm8tanVtcC13aW5kb3dzLW9zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0LrQu9C40Log0L3QsCDQs9Cw0LzQsdGD0YDQs9C10YBcclxuICAgICRoYW1idXJnZXJCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vINCg0LDQsdC+0YLQsCDRgSDQk9Cw0LzQsdGD0YDQs9C10YDQvtC8XHJcbiAgICAgICAgLy8g0JXRgdC70Lgg0LPQsNC80LHRg9GA0LPQtdGAINC30LDQutGA0YvRglxyXG4gICAgICAgIGlmICgkaGFtYnVyZ2VyQnV0dG9uLmhhc0NsYXNzKCdjbG9zZScpKSB7XHJcbiAgICAgICAgICAgICRoYW1idXJnZXJCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIG9wZW5NYWluTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQldGB0LvQuCDQs9Cw0LzQsdGD0YDQs9C10YAg0L7RgtC60YDRi9GCXHJcbiAgICAgICAgZWxzZSBpZiAoJGhhbWJ1cmdlckJ1dHRvbi5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFpbk1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0LXRgdC70Lgg0LPQsNC80LHRg9GA0LPQtdGAINC10YnRkSDQvdC1INGC0YDQvtCz0LDQu9C4XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9wZW5NYWluTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCW0LzRj9C6INC/0L4gRXNjXHJcbiAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICBpZiAoJGhhbWJ1cmdlckJ1dHRvbi5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1haW5NZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoJHBhZ2VXaXRoU2Nyb2xsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyDRgdC60YDQvtC70LjQvCDRgdGC0YDQsNC90LjRhtGDIFxyXG4gICAgICAgICRwYWdlV2l0aFNjcm9sbC5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzY3JvbGxXcmFwcGVyID0gJHBhZ2VXaXRoU2Nyb2xsLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNjcm9sbFdyYXBwZXIgPiAzKSB7XHJcbiAgICAgICAgICAgICAgICAkaGFtYnVyZ2VyQnV0dG9uLmFkZENsYXNzKCdzY3JvbGwnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRoYW1idXJnZXJCdXR0b24ucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KTsiXSwiZmlsZSI6InBhcnRpYWxzL21haW4tbWVudS5qcyJ9
