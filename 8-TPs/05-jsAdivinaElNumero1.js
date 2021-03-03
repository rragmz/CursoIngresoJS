/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos = 0;
let num;
let min = 1;
let max = 100;
let intentos;

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
    document.getElementById("txtIdIntentos").value = ("Ganó y solo en " + contadorIntentos + " intentos!");
  }
  else if(num < numeroSecreto){
    alert("Te falta...");
  }
  else{
    alert("Se pasó...");
  }
}

/*num = parseInt(document.getElementById("txtIdNumero").value);

  while(num != numeroSecreto){
    contadorIntentos++;
    if (num < numeroSecreto){
      alert("Te falta...");
    }
    else{
      alert("te pasaste!");
    }
    num = parseInt(prompt("Ingrese un número:"))
  }
 
	document.getElementById("txtIdIntentos").value = contadorIntentos;*/