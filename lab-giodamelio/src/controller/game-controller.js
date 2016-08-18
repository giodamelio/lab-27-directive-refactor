const angular = require('angular');

const map = require('../lib/map');

const app = angular.module('game');

app.controller('GameController', ['$log', function($log) {
  $log.log('GameController init');

  this.directions = ['north', 'east', 'south', 'west'];
  this.map = map;
  this.player = {
    location: 'roomA',
    hitpoints: 100,
  };

  this.direction = 'north';
  this.actions = [
    {
      type: 'message',
      text: 'As you enter the Dungeon, you hear the entry tunnel collapse behind you.',
    },
  ];

  this.move = function() {
    $log.log(`Attempting to move ${this.direction}`);
    if (this.map[this.player.location]) {
      const currentRoom = this.map[this.player.location];
      const nextRoom = currentRoom[this.direction];

      if (nextRoom === 'wall') {
        return $log.log('You ran into a wall');
      }

      this.player.location = nextRoom;
      return $log.log(`You enter ${nextRoom}`);
    }

    return $log.log(`Player location(${this.player.location}) is invalid`);
  };
}]);

app.filter('capitalize', () => (input) => {
  if (!input) {
    return '';
  }
  return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
});
