/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    sum = parseInt(num1) + parseInt(num2);
    alert("La suma es " + sum)
}

function restar()
{
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    res = parseInt(num1) - parseInt(num2);

	alert("La resta es " + res)
}

function multiplicar()
{ 
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    mult = parseInt(num1) * parseInt(num2);

	alert("La multiplicacion es " + mult)
}

function dividir()
{
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    div = parseInt(num1) / parseInt(num2);

	alert("La division es " + div)
}


