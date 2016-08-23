const angular = require('angular');

const app = angular.module('notes');

app.controller('PeopleController', ['$http', function($http) {
  const peopleUrl = `${__API_URL__}/people`; // eslint-disable-line no-undef
  this.people = [];

  // Read the list of people from the server
  this.readPeople = function() {
    $http.get(peopleUrl)
      .then((people) => {
        this.people = people.data;
      });
  };

  // Get the people once when the controller loads
  this.readPeople();
}]);
