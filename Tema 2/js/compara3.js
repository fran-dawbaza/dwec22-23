function compara3 (evento){
    evento.preventDefault();
    const n1 = +document.getElementById('n1').value;
    const n2 = +document.getElementById('n2').value;
    const n3 = +document.getElementById('n3').value;

    console.log(n1);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML ='n1 es mayor que n2 y n2 mayor que n3';
}

document
        .getElementById('comparar')
        .addEventListener('click', compara3);
