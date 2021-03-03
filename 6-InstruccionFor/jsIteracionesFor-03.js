function mostrar()
{
	let repeticiones;
	let mensaje;

	repeticiones = parseInt(prompt("Ingrese la cantidad de repeticiones (número positivo): "));
	while(isNaN(repeticiones) || repeticiones <= 0){ //si no es un número o si es un número negativo quiero decirle:
		repeticiones = parseInt(prompt("Ingrese un número válido: "))
	}
	

	for(let i = 0; i < repeticiones; i++){
		document.write("Hola UTN FRA <br>");
	}


}//FIN DE LA FUNCIÓN