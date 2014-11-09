System.register("../../lib/application", [], function() {
  "use strict";
  var __moduleName = "../../lib/application";
  function require(path) {
    return $traceurRuntime.require("../../lib/application", path);
  }
  var defineFunction = require('./function');
  var Lambda = require('./lambda');
  var remove = require('./remove');
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
      l = "(" + l + ")";
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
      var r = nl.body.substitute(nl.binder, nr);
      console.log(new Application(nl, nr).toString() + " → " + r.toString());
      return r.reduce();
    } else {
      return new Application(nl, nr);
    }
  });
  defineFunction(Application.prototype, "substitute", function(o, n) {
    return new Application(this.left.substitute(o, n), this.right.substitute(o, n));
  });
  defineFunction(Application.prototype, "free", function() {
    return this.left.free().concat(this.right.free());
  });
  return {};
});
System.get("../../lib/application" + '');
