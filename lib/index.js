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

var truly = new Lambda('t', new Lambda('f', new Variable('t')));
var falsely = new Lambda('t', new Lambda('f', new Variable('f')));
var neg = new Lambda('p', new Application(new Application(new Variable('p'), falsely), truly));

console.log(new Application(neg, falsely).reduce().toString());