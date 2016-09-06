module.exports = function(app) {
  app.controller('HomeController', ['lists', function(lists) {
    this.lists = [];

    // Get all the lists
    lists.getAll()
      .then((response) => {
        this.lists = response.data;
      });

    // Get the comleted items from a list
    this.getCompletedItems = (list) =>
	list.items.filter((item) => item.completed);
  }]);
};
