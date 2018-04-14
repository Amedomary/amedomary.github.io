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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09XHJcbi8vIHJvYmluem9uOiBwb3B1cC5qc1xyXG4vLyAxNS4wMS4yMDE4OiBBbWVkb21hcnlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vINCe0YLQutGA0YvRgtC40LUg0L/QvtC/0JDQv9CwINC4INC30LDQv9GA0LXRgiDRgdC60YDQvtC70LAg0L3QsCBib2R5XHJcbi8vID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5kZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgJGJhY2tncm91bmRMaW5rID0gJCgnLmpzLWJhY2tncm91bmQtbGluaycpOyAvLyDQodGB0YvQu9C60LAg0L3QsCDQutCw0YDRgtC40L3QutGDXHJcbiAgICB2YXIgJGxpc3RJdGVtTGluayA9ICQoJy5qcy1iYWNrZ3JvdW5kLWxpbmsnKS5wYXJlbnQoKTtcclxuICAgIHZhciAkYmFja2dyb3VuZEltYWdlID0gJCgnLmpzLWJhY2tncm91bmQnKTsgLy/QutCw0YDRgtC40L3QutCwXHJcbiAgICB2YXIgJGJhY2tncm91bmRXcmFwcGVyID0gJCgnLmpzLWJhY2tncm91bmQtd3JhcHBlcicpOyAvL9C+0LHRkdGA0YLQutCwINGE0L7QvdC+0LJcclxuICAgIHZhciAkYmFja2dyb3VuZENsb3NlID0gJCgnLmpzLWJhY2tncm91bmQtbGluay1jbG9zZScpOyAvL9Ca0L3QvtC/0LrQsCDQvtGH0LjRgdGC0LrQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICB2YXIgJGJhY2tncm91bmRJbWFnZURhdGE7IC8vINCU0LDRgtCwINC00LvRjyDRhNC+0L3QsFxyXG4gICAgdmFyICRtYWluTmF2QnV0dG9uID0gJCgnLmpzLW1haW4tbmF2Jyk7IC8v0LrQvdC+0L/QvtGH0LrQsCDQtNC70Y8g0L/QtdGA0LXRhdC+0LTRgyDQvdCwINGB0YLRgNCw0L3QuNGG0YNcclxuICAgIHZhciB0ZXh0QmVmb3JlICAgID0gJ9CS0YvQsdC10YDQuNGC0LUg0YDQsNC30LTQtdC7Li4uJzsgLy/RgtC10LrRgdGCINCU0L5cclxuICAgIHZhciB0ZXh0QWZ0ZXIgPSAn0KHQvNC+0YLRgNC10YLRjCDQv9C+0LTRgNC+0LHQvdC10LUnOyAvL9GC0LXQutGB0YIg0J/QvtGB0LvQtVxyXG4gICAgdmFyIGNvbG9yQnV0dG9uRGF0YTsgLy8g0KbQstC10YIg0LTQu9GPINC60L3QvtC/0LrQuCDQuNC3INGB0YHRi9C70LrQuFxyXG4gICAgdmFyIGRhdGFIcmVmTWFpbk5hdmlnYXRpb247IC8v0LTQsNGC0LAg0LTQu9GPINC/0LXRgNC10LTQsNGH0Lgg0YHRgdGL0LvQutC4INCyINC00YDRg9Cz0YPRjiDQutC90L7Qv9C60YNcclxuICAgIC8vINCU0LjQt9C10LnQsdC70LjRgiDQutC90L7Qv9C60YMg0L/QtdGA0LXRhdC+0LTQsCDQvdCwINC00YAg0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgZnVuY3Rpb24gZGlzYWJsZU5hdkJ1dHRvbigpIHtcclxuICAgICAgICAkbWFpbk5hdkJ1dHRvbi5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICRtYWluTmF2QnV0dG9uLnRleHQodGV4dEJlZm9yZSk7XHJcbiAgICAgICAgJG1haW5OYXZCdXR0b24uY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50Jyk7XHJcbiAgICB9XHJcbiAgICAvLyDQkNC60YLQuNCy0LjRgNGD0LXRgiDQutC90L7Qv9C60YMg0L/QtdGA0LXRhdC+0LTQsCDQvdCwINC00YAg0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgZnVuY3Rpb24gZW5hYmxlTmF2QnV0dG9uKCkge1xyXG4gICAgICAgICRtYWluTmF2QnV0dG9uLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgJG1haW5OYXZCdXR0b24udGV4dCh0ZXh0QWZ0ZXIpO1xyXG4gICAgICAgICRtYWluTmF2QnV0dG9uLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yQnV0dG9uRGF0YSk7XHJcbiAgICAgICAgJG1haW5OYXZCdXR0b24uYXR0cignaHJlZicsIGRhdGFIcmVmTWFpbk5hdmlnYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINC60LvQuNC6INC/0L4g0YHRgdGL0LvQutC1INC00LvRjyDRhNC+0L3QsFxyXG4gICAgJGJhY2tncm91bmRMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkYmFja2dyb3VuZEltYWdlRGF0YSA9ICQoJy5qcy1iYWNrZ3JvdW5kW2RhdGEtYmFja2dyb3VuZD1cXCcnICsgKCQodGhpcykuYXR0cignZGF0YS1iYWNrZ3JvdW5kJykpICsgJ1xcJ10nKTsgLy8g0JfQsNCx0LjRgNCw0LXQvCDQtNCw0YLRgyDQuNC3INGB0YHRi9C70LrQuCDQutC70LjQutCwINC4INC30LDQutC40LTRi9Cy0LDQtdC8INCyINC/0LXRgNC10LzQtdC90L3Rg9GOINC60LDRgNGC0LjQvdC60LhcclxuICAgICAgICBjb2xvckJ1dHRvbkRhdGEgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtY29sb3InKTsgLy8g0JfQsNCx0LjRgNCw0LXQvCDRhtCy0LXRgiDRhNC+0L3QsCDQutC90L7Qv9C60Lgg0LjQtyDQtNCw0YLRi1xyXG4gICAgICAgIGRhdGFIcmVmTWFpbk5hdmlnYXRpb24gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaHJlZicpOyAvLyDQt9Cw0LHQuNGA0LDQtdC8INCw0LTRgNC10YHRgSDRgdGB0YvQu9C60Lgg0LjQtyDQtNCw0YLRi1xyXG5cclxuICAgICAgICAvLyDQldGB0LvQuCDQutCw0YDRgtC40L3QutCwINGB0L4g0YHRgdGL0LvQutC+0Lkg0LXRidGRINC90LUg0L7QutGC0YDRi9GC0YsgKNC90LUg0YHQvtCy0L/QsNC00LDQtdGCINGB0YHRi9C70LrQsCDRgSDQvtGC0LrRgNGL0YLQvtC5INGE0L7RgtC60L7QuSlcclxuICAgICAgICBpZiAoISgkYmFja2dyb3VuZEltYWdlRGF0YS5oYXNDbGFzcygnc2hvdycpKSkge1xyXG4gICAgICAgICAgICAvLyDQtNC10LvQsNC10Lwg0LrQvdC+0L/QutGDINC4IGxpINCw0LrRgtC40LLQvdC+0LlcclxuICAgICAgICAgICAgJGJhY2tncm91bmRMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJGxpc3RJdGVtTGluay5yZW1vdmVDbGFzcygnYWN0aXZlLWxpJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUtbGknKTtcclxuICAgICAgICAgICAgJGJhY2tncm91bmRXcmFwcGVyLmFkZENsYXNzKCdhY3RpdmUnKTsgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC+0LHRkdGA0YLQutC1INCw0YLQuNCyXHJcbiAgICAgICAgICAgICRiYWNrZ3JvdW5kSW1hZ2UucmVtb3ZlQ2xhc3MoJ3Nob3cnKTsgLy8g0YHQutGA0YvQstCw0LXQvCDQstGB0LUg0YTQvtC90YtcclxuICAgICAgICAgICAgJGJhY2tncm91bmRJbWFnZURhdGEuYWRkQ2xhc3MoJ3Nob3cnKTsgLy8g0L/QvtC60LDQt9GL0LLQsNC10Lwg0LrQvtC90LrRgNC10YLQvdGL0Lkg0YTQvtC9XHJcbiAgICAgICAgICAgICRiYWNrZ3JvdW5kQ2xvc2UuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAvLyDQv9C+0LrQsNC30YvQstCw0LXQvCDQutC90L7Qv9C60YMg0LfQsNC60YDRi9GC0YxcclxuICAgICAgICAgICAgZW5hYmxlTmF2QnV0dG9uKClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQmtC70LjQutCw0LXQvCDQv9C+INC30LDQutGA0YvQstCw0YjQutC4INGE0L7QvdCwXHJcbiAgICAkYmFja2dyb3VuZENsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRiYWNrZ3JvdW5kV3JhcHBlci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJGJhY2tncm91bmRMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkYmFja2dyb3VuZEltYWdlLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJGxpc3RJdGVtTGluay5yZW1vdmVDbGFzcygnYWN0aXZlLWxpJyk7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgZGlzYWJsZU5hdkJ1dHRvbigpO1xyXG4gICAgfSk7XHJcblxyXG59KTsiXSwiZmlsZSI6InBhcnRpYWxzL2JhY2tncm91bmQuanMifQ==
