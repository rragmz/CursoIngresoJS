/* Nombre: Rocío Gómez

Enunciado :2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.*/

let numeroIngresado;
let contadorNumeros = 0;
let respuesta;
let promedio;
let suma = 0;

respuesta = prompt("Desea ingresar un nuevo número?: ")

while(respuesta == "si"){
    numeroIngresado = parseInt(prompt("Ingrese un número: "));
    if (numeroIngresado >= 10 && numeroIngresado <= 20){
        suma += numeroIngresado;
        contadorNumeros++;
    }
    respuesta = prompt("Desea ingresar un nuevo número?: ")
}

promedio = suma / contadorNumeros;

if (isNaN(promedio)){
    promedio = "no corresponde porque no cumple con la condición"
}

console.log("La cantidad de números que cumplen con la condición fueron: " + contadorNumeros + " y el promedio: " + promedio);