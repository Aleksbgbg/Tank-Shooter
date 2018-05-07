class Bullet extends SpriteEntity {
    constructor(position) {
        super(position, "Bullet Train", 20);

        this.sprite.setSpeed(10, Math.atan2(mouseY - position.y, mouseX - position.x) * 180 / Math.PI);
    }
}