function validateInput(id) {
  var input = document.getElementById(id).value;
  var idmensaje = "errorMensaje" + id;
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(input);

  if (input.trim() === "") {
    // El campo está vacío
    document.getElementById("btnEnviar").setAttribute("disabled", "");
    document.getElementById(idmensaje).textContent =
      "El campo no puede quedar vacío.";
  } else if (id != "mensagem" && input.length > 50) {
    // El campo excede los 50 caracteres
    document.getElementById("btnEnviar").setAttribute("disabled", "");
    document.getElementById(idmensaje).textContent =
      "El campo no puede exceder los 50 caracteres.";
  } else if (id == "email" && !pattern.test(input)) {
    //El campo tiene que ser correo
    document.getElementById("btnEnviar").setAttribute("disabled", "");
    document.getElementById(idmensaje).textContent =
      "Ingrese un correo electrónico válido que contenta @ seguido de un dominio o proveedor seguido de un punto(.) ";
  } else if (id == "mensagem" && input.length > 300) {
    // El campo excede los 300 caracteres
    document.getElementById("btnEnviar").setAttribute("disabled", "");
    document.getElementById(idmensaje).textContent =
      "El campo no puede exceder los 300 caracteres.";
  } else {
    // El campo cumple con las validaciones
    document.getElementById(idmensaje).textContent = "";
    document.getElementById("btnEnviar").removeAttribute("disabled");
  }
}
