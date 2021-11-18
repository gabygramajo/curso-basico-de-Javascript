// #### COERCIÓN ####
// Cuando se pasa de una valor a otro.

// Coerción implicita: cuando js nos ayuda y cambia el tipo de dato según lo entienda.

var a =  4 + "7"; // js comprende que queremos concatenar y cambia el numero a string
typeof a;
// >> string

var b =  4 * "7"; // js comprende que queremos hacer una operación y cambiar a numbre el string
typeof b;
// >> number

// Coerción Explicita: es cuando obligamos a que un valor cambie de un tipo otro. Ej con los valores de los inputs

var valor1 = 20;
typeof valor1;
// >> number
var valor2 = String(valor1); // convertimos el número 20 a str. 
typeof valor2;
// >> String

var valor3 = Number(valor2); // convertimos el str 20 a number. 
typeof valor3;
// >> Number