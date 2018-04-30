class Player extends SpriteEntity {
    constructor(emoji, controls) {
        super({
            x: 500,
            y: 500
        }, emoji, 100);

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

    move(coordinate, multiplier = 1) {
        this._sprite.position[coordinate] += this.speed * multiplier;
    }
}