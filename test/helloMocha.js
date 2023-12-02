// Test suite

// Test cases

// Add 
// Sub
// Mult
// Division
const assert = require('assert');


describe('Mathematical Operations - Test Suite', function() {
    const a = 10;
    const b = 10;

    before('Before test', () => {
        let c = a / b;
        assert.equal(c,1)
    });

    it.only('Addition of two numbers', function() {
        let c = a + b;
        assert.equal(c, 20);
    });

    it('Subtraction of two numbers', function() {
        let c = a - b;
        assert.equal(c,0)
    });

    it('Division of two numbers', function() {
        let c = a / b;
        assert.equal(c,1)
    });

    it('Division of two numbers', function() {
        let c = a / b;
        assert.equal(c,1)
    });
});