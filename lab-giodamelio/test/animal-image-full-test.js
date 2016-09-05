const angular = require('angular');
require('angular-mocks');

const testApp = angular.module('testApp2', []);
require('../src/component/animal-image-full/animal-image-full')(testApp);

describe('Animal Image Full Directive', function() {
  beforeEach(angular.mock.module('testApp2'));
  beforeEach(angular.mock.inject(($compile, $rootScope) => {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should have correct link and image', () => {
    const directive = this.compile(require('./animal-image-full-test.html'))(this.scope);

    this.scope.$digest();

    // Test the link
    expect(directive.find('a').text()).toBe('Hello World');
    expect(directive.find('a').attr('href')).toBe('http://not-a.real/url.jpg');

    // Test the image
    expect(directive.find('img').attr('src')).toBe('http://not-a.real/url.jpg');
  });
});
