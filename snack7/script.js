/* Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora */





 
 let potenza = 1;
while (potenza < 1000) {
    console.log(potenza);
    potenza *= 2;
}



/**  DIFFERENZE WHILE FOR 
 FOR si usa quando sai il numero esatto di cicli da compiere 
 WHILE si usa quando non lo sai .
 WHILE dividi in tre  

    // 1            // 2                   // 3
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
   

let i = 1; //1
while (i <= 512) { //2
  console.log(i);
  i *= 2; // 3
}
*/