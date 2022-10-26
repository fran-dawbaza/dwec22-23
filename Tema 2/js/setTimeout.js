"use strict";
//let contador=0;

function muestraSegundos(contador){
    contador++;
    console.log('hola desde muestrasegundos');
    document.getElementById('segundos').textContent = contador;
    setTimeout(muestraSegundos,1000,contador);
}

setTimeout(muestraSegundos,1000, 0);

console.log('hola');
/*
let interval = setInterval(muestraSegundos,1000);

document.getElementById('parar').
    addEventListener('click',
        ()=>clearInterval(interval)
        );

document.getElementById('continua').
    addEventListener('click',
            ()=>interval = setInterval(muestraSegundos,1000)
            );
*/