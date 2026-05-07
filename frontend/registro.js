console.log("Registro conectado");

document.querySelector(".registro-form")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const usuario =
    document.getElementById("usuario").value;

    const correo =
    document.getElementById("correo").value;

    const password =
    document.getElementById("password").value;

    const confirmar =
    document.getElementById("confirmar").value;

    if(password !== confirmar){

        alert("Las contraseñas no coinciden");

        return;

    }

    if(
        usuario !== "" &&
        correo !== "" &&
        password !== ""
    ){

        alert("Registro exitoso");

        setTimeout(() => {

            window.location.href =
            "login.html";

        }, 1000);

    }else{

        alert("Completa todos los campos");

    }

});