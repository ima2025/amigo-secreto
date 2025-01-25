// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres =[];

function añadirAmigo () {
    let nombreAmigos = document.getElementById("amigo").value;

    if (nombreAmigos=="") {
        alert("Por favor, inserte un nombre.");
    }else{
        //lo q esta en nombreAmigos será introducido dentro del array nombres
        nombres.push(nombreAmigos);
        limpiarCaja();
    }
}
function limpiarCaja(){
    document.getElementById("amigo").value = "";
}