/*variables: tipo, cantidad, precio(por bolsa), respuesta, importe, acumbolsas(q cuente todas las bolsas en total), subtotal(bruto), dcto, importePagar, acumBolsasTipo, flagMax, maxPrecio, maxTipo.

//Estrategia de resolución
1. Dec de variables
2. Generar un bucle del tipo mientras el usuario quiera
2.1. pido tipo, valido tipo
2.2 pido cantidad, valido cantidad
2.3. pido precio, valido precio
2.4. calculo el importe
2.5 acumulo el importe en el subtotal.
2.6 de acuerdo el tipo de producto, actualizo el acumulador de bolsas que corresponde
2.7. me fijo si estoy en la primera iteración y pongo flag para maxPrecio
2.7.1 si no estoy en la priemra, comparo
2.8. pregunta al usuario
----
3. calculo la cant de bolsas compradas
3.1. de acuerdo a la cant de bolsas calculo el porcentaje de dcto
3.2. me fijo si corresponde el dcto
3.3.me fijo cuál es el acumulador de bolsas mayor y muestro el tipo
3.4. el tipo más caro me quedo el MaxTipo y maxPrecio
4. muestro los resultados


*/
function mostrar(){
    let tipo;
    let cantidad;
    let precioBolsa;
    let respuesta;
    let importe;
    let acumBolsas = 0;
    let subtotal = 0;
    let descuento;
    let importePagar;
    let acumArena = 0;
    let acumCal = 0;
    let acumCemento = 0;
    let tipoMasCantidad;
    let flagMax = 1;
    let maxTipo;
    let maxPrecio;

    do{
        tipo= prompt("Ingrese el tipo (arena/cal/cemento: ").toLowerCase();
        while(!(tipo == "arena" || tipo =="cal" || tipo == "cemento")){
            tipo= prompt("Error. Ingrese el tipo (arena/cal/cemento: ").toLowerCase();
        }
        
        cantidad= parseInt(prompt("Ingrese cantidad de bolsas: "));
        while(isNaN(cantidad) || cantidad <= 0){
            cantidad= parseInt(prompt("Ingrese cantidad correcta de bolsas: "));
        }
        

        precioBolsa = parseInt(prompt("Ingrese precio por bolsa: "));
        while(isNaN(precioBolsa) || precioBolsa <= 0){
            precioBolsa= parseInt(prompt("Ingrese precio correcto por bolsas: "));
        }

        acumBolsas += cantidad;

        importe = cantidad*precioBolsa; //se puede hacer directamente subtotal += (cantidad*precioBolsa);
        subtotal += importe;

        switch(tipo){
            case "arena":
                acumArena += cantidad;
            break;
            case "cal":
                acumCal += cantidad;
            break;
            case "cemento":
                acumCemento += cantidad;
            break;
        }

        if(flagMax || precioBolsa > maxPrecio){
            maxPrecio = precioBolsa;
            maxTipo = tipo;
            flagMax = 0;
        }

        respuesta = prompt("Quiere agregar más artículos? (s/n): ");
    }while(respuesta == "s");

    if(acumBolsas < 10){
        descuento = 0;
    }
    else if(acumBolsas >= 10 && acumBolsas < 30){
        descuento = 0.15;
        
    }
    else if(acumBolsas >= 30){
        descuento = 0.25;
    }
    importePagar = subtotal - (subtotal*descuento);


    if(acumArena > acumCal && acumArena > acumCemento){
        tipoMasCantidad = "arena";
    }
    else if(acumCal >= acumArena && acumCal > acumCemento){
        tipoMasCantidad = "cal";
    }
    else{
        tipoMasCantidad = "cemento";
    }

    console.log("a. Precio bruto a pagar: " + subtotal);

    if(acumBolsas > 10){
        console.log("b. Precio con descuento: " + importePagar);
    }
    
    console.log("c. El tipo con más cantidad de bolsas es: " + tipoMasCantidad);
    console.log("d. El tipo más caro es: " + maxTipo + " y su precio es: " + maxPrecio);
}