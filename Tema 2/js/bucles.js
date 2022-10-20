"use strict";

function pintaTriangulo(numeroLineas) {
    let asteriscos = '';
    for (let i=1; i<=numeroLineas; i++) {
        let espacios = '';
        for (let j = numeroLineas - i; j>0;j--) {
            espacios += ' ';
        }
        //asteriscos = i===1 ? '*' : asteriscos+'**'; 
        
        if (i===1) asteriscos = '*';
        else       asteriscos += '**';
        
        /*let asteriscos = '*';
        for (let j=1; j<i; j++){
            asteriscos += '**';
        }*/
        console.log(espacios+asteriscos);
    }
}

function espacios(numeroLinea, numeroLineas){
    let espacios = '';
    for (let j = numeroLineas - numeroLinea; j>0;j--) {
        espacios += ' ';
    }
    return espacios;
}

function asteriscos(numeroLinea) {
    let asteriscos = '*'
    if (numeroLinea !== 1) {
        for (let i=1;i<numeroLinea;i++){
            asteriscos += '**';
        }
    }
    return asteriscos;
}

function pintaTrianguloFuncional(numeroLineas) {
    for (let i=1; i<=numeroLineas; i++) {
        const linea = espacios(i,numeroLineas) + asteriscos(i);
        console.log(linea);
    }
}


console.log('Llamada con parámetro 1: ');
pintaTrianguloFuncional(1);

console.log('Llamada con parámetro 3: ');
pintaTrianguloFuncional(3);

console.log('Llamada con parámetro 4: ');
pintaTrianguloFuncional(4);

console.log('Llamada con parámetro -1: ');
pintaTrianguloFuncional(-1);


function fibonacciIterativo(posicion) {
    if (posicion < 1) return 0;
    if (posicion < 3) return 1;
    
    let n = 0;
    for (let n_1 = 1, n_2 = 1, i=2;i<posicion;i++){
        n = n_1 + n_2;
        n_2 = n_1;
        n_1 = n;
    }
    return n;
}

function fibonacciRecursivo(posicion) {
    if (posicion < 1n) return 0;
    if (posicion < 3n) return 1;
    return fibonacciRecursivo(posicion-1) + fibonacciRecursivo(posicion-2);
}



console.log('Debe dar 1: '+ fibonacciIterativo(2));
console.log('Debe dar 2: '+ fibonacciIterativo(3));
console.log('Debe dar 8: '+ fibonacciIterativo(6));
console.log('Debe dar 21: '+ fibonacciIterativo(8));
console.time('fiboIterativo50');
console.log('fibonnacci(1000): '+ fibonacciIterativo(1000));
console.timeEnd('fiboIterativo50');
//console.log('fibonnacci(100000): '+ fibonacciIterativo(100000));
console.log('Debe dar 1: '+ fibonacciRecursivo(2));
console.log('Debe dar 2: '+ fibonacciRecursivo(3));
console.log('Debe dar 8: '+ fibonacciRecursivo(6));
console.log('Debe dar 21: '+ fibonacciRecursivo(8));
console.time('fiboRecursivo50');
console.log('fibonnacci(50): '+ fibonacciRecursivo(50));
console.timeEnd('fiboRecursivo50');