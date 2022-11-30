/* 
// Con setInterval :

let contador=0;
let intervalo;

function actualizaContador(){
    document.getElementById('contador').textContent = contador++;
}

function detenerContador(){
    clearInterval(intervalo);
    intervalo = -1;
}

intervalo=setInterval(actualizaContador,1000);



document.getElementById('parar')
        .addEventListener('click', detenerContador);

document.getElementById('continua')
        .addEventListener('click', ()=>{
            if (intervalo === -1)
                intervalo=setInterval(actualizaContador,1000);
        });
*/

// Con setTimeout
let contador=0;
let timeout;

function actualizaContador(){
    document.getElementById('contador').textContent = contador++;
    if (timeout !== -1)
        timeout=setTimeout(actualizaContador,1000);
}

function detenerContador(){
    //clearTimeout(timeout);
    timeout = -1;
}

timeout=setTimeout(actualizaContador,1000);



document.getElementById('parar')
        .addEventListener('click', detenerContador);

document.getElementById('continua')
        .addEventListener('click', ()=>{
            if (timeout === -1)
                timeout=setTimeout(actualizaContador,1000);
        });