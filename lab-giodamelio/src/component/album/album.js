/* eslint global-require: "off" */
module.exports = function(app) {
  app.directive('album', () => ({
    template: require('./album.html'),
    controller() {
      this.pictures = require(`../../../data/${this.albumName}.json`);
      this.mode = 'list';
    },
    controllerAs: 'ac',
    bindToController: true,
    scope: {
      title: '@',
      albumName: '@',
    },
  }));
};
