const properties = {
  partColor: "rgba(255, 255, 255, 1)",
  partLineSubColor: "rgba(255, 255, 255, ", // сабстрока для опасити
  partRadius: 3,
  partCount: Math.floor(window.innerWidth * 0.012),
  partMaxV: 0.5,
  maxL: 210 * window.devicePixelRatio,
};

require(["./config"], function() {
  require(["partials/background", "partials/bg-canvas", "partials/mouse"]);
});
