'use strict';

// Fecha de hace 2 horas (le restamos equivalente en ms)
var twoHoursAgo = new Date(Date.now() - (2*60*60*1000));
console.log(twoHoursAgo.toString());

// Creamos la fecha actual y le restamos 2 horas
var twoHoursAgo2 = new Date();
twoHoursAgo2.setHours(twoHoursAgo2.getHours() -2);
console.log(twoHoursAgo2.toString());

// Creamos una fecha a partir de un string válido
// +02:00 implica zona horaria 2 horas más que Greenwich
// Si no se especifica la fecha la crea con +00:00 pero la mostraría con +02:00
var date1 = new Date("2017-05-15T14:50:00+02:00");
console.log("Día: " + date1.getDate()); // Día: 15
console.log("Mes: " + date1.getMonth()); // Mes: 4
console.log("Año: " + date1.getFullYear()); // Año: 2017
console.log("Hora: " + date1.getHours()); // Hora: 16
console.log("Minutos: " + date1.getMinutes()); // Minutos: 50
