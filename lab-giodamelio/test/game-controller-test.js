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
