var numeri = [];

for (var i = 0; i < 6; i++) {
  var numeroUtente = (parseInt(prompt("Scrivi un numero")))
  if (numeroUtente%2 != 0) {
    numeri.push(numeroUtente)
  }
}

console.log(numeri);
