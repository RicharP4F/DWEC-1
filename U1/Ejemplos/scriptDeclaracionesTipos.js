
//****** Explicación sobre el uso estricto:
//Sin activar use strict no hay problemas si no declaramos variables:
// var x = 2;
// var y = 3;
// t = x + y;
// console.log(t);

//Cuando activamos use strict debemos declarar variables o da error:
// "use strict";
// var x = 2;
// var y = 3;
// z = x + y;
// console.log(z);



//***** Diferencia entre null, undefined y no declarar la variable
//null: x se ha declarado pero no tiene valor. Sí tiene tipo porque se
//le ha dado el valor de null
var x = null;

//undefined: se ha declarado una variable pero no tiene tipo. Se le asigna automáticamente el tipo undefined
var k;
console.log(k);

//no declarar variable. No tiene espacio, no tiene tipo, no existe.
console.log(s);
//
// //cadena vacía. Se ha declarado, se le ha asignado el tipo string pero se ha dejado la cadena vacía
// var s = "";
// console.log(s);
//
// //Esto no es una cadena vacía porque tiene el valor espacio en blanco.
// var s = " ";
// console.log(s);


//**** Diferencia entre Infinite y NaN
// //Infinito es un número
// var z = 3/0;
// console.log(z);
//
// //NaN no es un número
// var z = 0/0;
// console.log(z);
//
// //Indeterminaciones matemáticas:
// console.log("Infinito - Infinito es " + (Infinity - Infinity));
// console.log("Infinito + Infinito es " + (Infinity + Infinity));
// console.log("Infinito*5 es " + (Infinity*5));

// //Concatenación estricta
// var string = "Hola";
// // string += " Mundo";
// string = string + " Mundo";
// console.log(string + "!");


// // ***** Operadores normales: +, -, *, /
// console.log((5 + 4) / 3);
// console.log(undefined / 5);


// // ***** Igualdad
// var x = 4, y = 4;
// if (x == y) {
//   console.log("x=4 es igual a y=4");
// }
//
// x = "4";
// if (x == y) {
//   console.log("x='4' es igual a y=4");
// }


// // ***** Igualdad estricta
// if (x === y) {
//   console.log("Estricta: x='4' es igual a y=4");
// }
// else {
//   console
//   .log("Estricta: x='4' es distinto de y=4");
// }

// // ***** If todo false
 if ( false || null || undefined || "" || 0 || NaN) {
   console.log("Este línea nunca se ejecutará");
// }
// else {
//   console.log ("Son todos unos falsos");
// }

// // ***** If todo true
// if (true && "hello" && 1 && -1 && "false") {
//   console.log("Todo verdad");
// }
