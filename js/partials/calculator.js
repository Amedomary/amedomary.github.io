// ====================
// robinzon: popup.js
// 15.01.2018: Amedomary
// ---------------------
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