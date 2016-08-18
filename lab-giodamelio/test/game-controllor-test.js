describe('testing GameController', function() {
  beforeEach(() => {
    angular.mock.module('game');
    angular.mock.inject(($controller) => {
      this.gameCtrl = $controller('GameController');
    });
  });

  it('The player should move between rooms', () => {
    this.gameCtrl.move('east');
    expect(this.gameCtrl.player.location).toBe('roomB');
  });

  it('Add an item to the action log', () => {
    expect(this.gameCtrl.actions.length).toBe(1);
    this.gameCtrl.addLogItem('Test item');
    expect(this.gameCtrl.actions.length).toBe(2);
  });
});
