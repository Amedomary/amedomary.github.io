// ====================
// robinzon: popup.js
// 15.01.2018: Amedomary
// ---------------------
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery', 'animejs'], function ($,anime) {

    var cssSelector = anime({
        targets: '.element',
        // css
        translateX: 150,
        // transform
        scale: 1.2,
        rotate: '1turn',
        // poramm
        duration: 3000,
        delay: 500,
        direction: 'alternate',
    });

    // svg
    var svgAttributes = anime({
        targets: '#svgAttributes polygon',
        points: '64 128 8.574 119 8.574 32 64 50 119 32 119 119',
        easing: 'easeInOutExpo',
        direction: 'alternate',
    });

    // steps
    // var specificPropertyParameters = anime({
    //     targets: '.js-hamburger',
    //     translateX: {
    //         value: 250,
    //         duration: 800
    //     },
    //     rotate: {
    //         value: 360,
    //         duration: 1800,
    //         easing: 'easeInOutSine'
    //     },
    //     scale: {
    //         value: 2,
    //         duration: 1600,
    //         delay: 800,
    //         easing: 'easeInOutQuart'
    //     },
    //     delay: 250, // All properties except 'scale' inherit 250ms delay
    //     direction: 'alternate',
    // });

    var functionBasedPropVal = anime({
        targets: '#functionBasedPropVal .el',
        translateX: function (el) {
            return el.getAttribute('data-x');
        },
        translateY: function (el, i) {
            return 50 + (-50 * i);
        },
        scale: function (el, i, l) {
            return (l - i) + .25;
        },
        rotate: function () { return anime.random(-360, 360); },
        duration: function () { return anime.random(1200, 1800); },
        duration: function () { return anime.random(800, 1600); },
        delay: function () { return anime.random(0, 1000); },
        direction: 'alternate',
        loop: true
    });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9hbmltYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT1cclxuLy8gcm9iaW56b246IHBvcHVwLmpzXHJcbi8vIDE1LjAxLjIwMTg6IEFtZWRvbWFyeVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8g0J7RgtC60YDRi9GC0LjQtSDQv9C+0L/QkNC/0LAg0Lgg0LfQsNC/0YDQtdGCINGB0LrRgNC+0LvQsCDQvdCwIGJvZHlcclxuLy8gPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmRlZmluZShbJ2pxdWVyeScsICdhbmltZWpzJ10sIGZ1bmN0aW9uICgkLGFuaW1lKSB7XHJcblxyXG4gICAgdmFyIGNzc1NlbGVjdG9yID0gYW5pbWUoe1xyXG4gICAgICAgIHRhcmdldHM6ICcuZWxlbWVudCcsXHJcbiAgICAgICAgLy8gY3NzXHJcbiAgICAgICAgdHJhbnNsYXRlWDogMTUwLFxyXG4gICAgICAgIC8vIHRyYW5zZm9ybVxyXG4gICAgICAgIHNjYWxlOiAxLjIsXHJcbiAgICAgICAgcm90YXRlOiAnMXR1cm4nLFxyXG4gICAgICAgIC8vIHBvcmFtbVxyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGRlbGF5OiA1MDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN2Z1xyXG4gICAgdmFyIHN2Z0F0dHJpYnV0ZXMgPSBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogJyNzdmdBdHRyaWJ1dGVzIHBvbHlnb24nLFxyXG4gICAgICAgIHBvaW50czogJzY0IDEyOCA4LjU3NCAxMTkgOC41NzQgMzIgNjQgNTAgMTE5IDMyIDExOSAxMTknLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEV4cG8nLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ2FsdGVybmF0ZScsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdGVwc1xyXG4gICAgLy8gdmFyIHNwZWNpZmljUHJvcGVydHlQYXJhbWV0ZXJzID0gYW5pbWUoe1xyXG4gICAgLy8gICAgIHRhcmdldHM6ICcuanMtaGFtYnVyZ2VyJyxcclxuICAgIC8vICAgICB0cmFuc2xhdGVYOiB7XHJcbiAgICAvLyAgICAgICAgIHZhbHVlOiAyNTAsXHJcbiAgICAvLyAgICAgICAgIGR1cmF0aW9uOiA4MDBcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHJvdGF0ZToge1xyXG4gICAgLy8gICAgICAgICB2YWx1ZTogMzYwLFxyXG4gICAgLy8gICAgICAgICBkdXJhdGlvbjogMTgwMCxcclxuICAgIC8vICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0U2luZSdcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHNjYWxlOiB7XHJcbiAgICAvLyAgICAgICAgIHZhbHVlOiAyLFxyXG4gICAgLy8gICAgICAgICBkdXJhdGlvbjogMTYwMCxcclxuICAgIC8vICAgICAgICAgZGVsYXk6IDgwMCxcclxuICAgIC8vICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhcnQnXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBkZWxheTogMjUwLCAvLyBBbGwgcHJvcGVydGllcyBleGNlcHQgJ3NjYWxlJyBpbmhlcml0IDI1MG1zIGRlbGF5XHJcbiAgICAvLyAgICAgZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHZhciBmdW5jdGlvbkJhc2VkUHJvcFZhbCA9IGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiAnI2Z1bmN0aW9uQmFzZWRQcm9wVmFsIC5lbCcsXHJcbiAgICAgICAgdHJhbnNsYXRlWDogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhbnNsYXRlWTogZnVuY3Rpb24gKGVsLCBpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA1MCArICgtNTAgKiBpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlOiBmdW5jdGlvbiAoZWwsIGksIGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChsIC0gaSkgKyAuMjU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3RhdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFuaW1lLnJhbmRvbSgtMzYwLCAzNjApOyB9LFxyXG4gICAgICAgIGR1cmF0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiBhbmltZS5yYW5kb20oMTIwMCwgMTgwMCk7IH0sXHJcbiAgICAgICAgZHVyYXRpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFuaW1lLnJhbmRvbSg4MDAsIDE2MDApOyB9LFxyXG4gICAgICAgIGRlbGF5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhbmltZS5yYW5kb20oMCwgMTAwMCk7IH0sXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnYWx0ZXJuYXRlJyxcclxuICAgICAgICBsb29wOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbn0pOyJdLCJmaWxlIjoicGFydGlhbHMvYW5pbWF0aW9uLmpzIn0=
