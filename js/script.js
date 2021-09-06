// Un alert() espone 5 numeri generati casualmente.


var arr = [];

while(arr.length < 3){
    var random = Math.floor(Math.random() * 10) + 1;

    if(arr.includes(random) == false);
    arr.push(random);
}
alert(arr);

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var i = 0;

var arrNumeri = [];
var indovinati = [];

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

setTimeout(secondi, 1000);
function secondi(){
    for(i = 0; i < 3; i++){
    var numeri = parseInt(prompt("Inserisci i numeri che ricordi uno alla volta."));
    arrNumeri.push(numeri);
    } 
    console.log(arrNumeri);

    for(var i = 0; i < arrNumeri.length; i++){
        if(arr.includes(arrNumeri[i]) == true);
    }  
}

   // } else if(arrNumeri.includes(arr) == true){
    //     arrNumeri.push(arr);
    //     alert("Hai indovinato i seguenti numeri: " + );
    // } else 
    //     alert("Non hai indovinato nessun numero.");