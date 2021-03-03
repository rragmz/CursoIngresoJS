/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseInt(prompt("Ingrese un número entre 0 y 9:"));

	while(!(numero >= 0 && numero < 10) /*|| isNaN(numero)*/){
		numero = parseInt(prompt("Dato inválido, ingrese un número entre 0 y 9:"));
	}

	document.getElementById("txtIdnum").value = numero;
	
	
}//FIN DE LA FUNCIÓN


