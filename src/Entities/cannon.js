class Cannon extends SpriteEntity {
    constructor(player) {
        super({
            position: player.sprite.position,
            sprite: "Cannon",
            imageSetup: image => image.resize(10, 0)
        });

        this.bullets = [];
    }

    shoot() {
        const bullets = this.bullets;

        const position = createVector(this.sprite.position.x, this.sprite.position.y);

        const mouseVector = createVector(mouseX, mouseY);

        position.moveBy(1, position.getAngleTowards(mouseVector));

        this.bullets.push(new Bullet(position, mouseVector, function() {
            bullets.remove(this);
        }));
    }

    update(position, rotation) {
        this.sprite.position.x = position.x;
        this.sprite.position.y = position.y;
        this.sprite.rotation = rotation + 90;

        this.sprite.position.moveBy(15, rotation);
    }
}