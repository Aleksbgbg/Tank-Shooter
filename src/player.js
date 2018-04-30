class Player {
    constructor(emoji, controls) {
        this.sprite = createSprite(500, 500);
        this.sprite.addImage(loadImage(`Images/${emoji}.png`, image => image.resize(100, 0)));

        this.speed = 5;

        this.controls = controls;
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
        drawSprite(this.sprite);
    }

    move(coordinate, multiplier = 1) {
        this.sprite.position[coordinate] += this.speed * multiplier;
    }
}