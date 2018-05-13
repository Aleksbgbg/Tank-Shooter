class Bullet extends SpriteEntity {
    constructor(position, target, onDestroy) {
        super(position, "Bullet", image => image.resize(20, 0), undefined, onDestroy);

        const angle = position.getAngleTowards(target);

        this.sprite.position.moveBy(20, angle);
        this.sprite.setSpeed(10, angle);

        config.bullets.group.add(this.sprite);

        setTimeout(() => this.destroy(), config.bullets.deathTimer);
    }

    performCollision(player) {
        if (player.sprite.collide(this.sprite)) {
            this.destroy();
            player.destroy();
        }
    }
}