// ====================
// ====================

define(['jquery', 'vuejs'], function ($, Vue) {

    var $app = $('#landing-app');

    var appLanding = new Vue({
        el: '#landing-app',
        data: {
            createTimerShow: false, //состояние редактирования
            vueAppClass: '',
            vueBackClass: '',
            vueShareClass: '',
            vueCircleClass: '',
            vueButtonClass: '',
            vueClockClass: '',

            stateWasModified: false // было ло ли изменено состояние

        },
        methods: {
            // Включаем тему редоктирования 
            createTimer: function () {
                this.createTimerShow = !this.createTimerShow;

                if (this.createTimerShow) {
                    this.vueAppClass = 'modification',
                    this.vueBackClass = 'fade',
                    this.vueShareClass = 'hide',
                    this.vueCircleClass = 'fade',
                    this.vueButtonClass = 'fade',
                    this.vueClockClass = 'editable' // "editable edited"
                } else {
                    this.vueAppClass = '',
                    this.vueBackClass = '',
                    this.vueShareClass = '',
                    this.vueCircleClass = '',
                    this.vueButtonClass = '',
                    this.vueClockClass = ''
                }
            },
            editClock: function () {
                if (this.createTimerShow) {
                    alert('В преАльфа версии эта функция недоступна. Нажмите ок.');
                }
            }
        }
    })

});