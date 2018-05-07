class Bullet extends SpriteEntity {
    constructor(position, target) {
        super(position, "Bullet", 20);

        this.sprite.setSpeed(10, Math.atan2(target.y - position.y, target.x - position.x) * 180 / Math.PI);
    }
}