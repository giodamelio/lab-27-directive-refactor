module.exports = function(app) {
  app.controller('HomeController', ['lists', function(lists) {
    this.lists = [];

    lists.getAll()
      .then((response) => {
        this.lists = response.data;
      });
  }]);
};
