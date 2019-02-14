/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tempFarenheit = parseFloat(document.getElementById("Temperatura").value);
    var deFaC = (tempFarenheit - 32) *5/9;
    alert(tempFarenheit + " grados Farenheit en grados Centigrados son " + deFaC.toFixed(2));
}

function CentigradosFahrenheit () 
{
    var tempCentigrados = document.getElementById("Temperatura").value;
    var deCaF = (tempCentigrados *9/5) + 32 ;
    alert(tempCentigrados + " grados Centigrados en grados Farenheit son " + deCaF.toFixed(2));
}
