function mostrar()
{
	let estacion;
	let destino;
	let resultado = 15000; //Sería mejor hacer precio base y resultado (2 variables)
	// let aumento let descuento let precioBase let precioFinal
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if (destino == "Bariloche"){
				resultado += 15000*0.2;
				//aumento = precioBase*0.2;
			}
			else if (destino == "Cataratas" || destino == "Cordoba"){
				resultado -= 15000*0.1;
				//descuento = precioBase*0.1;
			}
			else{
				resultado -= 15000*0.2;
			}
			break;

		case "Verano":
			if (destino == "Bariloche"){
				resultado -= 15000*0.2;
			}
			else if (destino == "Cataratas" || destino == "Cordoba"){
				resultado += 15000*0.1;
			}
			else{
				resultado += 15000*0.2;
			}
			break;
		
		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba"){
				resultado += 15000*0.1;
			}
			break;
		

	}
	//precioFinal = precioBase + aumento - descuento
	alert("El precio final es: $" + resultado);

}//FIN DE LA FUNCIÓN