class Bullet extends SpriteEntity {
    constructor(position, target, onDestroy) {
        super(position, "Bullet", 20, onDestroy);

        this.sprite.setSpeed(10, position.getAngleTowards(target));
    }

    update() {
        if (0 > this.sprite.position.x || this.sprite.position.x > config.screen.width ||
            0 > this.sprite.position.y || this.sprite.position.y > config.screen.height) {
            this.destroy();
        }
    }
}