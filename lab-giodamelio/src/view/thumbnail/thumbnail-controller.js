module.exports = function(app) {
  app.controller('ThumbnailController', ['$rootScope',
    function($rootScope) {
      this.images = $rootScope.images;
    },
  ]);
};
