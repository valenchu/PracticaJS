window.onload = iniciar();

function iniciar() {
    //fetch trae la informacion del url de la api
    fetch("https://jsonplaceholder.typicode.com/todos/4")
        .then(response => response.json())
        .then(jsonCargado);
}

function jsonCargado(json) {
    let spanNombrePost = document.getElementById("txtNombrePost");
    spanNombrePost.innerText = json.title;
    let cargado = document.getElementById("booleanCompleto");
    //if corto
    cargado.innerText = json.completed ? "El post esta completo" : "El post no esta completo";
    //if largo
   // if(json.completed == true){
     //   cargado.innerText = "El post esta completo"; 
    //}else{
      //  cargado.innerText = "El post no esta completo";
    //}
console.log(json);
}