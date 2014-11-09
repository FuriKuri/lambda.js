var defineFunction = require('./function');

function Variable(name) {
  if (false === (this instanceof Variable)) {
    console.log('Warning: Variable constructor called without "new" operator');
    return new Variable(name);
  }

  this.name = name;

  return Object.freeze(this);
}

module.exports = Variable;

defineFunction(Variable.prototype, "toString", function() {
  return this.name;
});

defineFunction(Variable.prototype, "reduce", function() {
  return this;
});
