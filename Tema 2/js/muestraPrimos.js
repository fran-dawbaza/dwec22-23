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