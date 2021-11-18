// ARRAY: es una objeto y una estructura de Datos. Es un valor que agregará más valores dentro (strings, numeros, objetos, otros arrays, etc).

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);
// Conocer su longitud:
console.log(frutas.length);

// Accerder a los elementos del Array mediante sus índices.
console.log(  
  "Fruta del indice 0:", frutas[0],
  "\nFruta del indice 1:", frutas[1],
  "\nFruta del indice 2:", frutas[2],
  "\nFruta del indice 3:", frutas[3]
  );

// ### METODOS DE ARRAYS ###

// Mutar array

// .push() para agregar un elemento al final del array.
frutas.push("Uva");
frutas.push("Pera");
frutas.push("Cebolla");

// .pop() para eliminar un elemento al final del array.
var borrado = frutas.pop();

console.log(borrado);

// .unshift() para agregar un elemento al principio del array.
frutas.unshift("Sandía");


// .shift() para borrar un elemento al principio del array.
borrado = frutas.shift("Sandía");
console.log(borrado);

// .indexOf() para saber el indice de un elemento del array.
var indice = frutas.indexOf("Cereza");

console.log(indice);
