function Mostrar()
{

	var contador=1;
	var acumulador=0;
	var ingreso;
while (contador <= 5) 
{
	ingreso = parseFloat(prompt("ingrese 5 numeros"));

	acumulador = acumulador + ingreso;

	contador++;
}


document.getElementById('suma').value=acumulador.toFixed(2);
document.getElementById('promedio').value=(acumulador/5).toFixed(2);

}
//FIN DE LA FUNCIÓN