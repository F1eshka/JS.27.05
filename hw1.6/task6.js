const USD_TO_EUR = 0.88;

let dollars = prompt("Введи суму в доларах:");

let euros = Number(dollars) * USD_TO_EUR;

alert(dollars + " USD дорівнює " + euros.toFixed(2) + " EUR");
