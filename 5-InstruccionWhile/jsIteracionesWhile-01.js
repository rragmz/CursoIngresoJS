/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
1. Variable de control
2. valor inicial de la variable de control
3. incremento o actualización de la variable de control*/
function mostrar() {
  let i = 0;

  while (i < 10) {
	i++;
    console.log(i);
  }
} //FIN DE LA FUNCIÓN

/*Si empezamos la variable en 0, es mejor utilizar el < numero ej: i < 4 (va a iterar 3 veces)
Si empezamos de 1, es preferible utilizar <= número ej: i <= 3(itera 3 veces) -> es mas normal esto

let i = 50;
let x = 1;
while (i < 60) {
	i++;
	console.log(x);
	x++;
}
*/