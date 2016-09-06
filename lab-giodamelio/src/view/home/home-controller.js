module.exports = function(app) {
  app.controller('HomeController', ['$log', 'lists', function($log, lists) {
    this.lists = [];

    // Get all the lists
    lists.getAll()
      .then((response) => {
        this.lists = response.data;
        $log.log(`Retrieved ${this.lists.length} lists`);
      });

    // Get the comleted items from a list
    this.getCompletedItems = (list) =>
	list.items.filter((item) => item.completed);

    // Save a list to the server
    this.updateList = (list) =>
      lists.update(list)
      .then((response) => {
        list.editing = false;
        $log.log(`List (id:${response.data.id}) updated`);
      });

    // Delete a list from the server
    this.destroyList = (list) =>
      lists.destroy(list)
      .then(() => {
        const index = this.lists.findIndex((l) => l.id === list.id);
        this.lists.splice(index, 1);
        $log.log(`Destroyed list (id: ${list.id})`);
      });
  }]);
};
