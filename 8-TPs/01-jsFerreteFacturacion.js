/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultado = precioUno + precioDos + precioTres;

    alert("La suma es: " + resultado);
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultado;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultado = (precioUno + precioDos + precioTres)/3;

    alert("El promedio es: " + resultado);
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultado;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultado = precioUno + precioDos + precioTres;
    resultado += resultado * 0.21;
    
    alert("La suma es: " + resultado);
}