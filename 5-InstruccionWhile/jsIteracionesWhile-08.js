/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//declaración de variables
	let num;
	let acumuladorPos = 0;
	let acumuladorNeg = 1;
	let respuesta;
	let flag = 0; //vamos a inicializar un contadorNeg para q no se muestre 1 sino 0 en caso de no haber negativos. Variable bandera

	do{
		num = parseInt(prompt("Ingrese un número: "))

		while(isNaN(num)){
			num = parseInt(prompt("Eso no es un número, ingrese un número válido"));
		}

		if(num >= 0){
			acumuladorPos += num;
		}
		else{
			acumuladorNeg *= num;
			flag = 1; //le cambiamos el valor. 
		}
		respuesta = prompt("Quiere seguir ingresando números? s/n").toLowerCase();
	}while(respuesta == "s");

	if(flag == 0){ //Con esto hacemos que no se muestre 1 cuando no se pongan negativos, sino 0
		acumuladorNeg = 0;
	}

	document.getElementById("txtIdSuma").value = acumuladorPos;
	document.getElementById("txtIdProducto").value = acumuladorNeg;
}//FIN DE LA FUNCIÓN

//Herramienta para saber si un bloque de código pasó: FLAG.