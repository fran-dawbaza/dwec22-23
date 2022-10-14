"use strict";

saluda('Pepito');

function saluda(persona) {
    alert('Buenos días '+ persona);
}

// En la siguiente línea se produce error, por eso la comento
//saluda2('Manolito');

const saluda2 = function (persona) {
    alert('Buenos días '+ persona);
};

/* Los callbacks son funciones que tienen como parámetro otra función. 
Los callbacks aseguran que una función no se va a ejecutar antes de que se 
complete una tarea, sino que se ejecutará justo después de que la tarea 
se haya completado.Los callbacks tienen 3 usos principales:
1.- Realizar tareas asíncronas
    Por ejemplo para la gestión de eventos (hacer algo cuando se produzca
    un evento determinado).
2.- Programación funcional
    Por ejemplo
        array.filter(elemento=>elemento>100); 
3.- Evitar depedencias entre funciones
*/
