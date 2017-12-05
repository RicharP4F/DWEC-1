onload = function(){
var formulario = document.forms[0];
formulario.onsubmit = function(e){
    var err = document.getElementsByClassName('errores')[0];
    var errList ="";
    var ret = true;
    e.preventDefault();
    //validamos el nombre
    var nom = document.getElementsByName('nombre')[0].value;
    console.log(nom);
    if (nom == null || nom.length == 0 || !(/^\S+[\s?\S+]*$/.test(nom))){
         errList += "El nombre es erróneo <br/>"
         ret = false;
    }

    // function nulo(campo){
    //   letras = "abcdefghijklmnñopqrstuvwxyzáéíóúçäëü";
    //   if (campo == null || campo.length==0){
    //       return true;
    //   }
    //   else{
    //       for (i in campo){
    //         console.log(campo[i]);
    //         if (letras.indexOf(campo[i].toLowerCase())==-1){
    //           return true;
    //           break;
    //         }
    //       }
    //   }
    //   return false;
    // }

    // if (nulo(nom)){
    //   errList += "El nombre es erróneo <br/>"
    //   ret = false;
    // }

    //validamos apellidos:
    var apellidos = document.getElementsByName('apellidos')[0].value;
    console.log(apellidos);
    if (apellidos == null || apellidos.length == 0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
      ret = false;
      errList += "Hay un error en los apellidos <br/>";
    }

    //validamos el radiobutton
    var escogeNick = formulario.nick.value;
    console.log(escogeNick);
    if (escogeNick != "S" && escogeNick != "N"){
      ret = false;
      errList += "Es necesario que indique si quiere emplear su nombre o prefiere ser anónimo en nuestro foro<br/>";
    }

    //validamos la fecha
    var fecha = (document.getElementsByName('fecha')[0].value).split('-');
    var ano=fecha[0];
    var mes=fecha[1];// de 0 a 11
    var dia=fecha[2];// 1 a 31
    console.log(dia + " " + mes + " " + " " + ano);
    var nf= new Date(ano,(mes - 1),dia);
    console.log(nf);

    var hoy = new Date();
    //resto los años de las dos fechas
   	var edad = hoy.getFullYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año
   	//si resto los meses y me da mayor que 0, ha cumplido años
   	if (hoy.getMonth() + 1 - mes > 0){
      	edad++;
    }
   	//si resto los dias y me da menor que 0 entonces no ha cumplido años.
    //si da mayor o igual si ha cumplido
   	if (hoy.getUTCDate() - dia >= 0){
      	edad++;
    }
    console.log("Edad " + edad);
    if ( isNaN(nf) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 0 || ano >= hoy.getFullYear()){
      errList += "La fecha es errónea <br/>"
      ret = false;
    }else if (edad < 18){
      errList += "Debe ser mayor de edad para inscribirse <br/>"
      ret = false;
    }

    //validamos el teléfono
    var tel = document.getElementsByName('telefono')[0].value;
    if (isNaN(tel) || !(/^\d{9,10}$/.test(tel))){
      errList += "El teléfono es erróneo <br/>";
      ret = false;
    }

    //validamos la selección
    var prov = document.getElementsByName("provincia")[0].selectedIndex;
    if (prov == null || prov == 0){
        errList += "Escoja una provincia <br/>";
        ret = false;
    }

    //Email
    var email = document.getElementsByName("email")[0].value;
    console.log(email);
    if ( !/^\w+@\w+\.\w+$/.test(email) ){
      errList += "El email es incorrecto <br/>";
      ret = false;
    }
    //if ( ! (/^\w+([\.\-\+]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/.test(email)) ){
    //   errList += "El email es incorrecto <br/>";
    //   ret = false;
    // }
    var emailRepe = document.getElementById("emailRepe").value;
    if(email != emailRepe){
      errList += "El email repetido debe coincidir con el primer email que introdujo <br/>";
      ret = false;
    }

    //Consultamos si se ha checqueado los check
    if(foro.checked){
      formulario.action = "foro.html";
    }
    if(eventos.checked){
      formulario.action = "eventos.html";
    }

    //Resultado de la validación.
    if (ret){
      //Si estamos aquí es que no ha habido ningún problema
      errList = "Tu petición se ha enviado correctamente";
      err.style.color="blue";
      formulario.submit();
    }else{
      err.style.color="red";
    }

    err.innerHTML = errList;
    //return ret; //Si ha habido problema, ret será false y evitaremos el envío. Si fuera true se enviaría.
}
}
