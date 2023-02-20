import parametros from './params.js';

let user;
try {
    const respuesta2 = await fetch("https://jsonplaceholder.typicode.com/users/"+parametros('user'));
    user = await respuesta2.json();
} catch (error) {
    alert('Se ha producido un error en la carga de los datos: ' + error);
}


document.getElementById('contenedor').innerHTML = `
<h1>Página de usuario</h1>
<h2>${user.name}</h2>
<h3>${user.email}</h3>
`;
