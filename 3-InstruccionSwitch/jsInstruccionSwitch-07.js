function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Sur");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Cataratas":
			alert("Este");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
	}

}//FIN DE LA FUNCIÓN