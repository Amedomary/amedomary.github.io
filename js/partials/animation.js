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
        rotate: function () {
            return anime.random(-360, 360);
        },
        duration: function () {
            return anime.random(1200, 1800);
        },
        duration: function () {
            return anime.random(800, 1600);
        },
        delay: function () {
            return anime.random(0, 1000);
        },
        direction: 'alternate',
        loop: true
    });

});