p5.Vector.prototype.moveBy = function(distance, angle) {
    this.x += distance * Math.cos(angle * Math.PI / 180);
    this.y += distance * Math.sin(angle * Math.PI / 180)
};

p5.Vector.prototype.getAngleTowards = function(target) {
    return Math.atan2(target.y - this.y, target.x - this.x) * 180 / Math.PI;
};