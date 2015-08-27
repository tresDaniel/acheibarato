angular.module('starter.controllers', [])

.controller('TabsCtrl', function($scope, $ionicLoading) {})

.controller('MapCtrl', function($scope, $ionicLoading) {
  
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

});
