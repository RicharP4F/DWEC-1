// Abrimos una ventana con una url
var v = window.open("http://juandegaray.es/", "_blank", "width=400, height=400");

// La ventana (v) puede hacer referencia a quien le creó
// Algunos navegadores bloquean esto (por ejemplo Firefox)
v.opener.document.write("<p>Yo soy tu padre!</p>");

//cerramos la ventana v
function closeWindow(){
  v.close();
}

//ponemos el foco en la ventana v
function focusOnWindow(){
  v.focus();
}

//quitamos el foco de la ventana v
function focusOffWindow(){
  v.blur();
}
