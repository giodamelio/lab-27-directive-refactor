const EXAMPLE_DATA = [
  {
    id: 'HyAbIdt9',
    name: 'Karen Moreno',
    gender: 'Female',
  },
  {
    id: 'ryNH8_Kc',
    name: 'Lori Gomez',
    gender: 'Female',
  },
];
const PEOPLE_URL = 'http://localhost:3000/people';

describe('test PeopleController', function() {
  beforeEach(() => {
    angular.mock.module('peopleApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.peopleController = new $controller('PeopleController');
      this.$httpBackend = $httpBackend;
    });
  });

  it('should create a person', () => {
    this.$httpBackend.expectPOST(PEOPLE_URL, (rawData) => {
      const data = JSON.parse(rawData);
      expect(data.name).toBe('Gio');
      expect(data.gender).toBe('Male');
      return true;
    }).respond((method, url, data) => [201, data]);

    this.peopleController.createPerson('Gio', 'Male');
    this.$httpBackend.flush();

    expect(this.peopleController.people.length).toBe(1);
  });

  it('should read people', () => {
    this.$httpBackend.expectGET(PEOPLE_URL)
      .respond(EXAMPLE_DATA);

    this.peopleController.readPeople();
    this.$httpBackend.flush();

    expect(this.peopleController.people.length).toBe(2);
  });
});
