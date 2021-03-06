
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