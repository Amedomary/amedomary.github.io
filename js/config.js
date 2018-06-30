require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery/jquery.min',
        html5shiv: 'bower_components/html5shiv/dist/html5shiv',
        modernizr: 'external/modernizr-custom',
        ofi: 'external/ofi.min',
        animejs: 'bower_components/animejs/anime',
        vue: 'bower_components/vue/dist/vue.runtime.common',
        vuejs: 'bower_components/vue/dist/vue',
        'jquery-validation': 'bower_components/jquery-validation/dist/jquery.validate'
    },
    packages: [

    ],
    shim: {

    }
});

//- Модули, подключаемые на всех страницах
require([
    'modernizr',
    'ofi',
    'partials/menu',
    'partials/main_menu',
    'partials/calculator'
]);