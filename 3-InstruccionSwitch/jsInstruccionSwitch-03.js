function mostrar()
{
	//Como solo nos pide una condición, utilizaremos DEFAULT. si no es tal cosa, es porque sí o sí se encuentra entre las otras. Para esto se usa.

	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			alert("Este mes no tiene más de 30 días");
			break;

		default:
			alert("Este mes tiene 30 días o más");
			break; //no es necesario q termine con break
	}
	
	//EN LA VIDA REAL SE USARÍA IF PARA ESTE EJERCICIO


}//FIN DE LA FUNCIÓN