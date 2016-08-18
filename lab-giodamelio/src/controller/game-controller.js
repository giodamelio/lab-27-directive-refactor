const angular = require('angular');

const app = angular.module('game');

app.controller('GameController', ['$log', function($log) {
  $log.log('GameController init');

  this.directions = ['North', 'East', 'South', 'West'];

  this.direction = 'North';
}]);

app.filter('capitalize', () => (input) => {
  if (!input) {
    return '';
  }
  return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
});
