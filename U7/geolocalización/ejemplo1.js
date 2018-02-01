navigator.geolocation.getCurrentPosition(
	function(pos) {//Función cuando todo ok
		var p = document.getElementById("coordenadas");
		p.textContent = "Latitud: " + pos.coords.latitude + ". Longitud: " + pos.coords.longitude +
		" (Precisión: " + pos.coords.accuracy + ")";
	},
	function(error){ //Función cuando hay un error
		console.log(error.code);
		var p = document.getElementById("coordenadas");
		switch(error.code) {
			case error.PERMISSION_DENIED: // El usuario no permite que el navegador acceda a la localización
				p.textContent = "El usuario ha denegado la petición de geolocalización"
				break;
			case error.POSITION_UNAVAILABLE: // No puede obtener la localización
				p.textContent = "La información de localización no está disponible."
				break;
			case error.TIMEOUT: // Ha expirado el tiempo máximo para obtener la localización
				p.textContent = "Ha expirado el tiempo máximo para obtener la localización"
				break;
			case error.UNKNOWN_ERROR:
				p.textContent = "Se ha producido un error desconocido."
				break; 
		}
});

