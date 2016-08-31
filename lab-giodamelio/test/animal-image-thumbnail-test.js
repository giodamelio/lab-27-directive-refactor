const angular = require('angular');
require('angular-mocks');

const testApp = angular.module('testApp3', []);
require('../src/component/animal-image-thumbnail/animal-image-thumbnail')(testApp);

describe('Animal Image Thumbnail Directive', function() {
  beforeEach(angular.mock.module('testApp3'));
  beforeEach(angular.mock.inject(($compile, $rootScope) => {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should have correct image', () => {
    const directive = this.compile(require('./animal-image-thumbnail-test.html'))(this.scope);

    this.scope.$digest();

    // Test the image
    expect(directive.find('img').attr('src')).toBe('http://not-a.real/url.jpg');
  });
});
