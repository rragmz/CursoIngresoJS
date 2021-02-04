/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
Para hacer esto, tengo que agarrar un dato del HTML: esto lo haremos con document.
Hecho esto, nos pide que tomemos este dato por ID: document.getElementById.
3. entre paréntesis pondremos el nombre del dato como está declarado en el HTML: document.getElementById("txtIdNombre")
como lo que deseamos es igualar nuestra variable (nombre) al valor que se declare en el HTML pondre: document.getElementById("txtIdNombre").value
Finalizaremos el ejercicio cuando mostremos como alerta aquel dato que logramos extraer del HTML y guardar en una variable su valor: alert(nombre)*/


function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value;
	alert(nombre);

	/*Para que luego el casillero donde dice "tu nombre" vuelva a tener valor 0*/
	document.getElementById("txtIdNombre").value = "";
}


