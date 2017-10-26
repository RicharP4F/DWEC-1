'use strict';

var i = 1;

function hello() {
   console.log("Hello timeout " + i++);
   if(i < 10) {
       timeout = setTimeout(hello,2000); // Repetimos timeout
   }
}

var timeout = setTimeout(hello,2000); // Timeout con función existente cada 2s

var j = 1;
var interval = setInterval(function() { // Interval con función anónima
    console.log("Hello interval " + j++);
    if(j > 9) {
        clearInterval(interval); // Paramos repetición automática
    }
},2000);

console.log("Start!!");
