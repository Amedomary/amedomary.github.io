// ====================
// Открытие попАпа и запрет скрола на body
// ====================

define(['jquery'], function ($) {
  // var canvas = document.getElementById("canvas");

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  let x = 0;
  let y = 0;

  canvas.width = 900;
  canvas.height = 700;

  const startPoint = -314;
  const endPoint = 314;
  const sizeY = 150;
  const step = Math.PI / 200;
  const stepGrid = 100;

  ctx.beginPath();
  // рисуем 0:0
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#302d2d';
  ctx.fillStyle = '#302d2d';
  ctx.moveTo(0, 350);
  ctx.lineTo(900, 350);
  ctx.stroke();
  ctx.moveTo(450, 0);
  ctx.lineTo(450, 700);
  ctx.stroke();

  ctx.beginPath();
  // рисуем сетку
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#151515';
  for (let index = -350; index < 350; index++) {
    if ((index % stepGrid === 0) && (index !== 0)) {
      ctx.moveTo(index + 450, 0);
      ctx.lineTo(index + 450, 700);
      ctx.stroke();
    }
  }

  for (let index = -250; index < 250; index++) {
    if ((index % sizeY === 0) && (index !== 0)) {
      ctx.moveTo(0, index + 350);
      ctx.lineTo(900, index + 350);
      ctx.stroke();
    }
  }

  ctx.beginPath();
  x = step * startPoint;
  y = 0;

  for (let index = startPoint; index < endPoint; index++) {
    y = Math.sin(x) * (-sizeY); // функция y
    x = x + step; // шаг вперёд

    ctx.strokeStyle = '#5403d2';
    // Отрисовка
    ctx.lineTo(index + 450, y + 350);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(index + 450, y + 350, 1, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(index + 450, y + 350);
  }

  ctx.beginPath();
  x = step * startPoint;
  y = 0;
  for (let index = startPoint; index < endPoint; index++) {
    y = Math.cos(x) * (-sizeY); // функция y
    x = x + step; // шаг вперёд

    ctx.strokeStyle = '#ed3215';
    // Отрисовка
    ctx.lineTo(index + 450, y + 350);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(index + 450, y + 350, 1, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(index + 450, y + 350);
  }

  // ctx.beginPath();
  // x = step * startPoint;
  // y = 0;
  // for (let index = startPoint; index < endPoint; index++) {
  //   y = Math.tan(x) * (-sizeY); // функция y
  //   x = x + step; // шаг вперёд

  //   ctx.strokeStyle = '#34ffdd';
  //   // Отрисовка
  //   ctx.lineTo(index + 450, y + 350);
  //   ctx.stroke();
  //   ctx.beginPath();
  //   ctx.arc(index + 450, y + 350, 1, 0, Math.PI * 2, true);
  //   ctx.stroke();
  //   ctx.beginPath();
  //   ctx.moveTo(index + 450, y + 350);
  // }

  // ctx.beginPath();
  // x = step * startPoint;
  // y = 0;
  // for (let index = startPoint; index < endPoint; index++) {
  //   y = (Math.pow(x, 6)) * .4 * (-sizeY); // функция y
  //   x = x + step; // шаг вперёд

  //   ctx.strokeStyle = 'red';
  //   // Отрисовка
  //   ctx.lineTo(index + 450, y + 350);
  //   ctx.stroke();
  //   ctx.beginPath();
  //   ctx.arc(index + 450, y + 350, 1, 0, Math.PI * 2, true);
  //   ctx.stroke();
  //   ctx.beginPath();
  //   ctx.moveTo(index + 450, y + 350);
  // }

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9jaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQntGC0LrRgNGL0YLQuNC1INC/0L7Qv9CQ0L/QsCDQuCDQt9Cw0L/RgNC10YIg0YHQutGA0L7Qu9CwINC90LAgYm9keVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uICgkKSB7XHJcbiAgLy8gdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG5cclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBsZXQgeCA9IDA7XHJcbiAgbGV0IHkgPSAwO1xyXG5cclxuICBjYW52YXMud2lkdGggPSA5MDA7XHJcbiAgY2FudmFzLmhlaWdodCA9IDcwMDtcclxuXHJcbiAgY29uc3Qgc3RhcnRQb2ludCA9IC0zMTQ7XHJcbiAgY29uc3QgZW5kUG9pbnQgPSAzMTQ7XHJcbiAgY29uc3Qgc2l6ZVkgPSAxNTA7XHJcbiAgY29uc3Qgc3RlcCA9IE1hdGguUEkgLyAyMDA7XHJcbiAgY29uc3Qgc3RlcEdyaWQgPSAxMDA7XHJcblxyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICAvLyDRgNC40YHRg9C10LwgMDowXHJcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyMzMDJkMmQnO1xyXG4gIGN0eC5maWxsU3R5bGUgPSAnIzMwMmQyZCc7XHJcbiAgY3R4Lm1vdmVUbygwLCAzNTApO1xyXG4gIGN0eC5saW5lVG8oOTAwLCAzNTApO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuICBjdHgubW92ZVRvKDQ1MCwgMCk7XHJcbiAgY3R4LmxpbmVUbyg0NTAsIDcwMCk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgLy8g0YDQuNGB0YPQtdC8INGB0LXRgtC60YNcclxuICBjdHgubGluZVdpZHRoID0gMTtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSAnIzE1MTUxNSc7XHJcbiAgZm9yIChsZXQgaW5kZXggPSAtMzUwOyBpbmRleCA8IDM1MDsgaW5kZXgrKykge1xyXG4gICAgaWYgKChpbmRleCAlIHN0ZXBHcmlkID09PSAwKSAmJiAoaW5kZXggIT09IDApKSB7XHJcbiAgICAgIGN0eC5tb3ZlVG8oaW5kZXggKyA0NTAsIDApO1xyXG4gICAgICBjdHgubGluZVRvKGluZGV4ICsgNDUwLCA3MDApO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IC0yNTA7IGluZGV4IDwgMjUwOyBpbmRleCsrKSB7XHJcbiAgICBpZiAoKGluZGV4ICUgc2l6ZVkgPT09IDApICYmIChpbmRleCAhPT0gMCkpIHtcclxuICAgICAgY3R4Lm1vdmVUbygwLCBpbmRleCArIDM1MCk7XHJcbiAgICAgIGN0eC5saW5lVG8oOTAwLCBpbmRleCArIDM1MCk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICB4ID0gc3RlcCAqIHN0YXJ0UG9pbnQ7XHJcbiAgeSA9IDA7XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gc3RhcnRQb2ludDsgaW5kZXggPCBlbmRQb2ludDsgaW5kZXgrKykge1xyXG4gICAgeSA9IE1hdGguc2luKHgpICogKC1zaXplWSk7IC8vINGE0YPQvdC60YbQuNGPIHlcclxuICAgIHggPSB4ICsgc3RlcDsgLy8g0YjQsNCzINCy0L/QtdGA0ZHQtFxyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjNTQwM2QyJztcclxuICAgIC8vINCe0YLRgNC40YHQvtCy0LrQsFxyXG4gICAgY3R4LmxpbmVUbyhpbmRleCArIDQ1MCwgeSArIDM1MCk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGluZGV4ICsgNDUwLCB5ICsgMzUwLCAxLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGluZGV4ICsgNDUwLCB5ICsgMzUwKTtcclxuICB9XHJcblxyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICB4ID0gc3RlcCAqIHN0YXJ0UG9pbnQ7XHJcbiAgeSA9IDA7XHJcbiAgZm9yIChsZXQgaW5kZXggPSBzdGFydFBvaW50OyBpbmRleCA8IGVuZFBvaW50OyBpbmRleCsrKSB7XHJcbiAgICB5ID0gTWF0aC5jb3MoeCkgKiAoLXNpemVZKTsgLy8g0YTRg9C90LrRhtC40Y8geVxyXG4gICAgeCA9IHggKyBzdGVwOyAvLyDRiNCw0LMg0LLQv9C10YDRkdC0XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNlZDMyMTUnO1xyXG4gICAgLy8g0J7RgtGA0LjRgdC+0LLQutCwXHJcbiAgICBjdHgubGluZVRvKGluZGV4ICsgNDUwLCB5ICsgMzUwKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoaW5kZXggKyA0NTAsIHkgKyAzNTAsIDEsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oaW5kZXggKyA0NTAsIHkgKyAzNTApO1xyXG4gIH1cclxuXHJcbiAgLy8gY3R4LmJlZ2luUGF0aCgpO1xyXG4gIC8vIHggPSBzdGVwICogc3RhcnRQb2ludDtcclxuICAvLyB5ID0gMDtcclxuICAvLyBmb3IgKGxldCBpbmRleCA9IHN0YXJ0UG9pbnQ7IGluZGV4IDwgZW5kUG9pbnQ7IGluZGV4KyspIHtcclxuICAvLyAgIHkgPSBNYXRoLnRhbih4KSAqICgtc2l6ZVkpOyAvLyDRhNGD0L3QutGG0LjRjyB5XHJcbiAgLy8gICB4ID0geCArIHN0ZXA7IC8vINGI0LDQsyDQstC/0LXRgNGR0LRcclxuXHJcbiAgLy8gICBjdHguc3Ryb2tlU3R5bGUgPSAnIzM0ZmZkZCc7XHJcbiAgLy8gICAvLyDQntGC0YDQuNGB0L7QstC60LBcclxuICAvLyAgIGN0eC5saW5lVG8oaW5kZXggKyA0NTAsIHkgKyAzNTApO1xyXG4gIC8vICAgY3R4LnN0cm9rZSgpO1xyXG4gIC8vICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIC8vICAgY3R4LmFyYyhpbmRleCArIDQ1MCwgeSArIDM1MCwgMSwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gIC8vICAgY3R4LnN0cm9rZSgpO1xyXG4gIC8vICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIC8vICAgY3R4Lm1vdmVUbyhpbmRleCArIDQ1MCwgeSArIDM1MCk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjdHguYmVnaW5QYXRoKCk7XHJcbiAgLy8geCA9IHN0ZXAgKiBzdGFydFBvaW50O1xyXG4gIC8vIHkgPSAwO1xyXG4gIC8vIGZvciAobGV0IGluZGV4ID0gc3RhcnRQb2ludDsgaW5kZXggPCBlbmRQb2ludDsgaW5kZXgrKykge1xyXG4gIC8vICAgeSA9IChNYXRoLnBvdyh4LCA2KSkgKiAuNCAqICgtc2l6ZVkpOyAvLyDRhNGD0L3QutGG0LjRjyB5XHJcbiAgLy8gICB4ID0geCArIHN0ZXA7IC8vINGI0LDQsyDQstC/0LXRgNGR0LRcclxuXHJcbiAgLy8gICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcclxuICAvLyAgIC8vINCe0YLRgNC40YHQvtCy0LrQsFxyXG4gIC8vICAgY3R4LmxpbmVUbyhpbmRleCArIDQ1MCwgeSArIDM1MCk7XHJcbiAgLy8gICBjdHguc3Ryb2tlKCk7XHJcbiAgLy8gICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgLy8gICBjdHguYXJjKGluZGV4ICsgNDUwLCB5ICsgMzUwLCAxLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgLy8gICBjdHguc3Ryb2tlKCk7XHJcbiAgLy8gICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgLy8gICBjdHgubW92ZVRvKGluZGV4ICsgNDUwLCB5ICsgMzUwKTtcclxuICAvLyB9XHJcblxyXG59KTsiXSwiZmlsZSI6InBhcnRpYWxzL2NoYXJ0LmpzIn0=
