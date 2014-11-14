var Lambda = require('./lambda');
var Variable = require('./variable');
var Application = require('./application');

var id = new Lambda("x", new Variable('x'));
console.log(id.toString());

console.log(new Application(id, new Variable('y')).reduce().toString());

console.log(
  new Application(
    new Lambda('x',
      new Lambda('x',
        new Application(new Variable('x'), new Variable('x')))),
      new Variable('y')).reduce().toString());

console.log(
  new Application(
    new Lambda('x',
      new Lambda('y',
        new Application(new Variable('x'), new Variable('y')))),
    new Variable('y')).reduce().toString());