function mostrar()
{
	let edad;
	let estado;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	estado = document.getElementById("estadoCivil").value;


	if(edad >= 18 && estado == "Soltero"){

		alert("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN

