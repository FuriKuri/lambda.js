module.exports = function remove(ele, arr) {
  return arr.filter(function(a) {
    return a !== ele;
  });
};