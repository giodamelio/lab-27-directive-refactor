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
      this.peopleController.people = EXAMPLE_DATA;
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

    expect(this.peopleController.people.length).toBe(3);
  });

  it('should read people', () => {
    this.$httpBackend.expectGET(PEOPLE_URL)
      .respond(this.peopleController.people);

    this.peopleController.readPeople();
    this.$httpBackend.flush();

    expect(this.peopleController.people.length).toBe(3);
  });

  it('should update a person', () => {
    this.$httpBackend.expectPUT(`${PEOPLE_URL}/ryNH8_Kc`, (rawData) => {
      const data = JSON.parse(rawData);
      expect(data.name).toBe('Sophia');
      expect(data.gender).toBe('Female');
      return true;
    }).respond((method, url, data) => [201, data]);

    this.peopleController.updatePerson('ryNH8_Kc', 'Sophia', 'Female');
    this.$httpBackend.flush();

    expect(this.peopleController.people.length).toBe(3);
  });

  it('should destroy a person', () => {
    this.$httpBackend.expectDELETE(`${PEOPLE_URL}/ryNH8_Kc`)
      .respond();

    this.peopleController.destroyPerson('ryNH8_Kc');
    this.$httpBackend.flush();

    expect(this.peopleController.people.length).toBe(2);
  });
});
