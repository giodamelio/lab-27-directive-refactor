const angular = require('angular');

require('!!file?name=[name].[ext]!./html/index.html'); // eslint-disable-line
require('./scss/index.scss');

angular.module('notes', []);

require('./controller/notes-controller');
