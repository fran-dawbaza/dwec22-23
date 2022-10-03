function compara3 (evento){
    evento.preventDefault();
    const n1 = +document.getElementById('n1').value;
    const n2 = +document.getElementById('n2').value;

    console.log(n1);

    document.getElementById('resultado').innerHTML ='n1 es mayor que n2 y que n3';
}

document
        .getElementById('comparar')
        .addEventListener('click', compara3);
