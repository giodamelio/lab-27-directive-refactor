describe('testing player-controller', function() {
  beforeEach(() => {
    angular.mock.module('game');
    angular.mock.inject(($controller, $rootScope) => {
      this.scope = $rootScope.$new();
      new $controller('GameController', {$scope: this.scope});
    });
  });

  it('should create a player', () => {
    this.scope.gameCtl.createPlayer({
      name: 'Gio',
      gender: 'male',
      race: 'gnome',
    })
    expect(this.scope.gameCtl.player.name).toBe('Gio');
    expect(this.scope.gameCtl.player.gender).toBe('male');
    expect(this.scope.gameCtl.player.race).toBe('gnome');
  });
});
