function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
while (sexo != "f" && sexo != "m" && sexo != "F" && sexo != "M") {

    sexo = prompt("ingrese una opcion valida")
    
}

alert("sexo " + sexo)



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN