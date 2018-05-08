class Bullet extends SpriteEntity {
    constructor(position, target, onDestroy) {
        super(position, "Bullet", onDestroy, image => image.resize(20, 0));

        const angle = position.getAngleTowards(target);

        this.sprite.position.moveBy(80, angle);
        this.sprite.setSpeed(10, angle);
    }

    update() {
        if (0 > this.sprite.position.x || this.sprite.position.x > config.screen.width ||
            0 > this.sprite.position.y || this.sprite.position.y > config.screen.height) {
            this.destroy();
        }
    }
}