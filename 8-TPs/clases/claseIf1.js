/* Nombre: Rocío Gómez

Enunciado:
1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace*/

let distancia;
let tiempo;
let velocidad;
let comentario;

distancia = parseFloat(prompt("Ingrese cuál fue la distancia recorrida en kilómetros: "));
tiempo = parseFloat(prompt("Cuánto fue el tiempo que tardó en horas?: "));

velocidad = parseInt(distancia / tiempo);

if(velocidad <= 60){
    comentario = "Muy lento!!";
}
else if(velocidad > 60 && velocidad <= 80){
    comentario = "Lento!";
}
else if(velocidad > 80 && velocidad <= 100){
    comentario = "Buen ritmo! ;)";
}
else if(velocidad > 100 && velocidad <= 120){
    comentario = "Ahí de la ley";
}
else{
    comentario = "Eso no se hace";
}

alert(comentario + ", la velocidad fue de: " + velocidad + "km/h");