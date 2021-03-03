function mostrar()
{
	let numero;


	for( ; ;){ //Puedo dejar la condición vacía para q sea un bucle infinito

		numero = parseInt(prompt("Ingrese un número: "));

		while(isNaN(numero)){
			numero = parseInt(prompt("Ingrese un número válido: ")); 
		}

		if(numero == 9){
			break;
		}

		console.log(numero); //si lo pongo acá no se va a mostrar el 9. Si lo pongo antes del if q contiene el break, sí me lo va a mostrar
	}



}//FIN DE LA FUNCIÓN