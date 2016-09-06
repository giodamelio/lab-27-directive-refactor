/* eslint global-require: "off" */
module.exports = function(app) {
  app.component('editableText', {
    template: require('./editable-text.html'),
    bindings: {
      text: '=',
      editing: '=',
    },
    controller() {

    },
  });
};
