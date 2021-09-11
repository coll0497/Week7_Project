// Create the script tag, set the appropriate attributes
/*var mapsBtn = document.getElementById('mapsBtn');

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBADATjURc7cEmUA4hj81mtPBsJUTsqSoo&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
};  

// Append the 'script' element to 'head'
document.head.appendChild(script);

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    console.log(map);
  });
}  */

/* maps JavaScript API hhttps://developers.google.com/maps/documentation/javascript/examples/event-domListener?hl=en_US#maps_event_domListener-javascript
https://developers.google.com/maps/documentation/javascript/overview?hl=en_US */

function initMap() {
  const mapDiv = document.getElementById("map");
  const map = new google.maps.Map(mapDiv, {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644),
  });

  // We add a DOM event here to show an alert if the DIV containing the
  // map is clicked.
  google.maps.event.addDomListener(mapDiv, "click", () => {
    window.alert("Map was clicked!");

    console.log(data)
  });
}
 
map.addEventListener('click', function(e) {
  e.preventDefault();
  initMap();
}); 
