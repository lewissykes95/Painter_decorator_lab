const assert = require('assert');
const PaintCan = require('../paint_can')

describe('Paint Can', function () {
    let paintCan;

    beforeEach(function () {
        paintCan = new PaintCan(5, false);
    });

    it('should have some paint', function () {
        const actual = paintCan.volume;
        assert.strictEqual(actual, 5);
    });

    it('should be able to check if empty', function () {
        const actual = paintCan.checkIfEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to empty itself', function () {
        paintCan.usePaint();
        const actual = paintCan.empty;
        const actual2 = paintCan.volume;
        assert.strictEqual(actual, true);
        assert.strictEqual(actual2, 0);
    });
});