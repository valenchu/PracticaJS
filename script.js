//Lo que hace windows onload es llamar a la funcion iniciar
window.onload = iniciar;

function iniciar() {
    //Lllamo al elemento btnCalcular del html y lo guardo
    //en la variable btnCalcular
    var btnCalcular = document.getElementById("btnCalcular");
    //Hago un listener para escucharr el evento que hara el boton
    //calcular al ser clikeado
    btnCalcular.addEventListener("click", clickBtnCalcular);
}
//Creo funcion de la accion que va a tener el boton de calcular,
//al hacerle click
function clickBtnCalcular() {
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;

    var imc = peso / (altura * altura);
    //Con Math.round redondeo el numero

    alert("Su IMC es de: " + Math.round(imc));
}