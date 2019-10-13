require.config({
  baseUrl: "js",
  paths: {
    jquery: "external/jquery-3.4.1.min",
    modernizr: "external/modernizr-custom",
    ofi: "external/ofi.min",
    lodash: "external/lodash.min",
    animejs: "external/anime.min",
    stats: "external/stats.min"
  },
  packages: [

  ],
  shim: {

  }
});

//- Модули, подключаемые на всех страницах
require([
  "modernizr",
  "ofi",
  "partials/menu",
  "partials/main_menu",
  "partials/calculator",
  "partials/mouse"
]);
