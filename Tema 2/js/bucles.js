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
