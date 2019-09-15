// ====================
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery'], function ($) {
    // Обьявление
    var valueKeyInput; // значение
    // Присвоение
    var $key = $('.js-calculator-key'); // клавиша калькулятора
    var $input = $('.js-calculator-input'); // поле ввода
    var $result = $('.calculator-display__result'); // Ответ
    var $yourMath = $('.calculator-display__input-string'); // Полее вашего выражения
    var $calculator = $('.calculator'); // Сам калькулятор
    var $calculatorWrapper = $('.calculator__wrapper'); // Обёртка калькулятора

    // Функции
    // Дописываем значение в Input
    function writeToInputFromDataValue() {
        $input.val($input.val() + valueKeyInput); // добавлеет string в инпут
    }
    // добавлеет в инпут element
    function writeToInput(element) {
        $input.val(element);
    }
    // Очищаем экран калькулятора
    function clearInput() {
        $input.val(null);
    }
    // Выводим Ответ  в поле результата
    function writeResultToTopRight() {
        $result.text(eval($input.val()));
        return eval($input.val());
    }
    // Записываем ваше выражение в поле для него
    function writeYourMathToTopLeft() {
        $yourMath.text($input.val());
    }
    // Считает количество скобок
    function checkBrackets() {
        var position = 0;
        var position2 = 0;
        var counter = 0;
        var counter2 = 0;
        
        while (true) {
            var foundPos = $input.val().indexOf('(', position); // Строка.indexOf(цель поиска , позиция);
            if (foundPos == -1) break;
            ++counter;
            position = foundPos + 1; // продолжить поиск со следующей
        }
        while (true) {
            var foundPos = $input.val().indexOf(')', position2);
            if (foundPos == -1) break;
            ++counter2;
            position2 = foundPos + 1;
        }
        // Если скобок открытия меньше или равно возвращаем истину
        if (counter <= counter2) {
            return true;
        } else {
            return false;
        }
    }
    // Проверка на значение (цифра)
    function imNumberKey(n) {
        if (
            n === '1' ||
            n === '2' ||
            n === '3' ||
            n === '4' ||
            n === '5' ||
            n === '6' ||
            n === '7' ||
            n === '8' ||
            n === '9' ||
            n === '0'
        ){
            return true;
        } else {
            return false;
        }
    }
    // Проверка на значение (цифра)
    function imNumberSign(n) {
        if (
            n === '+' ||
            n === '-' ||
            n === '*' ||
            n === '/'
        ) {
            return true;
        } else {
            return false;
        }
    }
    // добавлеет ошибку к калькулятору
    function addErrorCalculator() {
        $calculatorWrapper.addClass('error');
    }
    // Удаляет ошибку из калькулятора
    function removeErrorCalculator() {
        $calculatorWrapper.removeClass('error');
    }

    // Клик по кнопке
    $key.on('click', function () {
        valueKeyInput = $(this).attr('data-value'); // получаем значение
        removeErrorCalculator() // удаляем ошибку

        // если клик по 'C'
        if (valueKeyInput === 'clear') {
            clearInput();
        } 
        // если клик по "+/-/*//"
        else if (
            valueKeyInput === '+' ||
            valueKeyInput === '-' ||
            valueKeyInput === '*' ||
            valueKeyInput === '/'
        ){
            writeToInputFromDataValue();
            console.log('Нажали мат знак');
        }
        // если клик на "="
        else if (valueKeyInput === 'equal') {
            try {
                writeYourMathToTopLeft();
                writeResultToTopRight();
                writeToInput(writeResultToTopRight());
                console.log('Равно =');
            } catch (error) {
                addErrorCalculator();
            }
        }
        // если клик на "()"
        else if (valueKeyInput === 'brackets') {
            // проверяем есть ли скобки
            if (checkBrackets()) {
                // если последний символ не пустота и не знак
                if (($input.val()[$input.val().length - 1] != undefined) && !imNumberSign($input.val()[$input.val().length - 1])) {
                    writeToInput($input.val() + '*('); // пишем скобку с умножением
                } else {
                    writeToInput($input.val() + '('); // пишем без умножения
                }
            } else {
                writeToInput($input.val() + ')');
                writeResultToTopRight();
                writeYourMathToTopLeft();
            }
        }
        // если клик по цыфре
        else if (imNumberKey(valueKeyInput)) {
            writeToInputFromDataValue();
            writeResultToTopRight();
            writeYourMathToTopLeft();
            console.log('клик число');
        }
        // если клик по всему остальному
        else {
            console.log('клик key');
        }
    });

    // Изменение Инпута с клавиатуры
    $input.on('input', function (event) {
        console.log('Я поменялся');
        removeErrorCalculator()
    });

    // жмяк по Enter в форме
    $calculator.keydown(function (event) {
        if (event.keyCode == 13) {
            try {
                writeYourMathToTopLeft();
                writeResultToTopRight();
                writeToInput(writeResultToTopRight());
                console.log('Энтер');
            } catch (error) {
                addErrorCalculator();
            }
        }
    });

    // жмяк по Del
    $calculator.keydown(function (event) {
        if (event.keyCode == 46) {
            clearInput();
            console.log('Делете');
        }
    });

    // Вводим символы в инпут
    var regNumber = /^([0-9])$/;
    var regSign = /^([///*/-/+])$/;
    var regLetter = /^([a-zA-Zа-яА-Я])$/;
    $input.on('keydown', function (e) {
        // if ((e.keyCode >= 65) && (e.keyCode <= 90)) {
        if (regNumber.test(e.key)) {
            console.log('я число');
            return true;
        } else if (regSign.test(e.key)) {
            console.log('я допустимый знак');
            return true;
        } else if (regLetter.test(e.key)) {
            console.log('я буква');
            return false;
        } else {
            console.log('меня не запрограмировали');
            return true;
        }
    });

    //todo: Значеня должны писаться на месте курсора
    //todo: кнопка стереть должна быть <==
    //todo: ловить ошибку и выводить сообщеине о ней
 
});

