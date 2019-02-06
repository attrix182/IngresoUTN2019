/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	precio = document.getElementById("importe").value
    descuento = parseInt(precio) *25/100
    document.getElementById("resultado").value = parseInt(precio) - parseInt(descuento)

}
