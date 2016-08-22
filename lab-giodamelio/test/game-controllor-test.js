describe('GameController', function() {
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

  it('The player should not move into a wall', () => {
    this.gameCtrl.move('north');
    expect(this.gameCtrl.player.location).toBe('roomA');
  });

  it('The player should die when moving into an invalid room', () => {
    this.gameCtrl.player.location = 'roomZ';
    this.gameCtrl.move('north');
    expect(this.gameCtrl.player.alive).toBe(false);
  });

  it('Add an item to the action log', () => {
    expect(this.gameCtrl.actions.length).toBe(1);
    this.gameCtrl.addLogItem('Test item');
    expect(this.gameCtrl.actions.length).toBe(2);
  });
});

describe('Filters', function() {
  beforeEach(() => {
    angular.mock.module('game');
    angular.mock.inject(($filter) => {
      this.capitalize = $filter('capitalize');
    });
  });

  it('Should capitalize a word', () => {
    expect(this.capitalize('test')).toBe('Test');
  });

  it('Should capitalize only the first of multiple words', () => {
    expect(this.capitalize('hello world')).toBe('Hello world');
  });

  it('Should handle empty strings', () => {
    expect(this.capitalize('')).toBe('');
  });
});
