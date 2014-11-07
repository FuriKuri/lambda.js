module.exports = function defineFunction(object, name, fn) {
  Object.defineProperty(object, name, {
    writable: false,
    enumerable: false,
    configurable: false,
    value: fn
  });
}
