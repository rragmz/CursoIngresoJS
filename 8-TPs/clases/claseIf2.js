/* Nombre: Rocío Gómez
Enunciado: 
2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III */

let nombre;
let estatura;
let peso;
let imc;
let mensaje;

nombre = prompt("Cómo te llamás?: ");
estatura = parseFloat(prompt("Ingresá tu estatura en metros: "));
peso = parseFloat(prompt("Ingresa tu peso en kilos: "));

imc = (peso / (estatura**2)).toFixed(1);

if(imc < 18.5){
    mensaje = "bajo peso.";
}
else if(imc >= 18.5 && imc < 25){
    mensaje = "peso normal.";
}
else if(imc >= 25 && imc < 30){
    mensaje = "preobesidad.";
}
else if (imc >= 30 && imc < 35){
    mensaje = "obesidad tipo I."
}
else if(imc >= 35 && imc < 40){
    mensaje = "obesidad tipo II."
}
else{
    mensaje = "obesidad tipo III."
}

alert(nombre + ", tu IMC es: " + imc + " significa que tenés " + mensaje);