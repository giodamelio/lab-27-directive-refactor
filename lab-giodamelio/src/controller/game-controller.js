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
    alive: true,
  };

  this.direction = 'north';
  this.actions = [
    {
      type: 'message',
      text: 'As you enter the Dungeon, you hear the entry tunnel collapse behind you.',
    },
  ];

  this.move = function(direction) {
    $log.log(`Attempting to move ${direction}`);
    if (this.map[this.player.location]) {
      const currentRoom = this.map[this.player.location];
      const nextRoom = currentRoom[direction];

      if (nextRoom === 'wall') {
        this.addLogItem('You run into a wall');
        $log.log(`Cannot enter ${nextRoom} from ${this.player.location}`);
        return;
      }

      this.player.location = nextRoom;
      this.addLogItem(`You enter ${nextRoom}`);
      $log.log(`Player entered ${nextRoom} from ${this.player.location}`);
      return;
    }

    this.player.alive = false;
    this.addLogItem('You die');
    $log.log(`Player location(${this.player.location}) is invalid`);
    return;
  };

  this.addLogItem = function(message) {
    this.actions.unshift({
      type: 'message',
      text: message,
    });
  };
}]);

app.filter('capitalize', () => (input) => {
  if (!input) {
    return '';
  }
  return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
});
