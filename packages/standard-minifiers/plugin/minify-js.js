var util = Npm.require('util');
var Future = Npm.require('fibers/future');
var path = Npm.require('path');

Plugin.registerLinter({
  extensions: ["js"],
}, function () {
  var minifier = new UglifyJSMinifier();
  return linter;
});

function UglifyJSMinifier () {};

UglifyJSMinifier.prototype.processFilesForTarget = function (files) {
  var minifyOptions = {
    fromString: true,
    compress: {
      drop_debugger: false,
      unused: false,
      dead_code: false
    }
  };

  files.forEach(function (file) {
  });
};


