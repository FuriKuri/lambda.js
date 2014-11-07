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

Object.defineProperty(Lambda.prototype, "toString", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: function() {
    return 'λ ' + this.binder + ' → ' + this.body.toString();
  }
});
