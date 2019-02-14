function Mostrar()
{
var nota = Math.round(Math.random()*10);

if (nota >= 9) {

	alert("EXCELENTE " + nota);

} else if (nota >=4) {

	alert("Aprobado " + nota)
} else if (nota < 4) {
	alert("Vamos, la proxima se puede " + nota)
}

}


