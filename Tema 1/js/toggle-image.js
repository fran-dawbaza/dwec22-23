function toggleImage(){
    let fuente=document.getElementById('imagen');

    if (fuente.src=='https://ingenieriacivilyarquitectura.com/wp-content/uploads/2021/08/fachadas-de-casas-bonitas-y-pequenas-4.jpg') {
        fuente.src='https://ideasbonitaspara.com/wp-content/uploads/2018/12/fachadas-de-casas-modernas-de-un-piso-pequenas-2.jpg';
    }
    else {
        fuente.src='https://ingenieriacivilyarquitectura.com/wp-content/uploads/2021/08/fachadas-de-casas-bonitas-y-pequenas-4.jpg';
    }
}

function cambiaCapa(){
    document.getElementById('capa').innerHTML += '<h3>a esto mismo se ha cambiado</h3>';
}

function escribeDocument() {
    window.document.write('<h1>Esto aparece con document.write</h1>');
    document.write('<h1>Esto aparece con document.write</h1>');
}

document.getElementById('imagen').addEventListener('click',toggleImage);
document.getElementById('cabecera').addEventListener('click',cambiaCapa);
document.getElementById('capa').addEventListener('click',escribeDocument);

