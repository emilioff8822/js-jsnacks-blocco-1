// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

const n = parseInt(prompt("Inserisci il valore di N"))
console.log(n);
let messaggio = document.getElementById ("cubo");


if (!isNaN(n)) {
  
  for (let i = 1; i <= n; i++) {
    console.log(i + "^3 = " + i ** 3);

    messaggio = ` ciao`
  }
} else {
  console.log("Inserisci un numero valido.");
}

// messaggio.innerHTML = i + "^3 = " + i ** 3;
