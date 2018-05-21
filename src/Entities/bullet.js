class Bullet extends SpriteEntity {
    constructor(position, targetAngle, onDestroy) {
        super({
            position,
            sprite: "Bullet",
            imageSetup: image => image.resize(10, 0),
            onDestroy
        });

        this.sprite.setSpeed(10, targetAngle);

        config.groups.bullets.add(this.sprite);

        setTimeout(() => this.destroy(), config.bullets.deathTimer);
    }
}