const PaintCan = function (volume, empty) {
    this.volume = volume;
    this.empty = empty;
};

PaintCan.prototype.checkIfEmpty = function () {
    return this.empty;
}

PaintCan.prototype.usePaint = function () {
    this.volume = 0;
    if (this.volume === 0) {
        this.empty = true;
    };
};

module.exports = PaintCan