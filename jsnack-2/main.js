var parola1 = prompt("inserisci la prima parola");

var parola2 = prompt("inserisci la seconda parola");

if (parola1.length < parola2.length) {
  console.log(parola1);
  console.log(parola2);
} else if (parola1.length > parola2.length) {
  console.log(parola2);
  console.log(parola1);
} else {
  console.log("lunghezza uguale");
}
