onload = function(){
  	var content = document.getElementById("geolocation-test");

  	if (navigator.geolocation)
  	{
  		navigator.geolocation.getCurrentPosition(function(objPosition)
  		{
  			var lon = objPosition.coords.longitude;
  			var lat = objPosition.coords.latitude;

  			var dir = "";
  			var latlng = new google.maps.LatLng(lat, lon);// Creamos un objeto latLng
  			geocoder = new google.maps.Geocoder(); //Creamos un objeto mapa
        //Usando el método geocode del objeto mapa, podemos obtener el resultado
        //traducido en una dirección postal en un mapa
  			geocoder.geocode({"latLng": latlng}, function(results, status)
  			{
  				if (status == google.maps.GeocoderStatus.OK)
  				{
  					if (results[0])
  					{
  						dir = "<p><strong>Dirección: </strong>" + results[0].formatted_address + "</p>";
              arrayDir = results[0].address_components;
              console.log(arrayDir);
              console.log(arrayDir[1]);
              dir += "<p><strong>Calle:</strong> " + arrayDir[1].long_name + "</p>";
              dir += "<p><strong>Nº:</strong> " + arrayDir[0].long_name + "</p>";
              dir += "<p><strong>Ciudad:</strong> " + arrayDir[2].long_name + "</p>";
              dir += "<p><strong>Provincia:</strong> " + arrayDir[3].long_name + "</p>";
              dir += "<p><strong>Comunidad:</strong> " + arrayDir[4].long_name + "</p>";
              dir += "<p><strong>País:</strong> " + arrayDir[5].long_name + "</p>";
              dir += "<p><strong>CP:</strong> " + arrayDir[6].long_name + "</p>";
  					}
  					else
  					{
  						dir = "<p>No se ha podido obtener ninguna dirección en esas coordenadas.</p>";
  					}
  				}
  				else
  				{
  					dir = "<p>El Servicio de Codificación Geográfica ha fallado con el siguiente error: " + status + ".</p>";
  				}

  				content.innerHTML = "<p><strong>Latitud:</strong> " + lat + "</p><p><strong>Longitud:</strong> " + lon + "</p>" + dir;
  			});
  		}, function(objPositionError)
  		{
  			switch (objPositionError.code)
  			{
  				case objPositionError.PERMISSION_DENIED:
  					content.innerHTML = "No se ha permitido el acceso a la posición del usuario.";
  				break;
  				case objPositionError.POSITION_UNAVAILABLE:
  					content.innerHTML = "No se ha podido acceder a la información de su posición.";
  				break;
  				case objPositionError.TIMEOUT:
  					content.innerHTML = "El servicio ha tardado demasiado tiempo en responder.";
  				break;
  				default:
  					content.innerHTML = "Error desconocido.";
  			}
  		}, {
  			maximumAge: 75000,
  			timeout: 15000
  		});
  	}
  	else
  	{
  		content.innerHTML = "Su navegador no soporta la API de geolocalización.";
  	}
}
