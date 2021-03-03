/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let total = 0;
	let respuesta;
	let promedio;
	let contador = 0;

	respuesta = prompt("Quiere ingresar un número? s/n:");

	while(respuesta == "s"){
		numero = parseInt(prompt("Ingrese un número: "));
		total += numero;
		contador++; //se puede poner en cualquier lado dentro del while.
		respuesta = prompt("Quiere ingresar otro número? s / n: ");
	}
	promedio = total / contador;

	document.getElementById("txtIdSuma").value = total;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN

/* PODEMOS FORZAR QUE ENTRE AL WHILE!!
let respuesta = "s";

while (respuesta == "s"){
	alert("Hola");
	respuesta = prompt("Quiere que lo salude nuevamente? s/n");
}
alert("Chau");


LA MÁS NATURAL SERÍA:
DO WHILE = TERMINA CON ;
do = hacer
while = mientras

let respuesta //NO NECESITO INICIALIZAR
do
{
	alert("hola");
	respuesta = prompt("Quiere q lo salude nuevamente? s/n");

}while(respuesta == "s");
alert("chau");
*/