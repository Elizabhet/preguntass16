var preguntas = ["¿cuantos años tienes?", "¿cual es tu comida favorita?", "¿cuanto tiempo haces actividad fisica?", "¿que tipo de actividad realizas?", "¿cuanto pesas y cuanto mides?"];
var opciones = [
    ["15","16","14","18","13"],
    ["ceviche","aji de gallina","tallarines verdes","chaufa","arroz con pollo"],
    ["de solo 60 segundos","de 2 minutos","de solo 50 segundos","de 3 minutos","de 80 segundo"],
    ["salto soga","realizo aerobicos","bailo","realizo entrenamiento de fuerza","realizo tai chi",],
    ["peso 73kg y mido 170.8 cm","peso 60kg y mido 160.9cm","peso 67kg y mido 160.1cm","peso 82kg y mido 180.2cm","peso 58kg y mido 168.0cm"]
]

var puntajePorOpcion = [
    [5,4,3,2,1],
    [4,3,2,1,5],
    [3,2,1,5,4],
    [2,1,5,4,3],
    [1,5,4,3,2]
]   

//Aqui se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

function mostrarResultado() {
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    document.getElementById("barra-progreso").value = i* 100 / preguntas.length;


    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";

    if (puntaje > 25) {
        estiloVida = "<span id='estilo-excelente'>EXCELENTE</span>";
    } else if (puntaje > 22) {
        estiloVida = "<span id='estilo-bueno'>BUENO</span>";
    } else if (puntaje > 15) {
        estiloVida = "<span id='estilo-aceptable'>ACEPTABLE</span>";
    } else if (puntaje > 10) {
        estiloVida = "<span id='estilo-regular'>REGULAR</span>";
    } else {
        estiloVida = "<span id='estilo-malo'>MALO</span>";
    }
    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que estas bien de salud ${estiloVida}.</p>`;
}

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    if (i < preguntas.length) {
        puntaje += puntajePorOpcion[i][indice];
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}
function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("op5").innerHTML = opciones[i][4];
        
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
    i++;
}
siguientePregunta();  // Muestra la primera pregunta
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);
});
document.getElementById("op5").addEventListener("click", function () {
    actualizarPuntaje(5);
});


