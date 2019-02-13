/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



function Sumar () 
{
var nmro1 = parseFloat(document.getElementById("PrecioUno").value);
var nmro2 = parseFloat(document.getElementById("PrecioDos").value);
var nmro3 = parseFloat(document.getElementById("PrecioTres").value);
var suma = nmro1 + nmro2 + nmro3;

alert("la suma es $ " + suma);

}
function Promedio () 
{
var nmro1 = parseFloat(document.getElementById("PrecioUno").value);
var nmro2 = parseFloat(document.getElementById("PrecioDos").value);
var nmro3 = parseFloat(document.getElementById("PrecioTres").value);
var promedio = (nmro1 + nmro2 + nmro3) /3; 

alert("el promedio es " + promedio);
    
	
}
function PrecioFinal () 
{
var nmro1 = parseFloat(document.getElementById("PrecioUno").value);
var nmro2 = parseFloat(document.getElementById("PrecioDos").value);
var nmro3 = parseFloat(document.getElementById("PrecioTres").value);
var iva = (nmro1 + nmro2 + nmro3) *21/100;
var precioTotal = iva + nmro1 + nmro2 + nmro3;

alert("El precio final es $ " + precioTotal);
	
}