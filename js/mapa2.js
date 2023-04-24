let donnies;
let map;
function initMap() {
  // la ubicacion de donnies
  donnies = { lat: 19.505567, lng: -99.162121 };
  // El mapa centrado en donnies
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: donnies,
  });
  map.setMapTypeId("hybrid");

  const request = {
    placeId: "ChIJVYwIj2f50YURaBS6w61FLyk",
    fields: ["name", "formatted_address","geometry", "url"],
  };
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);
  service.getDetails(request, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      infowindow.setContent(
        "<div><strong>" +
          place.name +
          "</strong><br>" +
          place.formatted_address +
          "<br>" + 
          "<a href='https://maps.google.com/?cid=2967667292075857000' target='_blank'>Ver en Google Maps</a>" +
          "</div>"
      );
      infowindow.open({
        anchor: marker,
        map, 
        shouldFocus: false
      });
    }
  });
}

// El marcardor, posicionado en el centro de donnies
/*marker = new google.maps.Marker({position: donnies, map: map, title: 'Donnies guitars'});
    marker.setAnimation(google.maps.Animation.BOUNCE);*/
