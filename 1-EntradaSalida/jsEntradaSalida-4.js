/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	dato = prompt("Escriba un dato")
	document.getElementById("elNombre").value = dato
}

