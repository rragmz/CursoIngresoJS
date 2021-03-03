function mostrar()
{
	let num;
 	let cont = 0;
	let primos = 0;

 num = parseInt(prompt("Ingrese un número: "));

 while(isNaN(num)){
	 num = parseInt(prompt("Error. Ingrese un número: "));
 }

 for(let i = 1; i <= num; i++){
	 if(num % i == 0){
		 cont++;
		 if(cont < 2){
			console.log(i);
			primos++;
		 }
	 }
 }
 console.log("La cantidad de divisores encontrados es: " + primos);

}//FIN DE LA FUNCIÓN