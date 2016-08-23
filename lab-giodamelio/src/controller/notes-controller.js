const angular = require('angular');

const app = angular.module('notes');

app.controller('NotesController', [function() {
  this.test = 'Hello World';
}]);
