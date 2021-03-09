var numeroUtente = prompt("inserisci un numero di 4 cifre");

console.log(numeroUtente);

var somma = 0;

for (var i = 0; i < numeroUtente.length; i++) {
  var numeroSingolo = parseInt(numeroUtente[i]);
  somma += numeroSingolo;
}

console.log(somma);
