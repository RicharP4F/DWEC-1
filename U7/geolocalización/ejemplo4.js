/**
 * Ejemplo: Uso de la API de Google Maps
 */

(function() {
    'use strict';

    var myMarker = null;

    // Receives a map object and a latLng object where it will create a marker
    function createMarker(map, latLng, color) {
        var opts = {
            position: latLng,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/' + color + '-dot.png'
        };

        // Creamos un marcador para el mapa con una ventana de información asociada
        var marker = new google.maps.Marker(opts);
        google.maps.event.addListener(marker, 'click', function(event) {
            var infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent("Marcador en lat: " + event.latLng.lat().toFixed(6) +
            ", lng: " + event.latLng.lng().toFixed(6));
            infoWindow.open(map, marker);
        });
    }

    function showMap(pos) {
        console.log(pos);
        var p = document.getElementById("coordinates");
        p.textContent = "Latidude: " + pos.coords.latitude + 
            ". Longitude: " + pos.coords.longitude +
            " (accuracy: " + pos.coords.accuracy + ")";

        var gLatLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        console.log(gLatLng);
        var opt = {
            zoom: 15, // Map zoom (min: 0, max: 20)
            center: gLatLng, // Centramos el mapa en nuestra posición
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        };

        var mapDiv = document.getElementById("map");
        var map = new google.maps.Map(mapDiv, opt);

        myMarker = createMarker(map, gLatLng, "green");

        google.maps.event.addListener(map, 'click', function(event) {
            var coordsP = document.getElementById("coordinates");
            
            map.panTo(event.latLng);

            createMarker(map, event.latLng, 'pink');

            var dist = google.maps.geometry.spherical.computeDistanceBetween(
                gLatLng, // Nuestra posición
                event.latLng // Posición marcada
            );

            coordsP.textContent = "Click en lat: " + event.latLng.lat() + 
                ", lng: " + event.latLng.lng() + "Distancia de ti: " + 
                (Math.round(dist)/1000) + "km";
        });

    }

    function errorLocate(error) {
        var p = document.getElementById("coordinates");
        switch(error.code) {
            case error.PERMISSION_DENIED: // El usuario impide la localización
                p.textContent = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE: // No se pudo obtener la localización
                p.textContent = "Location information is unavailable."
                break;
            case error.TIMEOUT: // Ha expirado el tiempo para obtener la localización
                p.textContent = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                p.textContent = "An unknown error occurred."
                break;
        }
    }


    // Esperamos hasta que el DOM haya cargado antes de empezar (así la API de GMaps estará cargada)
    window.addEventListener('DOMContentLoaded', function() {
        navigator.geolocation.getCurrentPosition(showMap, errorLocate); // Nos geolocalizamos
    });

})();

