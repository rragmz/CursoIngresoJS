function mostrar()
{
	let mes; 

	mes = document.getElementById("txtIdMes").value;


	switch(mes)
	{
		case "Enero": //Si lo ponemos de esta manera, sigue hasta encontrar la indicación a seguir
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;

		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío");
			break;
		
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasó el invierno, ahora calor!");
			break;
	}


}//FIN DE LA FUNCIÓN