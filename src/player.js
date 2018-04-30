class Player {
    constructor() {
        this.sprite = createSprite(500, 500);

        this.sprite.addImage(loadImage("Images/Happy.png", image => image.resize(100, 0)));

        this.speed = 5;
    }

    update() {
        if (keyDown("W")) {
            this.move("y", -1);
        }

        if (keyDown("S")) {
            this.move("y");
        }

        if (keyDown("A")) {
            this.move("x", -1);
        }

        if (keyDown("D")) {
            this.move("x");
        }

        if (keyDown("Q")) {
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