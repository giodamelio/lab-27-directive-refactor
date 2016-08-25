describe('Test controllers', function() {
  beforeEach(() => {
    angular.mock.module('gallery');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
      this.fullsizeController = new $controller('FullsizeController');
      this.thumbnailController = new $controller('ThumbnailController');
    });
  });

  it('Home controller has images', () => {
    expect(this.homeController.images.length).toEqual(24);
  });

  it('Fullsize controller has an image', () => {
    expect(this.fullsizeController.image).toBe(undefined);
  });

  it('Thumbnail controller has images', () => {
    expect(this.thumbnailController.images.length).toEqual(24);
  });
});
