/* eslint global-require: "off" */
const angular = require('angular');
const angularRoute = require('angular-route');

require('!!file?name=[name].[ext]!./html/index.html'); // eslint-disable-line
require('./scss/index.scss');

const app = angular.module('gallery', [angularRoute]);

require('./controller')(app);
require('./view')(app);

app.run(['$rootScope', function($rootScope) {
  $rootScope.images = require('./data.json');
}]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'hc',
    })
    .when('/fullsize/:id', {
      template: require('./view/fullsize/fullsize.html'),
      controller: 'FullsizeController',
      controllerAs: 'fc',
    })
    .otherwise({ redirectTo: '/error' });
}]);
