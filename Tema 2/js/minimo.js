"use strict";

function min(a,b) {
    // no es adecuado usar ||
    /*if (+a<+b) return a;
    return b;*/
    return +a<+b ? a : b;
}


function pow(base,exponente) {
    
    //return base**exponente;
    /*let resultado=1;
    for (let i=0; i<exponente;i++){
        resultado *= base;
    }
    return resultado;*/
    return Math.pow(base,exponente);
}

console.log(min(3,5), 'debe dar 3');
console.log(min(6,-5), 'debe dar -5');
console.log(min(Infinity,43), 'debe dar 43');
console.log(min('3','5'), 'debe dar 3');
console.log(min('3r','5'), 'debe dar 5');

console.log(pow(3,3), 'debe dar 27');
