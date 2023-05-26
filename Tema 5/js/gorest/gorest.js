import { GOREST_API_KEY } from './config.js';

fetch("https://gorest.co.in/public/v2/users", {
    "headers": {
        "Accept": "application/json",
        "Authorization": `Bearer ${GOREST_API_KEY}`,
        "Content-Type": "application/json"
    },
    "method": 'GET'
})
.then(respuesta=>respuesta.json())
.then(usuarios=>{
    muestraUsuarios(usuarios);
})
.catch(console.log);

const hazFila = u=>`
<tr>
    <td>${u.name}</td>
    <td>${u.email}</td>
    <td>${u.status}</td>
</tr>`;

function muestraUsuarios(usuarios) {
    const filas = usuarios.map(hazFila).join('');

    document.getElementById('contenedor').innerHTML = `
    <table>
        <thead>
            <tr><th>Nombre</th><th>Email</th><th>Estado</th>
        </thead>
        <tbody>
            ${filas}
        </tbody>
    </table>`;
}


fetch("https://gorest.co.in/public/v2/users/2165817", {
    headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${GOREST_API_KEY}`,
        "Content-Type": "application/json"
    },
    method: 'PATCH',
    body: `{
        "name":"manolita", 
        "gender":"female", 
        "email":"mlita@otro.es", 
        "status":"active"
        }`
})
.then(respuesta=>{
    if (respuesta.status !== 201 && respuesta.status !== 200) {
        console.log("Algo salió mal:", respuesta.status);
    }
    return respuesta.json();
})
.then(resultado=>console.log(resultado))
.catch(console.log);
