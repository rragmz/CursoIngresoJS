/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

1. Declarar variables
2. Generar un bucle que itere 5 veces.
------acá las tareas dentro del bucle
3. pido el tipo
3.1 valido el tipo
4. pido el precio
4.1 valido el precio
5. pido cantidad
5.1 valido cantidad
6. pido marca
7. pido fabricante

**Cosas que tengo que hacer
PUNTO A
1. me tengo que fijar si el producto es de tipo alcohol
2. si es alcohol, debería preguntar si es el primer alcohol o no
3. Si es el primero, guardo el precio, la cantidad y el fabricante.
3.1 Si no es el primer alcohol, comparo el precio con el del minimo
3.2 Si el precio es menor, actualizo los datos del alcohol barato.

PUNTO B
* Tengo que tener un contador de alcohol y en cada iteración debo acumular las cantidades de TIPO.
1. Actualizo el acumulador que corresponda al tipo (acumulador es cantidad de productos)
2. Incrementar el contador que corresponda al tipo. (contador es lacantidad d veces q hice una compra)

PUNTO C
Muestro el acumulador correspondiente a tipo jabón

---------------TERMINADO EL BUCLE
Para el PUNTO A
*muestro lo que hay en las variables precio mínimo/fabricante mínimo y cantidad mínimo de alcohol.
Para el B
*me fijo cuál es el acumulador mayor y de ese tipo calculo el promedio.
Para el C
*muestro el acumulador de jabones
*/
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	//acumulador cantidad de unidades de cada tipo
	let acumuladorBar = 0;
	let acumuladorJab = 0;
	let acumuladorAlc = 0;
	//contador: cantidad de compras de cada tipo
	let contBar = 0;
	let contJab = 0;
	let contAlc = 0;
	let precioMinAl = 0;
	let fabricanteMinAl;
	let cantidadMinAl = 0;
	let flagAlcohol = 1; //podría utilizar el contador de alcohol.
	let promedio;
	let maxTipo;

	for(let i = 0; i < 5; i++){
		tipo = prompt("Ingrese el tipo: (barbijo/jabon/alcohol)").toLowerCase();
		while(!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol")){
			tipo = prompt("Error. Ingrese un tipo correcto: ");
		}

		precio = parseInt(prompt("Ingrese el precio: "));
		while((!(precio >= 100 && precio <= 300)) || isNaN(precio)){
			precio = parseInt(prompt("El precio debe estar entre 100 y 300: "));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad de unidades: "));
		while(cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)){
			cantidad = parseInt(prompt("Reingrese la cantidad. No debe superar las 1000: "));
		}

		marca = prompt("De qué marca es?: ");
		fabricante = prompt("Quién es su fabricante?: ");
		//Termino de ingresar los datos del producto

		//Punto A
		if(tipo == "alcohol"){ //todo lo q se relaciona c alcohol
			if(flagAlcohol || precio < precioMinAl){ //con flag averiguamos si es la primera vez, con el otro comparamos el precio de todas las iteraciones. Entramos cuando es la primera vez y luego comparamos los mínimos para actualizar
				precioMinAl = precio;
				fabricanteMinAl = fabricante;
				cantidadMinAl = cantidad;
				flagAlcohol = 0;
			}
			
			acumuladorAlc += cantidad;
			contAlc++;
		}
		//Contador de tipo
		else if(tipo == "barbijo"){ //todo lo que se relaciona con barbijo
			acumuladorBar += cantidad;
			contBar++;
		}
		else{ //todo lo que se relaciona con jabon
			acumuladorJab += cantidad;
			contJab++
		}

		//fijarme cuál es el acumulador mayor
	}

if(acumuladorAlc > acumuladorBar && acumuladorAlc > acumuladorJab){
	promedio = acumuladorAlc / contAlc;
	maxTipo = "Alcohol";
}
else if(acumuladorBar >= acumuladorAlc && acumuladorBar > acumuladorJab){
	promedio = acumuladorBar / contBar;
	maxTipo = "Barbijo";
}
else{
	promedio = acumuladorJab / contJab;
	maxTipo = "Jabón";
}
//RPTA PUNTO A
if (flagAlcohol == 1){
	document.write("a. No se compraron alcoholes. <br>");
}
else{
	document.write("a. El alcohol más barato vale: $" + precioMinAl + ", la cantidad fue: " + cantidadMinAl + ", y el fabricante fue: " + fabricanteMinAl + "<br>");
}

//PUNTO B
document.write("b. El tipo con más unidades es: " + maxTipo + " y el promedio de unidades por compra es: " + promedio + "<br>");

//PUNTO C
document.write("Se compraron " + acumuladorJab + "jabones.");
}
