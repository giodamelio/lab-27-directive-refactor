module.exports = function(app) {
  app.controller('FullsizeController', ['$rootScope', '$routeParams',
    function($rootScope, $routeParams) {
      this.image = $rootScope.images.find((i) => i.id === $routeParams.id);
    },
  ]);
};
