// ====================
// ====================

define(['jquery', 'vuejs'], function ($, Vue) {

    var $app = $('#landing-app');

    var appLanding = new Vue({
        el: '#landing-app',
        data: {
            createTimerShow: false, //состояние редактирования

            // Классы
            vueAppClass: '',
            vueBackClass: '',
            vueShareClass: '',
            vueCircleClass: '',
            vueButtonClass: '',
            vueClockClass: '',
            vueHeadingClass: '',
            vueDescriptionTextClass: '',

            // Consts
            CONTENTFROMSERVER: {
                preHeading: 'Жди вместе с друзьями',
                heading: 'Запусти свой таймер',
                description: 'На этом сайте ты можешь создайть таймер отсчёта до твоего события и поделиться с друзьями :)'
            },

            stateWasModified: false, // было ло ли изменено состояние

            stateEditHeading: false, // изменяется ли Заголовок
            stateEditDescriptionText: false, // изменяется ли Описание

            headingMessage: '', // текст заголовка
            oldHeadingMessage: '', // ячейка для сохранения предыдущего текста
            newHeadingMessage: '', // ячейка для нового текста

            descriptionTextMessage: '', // текст описания
            oldDescriptionTextMessage: '', // ячейка для сохранения предыдущего описания
            newDescriptionTextMessage: '', // ячейка для нового описания

            preHeadingMessage: '', // текст пред Заголовка
            oldPreHeadingMessage: '', // ячейка для сохранения предыдущего пред Заголовка
            newPreHeadingMessage: '' // ячейка для нового пред Заголовка

        },
        methods: {
            // Включаем тему редоктирования 
            createTimer: function () {
                this.createTimerShow = !this.createTimerShow;

                if (this.createTimerShow) {
                    this.vueAppClass = 'modification';
                    this.vueBackClass = 'fade';
                    this.vueShareClass = 'hide';
                    this.vueCircleClass = 'fade';
                    this.vueButtonClass = 'fade';
                    this.vueClockClass = 'editable'; // "editable edited"
                    this.vueHeadingClass = 'editable'; // "editable edited"
                    this.vueDescriptionTextClass = 'editable';
                } else {
                    this.vueAppClass = '';
                    this.vueBackClass = '';
                    this.vueShareClass = '';
                    this.vueCircleClass = '';
                    this.vueButtonClass = '';
                    this.vueClockClass = '';
                    this.vueHeadingClass = '';
                    this.vueDescriptionTextClass = '';
                    // присваеваем переменным значения с сервера
                    this.preHeadingMessage = this.CONTENTFROMSERVER.preHeading;
                    this.headingMessage = this.CONTENTFROMSERVER.heading;
                    this.descriptionTextMessage = this.CONTENTFROMSERVER.description;

                }
            },

            // Применяем изменения Приложения
            acceptCreateTimer: function () {
                this.createTimerShow = !this.createTimerShow; // меняем состояния редактирования
                // убиваем классы редактирования
                this.vueAppClass = '';
                this.vueBackClass = '';
                this.vueShareClass = '';
                this.vueCircleClass = '';
                this.vueButtonClass = '';
                this.vueClockClass = '';
                this.vueHeadingClass = '';
                this.vueDescriptionTextClass = '';
                
                this.stateWasModified = false; //выключаем состояние "в редактировании"
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
                    // если форма пустая и не такая же
                    if (this.headingMessage == '') {
                        this.headingMessage = this.oldHeadingMessage;
                    }
                    else {
                        this.stateWasModified = true;
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
                    else {
                        this.stateWasModified = true;
                    }
                }
            },

            // применить редактирование текста по клавише Энтр
            acceptEditText: function (e) {
                // если мы в процесе редактирования и редактируем загаловок и нажали энтер
                if (this.createTimerShow && this.stateEditHeading && e.key == 'Enter') {
                    this.compleateEditHeading();
                }
                if (this.createTimerShow && this.stateEditDescriptionText && e.key == 'Enter') {
                    this.compleateEditDescriptionText();
                }
                // if (this.createTimerShow && this.stateEditPreHeading && e.key == 'Enter') {
                //     this.compleateEditPreHeading();
                // }

            }

        },


        // Вызывается синхронно сразу после создания экземпляра
        created() {
            // присваеваем переменным значения с сервера
            this.preHeadingMessage = this.CONTENTFROMSERVER.preHeading;
            this.headingMessage = this.CONTENTFROMSERVER.heading;
            this.descriptionTextMessage = this.CONTENTFROMSERVER.description;
            
            document.addEventListener('keypress', this.acceptEditText)
        }

        // Вызывается синхронно сразу после инициализации экземпляра, до настройки наблюдения за данными, механизмов слежения и событий.
        // created() {
        // }
    })

});