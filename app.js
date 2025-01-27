    // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let amigos =[];

    function añadirAmigo () {
        let nombreAmigos = document.getElementById("amigo").value;

        if (nombreAmigos=="") {
            alert("Por favor, inserte un nombre.");
        }else{
            amigos.push(nombreAmigos);
            limpiarCaja();
        }
    }

    function limpiarCaja(){
        document.getElementById("amigo").value = "";
    }


    function recorreListaAmigos() {
        // Obtener lista <ul>
        let lista = document.getElementById("listaAmigos");
        // Limpiar el contenido actual de la lista para evitar duplicados
        lista.innerHTML = "";
        // Crear una cadena que contendrá todo el contenido de la lista
        let contenido = "";
        //se recorre la lista
        for (let i = 0; i < amigos.length; i++) {
            contenido = contenido + "<li>" + amigos[i] + "</li>";
        }
    // Asignar el contenido generado al innerHTML de la lista (fuera del bucle)
    lista.innerHTML = contenido;
    }


    //Funcion para sortear nombre aleatorio
    function seleccionNombreAleatorio (){
        //Verifica que el arreglo no esté vacío
        if (amigos.length === 0){
            alert ("No hay amigos disponibles");
            return;
        }
        //Genera numero aleatorio entre 0 y maximo amigos length-1
        let numeroAleatorio = Math.floor(Math.random()*amigos.length);
        //Obtiene el nombre correspondiente de amigos a partir del numero sorteado
        let nombreSorteado = amigos [numeroAleatorio];
        // Mostrar el resultado en la página
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>" + nombreSorteado + "</li>";
    }