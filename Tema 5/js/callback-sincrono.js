function saluda(persona){
    alert('hola '+ persona);
}

function holaMundo(cb){
    cb('pepe');
}

holaMundo(saluda);