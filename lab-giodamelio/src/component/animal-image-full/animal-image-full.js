/* eslint global-require: "off" */
module.exports = function(app) {
  app.directive('animalImageFull', () => ({
    template: require('./animal-image-full.html'),
    controller() {},
    controllerAs: 'tc',
    bindToController: true,
    scope: {
      title: '@',
      url: '@',
    },
  }));
};
