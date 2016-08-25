module.exports = function(app) {
  app.controller('HomeController', ['$rootScope', function($rootScope) {
    this.images = $rootScope.images;
  }]);
};
