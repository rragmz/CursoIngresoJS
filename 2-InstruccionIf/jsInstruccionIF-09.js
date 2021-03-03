function mostrar()
{
	let num;
	let min = 1;
	let max = 10;
	//Genero el número RANDOM entre mín 1 y máx 10 
	num = Math.floor(Math.random()*(max - min +1 )) + min;

	//Como Math.random nos da un número entre 0 y 1, al multiplicarlo por 10 nos queda un número racional y, con Math.round logramos redondear el número

	alert(num);

}//FIN DE LA FUNCIÓN