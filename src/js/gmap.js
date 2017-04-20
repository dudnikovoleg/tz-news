/**
 * Created by Oleg on 20.04.2017.
 */

// function initMap() {
//     var centerLatLng = new google.maps.LatLng(48.46233612, 35.04147291);

//     var mapOptions = {
//         center: centerLatLng,
//         zoom: 15
//     };

//     var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// }

// google.maps.event.addDomListener(window, "load", initMap);

	var coordinateX = $("#map-coordinates").attr("coordinate-x");
    var coordinateY = $("#map-coordinates").attr("coordinate-y"); 
      function initMap(coordinateX,coordinateY,map) {
      	var map;
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          scrollwheel: false,
          center: new google.maps.LatLng(coordinateX, coordinateY),
          mapTypeId: 'roadmap'
        });

        var iconBase = 'http://revolt.fresh-d.net/assets/images/';
        var icons = {
          revolt: {
            icon: iconBase + 'map_marker.png'
          }
        };

        var contentString = $('#map-coordinates').text();

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });



        var features = [
          {
            position: new google.maps.LatLng(coordinateX, coordinateY),
            type: 'revolt'          
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        });

        
      }

$(document).ready(function(){

	var coordinateX = $("#map-coordinates").attr("coordinate-x");
    var coordinateY = $("#map-coordinates").attr("coordinate-y");     
    initMap(coordinateX,coordinateY);

});
	
