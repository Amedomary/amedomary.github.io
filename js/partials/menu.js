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


    // ================================ //

    // строка создаётся новой
    let stroka = 'Old string'
    // stroka = stroka.charAt(2) + stroka[5]
    // console.log(stroka);

    // let string = 'Я новая строка';
    // string = string.toUpperCase;

    // console.log(string);
    // console.log(string.length); // свойство

    // console.log(string.charAt(2));
    // console.log(string[2]);
    // console.log(string.toLowerCase());
    // console.log(string.toUpperCase());
    // console.log(string);
    // console.log(string);
    // console.log(string);
    // console.log(string);
    // console.log(string);
    // console.log(string);
    // console.log(string);

    
    // let string = 'А роза упала на лапу Азора';
    
    // // размиваем строку на массив разделителем 'пустота'
    // console.log(string.split(''));
    // // меняем порядок на обратный
    // console.log(string.split('').reverse());
    // // собираем массив в строку разделителем 'пустота'
    // console.log(string.split('').reverse().join(''));
    
    // console.log(string);

    // console.log(reverseString(string));
    // console.log(simpleString(string));
    
    let string = 'А роза упала на лапу Азора';
    let string2 = 'А я кто?';

    // Возвращаем перевёрнутую строку
    function reverseString (e) {
        return e.toLowerCase().replace(/\s/g, '').split('').reverse().join('');
    }

    function simpleString(e) {
        return e.toLowerCase().replace(/\s/g, '');
    }

    function pallindrom (str) {
        if (simpleString(str) === reverseString(str)) {
            return console.log(str + ' - ' + 'Это Паллиндром');
        } else {
            return console.log(str + ' - ' + 'Это какая-то дичь');
        }
    }

    pallindrom(string);
    pallindrom(string2);
    

    

    





    
    // ================================ //

});


