const assert = require('assert')
const Room = require('../room')

describe('Room', function () {
    let room;

    beforeEach(function () {
        room = new Room(50, false);
    });

    it('should have an area', function () {
        const actual = room.area;
        assert.strictEqual(actual, 50);
    });

    it('should start unpainted', function () {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it('should be able to paint room', function () {
        room.paintRoom()
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
    
})