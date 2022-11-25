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

function distribucionNormal(media, stdDev) {
    const uniforme =  Math.random();
    return media + (stdDev * Math.sqrt(-2*Math.log(uniforme)) * Math.sin(2*Math.PI*uniforme));
}

const normal = [];

for (let i=0; i< 1000; i++)
    normal.push(distribucionNormal(0.5, 0.1));

console.log(normal);
const dNormal = {
        entre_00_02: 0,
        entre_02_04: 0,
        entre_04_06: 0,
        entre_06_08: 0,
        entre_08_1: 0
    };
    
    for (let valor of normal) {
        if (valor < 0.2)
        dNormal.entre_00_02++;
        else if (valor < 0.4)
        dNormal.entre_02_04++;
        else if (valor < 0.6)
        dNormal.entre_04_06++;
        else if (valor < 0.8)
        dNormal.entre_06_08++; 
        else
        dNormal.entre_08_1++;
    }
    
    console.log('Distribución normal o gaussiana de valores:');
    console.log(dNormal);