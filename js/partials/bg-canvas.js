// const properties is global

define(["jquery", "stats"], function($, Stats) {
  // stats
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "fixed";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "auto";
  stats.domElement.style.bottom = "0px";
  // document.body.appendChild(stats.domElement); // СЧЁТЧИК - раскоментить для теста

  const canvas = $(".bg-canvas")[0];
  const ctx = canvas.getContext("2d");
  const w = (canvas.width = innerWidth);
  const h = (canvas.height = innerHeight);

  const parts = [];

  class Part {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vX = Math.random() * (properties.partMaxV * 2) - properties.partMaxV;
      this.vY = Math.random() * (properties.partMaxV * 2) - properties.partMaxV;
    }

    position() {
      const newX = this.x + this.vX;
      const newY = this.y + this.vY;

      // проверка зн выход за рамки
      if (newX > w || newX < 0) {
        this.vX *= -1;
      }
      if (newY > h || newY < 0) {
        this.vY *= -1;
      }

      this.x = newX;
      this.y = newY;
    }

    reDraw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.partRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = properties.partColor;
      ctx.fill();
    }
  }

  document.addEventListener("mousemove", logKey);
  let xxx = 0;
  let yyy = 0;
  function logKey(e) {
    xxx = e.clientX;
    yyy = e.clientY;
  }

  class MousePart extends Part {
    constructor() {
      super();
      this.x = xxx;
      this.y = yyy;
      this.vX = 0;
      this.vY = 0;
    }

    position() {
      this.x = xxx;
      this.y = yyy;
    }
  }

  document.addEventListener("click", createStaticDot);
  function createStaticDot(e) {
    parts.push(new MousePartStatic(e.clientX, e.clientY));
  }

  class MousePartStatic extends MousePart {
    constructor(x, y) {
      super();
      this.x = x;
      this.y = y;
    }
    position() {}
  }

  function reDrowBg() {
    ctx.clearRect(0, 0, w, h);
  }

  function reDrawparts() {
    for (i in parts) {
      parts[i].position();
      parts[i].reDraw();
    }
  }

  function drawLines() {
    let x1, x2, y1, y2, l, opacity;
    for (i in parts) {
      for (j in parts) {
        x1 = parts[i].x;
        y1 = parts[i].y;
        x2 = parts[j].x;
        y2 = parts[j].y;
        l = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        if (l < properties.maxL) {
          opacity = 1 - l / properties.maxL;
          ctx.lineWidth = "0.5";
          ctx.strokeStyle = `${properties.partLineSubColor} ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    stats.begin();

    reDrowBg();
    reDrawparts();
    drawLines();

    stats.end();

    // рекурсия
    requestAnimationFrame(loop);
  }

  function init() {
    parts.push(new MousePart());

    for (let index = 0; index < properties.partCount; index++) {
      parts.push(new Part());
    }

    loop();
  }

  if (window.innerWidth > 1023) {
    init();
  }
});
