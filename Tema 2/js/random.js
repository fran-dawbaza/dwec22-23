"use strict";

const numeros = [];

for (let i=0; i< 1000; i++)
    numeros.push(Math.random());

console.log('Mil valores alearios entre 0 y 1 uniformemente distribuidos:');
console.log(numeros);

const distribucion = {
    entre_00_02: 0,
    entre_02_04: 0,
    entre_04_06: 0,
    entre_06_08: 0,
    entre_08_1: 0
};

for (let valor of numeros) {
    if (valor < 0.2)
        distribucion.entre_00_02++;
    else if (valor < 0.4)
        distribucion.entre_02_04++;
    else if (valor < 0.6)
        distribucion.entre_04_06++;
    else if (valor < 0.8)
        distribucion.entre_06_08++; 
    else
        distribucion.entre_08_1++;
}

console.log('Distribución de valores:');
console.log(distribucion);