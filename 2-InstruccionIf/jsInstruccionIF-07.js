function mostrar()
{
	let edad;
	let estado;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	estado = document.getElementById("estadoCivil").value;


	if(edad < 18 && estado != "Soltero"){

		alert("Sos muy pequeño para NO ser soltero");
	}
	


}//FIN DE LA FUNCIÓN