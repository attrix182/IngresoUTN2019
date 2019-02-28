function Mostrar() {
    var numero;
    var cantidad = 0;
    numero = parseInt(prompt("ingrese un numero"));
    while (numero <= 0 || isNaN(numero)) {

        numero = parseInt(prompt("ingrese un numero valido"));
    }



    for (i = 1; i <= numero; i++) {

        if (i % 2 == 0) {
            cantidad++;
            console.log(i)
        }
        console.log("cantidad de pares " + cantidad)

    }
}//FIN DE LA FUNCIÓN