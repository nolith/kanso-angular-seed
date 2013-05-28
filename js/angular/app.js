'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'static/partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'static/partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/todo', {templateUrl: 'static/partials/todo.html', controller: 'TodoCtrl'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
