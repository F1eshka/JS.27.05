let distance = prompt("Введи відстань між містами (в км):");

let time = prompt("За скільки годин ти хочеш дістатися?");

let speed = Number(distance) / Number(time);

alert("Щоб встигнути вчасно, потрібно рухатися зі швидкістю " + speed.toFixed(2) + " км/год");
