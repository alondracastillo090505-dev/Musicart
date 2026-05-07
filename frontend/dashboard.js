async function obtenerMusica() {

    const contenedor =
    document.getElementById("contenedor");

    contenedor.innerHTML =
    "<p>Cargando música...</p>";

    try {

        const respuesta = await fetch(
            "http://localhost:3000/api/musica/rock"
        );

        const canciones =
        await respuesta.json();

        contenedor.innerHTML = "";

        canciones.forEach(cancion => {

            contenedor.innerHTML += `
            
            <div class="card">

                <img src="${cancion.imagen}">

                <h2>${cancion.titulo}</h2>

                <p>${cancion.artista}</p>

                <audio controls>
                    <source src="${cancion.preview}">
                </audio>

            </div>

            `;

        });

    } catch(error){

        contenedor.innerHTML =
        "<p>Error al cargar canciones</p>";

    }

}

obtenerMusica();

function cerrarSesion(){

    alert("Sesión cerrada");

    setTimeout(() => {

        window.location.href =
        "login.html";

    }, 1000);

}