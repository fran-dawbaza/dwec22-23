import {posts} from './posts.js';

console.log(posts);

const contenedor = document.getElementById('contenedor');

/* queremos hacer esto para cada post:
<article>
    <h3>titulo</h3>
    <p>contenido ... </p>
</article>
<hr>
*/
// Primero lo hacemos con createElement y documentFragment
/*const fragmento = document.createDocumentFragment();
for (let post of posts) {
    let entrada = document.createElement('article');
    let titulo = document.createElement('h3');
    let contenido = document.createElement('p');

    titulo.append(post.title);
    contenido.append(post.body);
    entrada.append(titulo,contenido);
    entrada.append(document.createElement('hr'));
    fragmento.append(entrada); // lo añado al fragmento
}

contenedor.append(fragmento);*/

// El segundo post lo  insertamos de otra forma: template string (backstics)

const plantilla = `
<article>
    <h3>${posts[1].title}</h3>
    <p>${posts[1].title}</p>
</article>
<hr>`;
//contenedor.innerHTML += plantilla;

contenedor.innerHTML += posts.map(p=>`
                        <article>
                            <h3>${p.title}</h3>
                            <p>${p.title}</p>
                        </article>
                        <hr>`).join('');

const ocultaArticulo = evento => {
    if (evento.target.tagName === 'H3'){
        evento.target.parentElement.hidden=true;
        console.log(evento.target.parentElement.nextSiblingElement);
        evento.target.parentElement.nextElementSibling.hidden=true;
        console.log('currentTarget: ', evento.currentTarget);    
    }
};
document.body.addEventListener('click', ocultaArticulo);

/* De la siguiente forma también funciona pero no es eficiente, es contraproducente
const ocultaH3 = evento => {
    evento.target.parentElement.hidden=true;
    evento.target.parentElement.nextElementSibling.hidden=true;
}

const encabezados = document.querySelectorAll('h3');

for (let encabezado of encabezados) {
    encabezado.addEventListener('click', ocultaH3);
}
*/