var Lambda = require('./../lib/lambda');
var Variable = require('./../lib/variable');
var Application = require('./../lib/application');

var λid = new Lambda("x", new Variable('x'));
console.log(λid.toString());

console.log(new Application(λid, new Variable('y')).reduce().toString());

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

var λtrue = new Lambda('t', new Lambda('f', new Variable('t')));
var λfalse = new Lambda('t', new Lambda('f', new Variable('f')));
var λneg = new Lambda('p', new Application(new Application(new Variable('p'), λfalse), λtrue));

console.log(new Application(λneg, λfalse).reduce().toString());

var λand =
  new Lambda('p',
    new Lambda('q',
      new Application(
        new Application(new Variable('p'), new Variable('q')),
        new Variable('p')
      )));

console.log(new Application(new Application(λand, λfalse), λfalse).reduce().toString());