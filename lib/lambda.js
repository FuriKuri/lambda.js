var defineFunction = require('./function');
var Variable = require('./variable');
var remove = require('./remove');

function Lambda(binder, body) {
  if (false === (this instanceof Lambda)) {
    console.log('Warning: Lambda constructor called without "new" operator');
    return new Lambda(binder, body);
  }

  this.binder = binder;
  this.body = body;

  return Object.freeze(this);
}

module.exports = Lambda;

defineFunction(Lambda.prototype, "toString", function() {
  return 'λ ' + this.binder + ' → ' + this.body.toString();
});

defineFunction(Lambda.prototype, "reduce", function() {
  return new Lambda(this.binder, this.body.reduce());
});

var gensymcount = 0;
function gensym() {
  gensymcount = gensymcount + 1;
  return '#x' + gensymcount;
}

defineFunction(Lambda.prototype, "substitute", function(o, n) {
  if (this.binder === o) {
    return this;
  } else if ((this.body.free().indexOf(n.name) !== -1) &&
      (n.free().indexOf(this.binder) !== -1)) {
    var ns = gensym();
    return new Lambda(ns, this.body.substitute(this.binder, new Variable(ns)).substitute(o, n));
  } else {
    return new Lambda(this.binder, this.body.substitute(o, n));
  }
});

defineFunction(Lambda.prototype, "free", function() {
  return remove(this.binder, this.body.free());
});