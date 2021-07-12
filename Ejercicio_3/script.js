//declaro n y lo solicito en una ventana

let n = Number(prompt('ingrese un numero'));

//si el modulo de la division entre 2 es igual a cero
//if(n%2 === 0){
//    alert(`${n} es par`); //el numero ingresado es par
//}
//else{ //de lo contrario
//    alert(`${n} es impar`); //el numero ingresado es impar
//}

//------------------------------------------------------------
//condicional ternario
//------------------------------------------------------------
n%2===0 ?
alert(`${n} es par`):alert(`${n} es impar`);