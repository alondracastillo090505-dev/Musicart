console.log("Login conectado");

document.querySelector(".login-form")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const usuario =
    document.getElementById("usuario").value;

    const password =
    document.getElementById("password").value;

    if(usuario !== "" && password !== ""){

        alert("Login exitoso");

        setTimeout(() => {

            window.location.href =
            "dashboard.html";

        }, 1000);

    }else{

        alert("Completa los campos");

    }

});