var invitati = ["pippo", "pluto", "paperino"];

console.log(invitati);

var nomeUtente = prompt("Nome?");

var check = false;

for (var i = 0; i < invitati.length; i++) {
  if (nomeUtente == invitati[i]) {
    check = true;
  }
}

if (check) {
  alert("Lei può entrare");
} else {
  alert("Lei non è in lista");
}
