module.exports = function Application(left, right) {
  if (false === (this instanceof Application)) {
    console.log('Warning: Application constructor called without "new" operator');
    return new Application(left, right);
  }

  this.left = left;
  this.right = right;

  Object.defineProperty(this, "toString", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: function() {
      var l = this.left.toString();
      var r = this.right.toString();
      if (this.left instanceof Lambda) {
        l = "(" + l +")";
      }
      if (this.right instanceof Lambda || this.right instanceof Application) {
        r = "(" + r + ")";
      }
      return l + " " + r;
    }
  });
}
