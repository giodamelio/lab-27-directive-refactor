const angular = require('angular');
const shortid = require('shortid');

const app = angular.module('peopleApp');

app.controller('PeopleController', ['$http', '$log', function($http, $log) {
  const peopleUrl = `${__API_URL__}/people`; // eslint-disable-line no-undef
  this.people = [];

  // Create a new person and save it to the server
  this.createPerson = function(name, gender) {
    $log.log(`Creating persion "${name}"`);
    const newPerson = {
      id: shortid.generate(),
      name,
      gender,
    };
    $http.post(peopleUrl, newPerson)
      .then((person) => {
        $log.log(`Created new person "${person.data.name}"`);
        this.people.push(newPerson);
        this.newPerson = {};
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

  // Update a person
  this.updatePerson = function(id, name, gender) {
    const oldPerson = this.people.find((p) => p.id === id);
    $log.log(`Updating "${oldPerson.name}" (id: ${id})`);
    return $http.put(`${peopleUrl}/${id}`, {
      name, gender,
    }).then((newPerson) => {
      $log.log(`Updated person "${newPerson.data.name}" (id: ${id})`);
    });
  };

  // Delete a person from the server
  this.destroyPerson = function(id) {
    const person = this.people.find((p) => p.id === id);
    $log.log(`Destroying person "${person.name}" (id: ${id})`);
    return $http.delete(`${peopleUrl}/${id}`)
      .then(() => {
        $log.log(`Destroyed person "${person.name}" (id: ${id})`);
        const personIndex = this.people.findIndex((p) => p.id === id);
        this.people.splice(personIndex, 1);
      });
  };
}]);
