// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];
console.log(nombresAmigos);

function agregarAmigoLista(){ //al hace clic en el botón
    let inputIngresado = document.getElementById('amigo').value; //se declara una variable, que tomará el valor de lo ingresado en el input 
    console.log(inputIngresado);// se imprime el valor obtenido
    nombresAmigos.push(inputIngresado);
    console.log(nombresAmigos);
    return; // se logra ingresar los nombres a la lista 
}


