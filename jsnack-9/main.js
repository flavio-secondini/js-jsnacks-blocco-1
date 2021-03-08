var listaNumeri = [];

var somma = 0;

var media = 0

for (var i = 0; i < 10; i++) {
  listaNumeri.push(i);
  somma += i;
  media = somma/10;
}

console.log(somma);

console.log(media);
