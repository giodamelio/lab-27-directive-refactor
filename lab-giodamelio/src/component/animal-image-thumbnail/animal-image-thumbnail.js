/* eslint global-require: "off" */
module.exports = function(app) {
  app.directive('animalImageThumbnail', () => ({
    template: require('./animal-image-thumbnail.html'),
    controller() {},
    controllerAs: 'tc',
    bindToController: true,
    scope: {
      title: '@',
      url: '@',
    },
  }));
};
