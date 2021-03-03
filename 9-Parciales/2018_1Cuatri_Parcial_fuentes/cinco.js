function mostrar()
{
    let planeta;

    planeta = prompt("Ingrese un planeta en minúsculas: ");

    switch(planeta){
        case "tierra":
            alert(planeta + ", acá vivimos");
            break;

        case "mercurio":
        case "venus":
            alert(planeta + ", acá hace más calor");
            break;
        
        case "marte":
        case "jupiter":
        case "júpiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert(planeta + ", acá hace más frío");
            break;

        default:
            alert("Ingrese un planeta válido");
    }
}
