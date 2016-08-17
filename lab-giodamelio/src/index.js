const angular = require('angular');
const cowsay = require('cowsay-browser');

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/index.scss');

const app = angular.module('cowsay', []);

app.controller('CowsayController', ['$scope', function($scope) {
  $scope.state = {
    history: [],
  };

  $scope.say = function(text) {
    return cowsay.say({
      text,
    });
  }

  $scope.save = function() {
    $scope.state.history.push($scope.result);
    $scope.result = $scope.say($scope.text);
  }

  $scope.undo = function() {
    var last = $scope.state.history.pop();
    console.log(last, $scope.state.history);
    $scope.result = last;
  }

  $scope.text = 'Hello World!';
  $scope.result = $scope.say($scope.text);
}]);
