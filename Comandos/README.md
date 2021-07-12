el README.md es importante en cuanto a la interaccion con otros programadores 

COMANDO A USAR EN JS

Variables
let = variables locales y globales
const = constantes

number() = convierte texto a numero
typeof() = muestra el tipo de dato de las variables o constantes

// /**/ = comentarios

promot() = ventana emergente par ingresar datos
document.write = mostrar informacion en el archivo index.html
alert() = ventana emergente en el navegador
console.log() = imprime en consola

Ejemplos:
//---------------------------------------------------------------
Variable/constantes

const a = 'hola';
/et b = 'mundo';
const b=''; hay que tener cuidado con el tipo de variable que asignamos

//imprime en pantalla estado inicial
console.log(a+ ' ' +b); //concatena y muestra hola mundo

b='Jenny'; //actualizamos estado

//imprime segundo valor asignado
//console.log(a+ ' ' +b);

//----------------------------------------------------------------
//ventana emergente
//----------------------------------------------------------------

let nombre = prompt('Ingrese nombre');//ingresa nombre
console.log(nombre);//muestra en consola

//---------------------------------------------------------------
//Suma
//----------------------------------------------------------------

let num1 = Number(prompt('ingrese el primer numero:')); //lee el primer valor como numero
let num2 = Number(prompt('ingrese el segundo numero:')); //lee el segundo valor como numero
let suma = num1+num2; //decimos que suma va a ser igual a n1+n2
console.log(`el resultado de la suma es: //mostramos en consola el resultado
             ${suma}`);                  //tambien podemos mostrarlo en pantalla con la siguiente

//----------------------------------------------------------------
//imprime en pagina
//----------------------------------------------------------------

const mesage = 'hola como estas';
document.write(mesage);