"use strict";

const tree = document.getElementById('tree');
const listaLI = tree.querySelectorAll('li');

for (let li of listaLI) {
    let texto = li.firstChild;
    //console.log(texto);
    let span = document.createElement('span');
    span.append(texto);
    li.prepend(span);
}

tree.addEventListener('click', evento=>{
    if (evento.target.tagName !== 'SPAN') return;
    const nodoLI = evento.target.parentElement;
    const nodoUL = nodoLI.querySelector('ul');
    if (nodoUL) nodoUL.hidden = !nodoUL.hidden;
});