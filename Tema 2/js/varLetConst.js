"use strict";

let nombre='Manolito';

function hola() {
    let nombre='Pepito';
    alert('El nombre dentro de la función es '+ nombre);
    if (true){
        let nombre='Ricardín';
        alert('El nombre dentro del bloque en la función es '+ nombre);    
        nombre='otro';
    }
    alert('El nombre fuera del bloque dentro de la función es '+ nombre);    
}

hola();

alert('El nombre fuera de la función es '+ nombre);
