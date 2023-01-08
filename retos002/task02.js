export function ordenarProductos(inputProducts) {
    inputProducts.sort((a, b) => a.precio - b.precio);
    let listaProductosOrdenados = inputProducts.map((producto) => producto.nombre);
    console.log(
      "el orden de productos de más barato a más caro es: " +
        listaProductosOrdenados
    );
    return inputProducts;
  }
  