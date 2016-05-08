var path = require('path');
var dust = require('dustjs-linkedin');

module.exports = function(content) {
  // Cache result
  if (this.cacheable) {
    this.cacheable();
  }

  // FIXME Make everything configurable
  var srcDir = 'src';
  var basepath = this.options.context + path.sep + srcDir + path.sep;
  var extension = '.dust';
  var tplNameSep = '.';

  // Generate template name
  var name = this.resourcePath
    .replace(basepath, '')
    .replace(extension, '')
    .split(path.sep)
    .join(tplNameSep);

  // Compile template
  var compiled = dust.compile(content, name);

  // Export result
  return "var dust = require('dustjs-linkedin');module.exports = " + compiled;
};
