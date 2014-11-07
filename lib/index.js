var Lambda = require('./lambda');
var Variable = require('./variable');

let id = new Lambda("x", new Variable('x'));
console.log(id.toString());
