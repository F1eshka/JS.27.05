let money = prompt("Скільки в тебе грошей (грн)?");

let price = prompt("Скільки коштує одна шоколадка (грн)?");

let chocolates = Math.floor(Number(money) / Number(price));

let change = Number(money) % Number(price);

alert("Ти можеш купити " + chocolates + " шоколадок і в тебе залишиться " + change.toFixed(2) + " грн решти");
