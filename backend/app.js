const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

const conexion = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "musicart"

});

conexion.connect(error => {

    if(error){

        console.log("Error de conexión");

    } else {

        console.log("MySQL conectado");

    }

});

app.post("/login", (req, res) => {

    const usuario = req.body.usuario;
    const password = req.body.password;

    const sql =
    "SELECT * FROM usuarios WHERE usuario = ? AND password = ?";

    conexion.query(sql, [usuario, password], (error, resultado) => {

        if(error){

            return res.status(500).json({
                acceso: false
            });

        }

        if(resultado.length > 0){

            res.json({
                acceso: true
            });

        } else {

            res.json({
                acceso: false
            });

        }

    });

});

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
            imagen: cancion.album.cover_big,
            preview: cancion.preview
        }));

        res.json(canciones);

    } catch (error) {

        res.status(500).json({
            error: "Error al obtener canciones"
        });

    }

});

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "../frontend/login.html"));

});

app.listen(3000, () => {

    console.log("Servidor corriendo en http://localhost:3000");

});