const angular = require('angular');

const app = angular.module('notes');

app.controller('PeopleController', ['$http', '$log', function($http, $log) {
  const peopleUrl = `${__API_URL__}/people`; // eslint-disable-line no-undef
  this.people = [];

  // Create a new person and save it to the server
  this.createPerson = function(name, gender) {
    $log.log(`Creating persion ${name}`);
    const newPerson = {
      id: this.people.length + 1,
      name,
      gender,
    };
    $http.post(peopleUrl, newPerson)
      .then((person) => {
        $log.log(`Created new person ${person.data.name}`);
        this.people.push(newPerson);
      });
  };

  // Read the list of people from the server
  this.readPeople = function() {
    $log.log('Reading people from server');
    return $http.get(peopleUrl)
      .then((people) => {
        $log.log(`Read ${people.data.length} people from the server`);
        this.people = people.data;
      });
  };

  // Get the people once when the controller loads
  this.readPeople();
}]);
