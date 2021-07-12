let sb,v1,v2,v3;
let totv;
let porcen;
let total;
sb=Number(prompt('ingrese salario base:'));
v1=Number(prompt('ingrese primera venta:'));
v2=Number(prompt('ingrese segunda venta:'));
v3=Number(prompt('ingrese tercera venta:'));

totv= v1 + v2 + v3;
porcen= totv * 0.1;

total= porcen + sb;

alert(`el total a pagar es ${total}`);
