
let posts;
let users;
try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await respuesta.json();
    const respuesta2 = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await respuesta2.json();
} catch (error) {
    alert('Se ha producido un error en la carda de los datos: ' + error);
}

console.log(posts);
console.log(users);
const tarjetas = posts.map(p=>`
<div class="card col m-2 m-sm-1 m-md-2 m-lg-3 shadow mb-5 bg-white rounded">
<div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${users.find(u=>u.id===p.userId).name}</h6>
    <p class="card-text">${p.body}</p>
    <a href="entrada.html?post=${p.id}" class="card-link">Enlace a la entrada</a>
    <a href="usuario.html?user=${p.userId}" class="card-link">Enlace al autor</a>
</div>
</div>`).join('');
console.log(tarjetas);
const contenedor = document.createElement('div');
contenedor.className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 d-flex justify-content-center";
contenedor.innerHTML = tarjetas;
document.getElementById('tarjetas').append(contenedor);