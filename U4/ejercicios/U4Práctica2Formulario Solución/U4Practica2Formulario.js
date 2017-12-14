addEventListener('DOMContentLoaded',function(){
  //Se ejecuta esta función cuando el DOM está cargado

  function ponFoco(e){
    //utilizo el objeto e para hacer referencia al nodo que provoca el evento: e.target
    //console.log(e);
    e.target.style.outline = "purple solid 1px";
    //OTRA FORMA:
    //si cambiamos el borde, tenemos que quitar el outline y poner el borde así:
    // e.target.style.outline = "none";
    // e.target.style.border = "1px solid purple";
  }

  function quitaFoco(e){
    //dejamos las opciones por defecto cuando se pierde el foco
    e.target.style.outline = "none";
    //OTRA FORMA:
    //si cambiamos el estilo del borde, podemos restaurarlo así:
    //e.target.style.outline ="none";
    //e.target.style.borderColor = "initial";
    //e.target.style.borderStyle = "inset";
  }

  //Selecciono los nodos inputs
  var inputs = document.getElementsByTagName("input");
  //Le quito 1 a la longitud para no este efecto en el botón
  for (var i = 0; i < (inputs.length - 1); i++) {
    //Le ponemos el evento a los nodos. No podemos hacerlo de manera genérica es decir, sin asignarlo a un nodo, porque la ventana tomaría el foco primero!
    inputs[i].addEventListener('focus',ponFoco);
    inputs[i].addEventListener('blur',quitaFoco);
  }


  //Cuando se envíe el formulario, se ejecuta la función
  document.getElementById('formulario').addEventListener('submit',function(e){
    //Impido que se envíe el formulario hasta saber si todo va bien
    e.preventDefault();

    //Campo donde pondré los errores:
    var err = document.getElementsByClassName('errores')[0];

    //Listado de errores
    var errList ="";

    //Ret es lo que devolverá return cuando acabe la validación
    var ret = true;

    //validamos el nombre:
    var nom = document.getElementsByName('nombre')[0].value;
    if (nom || !(/^\S+[\s?\S+]*$/.test(nom))){
         errList += "El nombre es erróneo <br/>"
         ret = false;
    }

    //validamos apellidos:
    var apellidos = document.getElementsByName('apellidos')[0].value;
    if (apellidos == null || apellidos.length == 0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
      ret = false;
      errList += "Hay un error en los apellidos <br/>";
    }

    //validamos el email:
    var email = document.getElementsByName("email")[0].value;
    if ( ! (/^\w+([\.\-\+]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/.test(email)) ){
      errList += "El email es incorrecto <br/>";
      ret = false;
    }
    var emailRepe = document.getElementById("emailRepe").value;
    if(email != emailRepe){
      errList += "El email repetido debe coincidir con el primer email que introdujo <br/>";
      ret = false;
    }

    //validamos el dni:
    //la función valor DNI devolverá true si todo va bien y false si no hay 8 dígitos o la letra está mal
    function validaDNI(valorDNI){
      var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
      if( !(/^\d{8}[a-zA-Z]$/.test(valorDNI)) ){
        return false;
      }
      if(valorDNI.charAt(8).toUpperCase() != letras[(valorDNI.substring(0, 8))%23]) {
        return false;
      }
      return true;
    }
    //cogemos el valor del dni introducido y llamamos a la función de validación
    var dni = document.getElementById("dni").value;
    if (! validaDNI(dni)){
        errList += "El DNI introducido no es válido <br/>"
        ret = false;
    }

    //validamos la fecha:
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

    //comprobamos que se ha escogido una sección:
    var seccion = selector.value;
    if (seccion == '0'){
      errList += "Escoja una sección favorita <br/>";
      ret = false;
    } else{
      //Antes de enviar, podemos manipular el destino al que irá el formulario
      document.forms[0].action = selector.value + ".html";
    }

    //validamos el radiobutton de formas de pago:
    var escogePago = formulario.formaPago.value;
    console.log(escogePago);
    if (escogePago != "efectivo" && escogePago != "tarjeta"){
      ret = false;
      errList += "Es necesario que indique la forma de pago que prefiere<br/>";
    }

    //comprobamos si las condiciones de alta están pulsadas:
    if (! cond.checked){
      ret = false;
      errList += "Es necesario que acepte las condiciones de alta <br/>";
    }

    if (ret){
      //Si estoy aquí, voy a enviar el formulario y todo ha ido bien
      //Justo antes de enviar el formulario, puedes deshabilitar el botón de Envío para que no exista rebote
      document.getElementById("enviar").value = "Enviando...";
      document.getElementById("enviar").disabled = true;

      //Si todo va bien envío el formulario
      document.forms[0].submit();
    }else{
      err.style.color="red";
      err.innerHTML = errList;
    }

  });

});
