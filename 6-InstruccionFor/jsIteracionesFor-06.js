function mostrar()
{
	//pedir un número positivo;
	//hacer q una varibale tome los valores desde el 1 hasta el número ingresado y preguntar si el valor que toma la variable en cada iteración es par y si es par lo muestro;
	let numero;
	let pares = 0;

	numero = parseInt(prompt("Ingrese un número: "));

	while(isNaN(numero) || numero <= 0){
		numero = parseInt(prompt("Error. Ingrese un número positivo: "));
	}
	//la inicializamos en 1 porque así lo pide la consigna. De esta manera vamos a recorrer desde el 1 hasta el número ingresado y, con el if corroboramos que sea un número par.
	for(let i = 1; i < numero; i++){
		if(i % 2 == 0){
			console.log(i);
			pares++
		}
	}
	console.log("La cantidad de números pares son: " + pares);


}//FIN DE LA FUNCIÓN