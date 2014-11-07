var Lambda = require('./lambda');
var Variable = require('./variable');

let l = new Lambda("x", new Variable('x'));
console.log(l.toString());
