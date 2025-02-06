// Paso 1: La computadora elige un número al azar entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Paso 2: Función para verificar si el jugador adivinó el número
function checkGuess() {
    // Obtener el número que el jugador escribió
    let guess = parseInt(document.getElementById("guessInput").value);

    // Obtener el elemento donde mostraremos mensajes
    let message = document.getElementById("message");

    // Comparar el número del jugador con el número secreto
    if (guess === numeroSecreto) {
        message.textContent = "¡Felicidades! ¡Adivinaste el número!";
    } else if (guess < numeroSecreto) {
        message.textContent = "El número es mayor. ¡Sigue intentando!";
    } else {
        message.textContent = "El número es menor. ¡Sigue intentando!";
    }
}