describe('testing game-controller', function() {
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

  xit('should reset a player', () => {
    this.scope.gameCtl.createPlayer({
      name: 'Gio',
      gender: 'male',
      race: 'gnome',
    })
    expect(this.scope.gameCtl.player.name).toBe('Gio');
    expect(this.scope.gameCtl.player.gender).toBe('male');
    expect(this.scope.gameCtl.player.race).toBe('gnome');

    this.scope.gameCtl.resetPlayer();

    expect(this.scope.gameCtl.player.name).toBe(undefined);
    expect(this.scope.gameCtl.player.gender).toBe(undefined);
    expect(this.scope.gameCtl.player.race).toBe(undefined);
  });

  it('should create a monster', () => {
    this.scope.gameCtl.createMonster({
      name: 'R.O.U.S',
      hitpoints: 1000,
    })
    expect(this.scope.gameCtl.monster.name).toBe('R.O.U.S');
    expect(this.scope.gameCtl.monster.hitpoints).toBe(1000);
  });
});

describe('filters', function() {
  beforeEach(() => {
    angular.mock.module('game');
    angular.mock.inject((titlecaseFilter) => {
      this.titlecase = titlecaseFilter;
    });
  });

  it('titlecase', () => {
    expect(this.titlecase('hello world')).toBe('Hello World');
    expect(this.titlecase("gio d'amelio")).toBe("Gio D'amelio");
  });
});
