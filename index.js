module.exports = function() {
  return {
    manipulateOptions: function(babelOpts) {
      babelOpts.resolveModuleSource = function (source, filename) {
        if (source === 'fulcrum') {
          return 'fulcrum-sync-plugin';
        }
        return source;
      };
    }
  };
};
