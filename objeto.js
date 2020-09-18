window.onload = iniciar;
//Variable para almacenar personas
var personas = [];
//funcion para iniciar el proyecto accion boton agreggar
function iniciar (){
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
}
//Funcion que se ejecuta al clickeaar el boton agregar y carga las personas en
//la variable personas
function clickBtnAgregar(){
    //Tomo cada input
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var telefono = document.getElementById("txtTelefono").value;
    var email = document.getElementById("txtEmail").value;
    //Asigno cada input en variable persona
    var persona ={
        "nombre" : nombre,
        "apellido" : apellido,
        "tel" : telefono,
        "email" : email
    }
    //Guardo la persona en el array personas
    personas.push(persona);
    //llamo a la funcion mostrar personas para mostrar las personas cargadas 
    mostrarPersonas();
    //Borro los campos desp de agregar una persona!
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtEmail").value = "";

}
//Creo funcion mostrar personas para ver las personas agregadas al array personas
function mostrarPersonas(){
    var listado = document.getElementById("lista");
    var html = "";
    personas.forEach(persona => {
        html += persona.nombre + " // " + persona.apellido + " // " + persona.tel + " // " + persona.email +
        "<br/>";
    });
    listado.innerHTML = html;
}

