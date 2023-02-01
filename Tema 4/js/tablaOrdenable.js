"use strict";

document.getElementById('grid').addEventListener('click', evento=>{
    if (evento.target.tagName!=='TH') return;
    const columna = Array.from(evento.target.parentElement.cells).indexOf(evento.target);
    const modo = evento.target.dataset.type;
    console.log('columna: '+columna+', modo de ordenación: '+ modo);
});