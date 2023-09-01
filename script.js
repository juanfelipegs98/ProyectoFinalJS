var numeroSecreto;
var intentos = 0;
var intentosmax = 10; 
var intentosAnteriores = [];
var formulario = document.getElementById("adivinanza-form");
var campoNumero = document.getElementById("numero");
var areaResultado = document.getElementById("resultado");
var areaIntentosAnteriores= document.getElementById("intentos-anteriores")
var botonReiniciar = document.getElementById("Boton-reiniciar"); 
var numeroIngresado = parseInt(campoNumero.value);

function generarnumeroSecreto(){
numeroSecreto = Math.floor(Math.random() * 100) + 1;
}
function reiniciarJuego(){
    generarnumeroSecreto(); 
    intentos = 0; 
    intentosAnteriores= [];
    areaResultado.textContent= ""; 
    campoNumero.value = ""; 
    campoNumero.classList,remove("invalid");
    botonReiniciar.style.display="none";  
}


formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        campoNumero.classList.add("invalid");
        return;
    }
        campoNumero.classList.remove("invalid"); 
        
    intentos++;

    intentosAnteriores.push(numeroIngresado);
    areaIntentosAnteriores.textContent="Intentos anteriores: " + intentosAnteriores.join(", "); 


    if (numeroIngresado === numeroSecreto) {
        mensaje.textContent = " Adivinaste en " + intentos + " intentos ";
        botonReiniciar.style.display = "block";
    } else if (intentos >= intentosMaximos) {
        mensaje.textContent = "Agotaste todos los intentos el número secreto era " + numeroSecreto;
        botonReiniciar.style.display = "block";
    } else if (numeroIngresado < numeroSecreto) {
        mensaje.textContent = "Intenta con un número más alto. Llevas " + intentos + " intentos.";
    } else {
        mensaje.textContent = "Intenta con un número más bajo. Llevas " + intentos + " intentos.";
    }
});

botonReiniciar.addEventListener("click", function() {
    reiniciarJuego();
    botonReiniciar.style.display = "none";
});


window.onload = reiniciarJuego;
