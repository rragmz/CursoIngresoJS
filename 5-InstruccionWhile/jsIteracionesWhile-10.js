/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let num;
	let numNeg = 0;
	let numPos = 0;
	let respuesta;
	let pares = 0;
	let promedioNeg = 0;
	let promedioPos = 0; //p q no muestre undefined
	let dif;
	let contadorNeg = 0;
	let contadorPos = 0;
	let contadorCeros = 0;
	

	do{
		num = parseInt(prompt("Ingrese un número: "));
		while(isNaN(num)){
			num= parseInt(prompt("Error, ingrese un número correcto: "));
		}

		if(num > 0){
			contadorPos++;
			numPos += num;
		}

		else if(num < 0){
			contadorNeg++;
			numNeg += num;
		}

		else{
			contadorCeros++;
		}

		if(num % 2 == 0){
			pares++;
		}

		respuesta = prompt("quiere ingresar más números? (si/no): ");

	}while(respuesta == "si");

	if(contadorPos != 0){
		promedioPos = numPos / contadorPos;
	}
//SEPARADOS XQ NO TIENEN NADA QUE VER UNO CON EL OTRO!!!!
	if(contadorNeg != 0){
		promedioNeg = numNeg / contadorNeg;
	}

	console.log("los pos suman: " + numPos);
	console.log("los neg suman: " + numNeg);
	console.log("Los positivos son: " + contadorPos);
	console.log("Los negativos fueron: " + contadorNeg);
	console.log("los 0 son: " + contadorCeros);
	console.log("los pares son " + pares);
	console.log(`el promedio de los positivos es: ${promedioPos}`);
	console.log("el promedio de los neg es: " + promedioNeg);
	console.log("la diferencia entre pos y neg es: " + (dif = numNeg + numPos));
}//FIN DE LA FUNCIÓN

/*Un CONTADOR es una variable que se utiliza para contar algo. Normalmente usamos un contador dentro de un ciclo y cambiamos su valor sumándole o restándole una constante, es decir, siempre se le suma o resta la misma cantidad. El caso más utilizado es incrementar la variable en uno.

Un ACUMULADOR es una variable que se utiliza para sumar valores. Al igual que el contador, se utiliza normalmente dentro de un ciclo pero cambiamos su valor sumándole una variable, es decir, no siempre se le suma la misma cantidad.

*/