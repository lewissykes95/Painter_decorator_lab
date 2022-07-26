const Decorator = function () {
    this.stock = [];
};

Decorator.prototype.addPaintCan = function (paintcan) {
    this.stock.push(paintcan);
};




module.exports = Decorator