/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    divisor = document.getElementById("numeroDividendo").value
    dividendo = document.getElementById("numeroDivisor").value
    total = parseInt(divisor) % parseInt(dividendo)
    alert("El resto es " + total)
}
