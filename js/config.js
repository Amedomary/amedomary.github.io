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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZS5jb25maWcoe1xyXG4gICAgYmFzZVVybDogJ2pzJyxcclxuICAgIHBhdGhzOiB7XHJcbiAgICAgICAganF1ZXJ5OiAnanF1ZXJ5L2pxdWVyeScsXHJcbiAgICAgICAgaHRtbDVzaGl2OiAnYm93ZXJfY29tcG9uZW50cy9odG1sNXNoaXYvZGlzdC9odG1sNXNoaXYnLFxyXG4gICAgICAgIG1vZGVybml6cjogJ2V4dGVybmFsL21vZGVybml6ci1jdXN0b20nLFxyXG4gICAgICAgIG9maTogJ2V4dGVybmFsL29maS5taW4nLFxyXG4gICAgICAgIGFuaW1lanM6ICdib3dlcl9jb21wb25lbnRzL2FuaW1lanMvYW5pbWUnLFxyXG4gICAgICAgICdqcXVlcnktdmFsaWRhdGlvbic6ICdib3dlcl9jb21wb25lbnRzL2pxdWVyeS12YWxpZGF0aW9uL2Rpc3QvanF1ZXJ5LnZhbGlkYXRlJyxcclxuICAgICAgICBub3Vpc2xpZGVyOiAnYm93ZXJfY29tcG9uZW50cy9ub3Vpc2xpZGVyL2Rpc3RyaWJ1dGUvbm91aXNsaWRlcidcclxuICAgIH0sXHJcbiAgICBwYWNrYWdlczogW1xyXG5cclxuICAgIF0sXHJcbiAgICBzaGltOiB7XHJcblxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vLSDQnNC+0LTRg9C70LgsINC/0L7QtNC60LvRjtGH0LDQtdC80YvQtSDQvdCwINCy0YHQtdGFINGB0YLRgNCw0L3QuNGG0LDRhVxyXG5yZXF1aXJlKFtcclxuICAgICdtb2Rlcm5penInLFxyXG4gICAgJ29maScsXHJcbiAgICAncGFydGlhbHMvbWVudScsXHJcbiAgICAncGFydGlhbHMvbWFpbi1tZW51JyxcclxuICAgICdwYXJ0aWFscy9hbmltYXRpb24nLFxyXG5dKTsiXSwiZmlsZSI6ImNvbmZpZy5qcyJ9
