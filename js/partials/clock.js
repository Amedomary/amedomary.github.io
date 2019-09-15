// // ====================
// // Часы
// // ====================

// define(['jquery'], function ($) {

//     var $clockMouth = document.getElementById('js-clock-mounth');
//     var $clockHour = document.getElementById('js-clock-hour');
//     var $clockMinutes = document.getElementById('js-clock-minutes');
//     var $clockSeconds = document.getElementById('js-clock-seconds');

//     var dataTime;

//     function clock() {
//         // создаём дату новую
//         dataTime = new Date();

//         var mon = dataTime.toLocaleString('en-US', { month: "long" });// выводим месяц в формате длинный экма Англ стандарт
//         var d = dataTime.getDate(); // получаем число месяца
//         var h = dataTime.getHours().toString(); // получаем час и переводим в строку 
//         var m = dataTime.getMinutes().toString(); // получаем минуту и переводим в строку
//         var s = dataTime.getSeconds().toString(); // получаем секунду и переводим в строку

//         // добавляем 0 в начало однозначного элемента
//         if (h.length < 2) {
//             h = '0' + h;
//         }
//         if (m.length < 2) {
//             m = '0' + m;
//         }
//         if (s.length < 2) {
//             s = '0' + s;
//         }

//         // меняем контент
//         $clockMouth.textContent = mon + ' ' + d;
//         $clockHour.textContent = h;
//         $clockMinutes.textContent = m;
//         $clockSeconds.textContent = s;
//     }

//     // запускаем и повторяем раз в секнуду
//     clock();
//     setInterval(clock, 1000);
// });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9jbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyA9PT09PT09PT09PT09PT09PT09PVxyXG4vLyAvLyDQp9Cw0YHRi1xyXG4vLyAvLyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uICgkKSB7XHJcblxyXG4vLyAgICAgdmFyICRjbG9ja01vdXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWNsb2NrLW1vdW50aCcpO1xyXG4vLyAgICAgdmFyICRjbG9ja0hvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtY2xvY2staG91cicpO1xyXG4vLyAgICAgdmFyICRjbG9ja01pbnV0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtY2xvY2stbWludXRlcycpO1xyXG4vLyAgICAgdmFyICRjbG9ja1NlY29uZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtY2xvY2stc2Vjb25kcycpO1xyXG5cclxuLy8gICAgIHZhciBkYXRhVGltZTtcclxuXHJcbi8vICAgICBmdW5jdGlvbiBjbG9jaygpIHtcclxuLy8gICAgICAgICAvLyDRgdC+0LfQtNCw0ZHQvCDQtNCw0YLRgyDQvdC+0LLRg9GOXHJcbi8vICAgICAgICAgZGF0YVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuLy8gICAgICAgICB2YXIgbW9uID0gZGF0YVRpbWUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBtb250aDogXCJsb25nXCIgfSk7Ly8g0LLRi9Cy0L7QtNC40Lwg0LzQtdGB0Y/RhiDQsiDRhNC+0YDQvNCw0YLQtSDQtNC70LjQvdC90YvQuSDRjdC60LzQsCDQkNC90LPQuyDRgdGC0LDQvdC00LDRgNGCXHJcbi8vICAgICAgICAgdmFyIGQgPSBkYXRhVGltZS5nZXREYXRlKCk7IC8vINC/0L7Qu9GD0YfQsNC10Lwg0YfQuNGB0LvQviDQvNC10YHRj9GG0LBcclxuLy8gICAgICAgICB2YXIgaCA9IGRhdGFUaW1lLmdldEhvdXJzKCkudG9TdHJpbmcoKTsgLy8g0L/QvtC70YPRh9Cw0LXQvCDRh9Cw0YEg0Lgg0L/QtdGA0LXQstC+0LTQuNC8INCyINGB0YLRgNC+0LrRgyBcclxuLy8gICAgICAgICB2YXIgbSA9IGRhdGFUaW1lLmdldE1pbnV0ZXMoKS50b1N0cmluZygpOyAvLyDQv9C+0LvRg9GH0LDQtdC8INC80LjQvdGD0YLRgyDQuCDQv9C10YDQtdCy0L7QtNC40Lwg0LIg0YHRgtGA0L7QutGDXHJcbi8vICAgICAgICAgdmFyIHMgPSBkYXRhVGltZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKTsgLy8g0L/QvtC70YPRh9Cw0LXQvCDRgdC10LrRg9C90LTRgyDQuCDQv9C10YDQtdCy0L7QtNC40Lwg0LIg0YHRgtGA0L7QutGDXHJcblxyXG4vLyAgICAgICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCAwINCyINC90LDRh9Cw0LvQviDQvtC00L3QvtC30L3QsNGH0L3QvtCz0L4g0Y3Qu9C10LzQtdC90YLQsFxyXG4vLyAgICAgICAgIGlmIChoLmxlbmd0aCA8IDIpIHtcclxuLy8gICAgICAgICAgICAgaCA9ICcwJyArIGg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmIChtLmxlbmd0aCA8IDIpIHtcclxuLy8gICAgICAgICAgICAgbSA9ICcwJyArIG07XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmIChzLmxlbmd0aCA8IDIpIHtcclxuLy8gICAgICAgICAgICAgcyA9ICcwJyArIHM7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAvLyDQvNC10L3Rj9C10Lwg0LrQvtC90YLQtdC90YJcclxuLy8gICAgICAgICAkY2xvY2tNb3V0aC50ZXh0Q29udGVudCA9IG1vbiArICcgJyArIGQ7XHJcbi8vICAgICAgICAgJGNsb2NrSG91ci50ZXh0Q29udGVudCA9IGg7XHJcbi8vICAgICAgICAgJGNsb2NrTWludXRlcy50ZXh0Q29udGVudCA9IG07XHJcbi8vICAgICAgICAgJGNsb2NrU2Vjb25kcy50ZXh0Q29udGVudCA9IHM7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8g0LfQsNC/0YPRgdC60LDQtdC8INC4INC/0L7QstGC0L7RgNGP0LXQvCDRgNCw0Lcg0LIg0YHQtdC60L3Rg9C00YNcclxuLy8gICAgIGNsb2NrKCk7XHJcbi8vICAgICBzZXRJbnRlcnZhbChjbG9jaywgMTAwMCk7XHJcbi8vIH0pO1xyXG4iXSwiZmlsZSI6InBhcnRpYWxzL2Nsb2NrLmpzIn0=
