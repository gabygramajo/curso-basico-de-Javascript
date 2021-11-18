// Las condicionales sirven para validar si algo es verdadero o falso y generar sentencias a partir de ello.


// Condicional if else
var edad = 18;

if(edad === 18) {
  console.log("Puedes votar por 1ra vez.");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("Aun no puedes votar");
}

// Ternary Operator

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno." : "No, no soy un uno.";
console.log(resultado);

/*
Ejercio:  Crear un el juego Papel, Piedra o Tijera. En el que vas a jugar contra la Máquina.

PASO 1: Crear variables con los valores Papel, Piedra y Tijera.
PASO 2: Crear una funcion en la cual que tome como parámetro si elijo Papel, Piedra o Tijera.
PASO 3: Crear dentro de la función un Condicional que valide si gané, perdí o empaté según el valor que eligió la máquina. 
*/  

var op1 = "Papel",
    op2 = "Piedra",
    op3 = "Tijera";

function ComenzarJuegoPPJ(jugador, maquina){
  if (jugador === maquina){
    console.log("HUBO UN EMPATE!");
  } 
  else if (jugador === "Papel" && maquina === "Piedra") {
    console.log("¡¡¡FELICIDADES, GANASTE!!!");
  }
  else if (jugador === "Piedra" && maquina === "Tijera") {
    console.log("¡¡¡FELICIDADES, GANASTE!!!");
  }
  else if (jugador === "Tijera" && maquina === "Papel") {
    console.log("¡¡¡FELICIDADES, GANASTE!!!");
  } 
  else {
    console.log("PERDISTE, INTÉNTALO DE NUEVO.");
  }
}

ComenzarJuegoPPJ( op3, op2);