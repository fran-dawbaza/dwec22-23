
function saludo(){
    alert('Hola 2ºDAW');
}        

function cambia(){
    document.getElementById('titulo').innerHTML='Título cambiado';
    document.getElementById('boton2').style.backgroundColor='#F00';
}

document.getElementById('boton').addEventListener('click',saludo);
document.getElementById('boton2').addEventListener('click',cambia);