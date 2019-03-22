var app = angular.module('VahalaFitness', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/views/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })
  .state('videos', {
    url: '/videos',
    templateUrl: '/views/videos.html',
    controller: 'videosController',
    controllerAs: 'videos'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/views/contact.html',
    controller: 'contactController',
    controllerAs: 'contact'
  })
}])
