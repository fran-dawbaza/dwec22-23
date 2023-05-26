
localStorage.setItem("producto","Gafas de sol molonas");
//....
let miProducto = localStorage.getItem("producto");

//alert(miProducto);


// Métodos de localStorage
// setItem(clave,valor)
// getItem(clave)
// key(indice)
// removeItem(clave)
// clear()


let keys = Object.keys(localStorage);
for(let key of keys) {
    alert(`${key}: ${localStorage.getItem(key)}`);
}

Object.entries(localStorage);

for (let [clave,valor] of Object.entries(localStorage)){
    alert(`clave: ${clave}; valor: ${valor}`);
}

/*
for (let i=0; i<localStorage.length;i++){
    alert(`índice: ${i};  clave: ${localStorage.key(i)}; valor: ${localStorage.getItem(localStorage.key(i))}`);
}*/

// Iniciamos las partidas de manolito, inicialmente no ha jugado
localStorage.setItem('manolito', JSON.stringify({partidas:[]}));


/// Cuando juega, añadimos la partida (en el ejemplo ha obtenido 30 puntos):
// leemos el usuario
const usuario = JSON.parse(localStorage.getItem('manolito'));
// añadimos la partida al array partidas
usuario.partidas.push(30);
// guardamos el usuario
localStorage.setItem('manolito', JSON.stringify(usuario));

