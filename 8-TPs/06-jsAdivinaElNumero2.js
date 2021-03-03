/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos = 0;
let num;
let min = 1;
let max = 100;
let comentario;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random()*(max - min + 1 )) + min;

		alert(numeroSecreto);
		contadorIntentos = 0;
}

function verificar()
{
	num = document.getElementById("txtIdNumero").value;
  contadorIntentos++;

  if(num == numeroSecreto){
    if (contadorIntentos == 1){
		comentario = ("Usted es un psíquico, ganó en el primer intento");
	}
	else if(contadorIntentos == 2){
		comentario = ("Excelente percepción! Lo hizo en 2 intentos");
	}
	else if(contadorIntentos == 3){
		comentario = ("Esto es suerte, lo hizo en 3 intentos!");
	}
	else if(contadorIntentos == 4){
		comentario = ("Excelente técnica, solo 4 intentos!");
	}
	else if(contadorIntentos == 5){
		comentario = ("Usted está en la media: 5 intentos");
	}
	else if(contadorIntentos <= 10){
		comentario = ("Falta técnica, lo hizo en " + contadorIntentos + " intentos.");
	}
	else{
		comentario = ("Afortunado en el amorrrrrrrrr! " + contadorIntentos + " intentos");
	}
	document.getElementById("txtIdIntentos").value = comentario;
	}
  else if(num < numeroSecreto){
    alert("Te falta...");
  }
  else{
    alert("Se pasó...");
  }
}