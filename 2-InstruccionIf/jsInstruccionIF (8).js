function Mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value
var estadociv = document.getElementById("estadoCivil").value

if (edad < 18 && estadociv != "Soltero")
{
    //alert("Es muy pequeño para NO ser soltero.")
} else if (edad > 18 && estadociv == "Soltero") {

    alert('Es soltero y no es menor.')
}


}//FIN DE LA FUNCIÓN