// una Funcion es un conjuntos de sentencias.

// funciones Declarativas - function declaration
function miFuncion() {
  return 3;
}

// funciones de Expresión - function expression - funciones anónimas.
var miFuncion = function(a, b) {
  // a y b son parámetros
  return a + b;
}

miFuncion(2, 3); // 2 y 3 son argumentos.