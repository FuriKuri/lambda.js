System.register("../../lib/remove", [], function() {
  "use strict";
  var __moduleName = "../../lib/remove";
  function require(path) {
    return $traceurRuntime.require("../../lib/remove", path);
  }
  module.exports = function remove(ele, arr) {
    return arr.filter(function(a) {
      return a !== ele;
    });
  };
  return {};
});
System.get("../../lib/remove" + '');
