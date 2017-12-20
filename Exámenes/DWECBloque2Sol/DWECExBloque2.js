addEventListener('DOMContentLoaded',function(){
  //Se ejecuta esta función cuando el DOM está cargado

  document.getElementsByTagName("a")[0].addEventListener("click",function(e){
    e.preventDefault();
    document.getElementsByClassName("explicaHorario")[0].style.display = "block";
  });

  //Cuando cambia el selector, mostramos la posibilidad de ayuda técnica:
  selector.addEventListener("change",function(e){
      if (selector.value == "0"){
        document.getElementsByTagName("img")[0].src = "salareuniones.png";
      }else{
        document.getElementsByTagName("img")[0].src = "sala" + selector.value + ".png";
      }
  });

  //Cuando se envíe el formulario, se ejecuta la función
  formulario.addEventListener('submit',function(e){
    //Impido que se envíe el formulario hasta saber si todo va bien
    e.preventDefault();

    //Listado de errores
    var errList ="";

    //ValOK nos dirá si todo ha ido bien cuando acabe la validación
    var valOK = true;

    //validamos el email:
    var email = document.getElementById('email').value;
    console.log(email);
    if ( !email || !(/^\w+@\w+\.\w+$/.test(email)) ){
      errList += "El email es incorrecto <br/>";
      valOK = false;
    }else{
      localStorage.email = email;
    }

    //validamos el departamento:
    var dep = document.getElementById('depart').value;
    console.log(dep);
    if ( !dep || !(/^\S+[\s?\S+]*$/.test(dep))){
       errList += "El departamento es erróneo <br/>"
       valOK = false;
    }

    //validamos el nº de asistentes:
    var asistentes = document.getElementById('asistentes').value;
    console.log(asistentes);
    if ( !asistentes || !(/^\d{1,2}$/.test(asistentes)) || (asistentes < 1) ){
       errList += "El número de asistentes debe ser de 1 o 2 dígitos y mayor que 0 <br/>"
       valOK = false;
    }

    //validamos la hora:
    var hora = document.getElementById('hora').value;
    console.log(hora);
    if ( !hora || !(/^\d{2}$/.test(hora)) || hora < 8 || hora > 21){
       errList += "La hora debe estar entre las 08 y las 21 y debe tener 2 dígitos <br/>"
       valOK = false;
    }else{
      localStorage.hora = hora;
    }

    //validamos la fecha:
    var fecha = (document.getElementById('fecha').value).split('-');
    console.log(fecha);
    var ano=fecha[0];
    var mes=fecha[1];// de 0 a 11
    var dia=fecha[2];// 1 a 31
    var nf= new Date(ano,(mes - 1),dia,hora); //incluyo la hora para calcular la fecha
    console.log(nf);
    var hoy = new Date();
    console.log(hoy);
    console.log(hoy - nf);
    if ( isNaN(nf) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < hoy.getFullYear()){
      errList += "La fecha es errónea <br/>"
      valOK = false;
    }else if (hoy > nf){
      errList += "La reunión debe ser en el futuro <br/>"
      valOK = false;
    }else{
      localStorage.fecha = nf.toLocaleDateString();
    }

    //comprobamos si las condiciones de alta están pulsadas:
    if (! cond.checked){
      valOK = false;
      errList += "Es necesario que acepte las condiciones de reserva de la sala <br/>";
    }

    //almacenamos el medio, si se ha escogido:
    var medios = selector.value;
    if (medios != '0'){
      localStorage.sala = medios;
    }

    if (valOK){
      //Si estoy aquí, voy a enviar el formulario y todo ha ido bien
      //Si todo va bien envío el formulario
      formulario.submit();
    }else{
      errores.style.color="red";
      errores.innerHTML = errList;
    }

  });

});
