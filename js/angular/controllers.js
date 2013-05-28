'use strict';

/* Controllers */

var _ = require("underscore");

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('TodoCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.todos = [];

    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };

    $scope.refresh = function() {
      $http.get('_view/todos').success(function(data) {
        $scope.todos = _.map(data.rows, function(e) { return e.value; });
      });
    };

    $scope.refresh();

    $scope.debug = "";
    $scope.done = function(idx) {
      var todo = $scope.todos[idx]
      console.log(todo);
      $http.put('_update/toggle/'+todo._id).success(function(data) {
        $scope.debug = JSON.stringify(data);
      }).error(function(data) {
        $scope.debug = "Error: " + JSON.stringify(data);
      })
    };
  }]);