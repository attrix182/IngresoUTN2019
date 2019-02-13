/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var alambre = (largo *2 + ancho *2) *3

    alert("necesita " + alambre.toFixed(2) + " M de alambre"); 
}
function Circulo () 
{
    var radio = parseFloat(document.getElementById("Radio").value);
    var calculaRadio = radio * 2 * 3.14
	alert("necesita " + calculaRadio.toFixed(2));
}
function Materiales () 
{
    var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var cemento = (largo + ancho) *2
    var cal = (largo + ancho) *3

alert("Necesita bolsas de " + cemento " y " + cal " bolsas de cal");
	
} 