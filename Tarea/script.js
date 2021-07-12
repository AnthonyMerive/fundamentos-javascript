//Declaro variables
let nombre = prompt('Introduzca su Nombre Completo');
let h_trabajadas = Number(prompt('Introdzca la cantidad de horas trabajadas'));
let pago = 0;
let h_extra = 0;

//condicional

if(h_trabajadas <= 40){ //si horas trabajadas es menor o igual a 40
    pago=16000 * h_trabajadas; //multiplica las horas introducidas por $16.000
    alert(`Sr/a. ${nombre} usted no tiene horas extra por lo cual su pago sera de $${pago}`); //muestro en alert
}
else if(h_trabajadas > 40){ //de lo contrario si horas trabajadas es mayor a 40
    h_extra = h_trabajadas - 40; //primero deducimos cuantas horas extras son
    pago = 16000 * 40 + h_extra * 20000; //y calculamos el pago con el excedente de hors
    alert(`Sr/a. ${nombre} tiene usted ${h_extra} horas extra por tanto su pago sera de $${pago}`); // muestro en alert
}
