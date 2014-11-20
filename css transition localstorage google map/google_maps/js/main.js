function initializeMap() {
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(51.522534, -0.109436)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var office = new google.maps.Marker({
      position: new google.maps.LatLng(51.522534, -0.109436),
      map: map
  });

  var house = new google.maps.Marker({
      position: new google.maps.LatLng(51.547373, -0.163577),
      map: map
  });

  var infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(house, 'click', function() {
    infowindow.setContent("My house!")
    infowindow.open(map, house);
  });

  google.maps.event.addListener(office, 'click', function() {
    infowindow.setContent("My office!")
    infowindow.open(map, office);
  });

};

google.maps.event.addDomListener(window, 'load', initializeMap);
