
//*** Primer ejemplo
//¿Puedo crear una variable local con el nombre de la global?
//¿Puedo utilizar una variable global en un ámbito local?
//¿Puedo utilizar una variable local en un ámbito global?
//¿Puedo modificar una variable global en un ámbito local?
var texto = "Hola";
function saluda(){
  var texto = "Buenas tardes!";
  console.log(texto);
}
console.log(texto);
saluda();


// //**** Segundo ejemplo Ámbito variable: referencias externas.
//¿Puedo utilizar una variable que no ha sido creada en mi función?
// var mensaje = "en global";
// console.log("global: mensaje = " + mensaje);
//
// var a = function () {
//   var mensaje = "dentro de la función a";
//   console.log("a: mensaje = " + mensaje);
//   //b();
// }
//
// // function b () {
// //   console.log("b: mensaje = " + mensaje);
// // }
//
// a();
