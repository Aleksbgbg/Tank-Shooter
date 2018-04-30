class Player {
    constructor(emoji, controls) {
        this._sprite = createSprite(500, 500);
        this._sprite.addImage(loadImage(`Images/${emoji}.png`, image => image.resize(100, 0)));

        this._sprite.setCollider("circle", 0, 0, 50);

        this.speed = 5;

        this.controls = controls;
    }

    get sprite() {
        return this._sprite;
    }

    set sprite(value) {
        this._sprite = value;
    }

    update() {
        if (keyDown(this.controls.up)) {
            this.move("y", -1);
        }

        if (keyDown(this.controls.down)) {
            this.move("y");
        }

        if (keyDown(this.controls.left)) {
            this.move("x", -1);
        }

        if (keyDown(this.controls.right)) {
            this.move("x");
        }

        if (keyDown(this.controls.shoot)) {
            // shoot
        }
    }

    draw() {
        drawSprite(this._sprite);
    }

    move(coordinate, multiplier = 1) {
        this._sprite.position[coordinate] += this.speed * multiplier;
    }
}