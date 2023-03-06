"use strict";

const contenedor = document.getElementById('contenedor');

function muestraUsuarios(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resultado=>resultado.json())
    .then(usuarios=>{
        const liUsuarios= usuarios.map(u=>`
            <li>
                <span>${u.name}</span>
                <span><button onclick="muestraAlbumesPorUsuario(${u.id},'${u.name}')">ver álbumes</button></span> 
            </li>
            `).join('');
        contenedor.innerHTML = `<h2>Lista de usuarios</h2>
                                <ul>${liUsuarios}</ul>`;
    })
    .catch(error=>{
        alert(error);
        contenedor.innerHTML=`Error: ${error}`;
    });
}

function muestraAlbumesPorUsuario(idUsuario,nombreUsuario){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(resultado=>resultado.json())
    .then(albums=>{
        const liAlbumes = albums
                            .filter(a=>a.userId===idUsuario)
                            .map(a=>`
            <li>
                <span>${a.title}</span>
                <span>
                    <button onclick="muestraFotosPorAlbum(${a.id}, ${idUsuario},'${nombreUsuario}')">ver fotos</button>
                </span> 
            </li>`).join('');
        contenedor.innerHTML = `
            <h2>Álbumes de ${nombreUsuario}</h2>
            <ul>${liAlbumes}</ul>
            <div><button onclick="muestraUsuarios()">Volver</button>`;
    })
    .catch(error=>{
        alert(error);
        contenedor.innerHTML=`Error: ${error}`;
    });
}

function muestraFotosPorAlbum(idAlbum, idUsuario,nombreUsuario){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(resultado=>resultado.json())
    .then(photos=>{
        const liFotos = photos
                            .filter(f=>f.albumId===idAlbum)
                            .map(f=>`
                                <li>
                                    <span>${f.title}</span>
                                    <span><img src="${f.url}"/></span>            
                                </li>`).join('');
        contenedor.innerHTML = `
                <h2>Fotos de ${nombreUsuario} del álbum ${idAlbum}</h2>
                <div>
                    <button onclick="muestraAlbumesPorUsuario(${idUsuario},'${nombreUsuario}')">Volver</button>
                </div>
                <ul>${liFotos}</ul>`;
    })
    .catch(error=>{
        alert(error);
        contenedor.innerHTML=`Error: ${error}`;
    });
}


muestraUsuarios();