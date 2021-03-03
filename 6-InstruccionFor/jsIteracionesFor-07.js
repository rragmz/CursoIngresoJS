function mostrar()
{
 let num;
 let divisores = 0;

 num = parseInt(prompt("Ingrese un número: "));

 while(isNaN(num)){
	 num = parseInt(prompt("Error. Ingrese un número: "));
 }

 for(let i = 1; i <= num; i++){
	 if(num % i == 0){
		 console.log(i);
		 divisores++;
	 }
 }
 console.log("La cantidad de divisores encontrados es: " + divisores);
}//FIN DE LA FUNCIÓN