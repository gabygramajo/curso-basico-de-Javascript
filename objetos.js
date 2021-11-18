// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    make: "Toyota",  // key - value 
    model: "Corolla",
    year: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.model} ${this.year}`;
  }
};

console.log( miAuto.year ); 
console.log( miAuto.model ); 

console.log( miAuto.detallesDelAuto() );


// Función constructora 
// Creas una función con los parametros que va a recibir.
function auto(marca, modelo, annio) {  
  // Utilizamos el "this" para asignar valores a las propiedades del objeto. 
  this.marca = marca;   
  this.modelo = modelo;
  this.annio = annio;
}

// instanciación del objeto. Instanciar es cuano de crea un Objeto que deriba de otro objeto.
var newAuto = new auto("Tesla", "Model 3", 2020);

console.log(newAuto);

/*
Crear una función constructora y crear un loops para generar una lista de 30 autos
*/ 