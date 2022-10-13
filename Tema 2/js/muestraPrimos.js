"use strict";

let numero = +prompt('Introduce un número positivo', 100);

function esPrimo(n){
/* 
    // bucle con while, lo dejamos después con for ya que reduce el código
    // y se ve más sencillo
    let i=2;
    while(n>i) { // si es divisible salgo del while prematuramente
       // console.log(`es primo ${n}? -> i es ${i}`);
        if ((n % i) === 0){
            return false;
        }
        i++;
    }*/

    for (let i=2; n>i; i++){
        if ((n % i) === 0){
            return false;
        }
    }
    return true;
}

// Muestro todos los primos menores que numero
for (let i=2; i<numero;i++) {
    if (esPrimo(i)) {
        console.log(`${i} es primo`);
    }  
}

/* código sin funciones:

let numero = +prompt('Introduce un número positivo', 100);

for (let i=2; i<numero;i++) {
    // si es primo lo mostramos por consola
    let j=2;  // i=2 , j=0
    let esPrimo=true;

    while(j<i && esPrimo) { // si es divisible salgo del while prematuramente
        if ((i % j) === 0){
            esPrimo=false;
        }
        j++;
    }
    // si j es igual a numero es porque hemos llegado al final y
    // no era divisible
    if (esPrimo) {
        console.log(`${i} es primo`);
    }  
}

*/