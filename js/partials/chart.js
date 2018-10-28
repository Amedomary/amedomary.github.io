// ====================
// robinzon: popup.js
// 15.01.2018: Amedomary
// ---------------------
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