class Bullet extends SpriteEntity {
    constructor(position, target, onDestroy) {
        super({
            position,
            sprite: "Bullet",
            imageSetup: image => image.resize(10, 0),
            onDestroy
        });

        const angle = position.getAngleTowards(target);

        this.sprite.setSpeed(10, angle);

        config.groups.bullets.add(this.sprite);

        setTimeout(() => this.destroy(), config.bullets.deathTimer);
    }
}