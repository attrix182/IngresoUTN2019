function Mostrar() {

    var numero = 0;
    numero = parseInt(prompt("ingrese un numero"));
    while (isNaN(numero)) {
    
        numero = parseInt(prompt("ingrese un numero valido"));
        }


        var cantidad = 0;

    
    for (i = 2; i <= numero; i = i + 2) {


        cantidad = cantidad + 1;
        alert(i);

    }
    cantidad = cantidad;
    alert("numero " + cantidad);



}//FIN DE LA FUNCIÓN