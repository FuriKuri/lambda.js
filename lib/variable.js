 function Variable(name) {
  if (false === (this instanceof Variable)) {
    console.log('Warning: Variable constructor called without "new" operator');
    return new Variable(name);
  }

  this.name = name;

  return Object.freeze(this);
}

module.exports = Variable;

Object.defineProperty(Variable.prototype, "toString", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: function() {
    return this.name;
  }
});
