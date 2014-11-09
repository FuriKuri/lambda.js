System.register("../../lib/function", [], function() {
  "use strict";
  var __moduleName = "../../lib/function";
  function require(path) {
    return $traceurRuntime.require("../../lib/function", path);
  }
  module.exports = function defineFunction(object, name, fn) {
    Object.defineProperty(object, name, {
      writable: false,
      enumerable: false,
      configurable: false,
      value: fn
    });
  };
  return {};
});
System.get("../../lib/function" + '');
