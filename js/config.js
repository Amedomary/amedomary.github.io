require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery/jquery',
        html5shiv: 'bower_components/html5shiv/dist/html5shiv',
        modernizr: 'external/modernizr-custom',
        ofi: 'external/ofi.min',
    },
    packages: [

    ],
    shim: {

    }
});

//- Модули, подключаемые на всех страницах
require([
    'modernizr',
    'ofi'
]);