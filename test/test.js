var fs = require('fs');
var path = require('path');
var assert = require('assert');
var compiler = require('marko/compiler');

it('should generate the correct code', function() {
    var fixturesPath = path.join(__dirname, 'fixtures');
    var templatePath = path.join(fixturesPath, 'template.marko');
    var expectedPath = path.join(fixturesPath, 'expected.js');
    var actualPath = path.join(fixturesPath, 'actual.js');
    var actual = compiler.compileFile(templatePath);
    var expected = fs.readFileSync(expectedPath, 'utf-8');
    fs.writeFileSync(actualPath, actual);
    assert.equal(actual, expected, 'Compiled template did not match expected output.');
})