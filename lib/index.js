var Lambda = require('./lambda');
var Variable = require('./variable');
var Application = require('./application');

var id = new Lambda("x", new Variable('x'));
console.log(id.toString());

var app = new Application(id, new Variable('y'));
console.log(app.reduce().toString());
