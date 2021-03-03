/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  let tipo;
  let cantBolsas;
  let precioBolsa;
  let descuento;
  let respuesta;
  let acumBolsas = 0;
  let total = 0;
  let totalDesc;
  let acumArena=0;
  let acumCal=0;
  let acumCemento=0;
  let tipoMasCantidad;
  let flagBolsa;
  let precioMasCaro=0;
  let tipoMasCaro;

  do{

    tipo = prompt("Ingrese el tipo (arena/cal/cemento): ");
    while(!(tipo == "arena"|| tipo == "cal" || tipo == "cemento")){
      tipo = prompt("Error. Ingrese un tipo correcto (arena/cal/cemento): ");
    }

    cantBolsas= parseInt(prompt("Ingrese cantidad de bolsas: "));
    while(isNaN(cantBolsas)){
      cantBolsas= parseInt(prompt("Error. Ingrese cantidad de bolsas: "));
    }

    precioBolsa= parseInt(prompt("Ingrese el precio por bolsa: "));
    while(isNaN(precioBolsa) || precioBolsa < 0){
      precioBolsa= parseInt(prompt("Ingrese el precio correcto: "));
    }

    if(flagBolsa || precioBolsa > precioMasCaro){
      tipoMasCaro = tipo;
      precioMasCaro = precioBolsa;
      flagBolsa = 0;
    }

    total += (cantBolsas * precioBolsa);

    if(tipo == "arena"){
      acumArena += cantBolsas;
    }
    else if(tipo == "cal"){
      acumCal += cantBolsas;
    }
    else{
      acumCemento += cantBolsas;
    }
  
    respuesta= prompt("Quiere ingresar más artículos? (s/n): ");
  }while(respuesta == "s");


  if(cantBolsas > 10){
    if(cantBolsas > 10 && cantBolsas < 30){
      descuento = 0.15;
      totalDesc = total - (total*descuento);
      
    }
    else if(cantBolsas > 30){
      descuento = 0.25;
      totalDesc = total - (total*descuento);
    }
    mensaje = totalDesc;
  }
  else{
    mensaje = "No corresponde";
  }

  
  if(acumArena > acumCal && acumArena > acumCemento){
    tipoMasCantidad = "arena";
  }
  else if(acumCal > acumArena && acumCal > acumCemento){
    tipoMasCantidad = "cal";
  }
  else{
    tipoMasCantidad = "cemento";
  }

  console.log("El precio a pagar bruto es de: " + total);
  console.log("El precio con descuento es de: " + mensaje);
  console.log("El tipo con más cantidad es: "+ tipoMasCantidad);
  console.log("El tipo más caro es: " + tipoMasCaro);

}
