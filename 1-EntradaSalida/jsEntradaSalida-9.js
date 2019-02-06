/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    ingresos = document.getElementById("sueldo").value
    aumento = parseInt(ingresos) *10/100
    document.getElementById("resultado").value = parseInt(aumento) + parseInt(ingresos)

	
}
