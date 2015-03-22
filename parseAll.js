#!/usr/bin/env node
require('babel/polyfill');

var path = require('path');
var Parser = require('azk-parser').Parser;
var parser = new Parser();
var Generator = require('azk-parser').Generator;
var fileUtils = require('azk-parser').fileUtils;
var bb = require('bluebird');
var glob = fileUtils.glob;

glob('./from-code/**/*.js', {}, function(err, files) {
  files.forEach(function(file) {
    fileUtils.read(file).then(function(content) {
      // parse code to AST
      var ast = parser.parse(content).syntax;

      // get destination path
      var parsed_path = path.parse(file);
      parsed_path.dir = parsed_path.dir.replace(/from-code/g, 'to-ast');
      var format_path = path.format(parsed_path);

      // save AST
      var ast_stringified = JSON.stringify(ast, ' ', 2);
      fileUtils.write(format_path, ast_stringified);

      console.log('file saved at:', format_path);
    });
  });

});