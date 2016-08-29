/* eslint global-require: "off" */
module.exports = function(app) {
  require('./album/album.js')(app);
  require('./animal-image-link/animal-image-link')(app);
  require('./animal-image-thumbnail/animal-image-thumbnail')(app);
  require('./animal-image-full/animal-image-full')(app);
};
