function Mostrar()
{
//tomo la edad  
var años = document.getElementById("edad").value;

if (años >=18) {

    alert("eres mayor de edad")
} else if (años >= 13 && años < 18) {

    alert("eres adolescente")
} else if (años < 13) {

    alert("es un niño")
}






}//FIN DE LA FUNCIÓN
