var numeroUtente = parseInt(prompt("Scrivi un numero"));
var numeriCubo = [];

for (var i = 0; i <= numeroUtente; i++) {
  numeriCubo.push(i ** 3);
}

console.log(numeriCubo);
