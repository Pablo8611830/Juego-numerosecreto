/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del numero secreto"; 

let parrafo = document.querySelector ("p");
parrafo.innerHTML = "Indica un número del 1 al 10";
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log (numeroSecreto);

//La funcion declarada abajo sirve para cualquier elemento del HTML
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

//Colocar comentarios Ctrl + } todo lo seleccionado
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero, en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor");   
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");   
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    document.querySelector("#valorUsuario").value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista se hace una operacion
    if (listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");

    }else{

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
     document.querySelector("#reiniciar").setAttribute("disabled",true);
}


condicionesIniciales();


//asignarTextoElemento("h2","Nuevo titulo"); (se debe agregar el h2 en HTML para que funcione)