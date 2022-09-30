function respuestaCorrecta(pregunta){
    alert('¡¡¡Enhorabuena has acertado!!!');
    document.getElementById(pregunta).style.color='#00FF00';
}

function respuestaIncorrecta(pregunta){
    alert('Vaya, no has atinado');
    document.getElementById(pregunta).style.color='#FF0000';
}
/*

function pregunta1Correcta(){
    respuestaCorrecta('pregunta1');
}
function pregunta1Incorrecta(){
    respuestaIncorrecta('pregunta1');
}

function pregunta2Correcta(){
    respuestaCorrecta('pregunta2');
}
function pregunta2Incorrecta(){
    respuestaIncorrecta('pregunta2');
}



document.getElementById('dheli')
    .addEventListener('click', pregunta1Correcta);
document.getElementById('ankara')
    .addEventListener('click', pregunta1Incorrecta);

document.getElementById('lunaOk')
    .addEventListener('click', pregunta2Correcta);
document.getElementById('lunaNoOk')
    .addEventListener('click', pregunta2Incorrecta);
*/