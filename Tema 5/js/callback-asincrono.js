const imagenes = [
    "https://phantom-expansion.unidadeditorial.es/a0ba118f3cf92c43a0d109dda5791338/crop/0x297/673x745/f/jpg/assets/multimedia/imagenes/2021/07/20/16267783396524.jpg",
    "https://perritoscuquis.files.wordpress.com/2017/04/doggy.jpg",
    "https://images.hola.com/imagenes/mascotas/20190426141233/razas-perros-pequenos-ninos/0-673-740/razas-perros-ninos-t.jpg"
];

let contador=0;

function cambiaImagen(evento, callback){
    console.time('CargaImagen');
    evento.target.src=imagenes[(++contador)%imagenes.length];
    evento.target.addEventListener('load',callback);
}

function funcion1() {
    console.timeEnd('CargaImagen');
}

document.getElementById('imagen').addEventListener("click",(e)=>{
    cambiaImagen(e,funcion1);
});