let nombre = prompt('Ingrese su nombre:');
let valComp = Number(prompt('Ingrese valor de compra:'));
let bolita = prompt('Ingrese color:');
let desc = 0;
let total = 0;

if(bolita === 'blanca'){
    desc = valComp * 0;
}
else if(bolita === 'verde'){
    desc = valComp * 0.10;
}
else if(bolita === 'amarilla'){
    desc = valComp * 0.25;
}
else if(bolita === 'azul'){
    desc = valComp * 0.50;
}
else if(bolita === 'roja'){
    desc = valComp * 1;
}
else{
    desc = valComp * 0;
    alert('el color es invalido');
}
total = valComp - desc;
alert(`el cliente ${nombre} selecciono la bolita ${bolita} y el total que debe pagar es de $${total}`);