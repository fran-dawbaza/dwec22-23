"use strict";

const tareas = [
    "Hacer la compra",
    "Llevar el coche al taller",
    "Mirar las ofertas",
    "Ir a música"
];

/* 
El método filter devuelve un array nuevo filtrado con una
condición, que se establecerá en el callback.
filter necesita un "predicado" como callback.
Un predicado es una función que devuelve true o false. 
El callback se ejecutará automáticamente para cada uno 
de los elementos del array. Además,este callback puede usar 
hasta 3 parámetros: 
- El primer parámetro será un elemento del array,
- El segundo parámetro, si se usa, será el índice o posición
que ocupa ese elemento en el array.
- El tercer parámetro, si se usa, será el propio array.

 */
const tareasSinO = 
    tareas.filter(elemento => !elemento.includes('o'));

console.log(tareasSinO);

tareas.miFilter = function (callback) {
    const resultado = [];
    for (let i = 0; i< this.length; i++) {
        if (callback(this[i], i, this)) 
            resultado.push(this[i]);
    }
    return resultado;
};

const tareasSinOConMiFilter = 
    tareas.miFilter(elemento => !elemento.includes('o'));

console.log(tareasSinOConMiFilter);

let misTareas = '';

/*function maquetaTarea(tarea) {
    misTareas += '<li>' + tarea + '</li>';
}
*/
/*const maquetaTarea = tarea => {
    misTareas += '<li>' + tarea + '</li>';
};*/

tareas.forEach(tarea => misTareas += '<li>' + tarea + '</li>');


const tareasConLI = tareas
                        .map(tarea=>`<li>${tarea}</li>`)
                        .join('');
console.log(tareasConLI);
document.getElementById('tareas').innerHTML = `
<ul>
${tareasConLI}
</ul>
`;


const users = [
    {id: 1, name: "Celina"},
    {id: 2, name: "David"},
    {id: 3, name: "Federico"}
];

//let user = users.find(item => item.id == 1);
/*function idEsUno(obj) {
    return obj.id === 1;
}*/



const user = users.find(e => e.name === "Fderico") ?? {id: 'niguno',name:'no encontrado'};

alert('id: ' + user.id + ', name: ' + user.name); // Celina