/* Nombre: Rocío Gómez
Enunciado: 1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)*/

//contador en vez de numeroPedido
let i = 0;
let numeroIngresado;
let numeroPedido = 0;

while(i < 5){
    numeroIngresado = prompt("Ingrese un número: ");
    if (numeroIngresado >= 10 && numeroIngresado <= 20){
        numeroPedido += 1;
    }
    i++;
}

console.log("La cantidad de números que cumplen con la condición fueron: " + numeroPedido);