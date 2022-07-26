const assert = require('assert');
const Decorator = require('../decorator')
const PaintCan = require('../paint_can')
const Room = require('../room')

describe('Decorator', function () {
    let decorator;
    let paint_can;
    let paint_can2;
    let room;

    beforeEach(function () {
        decorator = new Decorator([]);
        paint_can = new PaintCan(5, false);
        paint_can2 = new PaintCan(10, false);
        room = new Room(50, false)
    });

    it('should start with no stock', function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add paint can to stock', function () {
        decorator.addPaintCan(paint_can);
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paint_can]);
    })
});



