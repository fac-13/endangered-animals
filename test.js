const test = require('tape');
const logic = require('./src/logic.js');
const testReal = require('./src/list.json')

console.log(logic);

test('Testing Tape is working', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});


test("testing tape", function (t) {
  var actual = logic.filterSpecies(1);
  var expected = 1;
  t.deepEquals(actual, expected, "returns one");
  t.end();
})
