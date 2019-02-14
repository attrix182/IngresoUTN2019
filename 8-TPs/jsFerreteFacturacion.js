/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1 + precio2 + precio3;
    
    alert("la suma es " + suma);
}
function Promedio () 
{
    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1 + precio2 + precio3;
    promedio = suma /3    
    alert("El promedio es " + promedio.toFixed(2) );
}
function PrecioFinal () 
{
    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    suma = precio1 + precio2 + precio3;
    iva = suma *21/100 
    pFinal = suma + iva
    alert("el Precio final es " + pFinal.toFixed(2));
	
}