require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery/jquery',
        html5shiv: 'bower_components/html5shiv/dist/html5shiv',
        modernizr: 'external/modernizr-custom',
        ofi: 'external/ofi.min',
        animejs: 'bower_components/animejs/anime',
        'jquery-validation': 'bower_components/jquery-validation/dist/jquery.validate',
        nouislider: 'bower_components/nouislider/distribute/nouislider'
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
    'partials/main-menu',
    'partials/animation',
]);