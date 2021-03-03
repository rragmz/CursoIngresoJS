/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let flagTemp = 1;
	let nombreTemp;
	let tempAlta;
	let ContViudos= 0;
	let contViudosH = 0;
	let contSoltH= 0;
	let contTerTemp = 0;
	let edadSolteros = 0;
	let promEdadSolteros;


	do{
		nombre = prompt("Ingrese su nombre: ");
		while(!(isNaN(nombre))){
			nombre = prompt("Error. Ingrese su nombre: ");
		}

		edad = parseInt(prompt("Ingrese su edad: "));
		while(isNaN(edad)){
			edad = parseInt(prompt("Error. Ingrese su edad: "));
		}

		sexo = prompt("Ingrese sexo (f/m): ").toLowerCase();
		while(!(sexo == "f" || sexo == "m")){
			sexo = prompt("Error. Ingrese sexo (f/m): ").toLowerCase();
		}

		estadoCivil = prompt("Estado civil (soltero/casado/viudo): ").toLowerCase();
		while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo")){
			estadoCivil = prompt("Error. Estado civil (soltero/casado/viudo): ").toLowerCase();
		}

		temperatura = parseFloat(prompt("Temperatura: "));
		while(isNaN(temperatura)){
			temperatura = parseFloat(prompt("Error. Temperatura: "));
		}

		if(flagTemp || temperatura > tempAlta){
			nombreTemp = nombre;
			tempAlta = temperatura;
			flagTemp = 0;
		}

		if(estadoCivil == "viudo" && edad >= 18){
			ContViudos++;
		}

		if(sexo == "m"){
			if(estadoCivil == "viudo"){
				contViudosH++;
			}
			else if(estadoCivil == "soltero"){
				contSoltH++;
				edadSolteros += edad;
			}
		}

		if(edad >= 60 && temperatura >= 38){
			contTerTemp++;
		}

		respuesta = prompt("Desea seguir ingresando pasajeros (s/n)?: ");

	}while(respuesta == "s");

	promEdadSolteros = (edadSolteros/contSoltH);

	console.log("La persona con más temperatura es: " +nombreTemp + " con una temperatura de: " + tempAlta);
	console.log("Hay " + ContViudos + " mayores de edad viudos.");
	console.log("La cantidad de hombres solteros es " + contSoltH + " y la de hombres viudos " + contViudosH);
	console.log("La cantidad de mayores de 60 con más de 38° de fiebre es de " + contTerTemp);
	console.log("El promedio de edad de hombres solteros es " + promEdadSolteros);
}


