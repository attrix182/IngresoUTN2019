function Mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value
var estadociv = document.getElementById("estadoCivil").value

if (edad < 18 && estadociv != "Soltero")
{
    alert("Es muy pequeño para NO ser soltero.")
}


}//FIN DE LA FUNCIÓN