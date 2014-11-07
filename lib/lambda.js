module.exports = function Lambda(binder, body) {
  if (false === (this instanceof Lambda)) {
    console.log('Warning: Lambda constructor called without "new" operator');
    return new Lambda(binder, body);
  }

  this.binder = binder;
  this.body = body;

  Object.defineProperty(this, "toString", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: function() {
      return 'λ ' + this.binder + ' → ' + this.body.toString();
    }
  });

  return Object.freeze(this);
}
