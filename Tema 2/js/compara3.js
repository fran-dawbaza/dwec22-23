"use strict";

function compara3 (evento){
    evento.preventDefault();
    const n1 = +document.getElementById('n1').value;
    const n2 = +document.getElementById('n2').value;
    const n3 = +document.getElementById('n3').value;

    if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
        alert('Los números introducidos deben ser valores numéricos');
        return;
    }

    console.log(n1);

    
    const resultado = document.getElementById('resultado');

    if (n1>=n2) {
        if ( n1>=n3){
            if (n2>=n3) {
                resultado.innerHTML =`${n1} >= ${n2} >= ${n3}`;
            }
            else {
                resultado.innerHTML =`${n1} >= ${n3} >= ${n2}`;
            }
        }
        else { // n1>=n2 && n1<n3 // n3>n1>=n2
            resultado.innerHTML =`${n3} >= ${n1} >= ${n2}`;
        }
    }
    else { // n1<n2
        if (n3<n1 ) { // n3<n1<n2 === n2>n1>n3
            resultado.innerHTML =`${n2} >= ${n1} >= ${n3}`;
        }
        else { // n1<n2 && n3>=n1 === n3>=n1 && n2>n1
            if (n2>=n3){ // n3>=n1 && n2>n1 && n2>=n3 === n2>=n3>=n1
                resultado.innerHTML =`${n2} >= ${n3} >= ${n1}`;
            }
            else { //n3>=n2>=n1
                resultado.innerHTML =`${n3} >= ${n2} >= ${n1}`;
            }
        }
    } 
    
    /* if (n1>=n2 && n2>=n3 && n1>=n3) {
        resultado.innerHTML =`${n1} >= ${n2} >= ${n3}`;
    }
    else if (n1>=n2 && n3>=n2 && n1>=n3){
        resultado.innerHTML =`${n1} >= ${n3} >= ${n2}`;
    }
    if (n2>=n1 && n2>=n3 && n1>=n3) {
        resultado.innerHTML =`${n2} >= ${n1} >= ${n3}`;
    }
    else if (n2>=n3 && n2>=n1 && n3>=n1){
        resultado.innerHTML =`${n2} >= ${n3} >= ${n1}`;
    }
    else if (n3>=n2 && n3>=n1 && n2>=n1) {
        resultado.innerHTML =`${n3} >= ${n2} >= ${n1}`;
    }
    else {
        resultado.innerHTML =`${n3} >= ${n1} >= ${n2}`;
    }
*/
}

document
        .getElementById('comparar')
        .addEventListener('click', compara3);
