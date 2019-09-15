require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery/jquery.min',
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
    // 'partials/landing_vue',
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZS5jb25maWcoe1xyXG4gICAgYmFzZVVybDogJ2pzJyxcclxuICAgIHBhdGhzOiB7XHJcbiAgICAgICAganF1ZXJ5OiAnanF1ZXJ5L2pxdWVyeS5taW4nLFxyXG4gICAgICAgIG1vZGVybml6cjogJ2V4dGVybmFsL21vZGVybml6ci1jdXN0b20nLFxyXG4gICAgICAgIG9maTogJ2V4dGVybmFsL29maS5taW4nLFxyXG4gICAgICAgIGFuaW1lanM6ICdib3dlcl9jb21wb25lbnRzL2FuaW1lanMvYW5pbWUnLFxyXG4gICAgICAgIHZ1ZTogJ2Jvd2VyX2NvbXBvbmVudHMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuY29tbW9uJyxcclxuICAgICAgICB2dWVqczogJ2Jvd2VyX2NvbXBvbmVudHMvdnVlL2Rpc3QvdnVlJyxcclxuICAgICAgICAnanF1ZXJ5LXZhbGlkYXRpb24nOiAnYm93ZXJfY29tcG9uZW50cy9qcXVlcnktdmFsaWRhdGlvbi9kaXN0L2pxdWVyeS52YWxpZGF0ZSdcclxuICAgIH0sXHJcbiAgICBwYWNrYWdlczogW1xyXG5cclxuICAgIF0sXHJcbiAgICBzaGltOiB7XHJcblxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vLSDQnNC+0LTRg9C70LgsINC/0L7QtNC60LvRjtGH0LDQtdC80YvQtSDQvdCwINCy0YHQtdGFINGB0YLRgNCw0L3QuNGG0LDRhVxyXG5yZXF1aXJlKFtcclxuICAgICdtb2Rlcm5penInLFxyXG4gICAgJ29maScsXHJcbiAgICAncGFydGlhbHMvbWVudScsXHJcbiAgICAncGFydGlhbHMvbWFpbl9tZW51JyxcclxuICAgICdwYXJ0aWFscy9jYWxjdWxhdG9yJ1xyXG4gICAgLy8gJ3BhcnRpYWxzL2xhbmRpbmdfdnVlJyxcclxuXSk7XHJcbiJdLCJmaWxlIjoiY29uZmlnLmpzIn0=
