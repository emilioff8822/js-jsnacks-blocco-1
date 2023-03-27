/*Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
*/

let numero = prompt("Inserisci un numero di 4 cifre:");
let somma = 0;

for (var i = 0; i < numero.length; i++) {
    somma += parseInt(numero[i]);
}
console.log("La somma delle cifre del numero " + numero + " è: " + somma);



