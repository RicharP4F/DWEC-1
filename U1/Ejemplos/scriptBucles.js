
//*******FOR, break y continue:

/*Las sentencias break y continue permiten manipular
el comportamiento normal de los bucles for:
  La sentencia break permite terminar de forma abrupta un bucle
  La sentencia continue permite saltarse algunas repeticiones del bucle.
*/
document.write("<h3>Primer for: Secuencia completa </h3>");
for (var i = 0; i < 20; i++) {
  document.write("<p>"+ i +"</p>");
}

// document.write("<h3>Segundo for: Salto los impares </h3>");
// for (var i = 0; i < 20; i++) {
//   if (i%2 > 0){
//     continue;
//   }else{
//     document.write("<p>"+ i +"</p>");
//   }
// }
//
// document.write("<h3>Tercer for: Me quedo con los 10 primeros </h3>");
// for (var i = 0; i < 20; i++) {
//   if (i == 10){
//     break;
//   }else{
//     document.write("<p>"+ i +"</p>");
//   }
// }

//*******WHILE:
/*
Estos bucles se utilizan cuando queremos repetir la ejecución de
unas sentencias un número indefinido de veces, siempre que se cumpla
una condición
*/
// var color = ""
// while (color != "rojo"){
//    	color = prompt("dame un color (escribe rojo para salir)","")
// }

//*******DO:
/*El bucle de tipo do...while es muy similar al bucle while,
salvo que en este caso siempre se ejecutan las instrucciones del bucle
al menos la primera vez.
*/
/*
En este ejemplo, calculamos el factorial de un número:
factorial de 5 por ejemplo es 5 x 4 x 3 x 2 x 1 = 120).
*/
// document.write("<h3>Ejemplo do: Cálculo del factorial de 5</h3>");
// var resultado = 1;
// var numero = 5;
//
// do {
//   resultado *= numero;  // resultado = resultado * numero
//   numero--;
// } while(numero > 0);
//
// document.write("<p> El factorial de 5 es " + resultado + " </p>");
