function Mostrar()
{

	var acumulador=0;
	var positivo=0;
	var negativo=1;
	var seguir = true
	var flag = 0;

	while (seguir == true) {
		
		numero = parseInt(prompt("agregar un numero"));
		seguir = confirm("Quiere agregar otro numero?");

		if(numero >0) {
 		positivo = numero + numero;
		}
		else {
		negativo = numero * numero;
		flag = 1;	
		}
}


document.getElementById('suma').value=positivo;
if (flag==0) {
	negativo = 0;
}
document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN