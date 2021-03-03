/*
1. vatiables (nombre, edad, sexo, estado, temperatura, contviudos, contviudosH, contsolterosH, flagTempMax, nombreTempMax, contTempEdad, promEdadSolt, acumEdad)
*/

function mostrar(){
    let nombre;
    let edad;
    let sexo;
    let estado;
    let temperatura;
    let contViudos = 0;
    let contVSH = 0;
    let flagTempMax = 1;
    let nombreTempMax;
    let contTempEdad =0;
    let promEdadSolt;
    let contSolt=0;
    let acumEdad = 0;

    do{
        nombre = prompt("Ingrese su nombre: ");
        while(!(isNaN(nombre))){
            nombre = prompt("Reingrese su nombre: ");
        }

        edad = parseInt(prompt("Ingrese su edad: "));
        while(isNaN(edad) || edad < 0){
            edad = parseInt(prompt("Reingrese su edad: "));
        }
        

        sexo = prompt("Ingrese sexo (f/m): ").toLowerCase();
        while(!(sexo == "f" || sexo == "m")){
            sexo = prompt("Reingrese sexo (f/m): ").toLowerCase();
        }

        estado = prompt("Estado civil (soltero/casado/viudo): ").toLowerCase()
        while(!(estado == "soltero" || estado == "casado" || estado == "viudo")){
            estado = prompt("Reingrese estado civil (soltero/casado/viudo): ").toLowerCase();
        }
        
        temperatura = parseFloat(prompt("Ingrese su temperatura: "));

        if(sexo == "m" && estado != "casado"){
            contVSH++;
        }

        if(edad >= 18 && estado == "viudo"){
            contViudos++;
        }

        if(sexo == "m" && estado == "soltero"){
            acumEdad += edad;
            contSolt++;
        }
        
        respuesta = prompt("Quiere ingresar más pasajeros? s/n : ");
    }while(respuesta == "s");
}

if(contSolt != 0){
    promEdadSolt = acumEdad / contSolt;
    console.log(promEdadSolt);
}
else{
    console.log("no se ingresaron solteros")
}