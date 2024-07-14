// LineTo()
const c = document.getElementById("canvas");
const context = c.getContext("2d");

context.beginPath();
context.moveTo(0, 0);

context.lineTo(250, 150);
context.stroke();

// Triangle - LineTo()
const c2 = document.getElementById("canvas2");
const context2 = c2.getContext("2d");

context2.beginPath();
context2.moveTo(100, 100);

context2.lineTo(200, 100);
context2.lineTo(200, 150);
context2.lineTo(100, 100);
context2.stroke();

// Square - LineTo()
const c3 = document.getElementById("canvas3");
const context3 = c3.getContext("2d");

context3.beginPath();
context3.moveTo(50, 50);
context3.strokeStyle = "red";
context3.lineWidth = "3";

context3.lineTo(300, 50);
context3.lineTo(300, 250);
context3.lineTo(50, 250);
context3.lineTo(50, 50);

context3.stroke();

// Rect()
const c4 = document.getElementById("canvas4");
const context4 = c4.getContext("2d");

context4.beginPath();
context4.moveTo(50, 50);

context4.rect(50, 50, 400, 200);

context4.stroke();

// fillReact()
const c5 = document.getElementById("canvas5");
const context5 = c5.getContext("2d");

context5.beginPath();
context5.moveTo(50, 50);

context5.fillRect(50, 50, 400, 200);

context5.stroke();

// Arc()
const c6 = document.getElementById("canvas6");
const context6 = c6.getContext("2d");

context6.beginPath();

context6.arc(250, 150, 50, 0, 8);

context6.stroke();

// quadraticCurveTo()
const c7 = document.getElementById("canvas7");
const context7 = c7.getContext("2d");

context7.beginPath();
context7.moveTo(20, 20);

context7.quadraticCurveTo(20, 150, 150, 150);

context7.stroke();

// Scale()
const c8 = document.getElementById("canvas8");
const context8 = c8.getContext("2d");

context8.beginPath();
context8.moveTo(20, 20);

context8.fillRect(50, 50, 100, 100);
context8.fillStyle = "red";
context8.scale(1.5, 1.5);
context8.fillRect(60, 60, 100, 100);

context8.stroke();

// rotate()
const c9 = document.getElementById("canvas9");
const context9 = c9.getContext("2d");

context9.beginPath();
context9.moveTo(20, 20);

context9.fillRect(50, 50, 100, 100);
context9.fillStyle = "red";
context9.scale(1.5, 1.5);
context9.rotate(0.2);
context9.fillRect(60, 60, 100, 100);

context9.stroke();

// translate()
const c10 = document.getElementById("canvas10");
const context10 = c10.getContext("2d");

context10.beginPath();
context10.moveTo(20, 20);

context10.fillRect(50, 50, 100, 100);
context10.fillStyle = "red";
context10.translate(70, 70);
context10.fillRect(60, 60, 100, 100);

context10.stroke();
