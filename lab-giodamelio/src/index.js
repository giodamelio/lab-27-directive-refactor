const angular = require('angular');
const cowsay = require('cowsay-browser');

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/index.scss');

const app = angular.module('cowsay', []);

app.controller('CowsayController', ['$scope', function($scope) {
  $scope.say = function(text) {
    return cowsay.say({
      text,
    });
  }

  $scope.save = function() {
    $scope.result = $scope.say($scope.text);
  }

  $scope.text = 'Hello World!';
  $scope.result = $scope.say($scope.text);
}]);
