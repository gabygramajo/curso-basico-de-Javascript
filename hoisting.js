// Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código, al momento de que se genere el hosting, las funciones se declarán primero, y despues las variables.


// #### Ejemplo 1 - Hoisting con Variables. ####

console.log(nombre);
var nombre = "gaby"
// >> undefined || Ya que la variable es llamada antes de ser declarada. Por lo que en el proceso de Jit Compiler el navegador al ver que llamamos una variable no declarada antes, lo que hace es Declararla con un valor undefined. Ej: var nombre = undefined.

// Lo que sucede con el hoisting

var miNombre = undefined;
console.log(miNombre + " Soy ese Hoisting");
miNombre = "Diego";

// >> undefined Soy ese Hoisting
// >> 'Diego'
// primero se ejecutó el valor desde el Hoisting.

// #### Ejemplo 1 - Hoisting con Funciones. ####

hey(); // Llamada a la función antes de ser declarada.

function hey() {
  console.log("Hola " + estudiante);
}
var estudiante = "Messi";

// >> Hola undefined
/* A diferencia de la variables. Las fuciones se declaran antes que las variables en el hoisting, por lo cual pueden ejecutarse antes de ser declaras. Pero no imprime el nombre del estudiante debido a que es una variable que es llamada antes de ser declara y por eso se crea con un valor undefined en el hoisting. */
