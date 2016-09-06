module.exports = function(app) {
  app.factory('lists', ['$http', function($http) {
    return {
      getAll() {
        return $http.get('/api/lists?_embed=items');
      },
    };
  }]);
};
