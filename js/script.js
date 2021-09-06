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


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.