// простой валидатор
// function validate(form_id, email) {
//     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     var address = document.forms[form_id].elements[email].value;
//     if (reg.test(address) == false) {
//         alert('Введите корректный e-mail');
//         return false;
//     }
// }


// то событие берешь keydown ставишь event в function(),и внутри условие

// if ( event.key == 'd' || event.key == 's' || event.key == 'Tab' ) {
// тут типа разрешения для указаных клавишь
// } else {
// return false; тут запрет на тругие
// }

// onkeydown = "javascript: return ((event.keyCode>47)&&(event.keyCode<58))"

// function proverka(input) {
//     var value = input.value;
//     var rep = /[-\.;":'a-zA-Zа-яА-Я]/;
//     if (rep.test(value)) {
//         value = value.replace(rep, '');
//         input.value = value;
//     }
// } 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9jYWxjdWxhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09XG4vLyDQntGC0LrRgNGL0YLQuNC1INC/0L7Qv9CQ0L/QsCDQuCDQt9Cw0L/RgNC10YIg0YHQutGA0L7Qu9CwINC90LAgYm9keVxuLy8gPT09PT09PT09PT09PT09PT09PT1cblxuZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uICgkKSB7XG4gICAgLy8g0J7QsdGM0Y/QstC70LXQvdC40LVcbiAgICB2YXIgdmFsdWVLZXlJbnB1dDsgLy8g0LfQvdCw0YfQtdC90LjQtVxuICAgIC8vINCf0YDQuNGB0LLQvtC10L3QuNC1XG4gICAgdmFyICRrZXkgPSAkKCcuanMtY2FsY3VsYXRvci1rZXknKTsgLy8g0LrQu9Cw0LLQuNGI0LAg0LrQsNC70YzQutGD0LvRj9GC0L7RgNCwXG4gICAgdmFyICRpbnB1dCA9ICQoJy5qcy1jYWxjdWxhdG9yLWlucHV0Jyk7IC8vINC/0L7Qu9C1INCy0LLQvtC00LBcbiAgICB2YXIgJHJlc3VsdCA9ICQoJy5jYWxjdWxhdG9yLWRpc3BsYXlfX3Jlc3VsdCcpOyAvLyDQntGC0LLQtdGCXG4gICAgdmFyICR5b3VyTWF0aCA9ICQoJy5jYWxjdWxhdG9yLWRpc3BsYXlfX2lucHV0LXN0cmluZycpOyAvLyDQn9C+0LvQtdC1INCy0LDRiNC10LPQviDQstGL0YDQsNC20LXQvdC40Y9cbiAgICB2YXIgJGNhbGN1bGF0b3IgPSAkKCcuY2FsY3VsYXRvcicpOyAvLyDQodCw0Lwg0LrQsNC70YzQutGD0LvRj9GC0L7RgFxuICAgIHZhciAkY2FsY3VsYXRvcldyYXBwZXIgPSAkKCcuY2FsY3VsYXRvcl9fd3JhcHBlcicpOyAvLyDQntCx0ZHRgNGC0LrQsCDQutCw0LvRjNC60YPQu9GP0YLQvtGA0LBcblxuICAgIC8vINCk0YPQvdC60YbQuNC4XG4gICAgLy8g0JTQvtC/0LjRgdGL0LLQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSDQsiBJbnB1dFxuICAgIGZ1bmN0aW9uIHdyaXRlVG9JbnB1dEZyb21EYXRhVmFsdWUoKSB7XG4gICAgICAgICRpbnB1dC52YWwoJGlucHV0LnZhbCgpICsgdmFsdWVLZXlJbnB1dCk7IC8vINC00L7QsdCw0LLQu9C10LXRgiBzdHJpbmcg0LIg0LjQvdC/0YPRglxuICAgIH1cbiAgICAvLyDQtNC+0LHQsNCy0LvQtdC10YIg0LIg0LjQvdC/0YPRgiBlbGVtZW50XG4gICAgZnVuY3Rpb24gd3JpdGVUb0lucHV0KGVsZW1lbnQpIHtcbiAgICAgICAgJGlucHV0LnZhbChlbGVtZW50KTtcbiAgICB9XG4gICAgLy8g0J7Rh9C40YnQsNC10Lwg0Y3QutGA0LDQvSDQutCw0LvRjNC60YPQu9GP0YLQvtGA0LBcbiAgICBmdW5jdGlvbiBjbGVhcklucHV0KCkge1xuICAgICAgICAkaW5wdXQudmFsKG51bGwpO1xuICAgIH1cbiAgICAvLyDQktGL0LLQvtC00LjQvCDQntGC0LLQtdGCICDQsiDQv9C+0LvQtSDRgNC10LfRg9C70YzRgtCw0YLQsFxuICAgIGZ1bmN0aW9uIHdyaXRlUmVzdWx0VG9Ub3BSaWdodCgpIHtcbiAgICAgICAgJHJlc3VsdC50ZXh0KGV2YWwoJGlucHV0LnZhbCgpKSk7XG4gICAgICAgIHJldHVybiBldmFsKCRpbnB1dC52YWwoKSk7XG4gICAgfVxuICAgIC8vINCX0LDQv9C40YHRi9Cy0LDQtdC8INCy0LDRiNC1INCy0YvRgNCw0LbQtdC90LjQtSDQsiDQv9C+0LvQtSDQtNC70Y8g0L3QtdCz0L5cbiAgICBmdW5jdGlvbiB3cml0ZVlvdXJNYXRoVG9Ub3BMZWZ0KCkge1xuICAgICAgICAkeW91ck1hdGgudGV4dCgkaW5wdXQudmFsKCkpO1xuICAgIH1cbiAgICAvLyDQodGH0LjRgtCw0LXRgiDQutC+0LvQuNGH0LXRgdGC0LLQviDRgdC60L7QsdC+0LpcbiAgICBmdW5jdGlvbiBjaGVja0JyYWNrZXRzKCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSAwO1xuICAgICAgICB2YXIgcG9zaXRpb24yID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgY291bnRlcjIgPSAwO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBmb3VuZFBvcyA9ICRpbnB1dC52YWwoKS5pbmRleE9mKCcoJywgcG9zaXRpb24pOyAvLyDQodGC0YDQvtC60LAuaW5kZXhPZijRhtC10LvRjCDQv9C+0LjRgdC60LAgLCDQv9C+0LfQuNGG0LjRjyk7XG4gICAgICAgICAgICBpZiAoZm91bmRQb3MgPT0gLTEpIGJyZWFrO1xuICAgICAgICAgICAgKytjb3VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBmb3VuZFBvcyArIDE7IC8vINC/0YDQvtC00L7Qu9C20LjRgtGMINC/0L7QuNGB0Log0YHQviDRgdC70LXQtNGD0Y7RidC10LlcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGZvdW5kUG9zID0gJGlucHV0LnZhbCgpLmluZGV4T2YoJyknLCBwb3NpdGlvbjIpO1xuICAgICAgICAgICAgaWYgKGZvdW5kUG9zID09IC0xKSBicmVhaztcbiAgICAgICAgICAgICsrY291bnRlcjI7XG4gICAgICAgICAgICBwb3NpdGlvbjIgPSBmb3VuZFBvcyArIDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0JXRgdC70Lgg0YHQutC+0LHQvtC6INC+0YLQutGA0YvRgtC40Y8g0LzQtdC90YzRiNC1INC40LvQuCDRgNCw0LLQvdC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC40YHRgtC40L3Rg1xuICAgICAgICBpZiAoY291bnRlciA8PSBjb3VudGVyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQvdCwINC30L3QsNGH0LXQvdC40LUgKNGG0LjRhNGA0LApXG4gICAgZnVuY3Rpb24gaW1OdW1iZXJLZXkobikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuID09PSAnMScgfHxcbiAgICAgICAgICAgIG4gPT09ICcyJyB8fFxuICAgICAgICAgICAgbiA9PT0gJzMnIHx8XG4gICAgICAgICAgICBuID09PSAnNCcgfHxcbiAgICAgICAgICAgIG4gPT09ICc1JyB8fFxuICAgICAgICAgICAgbiA9PT0gJzYnIHx8XG4gICAgICAgICAgICBuID09PSAnNycgfHxcbiAgICAgICAgICAgIG4gPT09ICc4JyB8fFxuICAgICAgICAgICAgbiA9PT0gJzknIHx8XG4gICAgICAgICAgICBuID09PSAnMCdcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0L3QsCDQt9C90LDRh9C10L3QuNC1ICjRhtC40YTRgNCwKVxuICAgIGZ1bmN0aW9uIGltTnVtYmVyU2lnbihuKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG4gPT09ICcrJyB8fFxuICAgICAgICAgICAgbiA9PT0gJy0nIHx8XG4gICAgICAgICAgICBuID09PSAnKicgfHxcbiAgICAgICAgICAgIG4gPT09ICcvJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vINC00L7QsdCw0LLQu9C10LXRgiDQvtGI0LjQsdC60YMg0Log0LrQsNC70YzQutGD0LvRj9GC0L7RgNGDXG4gICAgZnVuY3Rpb24gYWRkRXJyb3JDYWxjdWxhdG9yKCkge1xuICAgICAgICAkY2FsY3VsYXRvcldyYXBwZXIuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfVxuICAgIC8vINCj0LTQsNC70Y/QtdGCINC+0YjQuNCx0LrRgyDQuNC3INC60LDQu9GM0LrRg9C70Y/RgtC+0YDQsFxuICAgIGZ1bmN0aW9uIHJlbW92ZUVycm9yQ2FsY3VsYXRvcigpIHtcbiAgICAgICAgJGNhbGN1bGF0b3JXcmFwcGVyLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH1cblxuICAgIC8vINCa0LvQuNC6INC/0L4g0LrQvdC+0L/QutC1XG4gICAgJGtleS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhbHVlS2V5SW5wdXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKTsgLy8g0L/QvtC70YPRh9Cw0LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICAgIHJlbW92ZUVycm9yQ2FsY3VsYXRvcigpIC8vINGD0LTQsNC70Y/QtdC8INC+0YjQuNCx0LrRg1xuXG4gICAgICAgIC8vINC10YHQu9C4INC60LvQuNC6INC/0L4gJ0MnXG4gICAgICAgIGlmICh2YWx1ZUtleUlucHV0ID09PSAnY2xlYXInKSB7XG4gICAgICAgICAgICBjbGVhcklucHV0KCk7XG4gICAgICAgIH0gXG4gICAgICAgIC8vINC10YHQu9C4INC60LvQuNC6INC/0L4gXCIrLy0vKi8vXCJcbiAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICB2YWx1ZUtleUlucHV0ID09PSAnKycgfHxcbiAgICAgICAgICAgIHZhbHVlS2V5SW5wdXQgPT09ICctJyB8fFxuICAgICAgICAgICAgdmFsdWVLZXlJbnB1dCA9PT0gJyonIHx8XG4gICAgICAgICAgICB2YWx1ZUtleUlucHV0ID09PSAnLydcbiAgICAgICAgKXtcbiAgICAgICAgICAgIHdyaXRlVG9JbnB1dEZyb21EYXRhVmFsdWUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQndCw0LbQsNC70Lgg0LzQsNGCINC30L3QsNC6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LXRgdC70Lgg0LrQu9C40Log0L3QsCBcIj1cIlxuICAgICAgICBlbHNlIGlmICh2YWx1ZUtleUlucHV0ID09PSAnZXF1YWwnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHdyaXRlWW91ck1hdGhUb1RvcExlZnQoKTtcbiAgICAgICAgICAgICAgICB3cml0ZVJlc3VsdFRvVG9wUmlnaHQoKTtcbiAgICAgICAgICAgICAgICB3cml0ZVRvSW5wdXQod3JpdGVSZXN1bHRUb1RvcFJpZ2h0KCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQoNCw0LLQvdC+ID0nKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYWRkRXJyb3JDYWxjdWxhdG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LXRgdC70Lgg0LrQu9C40Log0L3QsCBcIigpXCJcbiAgICAgICAgZWxzZSBpZiAodmFsdWVLZXlJbnB1dCA9PT0gJ2JyYWNrZXRzJykge1xuICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC10YHRgtGMINC70Lgg0YHQutC+0LHQutC4XG4gICAgICAgICAgICBpZiAoY2hlY2tCcmFja2V0cygpKSB7XG4gICAgICAgICAgICAgICAgLy8g0LXRgdC70Lgg0L/QvtGB0LvQtdC00L3QuNC5INGB0LjQvNCy0L7QuyDQvdC1INC/0YPRgdGC0L7RgtCwINC4INC90LUg0LfQvdCw0LpcbiAgICAgICAgICAgICAgICBpZiAoKCRpbnB1dC52YWwoKVskaW5wdXQudmFsKCkubGVuZ3RoIC0gMV0gIT0gdW5kZWZpbmVkKSAmJiAhaW1OdW1iZXJTaWduKCRpbnB1dC52YWwoKVskaW5wdXQudmFsKCkubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHdyaXRlVG9JbnB1dCgkaW5wdXQudmFsKCkgKyAnKignKTsgLy8g0L/QuNGI0LXQvCDRgdC60L7QsdC60YMg0YEg0YPQvNC90L7QttC10L3QuNC10LxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3cml0ZVRvSW5wdXQoJGlucHV0LnZhbCgpICsgJygnKTsgLy8g0L/QuNGI0LXQvCDQsdC10Lcg0YPQvNC90L7QttC10L3QuNGPXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3cml0ZVRvSW5wdXQoJGlucHV0LnZhbCgpICsgJyknKTtcbiAgICAgICAgICAgICAgICB3cml0ZVJlc3VsdFRvVG9wUmlnaHQoKTtcbiAgICAgICAgICAgICAgICB3cml0ZVlvdXJNYXRoVG9Ub3BMZWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LXRgdC70Lgg0LrQu9C40Log0L/QviDRhtGL0YTRgNC1XG4gICAgICAgIGVsc2UgaWYgKGltTnVtYmVyS2V5KHZhbHVlS2V5SW5wdXQpKSB7XG4gICAgICAgICAgICB3cml0ZVRvSW5wdXRGcm9tRGF0YVZhbHVlKCk7XG4gICAgICAgICAgICB3cml0ZVJlc3VsdFRvVG9wUmlnaHQoKTtcbiAgICAgICAgICAgIHdyaXRlWW91ck1hdGhUb1RvcExlZnQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQutC70LjQuiDRh9C40YHQu9C+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LXRgdC70Lgg0LrQu9C40Log0L/QviDQstGB0LXQvNGDINC+0YHRgtCw0LvRjNC90L7QvNGDXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C60LvQuNC6IGtleScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDQmNC30LzQtdC90LXQvdC40LUg0JjQvdC/0YPRgtCwINGBINC60LvQsNCy0LjQsNGC0YPRgNGLXG4gICAgJGlucHV0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygn0K8g0L/QvtC80LXQvdGP0LvRgdGPJyk7XG4gICAgICAgIHJlbW92ZUVycm9yQ2FsY3VsYXRvcigpXG4gICAgfSk7XG5cbiAgICAvLyDQttC80Y/QuiDQv9C+IEVudGVyINCyINGE0L7RgNC80LVcbiAgICAkY2FsY3VsYXRvci5rZXlkb3duKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB3cml0ZVlvdXJNYXRoVG9Ub3BMZWZ0KCk7XG4gICAgICAgICAgICAgICAgd3JpdGVSZXN1bHRUb1RvcFJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgd3JpdGVUb0lucHV0KHdyaXRlUmVzdWx0VG9Ub3BSaWdodCgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0K3QvdGC0LXRgCcpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhZGRFcnJvckNhbGN1bGF0b3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8g0LbQvNGP0Log0L/QviBEZWxcbiAgICAkY2FsY3VsYXRvci5rZXlkb3duKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA0Nikge1xuICAgICAgICAgICAgY2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9CU0LXQu9C10YLQtScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDQktCy0L7QtNC40Lwg0YHQuNC80LLQvtC70Ysg0LIg0LjQvdC/0YPRglxuICAgIHZhciByZWdOdW1iZXIgPSAvXihbMC05XSkkLztcbiAgICB2YXIgcmVnU2lnbiA9IC9eKFsvLy8qLy0vK10pJC87XG4gICAgdmFyIHJlZ0xldHRlciA9IC9eKFthLXpBLVrQsC3Rj9CQLdCvXSkkLztcbiAgICAkaW5wdXQub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBpZiAoKGUua2V5Q29kZSA+PSA2NSkgJiYgKGUua2V5Q29kZSA8PSA5MCkpIHtcbiAgICAgICAgaWYgKHJlZ051bWJlci50ZXN0KGUua2V5KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9GPINGH0LjRgdC70L4nKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHJlZ1NpZ24udGVzdChlLmtleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRjyDQtNC+0L/Rg9GB0YLQuNC80YvQuSDQt9C90LDQuicpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocmVnTGV0dGVyLnRlc3QoZS5rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0Y8g0LHRg9C60LLQsCcpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C80LXQvdGPINC90LUg0LfQsNC/0YDQvtCz0YDQsNC80LjRgNC+0LLQsNC70LgnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL3RvZG86INCX0L3QsNGH0LXQvdGPINC00L7Qu9C20L3RiyDQv9C40YHQsNGC0YzRgdGPINC90LAg0LzQtdGB0YLQtSDQutGD0YDRgdC+0YDQsFxuICAgIC8vdG9kbzog0LrQvdC+0L/QutCwINGB0YLQtdGA0LXRgtGMINC00L7Qu9C20L3QsCDQsdGL0YLRjCA8PT1cbiAgICAvL3RvZG86INC70L7QstC40YLRjCDQvtGI0LjQsdC60YMg0Lgg0LLRi9Cy0L7QtNC40YLRjCDRgdC+0L7QsdGJ0LXQuNC90LUg0L4g0L3QtdC5XG4gXG59KTtcblxuLy8g0L/RgNC+0YHRgtC+0Lkg0LLQsNC70LjQtNCw0YLQvtGAXG4vLyBmdW5jdGlvbiB2YWxpZGF0ZShmb3JtX2lkLCBlbWFpbCkge1xuLy8gICAgIHZhciByZWcgPSAvXihbQS1aYS16MC05X1xcLVxcLl0pK1xcQChbQS1aYS16MC05X1xcLVxcLl0pK1xcLihbQS1aYS16XXsyLDR9KSQvO1xuLy8gICAgIHZhciBhZGRyZXNzID0gZG9jdW1lbnQuZm9ybXNbZm9ybV9pZF0uZWxlbWVudHNbZW1haWxdLnZhbHVlO1xuLy8gICAgIGlmIChyZWcudGVzdChhZGRyZXNzKSA9PSBmYWxzZSkge1xuLy8gICAgICAgICBhbGVydCgn0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0LkgZS1tYWlsJyk7XG4vLyAgICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICB9XG4vLyB9XG5cblxuLy8g0YLQviDRgdC+0LHRi9GC0LjQtSDQsdC10YDQtdGI0Ywga2V5ZG93biDRgdGC0LDQstC40YjRjCBldmVudCDQsiBmdW5jdGlvbigpLNC4INCy0L3Rg9GC0YDQuCDRg9GB0LvQvtCy0LjQtVxuXG4vLyBpZiAoIGV2ZW50LmtleSA9PSAnZCcgfHwgZXZlbnQua2V5ID09ICdzJyB8fCBldmVudC5rZXkgPT0gJ1RhYicgKSB7XG4vLyDRgtGD0YIg0YLQuNC/0LAg0YDQsNC30YDQtdGI0LXQvdC40Y8g0LTQu9GPINGD0LrQsNC30LDQvdGL0YUg0LrQu9Cw0LLQuNGI0Yxcbi8vIH0gZWxzZSB7XG4vLyByZXR1cm4gZmFsc2U7INGC0YPRgiDQt9Cw0L/RgNC10YIg0L3QsCDRgtGA0YPQs9C40LVcbi8vIH1cblxuLy8gb25rZXlkb3duID0gXCJqYXZhc2NyaXB0OiByZXR1cm4gKChldmVudC5rZXlDb2RlPjQ3KSYmKGV2ZW50LmtleUNvZGU8NTgpKVwiXG5cbi8vIGZ1bmN0aW9uIHByb3ZlcmthKGlucHV0KSB7XG4vLyAgICAgdmFyIHZhbHVlID0gaW5wdXQudmFsdWU7XG4vLyAgICAgdmFyIHJlcCA9IC9bLVxcLjtcIjonYS16QS1a0LAt0Y/QkC3Qr10vO1xuLy8gICAgIGlmIChyZXAudGVzdCh2YWx1ZSkpIHtcbi8vICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlcCwgJycpO1xuLy8gICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuLy8gICAgIH1cbi8vIH0gIl0sImZpbGUiOiJwYXJ0aWFscy9jYWxjdWxhdG9yLmpzIn0=
