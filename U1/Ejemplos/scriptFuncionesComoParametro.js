//Definimos una función que saluda en genérico
function saludador(persona){
	alert("Buenos días " + persona);
}
////Definimos una función que saluda a Pacos,
////reutilizando la anterior función
// function saludaPacos(saludador){
// 	var nombre = "Paco";
// 	saludador(nombre);
// }
// Ejemplo de uso
//saludaPacos(saludador);

// function saludaX(saludador){
//   var x = prompt("Introduce tu nombre ");
//   saludador(x);
// }
// // Ejemplo de uso
// saludaX(saludador);




// //Definimos una función que acepta 2 parámetros y devuelve un valor
// function multiplica(x, y) {
//   return x * y;
// }
// //Ejemplo uso
// var x = 2;
// var y = 3;
// var res = multiplica(x,y);
// console.log(res);




// //Definimos una función que acepta
// //1 parámetro y devuelve una función a la que modifica
// //con ese parámetro
// //**** Función fábrica de funciones:
// function creaMultiplicadores(multiplicador) {
//   var funcionResultado = function (x) {
//     return multiplicador * x;
//   };
//   return funcionResultado;
// }
// //Ejemplo uso
// var funcionTriple = creaMultiplicadores(3);
// console.log(funcionTriple(10));
// var funcionDoble = creaMultiplicadores(2);
// console.log(funcionDoble(100));
