const angular = require('angular');
require('angular-mocks');

const testApp = angular.module('testApp', []);
require('../src/component/animal-image-link/animal-image-link')(testApp);

describe('Animal Image Link Directive', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(($compile, $rootScope) => {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should have correct text and url', () => {
    const directive = this.compile(require('./animal-image-link-test.html'))(this.scope);

    this.scope.$digest();
    expect(directive.find('a').text()).toBe('Hello World');
    expect(directive.find('a').attr('href')).toBe('http://not-a.real/url.jpg');
  });
});
