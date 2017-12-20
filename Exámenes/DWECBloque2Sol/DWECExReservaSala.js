addEventListener('DOMContentLoaded',function(){
  var st = "Le recordamos que ha realizado una reserva de sala ";
  if (localStorage.sala){
    st += "de " + localStorage.sala + " ";
  }
  if (localStorage.fecha){
    st += "para el día " + localStorage.fecha + " ";
  }
  if (localStorage.hora){
    st += "a las " + localStorage.hora + " horas.<br/>"
  }
  if (localStorage.email){
    st += "Ha recibido un email de confirmación de la reserva en <b>";
    st += localStorage.email + "</b>"
  }
  mensaje.innerHTML = st;
});
