var app = angular.module("app", ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/main.html',
    controller: 'mainController'
  })
  .state('landing', {
    url: '/landing',
    templateUrl: './views/landingPage.html',
    controller: 'landingCtrl'
  })
  .state('searchFriends', {
    url: '/friendSearch',
    templateUrl: './views/friendSearch.html',
    controller: 'friendSearchCtrl'
  })
  .state('friendProfile', {
    url: '/friendProfile',
    templateUrl: './views/friendProfile.html',
    controller: 'friendProfileCtrl'
  })
  .state('updateProfile', {
    url: './updateProfile',
    templateUrl: '/views/updateProfile.html',
    controller: 'updateProfileCtrl'
  })
  .state('peopleSearch', {
    url: "/peopleSearch",
    templateUrl: './views/peopleSearch.html',
    controller: 'peopleSearchCtrl'
  });

}]);
