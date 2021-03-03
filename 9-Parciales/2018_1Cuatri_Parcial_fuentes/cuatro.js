function mostrar()
{
    let num1;
    let num2;
    let resultado;

    num1 = parseInt(prompt("Ingrese el primer número: "));
    num2 = parseInt(prompt("Ingrese el segundo número: "));

    if (num1 < num2){
        resultado = num1 + num2;
        if (resultado > 10){
            alert("la suma dio " + resultado + " y es mayor a 10");
        } 
        else{
            alert(resultado);
        }
    }
    else{
        if(num1 == num2){
            resultado = num1;
        }
        else{
            resultado = num1 - num2;
        }
        alert(resultado);
    }
}
