'use strict';

/**
 * @ngdoc overview
 * @name snippetsApp
 * @description
 * # snippetsApp
 *
 * Main module of the application.
 */
angular
  .module('snippetsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar',
    'hljs'
  ])
  .config(function ($routeProvider, cfpLoadingBarProvider, hljsServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

    cfpLoadingBarProvider.latencyThreshold = 0;

    hljsServiceProvider.setOptions({
      // replace tab with 2 spaces
      tabReplace: '  '
    });


  });
