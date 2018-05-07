p5.Vector.prototype.moveBy = function(distance, angle) {
    this.x += distance * Math.cos(angle * Math.PI / 180);
    this.y += distance * Math.sin(angle * Math.PI / 180)
};