const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");

function agregarTarea(){
     if(input.value){

    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");
    

    let texto = document.createElement("p");
    texto.textContent = input.value;
    tareaNueva.appendChild(texto);
    input.value = "";

    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    tareaNueva.appendChild(iconos);

    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill","icono-completar");

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill","icono-eliminar");

    iconos.appendChild(completar,eliminar);


    listaDeTareas.appendChild(tareaNueva);

 } else {
    alert("Por favor, ingresa una tarea.");
 }
}

boton.addEventListener("click", agregarTarea);


