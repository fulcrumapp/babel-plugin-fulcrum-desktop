module.exports = function() {
  return {
    manipulateOptions: function(babelOpts) {
      babelOpts.resolveModuleSource = function (source, filename) {
        if (source === 'fulcrum') {
          return 'fulcrum-desktop-plugin';
        }
        return source;
      };
    }
  };
};
