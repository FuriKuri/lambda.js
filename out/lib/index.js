System.register("../../lib/index", [], function() {
  "use strict";
  var __moduleName = "../../lib/index";
  function require(path) {
    return $traceurRuntime.require("../../lib/index", path);
  }
  var Lambda = require('./lambda');
  var Variable = require('./variable');
  var Application = require('./application');
  var id = new Lambda("x", new Variable('x'));
  console.log(id.toString());
  var app = new Application(id, new Variable('y'));
  console.log(app.reduce().toString());
  return {};
});
System.get("../../lib/index" + '');
