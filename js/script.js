// Un alert() espone 5 numeri generati casualmente.


var arr = [];

while(arr.length < 5){
    var random = Math.floor(Math.random() * 10) + 1;

    if(arr.includes(random) == false);
    arr.push(random);
}
alert(arr);

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var i = 0;

setTimeout(secondi, 3000);
function secondi(){
    for(i = 0; i < 5; i++){
    prompt("Inserisci i numeri che ricordi uno alla volta.");
    }
}


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Generare 5 numeri casuali e salvarli in un array, poi far partire il timer di 30 secondo dopo aver chiuso l’alert. 
// Dopo fai partire il set time out di 30 secondi. 
// Dentro set time out far uscire 5 prompt per inserire i numeri e verificare come da istruzioni.
