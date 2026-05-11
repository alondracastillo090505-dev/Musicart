document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".login-form");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;

        try {

            const res = await fetch("http://localhost/Interfaz/Musicart/backend/server.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usuario,
                    password
                })
            });

            const data = await res.json();

            console.log(data);

            if (data.success === true) {

                //  AQUÍ ABRE DASHBOARD
                window.location.href = "dashboard.html";

            } else {

                alert("Usuario o contraseña incorrectos");

            }

        } catch (error) {
            console.log(error);
            alert("Error de conexión con el servidor");
        }

    });

});