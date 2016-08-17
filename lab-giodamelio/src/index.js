const angular = require('angular');

require('!!file?name=[name].[ext]!./html/index.html'); // eslint-disable-line
require('./scss/index.scss');

const app = angular.module('game', []);

require('./controller/game-controller');
