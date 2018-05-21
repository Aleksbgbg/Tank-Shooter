p5.Vector.prototype.moveBy = function(distance, angle) {
    function modifyDistance(trigonometricFunction) {
        return distance * trigonometricFunction(angle * Math.PI / 180);
    }

    this.add(modifyDistance(Math.cos), modifyDistance(Math.sin));
};

p5.Vector.prototype.getAngleTowards = function(target) {
    return Math.atan2(target.y - this.y, target.x - this.x) * 180 / Math.PI;
};