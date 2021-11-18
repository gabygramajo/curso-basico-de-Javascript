// Arrays Methods, éstos métodos sirven para recorrer los arrays sin mutar el array original como los hacen push, pop, shift o unshift.
  
var articulos = [
  { nombre: 'Bici', costo: 3000 },
  { nombre: 'TV', costo: 2500 },
  { nombre: 'Libro', costo: 320 },
  { nombre: 'Celular', costo: 10000 },
  { nombre: 'laptop', costo: 20000 },
  { nombre: 'teclado', costo: 500 },
  { nombre: 'audifonos', costo: 1700 }
];

// Método Filter:
/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */

var articulosFiltrados = articulos.filter( function(articulo){
  return articulo.costo <= 500; /* Menor o igual a 500 */ 
} );
console.log( articulosFiltrados );
/*  0: {nombre: 'Libro', costo: 320}
    1: {nombre: 'teclado', costo: 500} */ 

// Método Map
// Recorre el Array y retorna el Mapeo con los Elementos indicados

var nombreArticulos = articulos.map( function(articulo){
  return articulo.nombre; // Retorna sólo el nombre de los artículos.
});
console.log(nombreArticulos);
// >> ['Bici', 'TV', 'Libro', 'Celular', 'laptop', 'teclado', 'audifonos']

//   Metodo Find
/* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */

var encontrarArticulos = articulos.find( function(articulo) {
  return articulo.nombre === 'laptop'; // Si existe, lo retorna
});
console.log(encontrarArticulos);

//   Metodo forEach

articulos.forEach(function(articulo){
  console.log(articulo.nombre);
});

//   Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
});

console.log(articulosBaratos);



/* ########################################### 
  ### Diferencia entre find, filter y map ### 
  ########################################### */ 

var productos = [
  { nombre: 'TV', costo: 2500 },
  { nombre: 'Libro', costo: 500 },
  { nombre: 'Celular', costo: 20000 },
  { nombre: 'laptop', costo: 20000 },
  { nombre: 'teclado', costo: 500 },
  { nombre: 'audifonos', costo: 1700 }
];
encontrarProductos = productos.find( function(producto) {
  return producto.costo === 20000; 
});
console.log("Usando find: ",encontrarProductos);
// >> {nombre: 'Celular', costo: 20000}

encontrarProductos = productos.filter( function(producto) {
  return producto.costo === 20000;
});
console.log("Usando filter: ",encontrarProductos);
  /* 0: {nombre: 'Celular', costo: 20000}
    1: {nombre: 'laptop', costo: 20000}*/

encontrarProductos = productos.map( function(producto) {
  return producto.costo === 20000;
});
console.log("Usando map: ",encontrarProductos);
  /* [false, false, true, true, false, false] */