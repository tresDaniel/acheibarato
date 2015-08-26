angular.module('starter', ['ionic','ionic.service.core','ionic.service.analytics', 'starter.controllers', 'starter.directives'])

.run(function($ionicPlatform, $ionicAnalytics) {
  $ionicPlatform.ready(function() {

	$ionicAnalytics.register();

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabsCtrl'
  })

  .state('tab.mapa',{
    url: '/mapa',
    views:{
      'tab-map':{
        templateUrl: 'templates/tab-map.html',
        controller: 'MapCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/mapa');
});
