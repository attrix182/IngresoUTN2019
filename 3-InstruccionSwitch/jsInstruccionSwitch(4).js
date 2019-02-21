function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;

switch(mesDelAnio) 
{
    case "Febrero":
    {
        alert("Este mes tiene 28 dias");
        break;
    }
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Junio":
    case "Octubre":
    case "Diciembre":
    {
        alert("Este mes tiene 31 dias" );
        break;
    }
    default:
    {
        alert( "Este mes tiene 30 dias");
        break;
    }
}
	


}
//FIN DE LA FUNCIÓN