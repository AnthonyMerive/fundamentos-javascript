//declaro variable

let dia = Number(prompt('Ingrese numero'));

//invoco switch
switch(dia){
//establezco cada caso para cada numero
case 1:
    alert('el numero es lunes');  
    break;
case 2:
    alert('el numero es martes');
    break;
case 3:
    alert('el numero es miercoles');
    break;
case 4:
    alert('el numero es jueves');
    break;
case 5:
    alert('el numero es viernes');
    break;
case 6:
    alert('el numero es sabado');
    break;
case 7:
    alert('el numero es domingo');  
    break;

default:
    alert('el dia no pertenece a la semana');
    break;
}
//----------------------------------------------------------------------
//estructura para caracteres
//----------------------------------------------------------------------
//*tolocalelowercase() coloca en minuscula el dato ingresado
//switch(fruta.tolocalelowercase()){
    //case'mango:
    //alert('el precio de la fruta es xxx');
    //break;
    //.
    //.
    //.
    //default:
    //alert('la fruta se encuentra agotada');
//}