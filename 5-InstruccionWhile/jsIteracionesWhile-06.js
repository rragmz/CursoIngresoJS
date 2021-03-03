function mostrar()
{
	let numero;
	let promedio;
	let i = 0; //la leo. Este es un contador: xq es la variable + una constante
	let total = 0;//primero la leo y luego la escribo (está a la derecha del igual). Este es un acumulador: xq es variable + otra variable. 
	//Podría evitar esta utilizando numero = numero + parseInt(prompt("ingrese un número")); e inicializar numero = 0. Pero no es tan legible
	

	while (i < 5){
		numero = parseInt(prompt("Ingrese un número: ")); //este lo ponemos dentro porque queremos que se ejecute 5 veces
		
		while(isNaN(numero)){
			num = parseInt(prompt("Ingrese u nnúmero válido"));
		}

		total += numero; //este tmbn adentro porque queremos que se acumule 5 veces.
		i++;
	}

	promedio = total / 5; //afuera xq si estuviese adentro del while se seguiría repitiendo ¿cuántas veces necesito calcular el promedio? 1 o 5?

	document.getElementById("txtIdSuma").value = total;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN

/*Hay dos cosas que se pueden hacer con una variable (dirección de memoria): leerla o escribirla
Cómo sé cuándo tengo que inicializar una variable o no?
Si uso a la variable para leer la voy a inicializar (x ejemplo cuando declaramos i = 0, la tenemos q inicializar xq luego la utilizaremos en coparaciones y sino da undefined)
Cunado uso por primera vez a la variable para escribir, no la voy a inicializar.

qué debo preguntar para saber si algo que voy a escribir está adentro del while o a fuera? 'cuántas veces tengo que realizar esta opción?

let total = 0;

while(total < 100){
	total += parseInt(prompt(Ingrese un número));
}

*/

