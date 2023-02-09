//import {paginacion} from "./paginacion.js";

export function main(productos){
    const productosBaratos20 = productos.filter(p=>p.precio<20);
    const listadoProductos = '<ul>' 
    + productosBaratos20
        .map(p=>`<li>${p.nombre}</li>`)
        .join('')
    + '</ul>';
    document.getElementById('datosDeJSON').innerHTML = listadoProductos;
};