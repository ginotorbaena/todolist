// Obtener elementos del DOM
const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregarTarea");
const divTareas = document.getElementById("tareasAgregadas");

// Función para agregar una nueva tarea
function agregarTarea() {
    const tareaTexto = inputTarea.value.trim();

    // Verificar si el campo de entrada no está vacío
    if (tareaTexto === "") {
        alert("Por favor, ingresa una tarea válida.");
        return;
    }

    // Crear elementos HTML para la nueva tarea
    const tareaDiv = document.createElement("div");
    tareaDiv.classList.add("tarea");

    const tareaTextoSpan = document.createElement("span");
    tareaTextoSpan.innerText = tareaTexto;

    const botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.addEventListener("click", function () {
        divTareas.removeChild(tareaDiv);
    });

    tareaDiv.appendChild(tareaTextoSpan);
    tareaDiv.appendChild(botonEliminar);

    // Aplicar estilo de margen inferior para separar las tareas
    tareaDiv.style.marginBottom = "2%";

    // Agregar la tarea al contenedor
    divTareas.appendChild(tareaDiv);

    // Limpiar el campo de entrada
    inputTarea.value = "";

    // Añadir el margen superior al div de tareas agregadas
    divTareas.style.marginTop = "3%";
}

// Agregar un manejador de eventos al botón "Agregar tarea"
botonAgregar.addEventListener("click", agregarTarea);

// Permitir agregar tareas al presionar Enter
inputTarea.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        agregarTarea();
    }
});
