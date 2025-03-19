let amigosIngresados = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigos = inputAmigo.value;

    if(!nombreAmigos){
        alert("Debes ingresar un nombre");
        return;
    }
   amigosIngresados.push(nombreAmigos);
   inputAmigo.value = "";
   inputAmigo.focus();
   renderizarAmigos();
   
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigosIngresados.length; i++){
        let item = document.createElement("li");
        item.textContent = amigosIngresados[i];
        listaAmigos.appendChild(item);
    }

}

function sortearAmigo(){
    if(amigosIngresados.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let amigoGanador = amigosIngresados[Math.floor(Math.random() * amigosIngresados.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoGanador}`;

    let limpiar = document.getElementById("listaAmigos");
    limpiar.innerHTML = "";
}