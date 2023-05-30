const nombre = document.querySelector("#Nombre");
const apellido = document.querySelector("#Apellido");
const mail = document.querySelector("#email");
const cantidad = document.querySelector("#Cantidad");
const categoria = document.querySelector("#Categoria");
const totalPagar = document.querySelector("#Total");
const btnResumen = document.querySelector("#Resumen");
const btnBorrar = document.querySelector("#Borrar");
const descuentos = [0, 0.8, 0.5, 0.15];
const valorTicket = 200;

function validarCampos(){
    if (nombre.value === "") {
        mostrarAlerta(nombre.id);
        return false;
      }
    if (apellido.value === "") {
        mostrarAlerta(apellido.id);
        return false;
      }
    if (mail.value === "") {
        mostrarAlerta(mail.id);
        return false;
      }
    if (cantidad.value === "") {
        mostrarAlerta(cantidad.id);
        return false;
      }
    if (cantidad.value < 1) {
        alert("La cantidad debe ser mayor a 0");
        return false;
      }
    if (cantidad.value > 20){
        alert("Solo se pueden adquirir 20 tickets como máximo");
        return false;  
    }
    return true;
}

function borrarCampos(){
    nombre.value = "";
    apellido.value = "";
    mail.value = "";
    cantidad.value = "";
    categoria.selectedIndex = 0;
    totalPagar.innerHTML = "Total a Pagar: $";
}

function mostrarAlerta(alerta){
    alert(`El campo ${alerta} es obligatorio`);
}

function calcularTotal(){
    if (validarCampos()) {
        let total = (valorTicket - (descuentos[categoria.selectedIndex] * valorTicket)) * cantidad.value;
        totalPagar.innerHTML = "Total a Pagar: $" + total;
    }
}

btnResumen.addEventListener("click",calcularTotal);
btnBorrar.addEventListener("click",borrarCampos);