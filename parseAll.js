#!/usr/bin/env node
require('babel/polyfill');

var path = require('path');
var Generator = require('azk-parser').Generator;
var fileUtils = require('azk-parser').fileUtils;
var bb = require('bluebird');
var glob = fileUtils.glob;
var esprima = require('esprima-fb');

// ******************************************
// This is the original recast parser
//   but we can turn off some options
//   like loc, comments, so the AST becomes
//   hard to analise. We are using the same
//   esprima version that recast;
// ******************************************
// var Parser = require('azk-parser').Parser;
// var parser = new Parser({
//   range: false,
//   tolerant: false
// });

glob('./from-code/**/*.js', {}, function(err, files) {
  files.forEach(function(file) {
    fileUtils.read(file).then(function(content) {

      // parse code to AST without any localization
      var ast = esprima.parse(content,
        { raw: false, tokens: false, range: false, comment: false, loc: false });
      // var ast = parser.parse(content).syntax;

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
