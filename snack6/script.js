// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

const n = parseInt(prompt("Inserisci il valore di N"))
console.log(n);
let messaggio = document.getElementById("cubo");

if (isNaN(n)) {
    console.log("Inserisci un numero valido.");
}

for (let i = 1; i <= n; i++) {
  messaggio.innerHTML += (i + "^3 = " + i ** 3 + '<br>');
  console.log(i);
}

let name = 'Emilio';

console.log('ciao ${name}');
console.log(`ciao ${name}`);