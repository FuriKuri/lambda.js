var defineFunction = require('./function');

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