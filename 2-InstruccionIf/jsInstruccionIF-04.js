function mostrar()
{
	let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 && edad <= 17){
		alert("Sos adolescente");
	}


}//FIN DE LA FUNCIÓN
/*puede ser if(!(edad < 13 || edad > 17))