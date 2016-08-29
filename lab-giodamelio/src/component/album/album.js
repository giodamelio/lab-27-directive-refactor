/* eslint global-require: "off" */
module.exports = function(app) {
  app.directive('album', () => ({
    template: require('./album.html'),
    controller() {},
    controllerAs: 'ac',
    bindToController: true,
  }));
};
