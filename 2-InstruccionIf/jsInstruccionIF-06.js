function mostrar()
{
	let edad;
	//tomo la edad  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13){
		alert("Sos niño");
	}

	else if(edad <= 17 ){
		alert("Sos adolescente");
	}

	else if(edad < 65){
		alert("Sos adulto");
	}

	else{
		alert("Es anciano");
	}


}//FIN DE LA FUNCIÓN

/*	if (edad<13){
		alert("es niño");
	else{
		if(edad>17){
			alert("el mayor");
		}
		else{
			alert("es adolescente");
		}
	}
}