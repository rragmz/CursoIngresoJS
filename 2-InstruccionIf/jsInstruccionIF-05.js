function mostrar()
{
	let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13 || edad > 17){
		alert("No sos adolescente");
	}

}//FIN DE LA FUNCIÓN

/*let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(!(edad >= 13 && edad <= 17)){
		alert("No sos adolescente");
	}