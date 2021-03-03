/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

let largo;
let ancho;
let radio;
let resultado;
let cemento;
let cal;





function Rectangulo () 
{
    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    resultado = (2 * largo + 2 * ancho) * 3;
    alert("Se deben comprar: " + resultado + "m de alambre");

}
function Circulo () 
{
	radio = parseInt(document.getElementById("txtIdRadio").value);
    resultado = (3.14 * (radio ** 2))*3;
    alert("Se deben comprar: " + resultado + " m. de alambre");
}
function Materiales () 
{
	largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    cemento = (largo * ancho) * 2;
    cal = (largo * ancho) * 3;
    alert("Se necesitarán " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}

