
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

console.log(Object.entries(localStorage))

let keys = Object.keys(localStorage);
/*for(let key of keys) {
    alert(`${key}: ${localStorage.getItem(key)}`);
}*/

for (let [clave,valor] of Object.entries(localStorage)){
    alert(`clave: ${clave}; valor: ${valor}`);
}

/*
for (let i=0; i<localStorage.length;i++){
    alert(`índice: ${i};  clave: ${localStorage.key(i)}; valor: ${localStorage.getItem(localStorage.key(i))}`);
}*/

//
localStorage.setItem('manolito', JSON.stringify({partidas:[]}));
///
const usuario = JSON.parse(localStorage.getItem('manolito'));
usuario.partidas.push(30);
localStorage.setItem('manolito', JSON.stringify(usuario));

