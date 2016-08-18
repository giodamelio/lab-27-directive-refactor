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
});
