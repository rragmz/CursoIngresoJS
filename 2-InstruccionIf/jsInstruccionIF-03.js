function mostrar()
{
	let edad;
	//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;

	if(edad >= 18){
		alert("Sos mayor de edad");
	}

	else{
		alert("Sos menor de edad");
	}

}//FIN DE LA FUNCIÓN