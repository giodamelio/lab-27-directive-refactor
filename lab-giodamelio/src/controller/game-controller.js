const angular = require('angular');
const titlecase = require('titlecase');

const app = angular.module('game');

app.controller('GameController', ['$scope', '$log', function($scope, $log) {
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
    $log.log(`Creating player with name: ${playerInfo.name}`);
    $scope.gameCtl.player = playerInfo;
    $scope.gameCtl.player.isCreated = true;
  };

  $scope.gameCtl.resetPlayer = function() {
    $log.log('Resetting player');
    $scope.gameCtl.player = {};
    $scope.playerForm.player = {};
    $scope.gameCtl.player.isCreated = false;
  };

  $scope.gameCtl.createMonster = function(monsterInfo) {
    $log.log(`Creating monster with name: ${monsterInfo.name}`);
    $scope.gameCtl.monster = monsterInfo;
    $scope.gameCtl.monster.isCreated = true;
  };

  $scope.gameCtl.resetMonster = function() {
    $log.log('Resetting monster');
    $scope.gameCtl.monster = {};
    $scope.monsterForm.monster = {};
    $scope.gameCtl.monster.isCreated = false;
  };
}]);

// Custom filter to convert strings to titlecase
app.filter('titlecase', () => (input) => titlecase(input));
