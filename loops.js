// Los loops (bucles), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.

var estudiantes = [ 'Maria', 'Sergio', 'Rosa', 'Daniel' ]; 

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// For Loop 
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

// For of
for (var estudiante of estudiantes) {
  saludarEstudiante(`Buenos Días ${estudiante}.`);
}

// While Loop
// Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea.
function despedirEstudiante(estudiante) {
  console.log(`Chau, ${estudiante}`);
}

while (estudiantes.length > 0) { 
  var estudiante = estudiantes.shift();  
  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
  despedirEstudiante(estudiante);
}