angular.module('starter', ['ionic','ionic.service.core','ionic.service.analytics', 'starter.controllers', 'starter.directives'])

.run(function($ionicPlatform, $ionicAnalytics) {
  $ionicPlatform.ready(function() {

	$ionicAnalytics.register();

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
