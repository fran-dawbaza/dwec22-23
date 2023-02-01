const tabla = document.getElementById('gridDatos');
const buscar = document.createElement('input');
buscar.setAttribute('placeholder','Introduce tu búsqueda');
buscar.setAttribute('type','text');
tabla.parentElement.prepend(buscar);

buscar.addEventListener('input', evento=>{
    //alert(buscar.value);
});