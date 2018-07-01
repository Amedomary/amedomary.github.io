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
            vueHeadingClass: '',

            stateWasModified: false, // было ло ли изменено состояние

            stateEditHeading: false, // изменяется ли Заголовок

            headingMessage: 'Запусти свой таймер', // текст заголовка
            oldHeadingMessage: '', // ячейка для сохранения предыдущего текста

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
                    this.vueHeadingClass = 'editable' // "editable edited"
                } else {
                    this.vueAppClass = '',
                    this.vueBackClass = '',
                    this.vueShareClass = '',
                    this.vueCircleClass = '',
                    this.vueButtonClass = '',
                    this.vueClockClass = '',
                    this.vueHeadingClass = ''
                }
            },
            // Изменяем часы (ставим новую дату)
            editClock: function () {
                if (this.createTimerShow) {
                    alert('В преАльфа версии эта функция недоступна. Нажмите ок.');
                    this.vueClockClass = 'editable editing';
                }
            },
            editHeading: function () {
                // alert('В преАльфа версии эта функция недоступна. Нажмите ок.');
                // TODO: сохранять старые значения надо и возвращать
                if (this.createTimerShow) {
                    this.stateEditHeading = true;
                    this.headingMessage = '';
                    // this.vueHeadingClass = 'editable';
                }
            },
            acceptEditHeading : function (e) {
                alert('document.addEventListener')
            }
        },
        // Вызывается синхронно сразу после создания экземпляра
        created() {
            document.addEventListener('keypress', this.acceptEditHeading)
        },
        // Вызывается синхронно сразу после инициализации экземпляра, до настройки наблюдения за данными, механизмов слежения и событий.
        beforeDestroy() {
            document.removeEventListener('keypress', this.acceptEditHeading)
        }
    })

});