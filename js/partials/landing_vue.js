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
            vueDescriptionTextClass: '',

            stateWasModified: false, // было ло ли изменено состояние

            stateEditHeading: false, // изменяется ли Заголовок
            stateEditDescriptionText: false, // изменяется ли Описание

            headingMessage: 'Запусти свой таймер', // текст заголовка
            oldHeadingMessage: '', // ячейка для сохранения предыдущего текста
            newHeadingMessage: '', // ячейка для нового текста

            descriptionTextMessage: 'На этом сайте ты можешь создайть таймер отсчёта до твоего события и поделиться с друзьями :)', // текст описания
            oldDescriptionTextMessage: '', // ячейка для сохранения предыдущего описания
            newDescriptionTextMessage: '', // ячейка для нового описания

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
                    this.vueClockClass = 'editable', // "editable edited"
                    this.vueHeadingClass = 'editable', // "editable edited"
                    this.vueDescriptionTextClass = 'editable'
                } else {
                    this.vueAppClass = '',
                    this.vueBackClass = '',
                    this.vueShareClass = '',
                    this.vueCircleClass = '',
                    this.vueButtonClass = '',
                    this.vueClockClass = '',
                    this.vueHeadingClass = '',
                    this.vueDescriptionTextClass = ''
                }
            },

            // Изменяем часы (ставим новую дату)
            editClock: function () {
                if (this.createTimerShow) {
                    alert('В преАльфа версии эта функция недоступна. Нажмите ок.');
                    this.vueClockClass = 'editable editing';
                }
            },

            // Начинаем редактировать заголовок
            editHeading: function () {
                // alert('В преАльфа версии эта функция недоступна. Нажмите ок.');
                // TODO: сохранять старые значения надо и возвращать
                if (this.createTimerShow) {
                    this.stateEditHeading = true;
                    this.oldHeadingMessage = this.headingMessage; // Запоминаем старое название
                    this.headingMessage = ''; // и меняем текст в форме на пустой
                    // this.vueHeadingClass = 'editable';
                }
            },
            // Сохроняем редактирование
            compleateEditHeading: function () {
                if (this.createTimerShow) {
                    this.stateEditHeading = false;
                    // если форма пустая
                    if (this.headingMessage == '') {
                        this.headingMessage = this.oldHeadingMessage;
                    }
                }
            },

            // Начинаем редактировать DescriptionText
            editDescriptionText: function () {
                // alert('В преАльфа версии эта функция недоступна. Нажмите ок.');
                // TODO: сохранять старые значения надо и возвращать
                if (this.createTimerShow) {
                    this.stateEditDescriptionText = true;
                    this.oldDescriptionTextMessage = this.descriptionTextMessage; // Запоминаем старое название
                    this.descriptionTextMessage = ''; // и меняем текст в форме на пустой
                    // this.vueDescriptionTextClass = 'editable';
                }
            },
            // Сохроняем редактирование DescriptionText
            compleateEditDescriptionText: function () {
                if (this.createTimerShow) {
                    this.stateEditDescriptionText = false;
                    // если форма пустая
                    if (this.descriptionTextMessage == '') {
                        this.descriptionTextMessage = this.oldDescriptionTextMessage;
                    }
                }
            }





            // acceptEditHeading : function (e) {
            //     console.log(e.key);
            // }
        }





        // // Вызывается синхронно сразу после создания экземпляра
        // created() {
        //     document.addEventListener('keypress', this.acceptEditHeading)
        // },
        // Вызывается синхронно сразу после инициализации экземпляра, до настройки наблюдения за данными, механизмов слежения и событий.
        // beforeDestroy() {
        //     document.removeEventListener('keypress', this.acceptEditHeading)
        // }
    })

});