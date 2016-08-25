module.exports = function(app) {
  app.controller('NavbarController', ['$rootScope', '$location',
    function($rootScope, $location) {
      this.location = $location.path();
      $rootScope.$on('$locationChangeStart', () => {
        this.location = $location.path();
      });
    },
  ]);
};
