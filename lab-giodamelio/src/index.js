require('core-js/fn/array/find');
require('core-js/fn/array/find-index');
const angular = require('angular');

require('!!file?name=[name].[ext]!./html/index.html'); // eslint-disable-line
require('./scss/index.scss');

angular.module('peopleApp', []);

require('./controller/notes-controller');
