
export function mostrar_tareas_pendientes(inputTareas) {
    let tareasPendientes = inputTareas.filter((tarea) => tarea.isDone == false);
    let tareasPendientesTitles = tareasPendientes.map((tarea) => tarea.title);
    console.log("las tareas pendientes son: " + tareasPendientesTitles);
    return tareasPendientes;
    //uso return para devolver la lista solicitada
  }
  