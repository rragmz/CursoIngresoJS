function mostrar()
{
	let estacion;
	let destino;
	let res;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if (destino == "Bariloche"){
				alert("Se viaja"); //seViaja = true;
				//res= "se viaja";
			}
			else{
				alert("No se viaja"); //seViaja = false;
			}
			break;
		
			case "Verano":
				if(destino == "Mar del plata" || destino == "Cataratas"){
					alert("Se viaja");
				}
				else{
					alert("No se viaja");
				}
				break;

			case "Primavera":
				if (destino != "Bariloche"){
					alert("Se viaja");
				}
				else{
					alert("No se viaja");
				}
				break;
			
			default:
				alert("Se viaja");
	}
	/*if (seViaja){
		alert("Se viaja");
	}
	else{
		alert("No se viaja");
	}

	//alert (res);

}//FIN DE LA FUNCIÓN