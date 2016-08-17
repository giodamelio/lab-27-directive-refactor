const angular = require('angular');
const titlecase = require('titlecase');

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

  $scope.gameCtl.createPlayer = function(playerInfo) {
    $scope.gameCtl.player = playerInfo;
    $scope.gameCtl.player.isCreated = true;
  };
}]);

// Custom filter to convert strings to titlecase
app.filter('titlecase', () => (input) => titlecase(input));
