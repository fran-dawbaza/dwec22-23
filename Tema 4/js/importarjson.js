import {main} from "./main.js";
fetch("./asset/productos.json")
    .then(result=>result.json())
    .then(productos=>{
        main(productos);
    });