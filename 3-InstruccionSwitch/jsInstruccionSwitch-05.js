function mostrar()
{
	let hora;

	hora = parseInt(document.getElementById("txtIdHora").value);

	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		
	}

	//NUCNA EN LA VIDA RESOLVERÍAMOS CON SWITCH ESTo.


}//FIN DE LA FUNCIÓN

/* if(hora >= 7 && hora <=11){
	alert("es de mañana");
}