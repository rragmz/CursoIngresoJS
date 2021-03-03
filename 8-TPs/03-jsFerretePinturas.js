/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
let temperatura;
let resultado;



function FahrenheitCentigrados () 
{
	temperatura = parseInt(document.getElementById("txtIdTemperatura").value);
    resultado = temperatura - 32;
    alert(temperatura + " grados Fahrenheit son " + resultado + " centígrados");
}

function CentigradosFahrenheit () 
{
	temperatura = parseInt(document.getElementById("txtIdTemperatura").value);
    resultado = temperatura + 32;
    alert(temperatura + " centígrados son " + resultado + " grados Fahrenheit");
}
