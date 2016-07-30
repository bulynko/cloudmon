
angular.module("cloudmon").run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
    	$location.path("/login");
      $state.go("login");

    }
  });
}]);

angular.module("cloudmon").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $stateProvider
        .state('login', {
        url: '/login',
        templateUrl: 'client/cloudmon/views/login-start.ng.html',
        controller: 'loginCtrl'
      })
        .state('cloudmon', {
        url: '/cloudmon',
        templateUrl: 'client/cloudmon/views/cloudmon.ng.html',
        controller: 'myteamCtrl'
      })
        .state('cloudprivate', {
        url: '/cloudprivate',
        templateUrl: 'client/cloudprivate/views/cloudprivate.ng.html',
        controller: 'cloudlabCtrl',
        resolve: {
        "currentUser": function ($meteor) {
          return $meteor.requireUser();
        }
      }    
      })      
        .state('admintools', {
        url: '/admintools',
        templateUrl: 'client/cloudprivate/views/admin.ng.html',
        controller: 'adminCtrl'
      })     
      ;

    $urlRouterProvider.otherwise("/login");

  }]);

