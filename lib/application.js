var defineFunction = require('./function');
var Lambda = require('./lambda');

function Application(left, right) {
  if (false === (this instanceof Application)) {
    console.log('Warning: Application constructor called without "new" operator');
    return new Application(left, right);
  }

  this.left = left;
  this.right = right;

  return Object.freeze(this);
}

module.exports = Application;

defineFunction(Application.prototype, "toString", function() {
  var l = this.left.toString();
  var r = this.right.toString();
  if (this.left instanceof Lambda) {
    l = "(" + l +")";
  }
  if (this.right instanceof Lambda || this.right instanceof Application) {
    r = "(" + r + ")";
  }
  return l + " " + r;
});

defineFunction(Application.prototype, "reduce", function() {
  var nr = this.right.reduce();
  var nl = this.left.reduce();
  if (nl instanceof Lambda) {
    var r = nl.body.substitude(nl.binder, nr);
    console.log(new Application(nl, nr).toString() + " → " + r.toString());
    var s = r.reduce();
    return s;
  } else {
    return new Application(nl, nr);
  }
});
