onload = function(){
//var formulario = document.forms[0];
var formulario = document.getElementById('formulario');

formulario.onsubmit = function validacion(){
    //Campo donde pondré los errores:
    var err = document.getElementsByClassName('errores')[0];

    //Listado de errores
    var errList ="";

    //Ret es lo que devolverá return cuando acabe la validación
    var ret = true;

    if (ret){
      errList = "Tu petición se ha enviado correctamente";
      err.style.color="blue";
    }else{
      err.style.color="red";
    }
    err.innerHTML = errList;
    return ret;
}
}
