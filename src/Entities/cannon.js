class Cannon extends SpriteEntity {
    constructor(player) {
        super(player.sprite.position, "Cannon", 20);
    }

    update(position, rotation) {
        this.sprite.position.x = position.x;
        this.sprite.position.y = position.y;
        this.sprite.rotation = rotation + 90;

        this.sprite.position.moveBy(50, rotation);
    }
}