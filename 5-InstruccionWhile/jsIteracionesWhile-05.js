/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	
	//pido el dato y lo convertimos a minúscula. Para mayúscula es toUpperCase()
	sexo = prompt("Ingrese sexo f / m:").toLowerCase();

	//o lo convertimos así, es lo mismo
	//sexo = sexo.toLowerCase();

	//valido el dato con while. tiene que ser con && porque sino valida una parte al ingresar f/m y, si ponemos || nos quedaría v || f = v, y entra al while.
	while (sexo != 'f' && sexo != 'm'){ //tmbn puede ser !(sexo == "f" || sexo == "m")
		//informo que el dato es inválido y lo pido nuevamente
		sexo = prompt("Error. Sexo inválido. Ingrese sexo f / m:").toLowerCase(); //HAY QUE APLICAR TOLOWERCASE TMBN ACÁ!
	}
	
	//si el flujo del programa llega hasta acá, significa que en la variable sexo tengo cargado un sexo válido
	document.getElementById("txtIdSexo").value = sexo;

	
}//FIN DE LA FUNCIÓN