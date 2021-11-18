// variable declarada en el Scope Global
var miNombre = "Diego";

function nombre() {
  // variable declarada en el Scope Local
    var miApellido = "De Granda";
    console.log( miNombre + " " + miApellido);
}

nombre();
// >> "Diego De Granda"

console.log(miNombre);
// >> 'Diego'

console.log(miApellido);
// >> VM438:1 Uncaught ReferenceError: miApellido is not defined.

/* el Scope Global no tiene acceso al Scope Local, pero el Scope Local si puede accerder al Scope Global. */