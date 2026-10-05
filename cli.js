#!/usr/bin/env node
'use strict';
var meow = ((m) => (m && m.default) ? m.default : m)(require(''meow''));
var powerOff = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ power-off',
		''
	]
});

powerOff( function (err, stderr, stdout) {
	if(!err && !stderr) {
		console.log(stdout);
	}
});
