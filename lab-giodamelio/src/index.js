/* eslint global-require: "off" */
const angular = require('angular');
const angularRoute = require('angular-route');

require('!!file?name=[name].[ext]!./html/index.html'); // eslint-disable-line
require('./scss/index.scss');

const app = angular.module('todoApp', [angularRoute]);

require('./services')(app);
require('./components')(app);
require('./view')(app);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('./view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'ctrl',
    });
}]);
