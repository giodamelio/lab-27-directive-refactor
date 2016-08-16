const angular = require('angular');

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/index.scss');

const app = angular.module('cowsay', []);

app.controller('say', ['$scope', function($scope) {
  $scope.text = 'Hello World!';
}]);
