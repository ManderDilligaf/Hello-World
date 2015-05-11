

function init() 
{
 
  var myLatlng1 = new google.maps.LatLng(18.4500, 66.1000);

  var mapOptions = {
   zoom: 15,
   center: myLatlng1,
   mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

 

  if (navigator.geolocation) 
  {
    navigator.geolocation.getCurrentPosition
    (function (position){

      var locations = [
      
      [position.coords.latitude + 1, position.coords.longitude + 1],
      [position.coords.latitude - 1, position.coords.longitude - 1],
      [position.coords.latitude + 0.5, position.coords.longitude + 0.5],
      [position.coords.latitude - 0.5, position.coords.longitude - 0.5]
    ];
      initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setCenter(initialLocation);

      var i;
    
      for (i = 0; i < locations.length; i++) {  

      var contentString = '<address>Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br> Visit us at:<br>Example.com<br>Box 564, Disneyland<br>USA</address>';

      marker = new google.maps.Marker({
         position: new google.maps.LatLng(locations[i][0], locations[i][1]),
         map: map
      });

      infowindow = new google.maps.InfoWindow({
      content: contentString
      });

      
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

    }

      var startPosition = new google.maps.Marker
      ({
        position: initialLocation,
        map: map,
        icon: "imgs/flag.png"
      });
   });
  }
}

function loadScript() 
{
  var script = document.createElement('script');     // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);                 // Add element to page
}

window.onload = loadScript;                          // on load call loadScript()