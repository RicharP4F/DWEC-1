/**
 * Ejemplo de geolocalización y API estática de Google Maps
 */

(function() {
    'use strict';

    function locate(pos) {
        console.log(pos);
        var p = document.getElementById("coordinates");
        p.textContent = "Latidude: " + pos.coords.latitude +
            ". Longitude: " + pos.coords.longitude +
            " (accuracy: " + pos.coords.accuracy + ")";


        var latlon = pos.coords.latitude + "," + pos.coords.longitude;
        var imgUrl = "http://maps.googleapis.com/maps/api/staticmap?center="
            +latlon+"&zoom=14&size=400x300&sensor=false&&markers=color:red%7Clabel:C%7C" +latlon;
        // Ponemos la imagen de GMaps estático en nuestra página
        document.getElementById("map").setAttribute('src', imgUrl);
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

    // Nos geolocalizamos pasando las funciones de ok y error
    navigator.geolocation.getCurrentPosition(locate, errorLocate);
})();
