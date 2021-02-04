/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/


function mostrar()
{
	/*reservo espacio en memoria*/
	let nombre;

	nombre = prompt("Ingrese su nombre: ");

	/*Quiero que nuestro prompt se inserte en el valor de la caja de texto del HTML*/
	document.getElementById("txtIdNombre").value = nombre;

}
