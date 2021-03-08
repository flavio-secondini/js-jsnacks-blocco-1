var potenzeDi2 = [];

for (var i = 0; i < 1000; i++) {
  potenzeDi2.push(2 ** i);
  if (2 ** i > 1000) {
    break
  }
}

console.log(potenzeDi2);
