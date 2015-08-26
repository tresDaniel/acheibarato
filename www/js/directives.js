angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      var mapOptions;
      var infowindow;

      function initialize() {
        var pyrmont = {lat: -33.867, lng: 151.195};
        mapOptions = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        infowindow = new google.maps.InfoWindow();

        var map = new google.maps.Map($element[0], mapOptions);

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 500,
          types: ['store']
        }, callback);
        
        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
