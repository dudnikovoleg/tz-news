/**
 * Created by Oleg on 20.04.2017.
 */

function initMap() {
    var centerLatLng = new google.maps.LatLng(48.46233612, 35.04147291);

    var mapOptions = {
        center: centerLatLng,
        zoom: 15
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

google.maps.event.addDomListener(window, "load", initMap);






