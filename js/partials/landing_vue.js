// ====================
// ====================

define(['jquery', 'vuejs'], function ($, Vue) {

    var $app = $('#landing-app');

    var appLanding = new Vue({
        el: '#landing-app',
        data: {
            createTimerShow: true,
            vueAppClass: '',
            vueBackClass: '',
            vueShareClass: '',
            vueCircleClass: '',
            vueButtonClass: ''
        },
        methods: {
            // Включаем тему редоктирования
            createTimer() {
                this.createTimerShow = !this.createTimerShow;

                if (this.createTimerShow == true) {
                    this.vueAppClass = '',
                    this.vueBackClass = '',
                    this.vueShareClass = '',
                    this.vueCircleClass = '',
                    this.vueButtonClass = ''
                }
                else {
                    this.vueAppClass = 'modification',
                    this.vueBackClass = 'fade',
                    this.vueShareClass = 'hide',
                    this.vueCircleClass = 'fade',
                    this.vueButtonClass = 'fade'
                }
            }
        }
    })

});