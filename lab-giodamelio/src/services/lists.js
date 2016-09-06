module.exports = function(app) {
  app.factory('lists', ['$http', function($http) {
    return {
      getAll() {
        return $http.get('/api/lists?_embed=items');
      },
      update(listItem) {
        return $http.patch(`/api/lists/${listItem.id}`, {
          id: listItem.id,
          title: listItem.title,
        });
      },
      destroy(listItem) {
        return $http.delete(`/api/lists/${listItem.id}`);
      },
    };
  }]);
};
