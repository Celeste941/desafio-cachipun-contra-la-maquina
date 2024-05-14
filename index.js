//PSEUDOCODIGO

/*
1- Se da la bienvenida al usuario con la función "alert".
2- Se le pregunta al usuario cuantas veces quiere jugar mediante la función "prompt" + parseInt (para asegurarnos de analizar la cadena y devolver un entero) con la variable jugadas.
3- Se pone la función "alert" nuevamente para indicar que iniciaremos la partida.
4- Se crean dos variables "ganaste" y "perdiste" para indicar al final del programa si el usuario : gano, perdio o fue un empate.
5- Dentro del bucle for (la variable jugada nos servira para que el bucle de la vuelta las veces que el usuario indico y se cumpla el juego):
  5.1- Se crea una variable opcionesJugador con la función prompt para que el usuario elija las opciones "piedra , papel o tijera".
  6- Luego se crea la variable numeroAleatorio con Math.floor y Math.random para que la maquina genere un numero al azar.
  6.1- Como nos interesa que la maquina elija opciones como "piedra, papel o tijera" (para nosotros verlo visualmente por consola tambien), se crea un if con otra nueva variable llamada maquinaOpción que sera la que nos almacenará el cambio que haremos en el if. Por ejemplo si numeroAleatorio es igual a "0" el nuevo valor que le daremos a la variable maquinaOpción será "tijera".
  7- Luego hacemos otro condicional "if" para que se determine: si gana, si pierde o es un empate en las partidas indicadas por el usuario, y las varibales ganaste o perdiste como contador. Ya que estas nos servira mas adelante para el final del juego.

6- Luego de cumplirse la condición en el bucle for, fuera del bucle se crea otro if para determinar cuantas veces gano, perdio o empato el usuario y la computadora y dar un resultado final.


-FALTA IMPLEMENTAR VARIAS MEJORAS-
*/

alert("¡Bienvenido al juego del Cachipún contra la máquina!");
let jugadas = parseInt(prompt("¿CUANTAS VECES QUIERES JUGAR?"));
alert("¡COMENCEMOS LA PARTIDA!");
let ganaste = 0;
let perdiste = 0;

//BUCLE FOR QUE HARA LAS VUELTAS O EL CONTEO DE LAS JUGADAS.
for (let i = 0; i < jugadas; i++) {
  let opcionesJugador = prompt("elige tu opcion: piedra, papel o  tijera");
  // console.log(opcionesJugador);

// GENERAR LA OPCIÓN ALEATORIA DE LA MÁQUINA ENTRE PIEDRA, PAPEL O TIJERA Y ALMACENARLA EN LA VARIABLE maquinaOpcion
  let numeroAleatorio = Math.floor(Math.random() * 3);
  // console.log(numeroAleatorio);
  let maquinaOpcion;
  if (numeroAleatorio === 0) {
    maquinaOpcion = "tijera";
  } else if (numeroAleatorio === 1) {
    maquinaOpcion = "piedra";
  } else if (numeroAleatorio === 2) {
    maquinaOpcion = "papel";
  } else {
    maquinaOpcion = "Opción inválida";
  }
  // console.log(maquinaOpcion);

  if (opcionesJugador === maquinaOpcion) {
    alert("EMPATE");
  } else if (
    (opcionesJugador === "piedra" && maquinaOpcion === "tijera") ||
    (opcionesJugador === "papel" && maquinaOpcion === "piedra") ||
    (opcionesJugador === "tijera" && maquinaOpcion === "papel")
  ) {
    ganaste++;
    // console.log(ganaste);
    alert("GANASTE");
  } else {
    perdiste++;
    // console.log(perdiste);
    alert("PERDISTE"); // 
}
}

if (ganaste < perdiste) {
  alert("¡HAS PERDIDO! INTENTALO DE NUEVO");
} else if (ganaste === perdiste) {
  alert("¡ESTO ES UN EMPATE!");
} else {
  alert("¡FELICIDADES GANASTE!");
} 
