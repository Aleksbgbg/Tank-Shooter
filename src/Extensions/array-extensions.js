Array.prototype.remove = function(item) {
    const index = this.indexOf(item);

    if (index > -1) {
        this.splice(index, 1);
    }
};