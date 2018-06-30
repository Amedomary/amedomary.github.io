// ====================
// 15.01.2018: Amedomary
// ---------------------
// Часы
// ====================

define(['jquery'], function ($) {

    var $clockMouth = document.getElementById('js-clock-mounth');
    var $clockHour = document.getElementById('js-clock-hour');
    var $clockMinutes = document.getElementById('js-clock-minutes');
    var $clockSeconds = document.getElementById('js-clock-seconds');

    var dataTime;

    function clock() {
        // создаём дату новую
        dataTime = new Date();

        var mon = dataTime.toLocaleString('en-US', { month: "long" });// выводим месяц в формате длинный экма Англ стандарт
        var d = dataTime.getDate(); // получаем число месяца
        var h = dataTime.getHours().toString(); // получаем час и переводим в строку 
        var m = dataTime.getMinutes().toString(); // получаем минуту и переводим в строку
        var s = dataTime.getSeconds().toString(); // получаем секунду и переводим в строку

        // добавляем 0 в начало однозначного элемента
        if (h.length < 2) {
            h = '0' + h;
        }
        if (m.length < 2) {
            m = '0' + m;
        }
        if (s.length < 2) {
            s = '0' + s;
        }

        // меняем контент
        $clockMouth.textContent = mon + ' ' + d;
        $clockHour.textContent = h;
        $clockMinutes.textContent = m;
        $clockSeconds.textContent = s;
    }

    // запускаем и повторяем раз в секнуду
    clock();
    setInterval(clock, 1000);
});
