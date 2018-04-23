class Player {
    constructor() {
        this.sprite = createSprite(500, 500);

        this.sprite.addImage(loadImage("Images/Happy.png", function(image) {
            image.resize(100, 0);
        }));
    }

    update() {
        if (keyDown("W")) {
            this.sprite.position.y -= 1;
        }

        if (keyDown("S")) {
            this.sprite.position.y += 1;
        }

        if (keyDown("A")) {
            this.sprite.position.x -= 1;
        }

        if (keyDown("D")) {
            this.sprite.position.x += 1;
        }

        if (keyDown("Q")) {
            // shoot
        }
    }

    draw() {
        drawSprite(this.sprite);
    }
}