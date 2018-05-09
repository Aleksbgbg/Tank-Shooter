class Cannon extends SpriteEntity {
    constructor(player) {
        super(player.sprite.position, "Cannon", image => image.resize(20, 0), undefined, undefined);

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

    update(position, rotation, players) {
        this.sprite.position.x = position.x;
        this.sprite.position.y = position.y;
        this.sprite.rotation = rotation + 90;

        this.sprite.position.moveBy(50, rotation);

        for (const bullet of this.bullets) {
            bullet.update();

            for (const player of players) {
                bullet.performCollision(player);
            }
        }
    }

    draw() {
        for (const bullet of this.bullets) {
            bullet.draw();
        }

        super.draw();
    }
}