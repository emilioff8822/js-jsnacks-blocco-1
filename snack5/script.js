/*
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/


let numeriDispari = []; // crea un array vuoto

for (let i = 0; i < 6; i++) {
  let numero = parseInt(prompt("Inserisci un numero:"))

  if (numero % 2 !== 0) { //verifica se e' dispari

   numeriDispari.push(numero); // con push inserisco il numero nell'array vuoto


  }  


}

console.log(numeriDispari); // stampa l'array numeriDispari contenente solo i numeri dispari inseriti dall'utente