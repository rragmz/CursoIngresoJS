/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)

Validación: si el dato no es el que yo quiero, volverlo a pedir y que el flujo del programa no continúe hasta que el usuario me dé un dato válido
1. pido el dato
2. me fijo si es válido: a. q sea válido; b. q no es válido
3. si no es válido, informo que no es válido y lo vuelvo a pedir.
4. Si es válido, lo uso.*/
function mostrar()
{
	//declaro variables
	let clave;

	//pido el dato
	clave = prompt("Ingrese la clave: ")

	while(clave != "utn750"){ //acá me fijo si el dato es válido. será falsa cuando sea válido así no entro al while
		clave = prompt("Clave inválida, reingrese clave: "); //informo que el dato en inválido. pido el dato nuevamente
	}

	//acá ya puedo utilizar el dato validado
		
	alert("Clave correcta!!");
	
}//FIN DE LA FUNCIÓN
