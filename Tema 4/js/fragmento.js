import {posts} from './posts.js';

console.log(posts);

const contenedor = document.getElementById('contenedor');

/* queremos hacer esto:
<article>
    <h3>titulo</h3>
    <p>contenido ... </p>
</article>
*/
// Primero lo hacemos con createElement
const entrada = document.createElement('article');
const titulo = document.createElement('h3');
const contenido = document.createElement('p');

titulo.append(posts[0].title);
contenido.append(posts[0].body);
entrada.append(titulo,contenido);
contenedor.append(entrada); // lo añado al DOM

// El segundo post lo  insertamos de otra forma

let plantilla = `
<article>
<h3>${posts[1].title}</h3>
<p>${posts[1].title}</p>
</article>`;
contenedor.innerHTML += plantilla;