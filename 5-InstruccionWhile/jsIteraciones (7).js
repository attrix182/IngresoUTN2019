function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir = true

	while (seguir == true) {
		
		numero = parseInt(prompt("agregar un numero"));
		seguir = confirm("Quiere agregar otro numero?");
		acumulador = acumulador + numero;
}
	


document.getElementById('suma').value=acumulador.toFixed(2);
document.getElementById('promedio').value=(acumulador/5).toFixed(2);


}//FIN DE LA FUNCIÓN