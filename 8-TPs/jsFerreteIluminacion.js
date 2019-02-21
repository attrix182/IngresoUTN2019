/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
 */
function CalcularPrecio ()
{
    var lamparitas;
    var precio;
    var descuento;
    var preciocondescuento;
    var sindescuento;
    var marca;
    var IIBB = 0;

  switch (cantidad) {
    case 1:
    case 2:
      descuento = 0;
      break

    case 3:
    if (marca == "ArgentinaLuz"){
            descuento = sindescuento * 15 / 100;
        }
        else if (marca == "FelipeLamparas"){
            descuento = sindescuento * 10 / 100;
        }
        else{
            descuento = sindescuento * 5 / 100;
        }
        break;
    case 4:
    if (marca == "ArgentinaLuz" || "FelipeLamparas"){
      descuento = sindescuento * 25 / 100;
  }
  else{
      descuento = sindescuento * 20 / 100;
  }
  break;
    case 5:
    if (marca == "ArgentinaLuz"){
      descuento = sindescuento * 40 / 100;
  }
      else{
          descuento = sindescuento * 30 / 100;
      }
      //alert("estoy en el bloque 5");
  }
  break;
 default:
  descuento = sindescuento * 50 / 100;

  }

    lamparitas = parseInt(document.getElementById("Cantidad").value);
    precio = 35;
    sindescuento = lamparitas * precio;
    marca = document.getElementById("Marca").value;



    if (preciocondescuento > 120) {
        IIBB = preciocondescuento * 10 / 100;
        alert("IIBB que usted pago $" + IIBB);
    }
    document.getElementById("precioDescuento").value = preciocondescuento + IIBB;


