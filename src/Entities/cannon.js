class Cannon extends SpriteEntity {
    constructor(player) {
        super({
            position: player.sprite.position,
            sprite: "Cannon",
            imageSetup: image => image.resize(20, 0)
        });

        this.bullets = [];
    }

    shoot() {
        const bullets = this.bullets;

        this.bullets.push(new Bullet(this.sprite.position, {
            x: mouseX,
            y: mouseY
        }, function() {
            bullets.remove(this);
        }));
    }

    update(position, rotation) {
        this.sprite.position.x = position.x;
        this.sprite.position.y = position.y;
        this.sprite.rotation = rotation + 90;

        this.sprite.position.moveBy(30, rotation);
    }

    draw() {
        for (const bullet of this.bullets) {
            bullet.draw();
        }

        super.draw();
    }
}