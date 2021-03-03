/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let num;
	let numMax;
	let numMin;
	let flag = 1; //si pongo el que está comentado, tengo q cambiarlo a 0

	do{
		//pido número
		num = parseInt(prompt("Ingrese un número: "));
		//valido el número
		while(isNaN(num)){
			num = parseInt(prompt("Eso no es un número, ingrese un número válido"));
		}
		//dps de validar el número tengo que ver si estoy en la primera iteración. Porque si estoy en la primera tengo que asignarlo a max y a min y, si estoy en las restantes tengo que comparar.
		
		
		/*if(flag == 0 || num > numMax){
			numMax = num;
		}

		if(flag == 0 || num < numMin){ //dos if xq si es menor al máximo, pero no es menor al mínimo reemplazaría el mínimo aunque no lo cumpla.
			numMin = num;
			flag = 1
		}*/
		if(flag || num > numMax){
			numMax = num;
		}
		if(flag || num < numMin){
			numMin = num;
			flag = 0; //con esto hacemos q flag se muestre como false
		}
		//pregunto si desea seguir ingresando números.
		respuesta = prompt("Quiere seguir ingresando números? s/n").toLowerCase();

	}while(respuesta == "s"); //la condición del while
	//muestro en pant
	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;

}//FIN DE LA FUNCIÓN