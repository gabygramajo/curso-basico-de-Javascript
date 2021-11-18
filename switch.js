// Switch sirve para validar múltiples condiciones

var metodoDePago = "contado";

switch (metodoDePago){
  case ("efectivo" || "contado"):
    console.log("El pago es en efectivo");
    break;
  case "tarjeta":
    console.log("El pago es en tarjeta");
    break;
  case "transferencia":
    console.log("El pago es en transferencia");
    break;
  default:
    console.log("Necesitas un método de pago");
}

var op1 = "Papel",
    op2 = "Piedra",
    op3 = "Tijera";

var ComenzarJuegoPPJ = function(jugador, maquina){
  switch(true) {
    case (jugador === maquina):
      console.log("HUBO UN EMPATE!");
      break;

    case (jugador === "Papel"  && maquina === "Piedra"):
    case (jugador === "Piedra" && maquina === "Tijera"):  
    case (jugador === "Tijera" && maquina === "Papel"):
      console.log("¡¡¡FELICIDADES, GANASTE!!!");
      break;

    default:
      console.log("PERDISTE, INTÉNTALO DE NUEVO.");
  }
}

ComenzarJuegoPPJ( op2, op2);
// >> HUBO UN EMPATE!
ComenzarJuegoPPJ( op1, op2);
// >> ¡¡¡FELICIDADES, GANASTE!!! 
ComenzarJuegoPPJ( op2, op3);
// >> ¡¡¡FELICIDADES, GANASTE!!! 
ComenzarJuegoPPJ( op3, op1);
// >> ¡¡¡FELICIDADES, GANASTE!!! 
ComenzarJuegoPPJ( op3, op2);
// >> PERDISTE, INTÉNTALO DE NUEVO.
