const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api/musica/:artista", async (req, res) => {

  try {

    const artista = req.params.artista;

    const respuesta = await axios.get(
      `https://api.deezer.com/search?q=${artista}`
    );

    const canciones = respuesta.data.data.map(cancion => ({
      titulo: cancion.title,
      artista: cancion.artist.name,
      album: cancion.album.title,
      imagen: cancion.album.cover,
      preview: cancion.preview
    }));

    res.json(canciones);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});