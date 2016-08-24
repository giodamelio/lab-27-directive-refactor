/* eslint global-require: "off" */
const angular = require('angular');
const angularRoute = require('angular-route');

require('!!file?name=[name].[ext]!./html/index.html'); // eslint-disable-line
require('./scss/index.scss');

const app = angular.module('gallery', [angularRoute]);

require('./controller')(app);
require('./view')(app);

app.run(['$rootScope', function($rootScope) {
  $rootScope.images = [
    {
      url: 'https://i.redd.it/uo125uyjn16x.gif',
      title: 'No different than a human child',
    },
    {
      url: 'http://i.imgur.com/XEKDuwR.gif',
      title: 'When you forget which one is mom',
    },
    {
      url: 'http://i.imgur.com/MDXsnRe.gif',
      title: 'Babies come running for milk',
    },
    {
      url: 'http://i.imgur.com/yUI329h.gif',
      title: 'Baby is too scared to cross the stream.',
    },
    {
      url: 'http://i.imgur.com/cOPdNQz.gif',
      title: 'Oops. Sorry about that.',
    },
    {
      url: 'http://i.imgur.com/y6zZ1fx.gif',
      title: 'Rescuing a mama and baby elephant in Sri Lanka.',
    },
    {
      url: 'http://i.imgur.com/6tjgSGb.gif',
      title: 'Poor baby dropped his stick',
    },
    {
      url: 'http://i.imgur.com/pj0O4Mu.gif',
      title: 'Too close for Mom\'s comfort',
    },
    {
      url: 'http://i.imgur.com/7bfvOzZ.gif',
      title: 'Baby elephant shows a group of egrets how to party',
    },
    {
      url: 'https://www.reddit.com/r/babyelephantgifs/comments/4xdca4/today_is_world_elephant_day_and_we_just_hit/',
      title: 'Today is World Elephant Day and we just hit 100,000 subscribers. Let\'s talk about the elephant in the room.', // eslint-disable-line max-len
    },
    {
      url: 'http://i.imgur.com/49uBzb0.gif',
      title: 'Let\'s get this party started',
    },
    {
      url: 'http://i.imgur.com/OWrDUN3.gif',
      title: 'Priceless look on his face',
    },
    {
      url: 'http://i.imgur.com/n9LsIcT.gif',
      title: 'See I\'m a lap dog',
    },
    {
      url: 'http://i.imgur.com/ooc005B.gif',
      title: '\'Go say hi to aunt Emma, junior\'',
    },
    {
      url: 'http://i.imgur.com/4jNagUG.gif',
      title: 'Older orphan greets a scared new arrival at the Sheldrick Nursery',
    },
    {
      url: 'http://i.imgur.com/jNpRTd1.gif',
      title: 'Baby gets a bed and knows just what to do with it',
    },
    {
      url: 'http://i.imgur.com/bZnhmN5.gif',
      title: 'Seems like an even trade',
    },
    {
      url: 'http://i.imgur.com/OCIPe85.gif',
      title: 'He\'s so excited',
    },
    {
      url: 'http://i.imgur.com/JcXIulD.gif',
      title: 'Long neck, meet long nose',
    },
    {
      url: 'http://i.imgur.com/jNWwTHr.gif',
      title: 'Cutest fall ever',
    },
    {
      url: 'http://i.imgur.com/zO0SwTs.gif',
      title: 'Don\'t stop!',
    },
    {
      url: 'http://i.imgur.com/YnySsTW.gif',
      title: 'Oh no you don\'t',
    },
    {
      url: 'http://i.imgur.com/rd7WFmx.gif',
      title: 'Baby elephant attempts to mimic mom drinking with her trunk even though she can\'t yet', // eslint-disable-line max-len
    },
    {
      url: 'http://i.imgur.com/5UtF6IK.gif',
      title: 'Vroom! He completes another lap. So excited',
    },
    {
      url: 'http://i.imgur.com/UXlPeEZ.gif',
      title: 'Gotta go fast!',
    },
  ];
}]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'hc',
    })
    .otherwise({ redirectTo: '/error' });
}]);
