const test = require('tape');
const logic = require('./src/logic.js');
const dummy = require('./test-dummy.json')

console.log(logic);

test("testing tape", function(t) {
  t.equal(1, 1, "one should equal one");
  t.end();
});


// test("testing tape", function (t) {
//   var actual = logic.filterSpecies(1);
//   var expected = 1;
//   t.deepEquals(actual, expected, "should return one, got: " + actual);
//   t.end();
// })


test("filterSpecies returns array", function (t) {
  var actual = Array.isArray(logic.filterSpecies(dummy.result));
  var expected = true;
  t.deepEquals(actual, expected, "should return array, got: " + actual);
  t.end();
})

test("filterSpecies returns array of strings", function (t) {
  var actual = typeof logic.filterSpecies(dummy.result)[5];
  var expected = 'string';
  t.deepEquals(actual, expected, "should return array of strings, got: " + actual);
  t.end();
})


