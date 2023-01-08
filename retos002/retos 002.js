/* Desarrolla una función que al darle un array de objetos ’tarea’ (con atributos de: title '<string> / isDone <bool>) 
devuelva otra lista con solamente las tareas no terminadas. */

let tareas = [
  {
    title: "ordenar habitación",
    isDone: true,
  },
  {
    title: "comprar pan",
    isDone: false,
  },
  {
    title: "lavar ropa",
    isDone: false,
  },
];

/* tareasPendientes = tareas.filter((tarea) => tarea.isDone == false);
console.log(tareasPendientes);
tareasPendientesTitles = tareasPendientes.map((tarea) => tarea.title);
console.log("las tareas pendientes son: " + tareasPendientesTitles);
 */
function mostrar_tareas_pendientes(inputTareas) {
  tareasPendientes = inputTareas.filter((tarea) => tarea.isDone == false);
  tareasPendientesTitles = tareasPendientes.map((tarea) => tarea.title);
  console.log("las tareas pendientes son: " + tareasPendientesTitles);
  return tareasPendientes;
  //uso return para devolver la lista solicitada
}

mostrar_tareas_pendientes(tareas);

//===============================================================================================================
/* Desarrolla una función que al pasarle una lista de objetos producto 
(con nombre<string> y precio<number>) devuelva otra lista de los productos ordenados de baratos a caros. */

let listaProductos = [
  {
    nombre: "leche",
    precio: 1.99,
  },
  {
    nombre: "agua",
    precio: 0.6,
  },
  {
    nombre: "lata atún",
    precio: 3.2,
  },
];

/* listaProductos.sort((a,b) => a.precio-b.precio)
console.log(listaProductos)
listaProductosOrdenados = listaProductos.map((producto) => producto.nombre)
console.log('el orden de productos de más barato a más caro es: ' + listaProductosOrdenados) */

function ordenarProductos(inputProducts) {
  inputProducts.sort((a, b) => a.precio - b.precio);
  listaProductosOrdenados = inputProducts.map((producto) => producto.nombre);
  console.log(
    "el orden de productos de más barato a más caro es: " +
      listaProductosOrdenados
  );
  return inputProducts;
}

ordenarProductos(listaProductos);

//====================================================================================================================

/* Desarrolla una función que al darle una lista de objetos usuario (con nombre<string> y rol<string>)
 devuelva otra lista de los usuarios que contenga solamente los usuarios administradores (’admin’) 
 ordenados alfabéticamente por el nombre. */

let listaUsuarios = [
  {
    name: "John",
    rol: "user",
  },
  {
    name: "Paul",
    rol: "admin",
  },
  {
    name: "George",
    rol: "admin",
  },
  {
    name: "Ringo",
    rol: "user",
  },
];

/* let adminList = listaUsuarios.filter(user => user.rol == "admin");
adminList.sort((a,b) => a.name.localeCompare(b.name));
console.log(adminList);
adminListSorted = adminList.map((admin) => admin.name);
console.log('los usuarios administradores son: ' + adminListSorted); */

function printAdminSorted(inputusers) {
  let adminList = inputusers.filter((user) => user.rol == "admin");
  adminList.sort((a, b) => a.name.localeCompare(b.name));
  adminListSorted = adminList.map((admin) => admin.name);
  console.log("los usuarios administradores son: " + adminListSorted);
  return adminList;
}

printAdminSorted(listaUsuarios);
