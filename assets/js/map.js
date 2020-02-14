/*===========================================
              Location Map
===========================================*/

function initMap() {
  var map = new google.maps.Map(document.getElementById("location-map"), {
    zoom: 14,
    center: new google.maps.LatLng(-20.0052713, 57.6413037),
    disableDefaultUI: true,
    styles: [
      {
        elementType: "labels",
        stylers: [
          {
            visibility: "on"
          }
        ]
      },
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#EFEFEF",
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#2e2e2e",
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#EFEFEF",
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#DADADA",
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#DADADA",
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#DADADA",
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#DADADA",
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
          {
            color: "#000000",
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ededed",
            visibility: "on"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit.station.bus",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        elementType: "labels",
        stylers: [{ visibility: "on" }]
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      }
    ]
  });

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(-20.0052713, 57.6413037),
    map: map,
  });
}
