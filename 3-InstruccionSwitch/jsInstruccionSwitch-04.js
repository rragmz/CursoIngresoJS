function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			alert("Este mes tiene 28 días o 29 si es año bisiesto");
			break;
		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
			break;

		default:
			alert("Este mes tiene 31 días");
			break;
	}
}//FIN DE LA FUNCIÓN