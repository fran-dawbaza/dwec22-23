//import {main} from "./main.js";

/*fetch("./asset/productos.json")
    .then(result=>result.json())
    .then(productos=>{
        main(productos);
    });*/

const resultado = await fetch("./asset/productos.json");
const productos = await resultado.json();

//main(productos);

const productosBaratos20 = productos.filter(p=>p.precio<20);
const listadoProductos = '<ul>' 
                            + productosBaratos20
                                        .map(p=>`<li>${p.nombre}</li>`)
                                        .join('')
                            + '</ul>';
document.getElementById('datosDeJSON').innerHTML = listadoProductos;


