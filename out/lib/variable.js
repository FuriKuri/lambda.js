System.register("../../lib/variable", [], function() {
  "use strict";
  var __moduleName = "../../lib/variable";
  function require(path) {
    return $traceurRuntime.require("../../lib/variable", path);
  }
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
  return {};
});
System.get("../../lib/variable" + '');
