/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let num;
let max = 3;
let min = 1;

function comenzar()
{
    num = Math.round(Math.random()*(max - min + 1)) + min;

}//FIN DE LA FUNCIÓN
function piedra()
{
	if(num == 1){
        alert("empató");
    }
    else if(num == 2){
        alert("perdió");
    }
    else{
        alert("ganó");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if(num == 1){
        alert("ganó");
    }
    else if(num == 2){
        alert("empató");
    }
    else{
        alert("perdió");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(num == 1){
        alert("perdió");
    }
    else if(num == 2){
        alert("ganó");
    }
    else{
        alert("empató");
    }

}//FIN DE LA FUNCIÓN