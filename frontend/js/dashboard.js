async function obtenerMusica() {

    const artista =
    document.getElementById("artista").value || "rock";

    const contenedor =
    document.getElementById("contenedor");

    contenedor.innerHTML =
    "<h2>Cargando canciones...</h2>";

    try {

        const respuesta = await fetch(
            `http://localhost:3000/api/musica/${artista}`
        );

        const canciones = await respuesta.json();

        contenedor.innerHTML = "";

        canciones.forEach(cancion => {

            contenedor.innerHTML += `

            <div class="card">

                <img src="${cancion.imagen}">

                <div class="info">

                    <h2>${cancion.titulo}</h2>

                    <p>${cancion.artista}</p>

                    <p>${cancion.album}</p>

                    <audio controls>
                        <source src="${cancion.preview}" type="audio/mpeg">
                    </audio>

                </div>

            </div>

            `;

        });

    } catch(error) {

        contenedor.innerHTML =
        "<h2>Error al cargar canciones</h2>";

    }

}

obtenerMusica();

function cerrarSesion() {

    window.location.href =
    "login.html";

}