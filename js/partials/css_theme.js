// ====================
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery', 'animejs'], function ($,anime) {

    var $linkTheme = $('.js-swap-theme');
    var $linkThemeData;
    var $linkThemeStyleData;
    
    $linkTheme.click(function (e) { 
        $linkThemeData = $(this).attr('data-theme-color');
        $('html').attr('data-theme-color', $linkThemeData);

        $linkThemeStyleData = $(this).attr('data-theme-style');
        $('html').attr('data-theme-style', $linkThemeStyleData)
    });


    var $docCss = document.querySelectorAll('.b-css__button');
    // вешаем обработчик клика на все кнопки
    for (i = 0; i < $docCss.length; i++) {
        $docCss[i].addEventListener('click', clickOnButton);
    };

    function clickOnButton() {
        this.classList.toggle('class');
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9jc3NfdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT1cclxuLy8g0J7RgtC60YDRi9GC0LjQtSDQv9C+0L/QkNC/0LAg0Lgg0LfQsNC/0YDQtdGCINGB0LrRgNC+0LvQsCDQvdCwIGJvZHlcclxuLy8gPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmRlZmluZShbJ2pxdWVyeScsICdhbmltZWpzJ10sIGZ1bmN0aW9uICgkLGFuaW1lKSB7XHJcblxyXG4gICAgdmFyICRsaW5rVGhlbWUgPSAkKCcuanMtc3dhcC10aGVtZScpO1xyXG4gICAgdmFyICRsaW5rVGhlbWVEYXRhO1xyXG4gICAgdmFyICRsaW5rVGhlbWVTdHlsZURhdGE7XHJcbiAgICBcclxuICAgICRsaW5rVGhlbWUuY2xpY2soZnVuY3Rpb24gKGUpIHsgXHJcbiAgICAgICAgJGxpbmtUaGVtZURhdGEgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGhlbWUtY29sb3InKTtcclxuICAgICAgICAkKCdodG1sJykuYXR0cignZGF0YS10aGVtZS1jb2xvcicsICRsaW5rVGhlbWVEYXRhKTtcclxuXHJcbiAgICAgICAgJGxpbmtUaGVtZVN0eWxlRGF0YSA9ICQodGhpcykuYXR0cignZGF0YS10aGVtZS1zdHlsZScpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5hdHRyKCdkYXRhLXRoZW1lLXN0eWxlJywgJGxpbmtUaGVtZVN0eWxlRGF0YSlcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgJGRvY0NzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iLWNzc19fYnV0dG9uJyk7XHJcbiAgICAvLyDQstC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQvdCwINCy0YHQtSDQutC90L7Qv9C60LhcclxuICAgIGZvciAoaSA9IDA7IGkgPCAkZG9jQ3NzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgJGRvY0Nzc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrT25CdXR0b24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGlja09uQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnY2xhc3MnKTtcclxuICAgIH1cclxufSk7Il0sImZpbGUiOiJwYXJ0aWFscy9jc3NfdGhlbWUuanMifQ==
