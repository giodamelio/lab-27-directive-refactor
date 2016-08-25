/* eslint global-require: "off" */
module.exports = function(app) {
  require('./home/home-controller')(app);
  require('./fullsize/fullsize-controller')(app);
};
