const angular = require('angular');

const app = angular.module('game');

app.controller('GameController', ['$scope', function($scope) {
  $scope.gameCtl = {
    genders: ['Male', 'Female', 'Other'],
    races: [
      'Dragonborn',
      'Dwarf',
      'Eladrin',
      'Elf',
      'Gnome',
      'Half-elf',
      'Half-orc',
      'Halflin',
      'Human',
      'Tiefling',
    ],
  };
}]);
