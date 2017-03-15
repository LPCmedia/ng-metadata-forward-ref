// path magic
var path = require('path');
var _root = path.resolve(__dirname, '..');

var _join = function(pathToJoin) {
  var paths = pathToJoin.split('/').join(path.sep);
  var joined = path.join(_root,paths);
  return path.normalize(joined);
}

exports.root = _root;
exports.normalizeToRoot = _join;
exports.appendToContextRoot = _join;
