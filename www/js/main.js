$.getJSON('hospitales.json', function(json, textStatus) {
  console.log(json)
  $.each(json, function(index, val) {
  });
});

var map;

function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('Map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
}

$('a[href="#Mapa"]').on('shown', function(e) {
    google.maps.event.trigger(map, 'resize');
});

$("#Map").css("width", 400).css("height", 400);

initMap();
